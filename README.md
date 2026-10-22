# Web luyện thi IELTS - bản độc lập (standalone)

Gói web tĩnh tự chứa, không phụ thuộc Muse: mở bằng trình duyệt là học được, đăng lên GitHub Pages là có link công khai, kết nối Supabase là có tài khoản và đồng bộ tiến độ. Toàn bộ nội dung do Muse tự soạn mới theo **định dạng và tiêu chí band của kỳ thi IELTS** (không sao chép đề Cambridge IELTS, đề thi thật hay bài mẫu có bản quyền).

## Cấu trúc gói

| File | Vai trò |
|---|---|
| `index.html` | Toàn bộ ứng dụng (giao diện + logic) trong một file, giao diện tiếng Việt. |
| `content.js` | Thư viện nội dung dạng biến `CONTENT` - tách riêng để dễ bồi thêm nội dung sau này. |
| `config.js` | Chứa `SUPABASE_URL` và `SUPABASE_ANON_KEY` (để trống mặc định); tự nạp thư viện Supabase qua CDN khi đã điền. |
| `supabase_schema.sql` | Tạo 3 bảng + Row Level Security trên Supabase (chạy 1 lần trong SQL Editor; chạy lại vẫn an toàn). |
| `HUONG_DAN_CAI_DAT.md` | Hướng dẫn cài đặt từng bước bằng tiếng Việt (tạo Supabase, dán SQL, lấy key, đưa lên GitHub Pages). |

## Hai chế độ chạy

- **Chế độ xem trước** (config.js trống): mọi tính năng chạy, dữ liệu lưu trong `localStorage` của trình duyệt; có banner thông báo; mục Tài khoản hiển thị hướng dẫn kết nối.
- **Chế độ thật** (đã điền config.js): đăng ký/đăng nhập email + mật khẩu qua Supabase Auth; tiến độ, thẻ từ, từ đã lưu và phút học đồng bộ theo tài khoản (đọc khi đăng nhập, ghi ngay khi có thay đổi; vẫn lưu bản sao tại máy).

## Phân hệ học

1. **Trang chủ**: vòng mục tiêu phút học/ngày (tự chỉnh 15-180), đếm phút học thật, chuỗi ngày học, nút Học tiếp, thẻ quy mô nội dung tính từ `CONTENT`, bài kiểm tra thử 6 câu gợi ý band.
2. **Gõ câu**: 120 câu mẫu IELTS Writing chia theo band (mở bài, chủ đề, dữ liệu Task 1, nhượng bộ, kết bài...), gõ sai phải sửa, chấm độ chính xác + WPM.
3. **Từ vựng**: 160 thẻ theo 8 chủ đề IELTS (Education, Environment, Health, Technology, Work & Careers, Society, Crime & Law, Science) kèm IPA, collocation, ví dụ học thuật; ôn SRS mốc 1-3-7-16-35 ngày; bộ "Từ đã tra" từ từ điển.
4. **Ngữ pháp**: 36 trạm phục vụ IELTS (6 trạm/band từ 5.0 đến 7.5+), mỗi trạm có giải thích + 2 ví dụ + 5 câu luyện, đạt 80% là nắm vững.
5. **Đọc**: 10 bài đọc đúng định dạng IELTS Reading (True/False/Not Given, Matching Headings, Multiple Choice, Summary Completion), chấm ngay kèm giải thích vị trí thông tin, bản dịch mẫu + phân tích cụm từ.
6. **Nghe**: 48 câu theo Section 1-4 của IELTS Listening, phát bằng giọng đọc trình duyệt, 3 chế độ (chép chính tả chấm từng từ, nói nhại, trắc nghiệm), tốc độ 0,75x/1x.
7. **Luyện nói**: 12 kịch bản Speaking Part 1/2/3 có bài mẫu theo band, 4 chế độ (xem phụ đề Anh-Việt, chép chính tả, nói nhại từng dòng, trắc nghiệm).
8. **Writing**: 6 đề Task 1 (biểu đồ đường/cột, bảng, biểu đồ tròn, quy trình, bản đồ - dữ kiện mô tả bằng chữ) + 8 đề Task 2 (Opinion, Discussion, Problem-Solution, Advantages, câu hỏi hai phần); mỗi đề có bài mẫu band cao + phân tích cấu trúc + cụm từ ghi điểm; khung soạn thảo lưu tự động, tự đánh dấu hoàn thành.
9. **Từ điển**: nút nổi ở mọi trang, tra qua Free Dictionary API, lưu từ vào bộ ôn tập.

## Quy mô nội dung hiện tại

120 câu gõ · 160 thẻ từ · 36 trạm ngữ pháp (180 câu luyện) · 10 bài đọc (50 câu hỏi) · 48 câu nghe · 12 kịch bản nói (78 dòng mẫu, 36 câu trắc nghiệm) · 14 đề Writing có bài mẫu · 6 câu kiểm tra thử.

## Ghi chú kỹ thuật

- Không cần build/biên dịch: mở `index.html` qua một máy chủ tĩnh là chạy (ví dụ `python3 -m http.server`).
- Dữ liệu Supabase gồm 3 bảng: `progress` (tiến độ từng mục), `saved_words` (từ đã lưu), `study_log` (phút học theo ngày); chính sách RLS `auth.uid() = user_id` bảo đảm mỗi người chỉ truy cập dữ liệu của mình.
- Giọng đọc dùng Web Speech API (`speechSynthesis`) của trình duyệt, ưu tiên giọng en-GB; từ điển dùng Free Dictionary API (cần Internet).
