/* Service worker cho web IELTS ban moi — chi hien thong bao nhac hoc.
   Dang ky tu index.html (navigator.serviceWorker.register("sw.js")).
   File nay phai duoc day kem index.html + content-new.js len cung thu muc
   goc cua web (https://slb-md.github.io/ielts/sw.js) thi push khi dong
   trang moi hoat dong. Khong chua khoa bi mat nao. */
self.addEventListener("push", function (event) {
  var data = {};
  try { data = event.data ? event.data.json() : {}; } catch (e) {}
  var title = data.title || "Nhắc học IELTS";
  var body = data.body || "Đến giờ ôn bài rồi — mở web để giữ chuỗi học.";
  var url = data.url || "./";
  event.waitUntil(
    self.registration.showNotification(title, { body: body, data: { url: url } })
  );
});
self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  var url = (event.notification.data && event.notification.data.url) || "./";
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then(function (list) {
      for (var i = 0; i < list.length; i++) {
        if ("focus" in list[i]) return list[i].focus();
      }
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});
