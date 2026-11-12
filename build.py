# Ghep src/ thanh hoc-hop-nhat.html va index.html (hai file web phat hanh).
# Tao boi: Ngo Ba Hung - Ngay: 2026-11-11
# Chay: python build.py           -> ghi file ra thu muc repo
#       python build.py --check   -> chi so sanh, khong ghi; sai thi thoat ma 1
import json, os, sys

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(ROOT, 'src')


def doc(ten):
    with open(os.path.join(SRC, ten), encoding='utf-8') as f:
        return f.read().replace('\r\n', '\n')


def build():
    du_lieu = json.loads(doc('du-lieu.json'))
    js = 'const D = ' + json.dumps(du_lieu, ensure_ascii=False) + ';\n' + doc('bai-hoc.js')
    trang = doc('trang.html').replace('{{CSS}}', doc('giao-dien.css'), 1).replace('{{JS}}', js, 1)
    return {'hoc-hop-nhat.html': trang, 'index.html': doc('index.html')}


def main():
    check = '--check' in sys.argv
    lech = []
    for ten, noi_dung in build().items():
        dich = os.path.join(ROOT, ten)
        if check:
            cu = open(dich, encoding='utf-8').read().replace('\r\n', '\n') if os.path.exists(dich) else None
            if cu != noi_dung:
                lech.append(ten)
        else:
            with open(dich, 'w', encoding='utf-8', newline='\n') as f:
                f.write(noi_dung)
            print('Da ghi', ten)
    if check:
        print('Build khop src/' if not lech else 'Chua build lai sau khi sua src/: ' + ', '.join(lech))
        sys.exit(1 if lech else 0)


if __name__ == '__main__':
    main()
