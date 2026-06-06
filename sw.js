const CACHE_NAME = 'studymaster-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './css/styles.css',
  './js/app.js',
  './js/components/theme.js',
  './js/components/sidebar.js',
  './js/components/content.js',
  './js/data/chuong-mo-dau.js',
  './assets/logo.png',
  './assets/icon-192.png',
  './assets/icon-512.png'
];

// Install Service Worker and cache core assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching all core assets');
      return cache.addAll(ASSETS);
    })
  );
});

// Activate Service Worker and clear old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Clearing old cache', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// Serve assets from cache, fallback to network
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request).catch(() => {
        // Fallback or network error
      });
    })
  );
});
