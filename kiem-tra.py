# Kiem tra truoc khi phat hanh. Sai bat ky muc nao thi thoat ma 1.
# Tao boi: Ngo Ba Hung - Ngay: 2026-11-11
# Chay: python kiem-tra.py
# Danh sach ten that nam NGOAI repo, duong dan lay tu bien moi truong TU_CAM
# (mac dinh: D:\Claude\PVN - TT99\Data hoc hop nhat\tu-cam.txt).
import json, os, re, subprocess, sys, tempfile, zipfile

ROOT = os.path.dirname(os.path.abspath(__file__))
TU_CAM = os.environ.get('TU_CAM', r'D:\Claude\PVN - TT99\Data hoc hop nhat\tu-cam.txt')
MA_THAT = re.compile(r'\bPV\d{4,}')          # ma don vi that: chu PV + tu 4 chu so
MA_CU = ['131NB', '331NB']                  # ma tai khoan da bo
loi = []


def git_files():
    # File se len repo: da theo doi + moi chua bi .gitignore loai
    out = subprocess.run(['git', 'ls-files', '-co', '--exclude-standard'], cwd=ROOT, capture_output=True, text=True, encoding='utf-8')
    return [f for f in out.stdout.splitlines() if os.path.isfile(os.path.join(ROOT, f))]


def chu(f):
    p = os.path.join(ROOT, f)
    if f.endswith('.xlsx'):
        z = zipfile.ZipFile(p)
        return '\n'.join(z.read(n).decode('utf-8', 'ignore') for n in z.namelist() if n.endswith('.xml'))
    if f.endswith(('.html', '.js', '.css', '.json', '.md', '.py', '.ps1', '.txt')):
        return open(p, encoding='utf-8', errors='ignore').read()
    return ''


# 1. Ban phat hanh phai dung voi src/
r = subprocess.run([sys.executable, '-I', os.path.join(ROOT, 'build.py'), '--check'], capture_output=True, text=True)
if r.returncode:
    loi.append('Build: ' + r.stdout.strip())

# 2. Khong lo du lieu that
if os.path.exists(TU_CAM):
    cam = [l.strip() for l in open(TU_CAM, encoding='utf-8') if l.strip() and not l.startswith('#')]
else:
    cam = []
    print('CANH BAO: khong thay danh sach tu cam', TU_CAM, '- chi quet ma PV.')
for f in git_files():
    t = chu(f)
    m = MA_THAT.search(t)
    if m:
        loi.append(f'Lo ma that {m.group()} trong {f}')
    for w in cam:
        if w in t:
            loi.append(f'Lo ten that "{w}" trong {f}')
            break
    if f in ('hoc-hop-nhat.html', 'index.html') or f.startswith('src/'):
        for ma in MA_CU:
            if ma in t:
                loi.append(f'Con ma cu {ma} trong {f}')
    if os.path.basename(f).startswith('gen_') or f.endswith('tu-cam.txt'):
        loi.append(f'File chi de o may bi dua vao repo: {f}')

# 3. Cu phap JavaScript, kiem rieng tung trang.
# Sua boi Ngo Ba Hung - Ngay: 2026-11-12 (v40): kiem ca index.html; cac <script> cua mot trang
# dung chung pham vi toan cuc nen ghep lai de bat ca loi khai bao trung ten.
html = open(os.path.join(ROOT, 'hoc-hop-nhat.html'), encoding='utf-8').read()
js = '\n'.join(re.findall(r'<script>(.*?)</script>', html, re.S))
idx_js = '\n'.join(re.findall(r'<script>(.*?)</script>', open(os.path.join(ROOT, 'index.html'), encoding='utf-8').read(), re.S))
for ten_trang, ma in (('hoc-hop-nhat.html', js), ('index.html', idx_js)):
    with tempfile.NamedTemporaryFile('w', suffix='.js', delete=False, encoding='utf-8') as tf:
        tf.write(ma)
    try:
        r = subprocess.run(['node', '--check', tf.name], capture_output=True, text=True)
        if r.returncode:
            loi.append(f'Loi cu phap JS trong {ten_trang}: ' + r.stderr.strip()[:300])
    except FileNotFoundError:
        print('CANH BAO: khong co node, bo qua kiem tra cu phap JS.')
        break
    finally:
        os.unlink(tf.name)

# 4. Khoa Supabase: chi duoc la anon / publishable key, khong duoc la service_role / secret key
for k in re.findall(r"SB_KEY = '([^']*)'", js + idx_js):
    if k.startswith('sb_secret_'):
        loi.append('SB_KEY la secret key, phai doi sang publishable key va Roll khoa bi mat tren Supabase')
    elif k:
        try:
            import base64
            p = json.loads(base64.urlsafe_b64decode(k.split('.')[1] + '=='))
            if p.get('role') != 'anon':
                loi.append('SB_KEY khong phai anon key (role=' + str(p.get('role')) + ')')
        except Exception:
            pass  # khoa dang moi (sb_publishable_...) khong phai JWT

# 5. Link trong index tro toi file co that
idx = open(os.path.join(ROOT, 'index.html'), encoding='utf-8').read()
for href in re.findall(r'href="([^"#:]+\.(?:html|xlsx))"', idx + html):
    if not os.path.exists(os.path.join(ROOT, href)):
        loi.append('Link hong: ' + href)

if loi:
    print('KHONG DAT:')
    print('\n'.join(' - ' + x for x in dict.fromkeys(loi)))
    sys.exit(1)
print('Dat: build khop src/, khong lo du lieu that, JS khong loi cu phap, link day du.')
