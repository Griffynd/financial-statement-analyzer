# Website học hợp nhất BCTC

Web tĩnh trên GitHub Pages, repo công khai. Trả lời tiếng Việt, user xưng "mày/tao".

## Cấu trúc

| Đường dẫn | Là gì |
|---|---|
| `src/trang.html` | Khung trang bài học, có chỗ `{{CSS}}` và `{{JS}}` |
| `src/giao-dien.css` | Toàn bộ CSS |
| `src/bai-hoc.js` | Nội dung bài và code (không gồm bộ số) |
| `src/du-lieu.json` | Bộ số giả. Sinh bởi script **ở máy, không có trên repo**: `D:\Claude\PVN - TT99\Data hoc hop nhat\gen_data_hop_nhat_Vx.py` |
| `src/index.html` | Trang đầu |
| `hoc-hop-nhat.html`, `index.html` | **File sinh ra**, không sửa tay. Chạy `python build.py` |
| `*_Vx.html` cũ | Bản cũ, giữ để link cũ không gãy, không sửa |

## Quy trình

1. Sửa trong `src/`. Không tạo file `_Vx` mới: phiên bản là git tag + `CHANGELOG.md` (user đồng ý ngày 2026-11-11).
2. `python build.py`, rồi `python kiem-tra.py` phải in "Dat".
3. Thử trên localhost: preview `bctc-portfolio`, cổng 8123.
4. Ghi một dòng vào `CHANGELOG.md`.
5. User phát hành: `.\phat-hanh.ps1 -NoiDung "..." -Tag vNN`. Claude không tự commit, không push.

## Bắt buộc

- Không để lọt tên đơn vị thật, mã PV, hệ số nhân, script sinh số, file Excel của user. `kiem-tra.py` quét theo danh sách ở `D:\Claude\PVN - TT99\Data hoc hop nhat\tu-cam.txt` (ở máy).
- Supabase: chỉ được đặt anon key vào `src/bai-hoc.js` (`SB_URL`, `SB_KEY`), không bao giờ đặt `service_role`.
- Không xoá gì khi chưa hỏi. File tạm để ở scratchpad.
- Máy nằm trong mạng công ty: không tự truy cập website ngoài mà user không nêu tên. Không vào được github.io, không có `gh`.
- Shell của user là Windows PowerShell 5.1: không dùng `&&`, mỗi lệnh một khối code.
