const cacheKey = "v22";
const OFFLINE_URL = "/pages/offline.html";
const NOT_FOUND_URL = "/pages/404.html";
const urlsToCache = ["/", "/index.html", "/src/style.css", "/src/page.css", "/src/app.js", OFFLINE_URL, NOT_FOUND_URL];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheKey).then((cache) => {
      console.log("cache opened");
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// remove old caches when activating new service worker
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== cacheKey).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (!(event.request.url.startsWith("http://") || event.request.url.startsWith("https://"))) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(async (response) => {
        if (response.status === 404) {
          const cached404 = await caches.match(NOT_FOUND_URL);
          return cached404;
        }

        if (event.request.method === "GET") {
          const clonedResponse = response.clone();
          event.waitUntil(
            caches.open(cacheKey).then((cache) =>
              cache.put(event.request, clonedResponse).catch((err) => {
                console.warn("Cache put failed for:", event.request.url, err);
              })
            )
          );
        }

        return response;
      })
      .catch(async () => {
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) {
          return cachedResponse;
        }

        // If it’s a navigation request (HTML) → show offline.html
        if (
          event.request.mode === "navigate" ||
          (event.request.method === "GET" && (event.request.headers.get("accept") || "").includes("text/html"))
        ) {
          return caches.match(OFFLINE_URL);
        }

        // Otherwise → give up
        return Response.error();
      })
  );
});
