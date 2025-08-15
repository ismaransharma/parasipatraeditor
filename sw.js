const cacheName = "watermark-editor-v1";
const assets = ["./", "./index.html", "./manifest.json"];

// Install SW
self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(assets)));
});

// Activate SW
self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// Fetch assets
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => res || fetch(event.request))
  );
});
