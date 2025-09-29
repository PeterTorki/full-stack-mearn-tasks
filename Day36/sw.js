const cacheName = "v22";
const OFFLINE_URL = "/offline.html";
const NOT_FOUND_URL = "/404.html";
const urlsToCache = ["/", "/index.html", "/src/style.css", "/src/app.js", "/offline.html", "/404.html"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("cache opened");
      cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.map((key) => key !== cacheName && caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then(async (response) => {
        if (response.status === 404) {
          const cached404 = await caches.match(NOT_FOUND_URL);
          console.log(cached404);
          return cached404;
        }
        const clonedResponse = response.clone();
        caches.open(cacheName).then((cache) => {
          cache.put(event.request, clonedResponse);
        });
        return response;
      })
      .catch(async () => {
        const cachedResponse = await caches.match(event.request);
        return cachedResponse || caches.match(OFFLINE_URL); // offline.html
      })
  );
});
