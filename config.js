// ============================================================
//  CẤU HÌNH KẾT NỐI SUPABASE
//  Bùi điền 2 giá trị dưới đây sau khi tạo project trên supabase.com
//  (xem file HUONG_DAN_CAI_DAT.md, làm từng bước một).
//
//  - Để TRỐNG cả hai dòng: web chạy ở CHẾ ĐỘ XEM TRƯỚC,
//    tiến độ lưu trên máy này (localStorage), chưa có đăng nhập.
//  - Điền ĐẦY ĐỦ cả hai dòng: web chạy CHẾ ĐỘ THẬT,
//    đăng ký / đăng nhập bằng email, tiến độ đồng bộ theo tài khoản.
// ============================================================

window.SUPABASE_URL = "https://buejrmnxdwzbnoqgvcpi.supabase.co";
window.SUPABASE_ANON_KEY = "sb_publishable_mMeZxThlik7DBoWbZqf8dg_JsW9thWg";

// Tải thư viện Supabase qua CDN (chỉ tải khi đã điền cấu hình).
// window.__supabaseReady là một Promise, trả về client Supabase hoặc null.
window.__supabaseReady = new Promise(function (resolve) {
  if (!window.SUPABASE_URL || !window.SUPABASE_ANON_KEY) {
    resolve(null);
    return;
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
  s.onload = function () {
    try {
      resolve(window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY));
    } catch (e) {
      resolve(null);
    }
  };
  s.onerror = function () { resolve(null); };
  document.head.appendChild(s);
});
