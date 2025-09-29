const CACHE_NAME = "pwa-cache-v1";
const OFFLINE_URL = "./offline.html";
const NOT_FOUND_URL = "./404.html";
const urlsToCache = ["/", "/index.html", "/src/style.css", "/src/app.js", "/offline.html", "/404.html"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      for (const url of urlsToCache) {
        try {
          await cache.add(url);
          console.log(`Cached: ${url}`);
        } catch (err) {
          console.error(`Failed to cache ${url}`, err);
        }
      }
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.map((key) => key !== CACHE_NAME && caches.delete(key))))
  );
  self.clients.claim();
});
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.status === 404) {
          return caches.match(NOT_FOUND_URL); // 404.html
        }
        const clonedResponse = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
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
