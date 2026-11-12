# Nhật ký thay đổi

Từ v38, mỗi phiên bản là một git tag (`v38`, `v39`, ...). Bài học sửa trong `src/`, chạy `build.py` ra `hoc-hop-nhat.html`. Không tạo file `_Vx` mới. Các file `_Vx` đã có trên repo vẫn giữ để link cũ không gãy.

| Bản | Ngày | Thay đổi |
|---|---|---|
| v40 | 2026-11-12 | Bắt đăng nhập trước khi xem cả trang đầu và trang bài học (`src/dang-nhap.js`, `src/dang-nhap.css` dùng chung). Bỏ chế độ học không cần tài khoản. `kiem-tra.py` kiểm thêm JS của trang đầu và chặn secret key. |
| v39 | 2026-11-12 | Bật đăng nhập: điền Project URL và publishable key của Supabase vào `src/bai-hoc.js`. |
| v38 | 2026-11-11 | Chuyển sang build từ `src/`: link cố định `hoc-hop-nhat.html`, `kiem-tra.py` (build khớp nguồn, quét lộ dữ liệu thật, cú pháp JS, link hỏng), `phat-hanh.ps1` phát hành một lệnh. Nội dung bài giữ nguyên như V37. |
| V37 | 2026-11-11 | Bài 1: phân loại theo hai bước, tính tỷ lệ sở hữu (nhân theo chuỗi) trước rồi xét biểu quyết; thêm các trường hợp biểu quyết cao hơn sở hữu. |
| V36 | 2026-11-11 | Ô ghi chú cho từng bài; đăng nhập email và mật khẩu, lưu tiến độ và ghi chú theo tài khoản (Supabase, bật khi điền khóa). |
| V35 | 2026-11-11 | Đổi mã phải thu nội bộ 131NB thành 136, phải trả nội bộ 331NB thành 336. |
| V34 trở về trước | trước 2026-11-11 | Xem lịch sử git. |
