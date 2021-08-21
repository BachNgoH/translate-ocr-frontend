// self.addEventListener("install", (e) => {
//   e.waitUntil(
//     caches.open("static").then((cache) => {
//       return cache.addAll(["./", "./public/logo192.png"]);
//     })
//   );
// });

// self.addEventListener("fetch", (e) => {
//   e.responseWith(
//     caches.match(e.request).then((response) => {
//       return response || fetch(e.request);
//     })
//   );
// });
