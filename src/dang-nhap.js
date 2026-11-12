// Cong dang nhap dung chung cho index.html va hoc-hop-nhat.html (v40).
// Tao boi: Ngo Ba Hung - Ngay: 2026-11-12
// Chua dang nhap thi chi hien form dang nhap, an toan bo noi dung trang.
// Luu y: day chi la che noi dung tren trinh duyet; ma nguon van cong khai tren GitHub.
// Chi duoc dien anon / publishable key, khong bao gio dien service_role / secret key.
const SB_URL = 'https://xclftmhcuelwavneafnk.supabase.co', SB_KEY = 'sb_publishable_opoCZ-tOdltH9IcNaQwnhg_2JkNGVnA';
const SB_ON = !!(SB_URL && SB_KEY), SESS_KEY = 'hoc-hop-nhat-phien';
let sess = null;
try { sess = JSON.parse(localStorage.getItem(SESS_KEY)); } catch (e) {}
function keepSess(t, email) {
  sess = { access_token: t.access_token, refresh_token: t.refresh_token, expires_at: Date.now() + t.expires_in * 1000, user_id: t.user.id, email: email || t.user.email };
  try { localStorage.setItem(SESS_KEY, JSON.stringify(sess)); } catch (e) {}
}
function dropSess() {
  sess = null;
  try { localStorage.removeItem(SESS_KEY); } catch (e) {}
  khoaTrang();
}
async function freshSess() {
  if (sess.expires_at - Date.now() > 60000) return;
  const t = await fetch(SB_URL + '/auth/v1/token?grant_type=refresh_token', { method: 'POST', headers: { apikey: SB_KEY, 'Content-Type': 'application/json' }, body: JSON.stringify({ refresh_token: sess.refresh_token }) });
  if (!t.ok) { dropSess(); throw new Error('Phiên đăng nhập đã hết hạn, mời đăng nhập lại.'); }
  keepSess(await t.json(), sess.email);
}
function khoaTrang() {
  document.documentElement.classList.add('khoa');
  if (document.getElementById('cong')) return;
  const c = document.createElement('div');
  c.id = 'cong';
  c.innerHTML = `<form id="cong-form" class="cong-the" autocomplete="on">
    <h1>Học hợp nhất báo cáo tài chính</h1>
    <p>Đăng nhập bằng tài khoản được cấp để vào học.</p>
    <label>Email<input type="email" name="email" autocomplete="username" required></label>
    <label>Mật khẩu<input type="password" name="pw" autocomplete="current-password" required></label>
    <button type="submit">Đăng nhập</button>
    <p class="cong-tb" role="status" aria-live="polite"></p>
    <p class="cong-phu">Chưa có tài khoản? Liên hệ người quản lý khóa học để được cấp.</p>
  </form>`;
  document.body.prepend(c);
  c.querySelector('[name=email]').focus();
}
function moTrang() {
  document.documentElement.classList.remove('khoa');
  const c = document.getElementById('cong');
  if (c) c.remove();
}
document.addEventListener('submit', async ev => {
  if (ev.target.id !== 'cong-form') return;
  ev.preventDefault();
  const f = ev.target, tb = f.querySelector('.cong-tb'), nut = f.querySelector('button');
  tb.textContent = 'Đang đăng nhập...'; nut.disabled = true;
  try {
    const email = f.email.value.trim();
    const r = await fetch(SB_URL + '/auth/v1/token?grant_type=password', { method: 'POST', headers: { apikey: SB_KEY, 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password: f.pw.value }) });
    if (!r.ok) throw new Error(r.status === 400 ? 'Sai email hoặc mật khẩu.' : 'Không đăng nhập được (lỗi ' + r.status + ').');
    keepSess(await r.json(), email);
    // Trang bai hoc dat ham nay de tai tien do cua tai khoan truoc khi mo trang
    if (typeof window.sauDangNhap === 'function') await window.sauDangNhap();
    moTrang();
  } catch (e) {
    tb.textContent = e.message.length > 120 ? 'Không kết nối được máy chủ, thử lại sau.' : e.message;
    nut.disabled = false;
  }
});
if (!SB_ON) moTrang();
else if (!sess) khoaTrang();
else if (sess.expires_at < Date.now()) freshSess().catch(() => {});
