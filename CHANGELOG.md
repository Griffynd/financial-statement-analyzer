# Nhật ký thay đổi

Từ v38, mỗi phiên bản là một git tag (`v38`, `v39`, ...). Bài học sửa trong `src/`, chạy `build.py` ra `hoc-hop-nhat.html`. Không tạo file `_Vx` mới. Các file `_Vx` đã có trên repo vẫn giữ để link cũ không gãy.

| Bản | Ngày | Thay đổi |
|---|---|---|
| v47 | 2026-11-17 | Ghi chú theo từng phần: cuối mỗi phần của bài có mục "📝 Ghi chú phần này" gập/mở được; phần đã có ghi chú thì mở sẵn và ghi "(đã có)". Ghi chú cũ của cả bài giữ nguyên, đổi thành "Ghi chú chung của bài". Đầu bài có nút "Ẩn ghi chú / Hiện ghi chú", lưu cùng tiến độ. |
| v46 | 2026-11-16 | Thiết kế lại giao diện cả hai trang: một bộ màu và chữ dùng chung, thanh đầu trang giống nhau. Trang bài học: thanh bên chia nhóm gập được, có dấu bài đã học và thanh tiến độ; đầu bài ghi "Bài N trên 37", lý thuyết gập được; bảng hợp nhất bài 10 chỉ tô ô số điều chỉnh; điện thoại có nút mở danh sách bài. Trang đầu: khối học lên trên với nút "Học tiếp bài N", công cụ phân tích BCTC ở dưới. Bảng: cột chữ căn trái cả cột, cột đầu đứng yên khi cuộn ngang, bảng nhiều cột (bài 35) cột tài khoản rộng hơn; không còn tô màu Nợ/Có nhầm cho dòng chữ bắt đầu bằng "Có"; thẻ đầu bài trùng tên bài thì ẩn. Bàn phím: link "Đến nội dung bài", viền tiêu điểm nút năm không bị cắt. |
| v45 | 2026-11-16 | Trang đầu: nút Đăng xuất nằm trong thanh tiêu đề, không còn nổi đè lên dòng "chưa có dữ liệu" trên màn hình máy tính. |
| v44 | 2026-11-16 | Tự đăng xuất sau 30 phút không thao tác (tính chung mọi tab trên máy, mở lại trang sau quá lâu cũng phải đăng nhập lại). Ẩn hoặc đóng tab thì lưu tiến độ ngay; quay lại tab thì tải tiến độ mới hơn nếu đã học trên máy khác. Điện thoại: nút Đăng xuất trang đầu không đè tiêu đề, đầu trang bài học gọn lại, cột đầu bảng đứng yên khi cuộn ngang. Bài 10 và 35: danh sách bút toán thu gọn trong mục "Chọn từng bút toán". |
| v43 | 2026-11-12 | Bộ số V6: tên công ty tiếng Việt kèm lĩnh vực (Đại An, Bảo Tín, Cát Tường...), tên phần nâng cao cũng đổi. Ngọc Ánh là ngân hàng con: Đại An gửi tiền, Gia Hưng vay tại ngân hàng, bài 5 thêm đối chiếu và bút toán E18 đến E21. Mỗi bút toán ghi chỉ mục WP; bảng hợp nhất bài 10 có cột Preliminary, AJE, Final như RPT-001. File luyện tập: Luyen-tap-co-ban_V3.xlsx, Luyen-tap-hop-nhat_V8.xlsx. |
| v42 | 2026-11-12 | Trang đầu có nút Đăng xuất (góc trên phải). |
| v41 | 2026-11-12 | Mỗi bài mở đầu bằng khung "Lý thuyết cơ bản": ý chính, nguyên tắc, bút toán khung (nếu có), căn cứ. Nội dung ở `src/ly-thuyet.js`. |
| v40 | 2026-11-12 | Bắt đăng nhập trước khi xem cả trang đầu và trang bài học (`src/dang-nhap.js`, `src/dang-nhap.css` dùng chung). Bỏ chế độ học không cần tài khoản. `kiem-tra.py` kiểm thêm JS của trang đầu và chặn secret key. |
| v39 | 2026-11-12 | Bật đăng nhập: điền Project URL và publishable key của Supabase vào `src/bai-hoc.js`. |
| v38 | 2026-11-11 | Chuyển sang build từ `src/`: link cố định `hoc-hop-nhat.html`, `kiem-tra.py` (build khớp nguồn, quét lộ dữ liệu thật, cú pháp JS, link hỏng), `phat-hanh.ps1` phát hành một lệnh. Nội dung bài giữ nguyên như V37. |
| V37 | 2026-11-11 | Bài 1: phân loại theo hai bước, tính tỷ lệ sở hữu (nhân theo chuỗi) trước rồi xét biểu quyết; thêm các trường hợp biểu quyết cao hơn sở hữu. |
| V36 | 2026-11-11 | Ô ghi chú cho từng bài; đăng nhập email và mật khẩu, lưu tiến độ và ghi chú theo tài khoản (Supabase, bật khi điền khóa). |
| V35 | 2026-11-11 | Đổi mã phải thu nội bộ 131NB thành 136, phải trả nội bộ 331NB thành 336. |
| V34 trở về trước | trước 2026-11-11 | Xem lịch sử git. |
