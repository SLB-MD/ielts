# HƯỚNG DẪN CÀI ĐẶT WEB LUYỆN THI IELTS (bản độc lập)

Web gồm 4 file chính: `index.html` (toàn bộ ứng dụng), `content.js` (thư viện nội dung IELTS), `config.js` (nơi dán thông tin kết nối Supabase) và `supabase_schema.sql` (lệnh tạo nơi lưu dữ liệu).

Làm theo 2 phần dưới đây. Phần A giúp web có **tài khoản đăng nhập và đồng bộ tiến độ**. Phần B giúp web có **link công khai** trên GitHub Pages. Chỉ cần làm một lần; sau này dùng bình thường.

LƯU Ý TRƯỚC KHI BẮT ĐẦU: nếu chưa làm Phần A, web vẫn chạy được ở "chế độ xem trước" (tiến độ lưu trên từng máy, không có đăng nhập). Làm xong Phần A thì mới có tài khoản. Làm xong cả Phần B thì ai có link cũng vào học được.

---

## PHẦN A - KẾT NỐI SUPABASE (tài khoản + lưu tiến độ)

### Bước A1. Tạo tài khoản và dự án trên Supabase

1. Mở trình duyệt, vào trang: **supabase.com**
2. Bấm nút **Start your project** (hoặc **Sign in** nếu đã có tài khoản).
3. Đăng nhập bằng tài khoản GitHub của bạn (nút **Continue with GitHub**) - dùng đúng tài khoản GitHub **SLB-MD** đang chứa các web khác của Bộ môn cho dễ quản lý. Supabase sẽ xin quyền truy cập, bấm **Authorize**.
4. Sau khi vào trang quản trị, bấm **New project**.
5. Điền thông tin:
   - **Name** (tên dự án): đặt là `ielts-web` (hoặc tên tùy ý dễ nhớ).
   - **Database Password**: bấm nút **Generate** để Supabase tự tạo mật khẩu mạnh, rồi **lưu mật khẩu này vào nơi an toàn** (ví dụ ứng dụng ghi chú có khóa). Mật khẩu này chỉ dùng khi quản trị nâng cao, gần như không cần dùng lại, nhưng vẫn nên giữ.
   - **Region** (khu vực máy chủ): chọn **Singapore (Southeast Asia)** để web chạy nhanh tại Việt Nam.
6. Bấm **Create new project** và chờ khoảng 1-2 phút để Supabase khởi tạo.

### Bước A2. Tạo các bảng lưu dữ liệu (chạy file SQL)

1. Trong trang quản trị dự án vừa tạo, nhìn menu bên trái, bấm **SQL Editor** (biểu tượng giống trang giấy có chữ SQL).
2. Bấm **+ New query** để mở một trang soạn thảo trống.
3. Mở file **supabase_schema.sql** trong thư mục web này (mở bằng Notepad cũng được), **chép toàn bộ nội dung**, dán vào ô soạn thảo của SQL Editor.
4. Bấm nút **Run** (góc dưới bên phải). Thấy dòng chữ báo thành công (Success / No rows returned) là xong.
5. Kiểm tra lại (không bắt buộc): bấm **Table Editor** ở menu trái - bạn sẽ thấy 3 bảng: `progress`, `saved_words`, `study_log`. Đây là nơi lưu tiến độ học, từ đã lưu và số phút học của từng tài khoản. File SQL có sẵn cơ chế bảo mật (Row Level Security): mỗi người chỉ xem và sửa được dữ liệu của chính mình.

### Bước A3. Lấy Project URL và anon key, dán vào config.js

1. Trong trang quản trị Supabase, bấm biểu tượng **bánh răng (Settings)** ở menu trái, chọn **API**.
2. Bạn sẽ thấy hai thông tin ở mục **Project API keys** và **Project URL**:
   - **Project URL**: dạng `https://xxxxxxxxxxxx.supabase.co`
   - **anon public** key: một chuỗi rất dài, bấm nút **Copy** ở bên cạnh để chép.
   (CHÚ Ý: chỉ lấy khóa **anon public**. Tuyệt đối không lấy khóa **service_role** - khóa đó là khóa quản trị toàn quyền, không bao giờ đưa vào web.)
3. Mở file **config.js** trong thư mục web (mở bằng Notepad), điền hai giá trị vào đúng chỗ giữa hai dấu ngoặc kép, ví dụ:

```js
window.SUPABASE_URL = "https://xxxxxxxxxxxx.supabase.co";
window.SUPABASE_ANON_KEY = "eyJhbGciOi... (chuỗi rất dài)";
```

4. **Lưu file config.js lại.** Xong bước này, web tự chuyển từ "chế độ xem trước" sang chế độ thật: mục **Tài khoản** sẽ hiện form đăng ký/đăng nhập bằng email và mật khẩu, tiến độ sẽ đồng bộ theo tài khoản.

### Bước A4. Thử đăng ký tài khoản

1. Mở web (sau khi đã đưa lên GitHub Pages ở Phần B, hoặc nhờ Muse mở thử).
2. Bấm mục **Tài khoản**, điền email + mật khẩu (ít nhất 6 ký tự), bấm **Đăng ký tài khoản mới**.
3. Nếu Supabase yêu cầu xác nhận email, hãy mở hộp thư, bấm link xác nhận trong thư của Supabase, rồi quay lại **Đăng nhập**.
4. Học thử vài phút, gõ vài câu, lưu vài từ. Sau đó đăng nhập bằng tài khoản đó trên một thiết bị khác - tiến độ phải hiện lại đầy đủ. Vậy là đồng bộ đã hoạt động.

---

## PHẦN B - ĐƯA WEB LÊN GITHUB PAGES (có link công khai)

### Bước B1. Tạo kho chứa (repository) mới trên GitHub

1. Đăng nhập GitHub bằng tài khoản **SLB-MD**, vào trang: **github.com/new**
2. Điền **Repository name**: đặt là `ielts` (link web sau này sẽ là `https://slb-md.github.io/ielts/`). Nếu muốn tên khác, cứ đặt tùy ý, link sẽ thay đổi theo tên đó.
3. Chọn **Public** (công khai - bắt buộc để dùng GitHub Pages miễn phí).
4. Không cần tích ô nào khác. Bấm **Create repository**.

### Bước B2. Tải 4 file lên

1. Trong trang kho vừa tạo, bấm **uploading an existing file** (dòng chữ "uploading an existing file" ở giữa trang).
2. Kéo thả hoặc chọn đủ 4 file trong thư mục web: **index.html**, **content.js**, **config.js**, **supabase_schema.sql** (file SQL không bắt buộc cho web chạy, nhưng nên để cùng cho đủ gói; hai file .md là tài liệu, có thể tải lên hoặc không).
   LƯU Ý: tải file **config.js ĐÃ ĐIỀN** thông tin Supabase ở Bước A3.
3. Bấm **Commit changes**.

### Bước B3. Bật GitHub Pages

1. Trong trang kho, bấm tab **Settings** (hình bánh răng).
2. Menu trái, chọn **Pages**.
3. Ở mục **Source**, chọn **Deploy from a branch**; ở mục Branch chọn **main** và thư mục **/(root)**, bấm **Save**.
4. Chờ khoảng 1-3 phút, tải lại trang Settings > Pages: bạn sẽ thấy dòng "Your site is live at **https://slb-md.github.io/ielts/**". Đó là link công khai của web - gửi link này cho học viên là dùng được ngay.

### Bước B4. Sau này muốn sửa nội dung thì sao?

- Muốn thêm bài học/câu mẫu: chỉ cần sửa file **content.js** (thêm dữ liệu theo đúng mẫu có sẵn trong file) rồi tải đè lên GitHub (vào kho > bấm vào file > bấm biểu tượng cây bút hoặc Upload lại > Commit). Web tự cập nhật sau khoảng 1 phút.
- Nếu ngại tự sửa, cứ nhắn Muse: nói rõ muốn thêm nội dung gì, Muse sẽ soạn sẵn và gửi lại file để bạn tải đè lên, hoặc hướng dẫn từng bước.

---

## XỬ LÝ SỰ CỐ THƯỜNG GẶP

- **Web vẫn hiện banner "Chế độ xem trước"**: file config.js đang trống hoặc chưa được tải đè lên GitHub. Kiểm tra lại Bước A3 và B2 (nhớ tải đúng bản config.js đã điền).
- **Đăng ký báo lỗi**: mật khẩu phải từ 6 ký tự trở lên; nếu vừa đăng ký mà chưa đăng nhập được, hãy kiểm tra hộp thư để xác nhận email (Bước A4).
- **Quên mật khẩu tài khoản học**: hiện tại dùng cách thủ công - vào Supabase > mục **Authentication** > **Users**, chọn người dùng và đặt lại. Học viên nên dùng email thật để sau này dễ khôi phục.
- **Web trắng trang sau khi sửa content.js**: gần như chắc chắn do lỗi dấu phẩy/dấu ngoặc khi thêm nội dung. Hãy khôi phục lại bản content.js trước đó (trong GitHub: vào file > History > chọn bản cũ) rồi nhờ Muse kiểm tra bản mới.

Chúc bạn và học viên học tốt! Mọi chỗ nào trong hướng dẫn này chưa rõ, cứ chụp màn hình bước đang vướng và gửi cho Muse.
