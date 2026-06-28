// Service Worker untuk Simulasi TKA SMP
const CACHE_NAME = 'simulasitka-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './simulasitka.png',
  './sertifikattka.jpg'
];

// Event: Install - Cache resources
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching app shell');
      return cache.addAll(urlsToCache).catch((error) => {
        console.warn('[Service Worker] Failed to cache all resources:', error);
      });
    })
  );
  self.skipWaiting();
});

// Event: Activate - Clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Event: Fetch - Network first, then cache fallback
self.addEventListener('fetch', (event) => {
  const { request } = event;
  
  // Skip cross-origin requests
  if (!request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    fetch(request)
      .then((response) => {
        // Only cache GET requests with successful responses
        if (request.method === 'GET' && response.status === 200) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        // Return cached version on network error
        return caches.match(request).then((response) => {
          return response || new Response('Offline - Resource not found', { 
            status: 404,
            statusText: 'Not Found'
          });
        });
      })
  );
});
