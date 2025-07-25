const CACHE_NAME = 'spinthewheels-v3';
const STATIC_CACHE = 'spinthewheels-static-v3';
const DYNAMIC_CACHE = 'spinthewheels-dynamic-v3';

// Cache lifetimes (in milliseconds)
const CACHE_LIFETIMES = {
  STATIC: 365 * 24 * 60 * 60 * 1000, // 1 year for static assets
  DYNAMIC: 7 * 24 * 60 * 60 * 1000,  // 1 week for dynamic content
  API: 5 * 60 * 1000,                // 5 minutes for API calls
  IMAGES: 30 * 24 * 60 * 60 * 1000,  // 30 days for images
  AUDIO: 90 * 24 * 60 * 60 * 1000,   // 90 days for audio files
};

// Static assets that rarely change
const STATIC_ASSETS = [
  '/',
  '/templates',
  '/about',
  '/privacy-policy',
  '/terms-of-service',
  '/static/js/',
  '/static/css/',
];

// Dynamic content that changes more frequently
const DYNAMIC_PATTERNS = [
  '/api/',
  '/data/',
  '/user/',
];

// Mobile-specific cache strategy
const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Cache size limits for mobile
const MOBILE_CACHE_LIMIT = 50 * 1024 * 1024; // 50MB for mobile
const DESKTOP_CACHE_LIMIT = 100 * 1024 * 1024; // 100MB for desktop

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE),
      caches.open(DYNAMIC_CACHE)
    ]).then(([staticCache, dynamicCache]) => {
      return Promise.all([
        staticCache.addAll(STATIC_ASSETS),
        // Dynamic cache starts empty
        Promise.resolve()
      ]);
    })
  );
});

// Fetch event with efficient cache lifetimes
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const isStaticAsset = STATIC_ASSETS.some(asset => url.pathname.startsWith(asset));
  const isDynamicContent = DYNAMIC_PATTERNS.some(pattern => url.pathname.includes(pattern));
  const isImage = event.request.destination === 'image';
  const isAudio = event.request.destination === 'audio';
  const isAPI = url.pathname.startsWith('/api/');

  // Determine cache strategy based on resource type
  let cacheStrategy = 'network-first';
  let cacheName = DYNAMIC_CACHE;
  let cacheLifetime = CACHE_LIFETIMES.DYNAMIC;

  if (isStaticAsset) {
    cacheStrategy = 'cache-first';
    cacheName = STATIC_CACHE;
    cacheLifetime = CACHE_LIFETIMES.STATIC;
  } else if (isImage) {
    cacheStrategy = 'stale-while-revalidate';
    cacheLifetime = CACHE_LIFETIMES.IMAGES;
  } else if (isAudio) {
    cacheStrategy = 'cache-first';
    cacheLifetime = CACHE_LIFETIMES.AUDIO;
  } else if (isAPI) {
    cacheStrategy = 'network-first';
    cacheLifetime = CACHE_LIFETIMES.API;
  }

  event.respondWith(
    handleRequest(event.request, cacheStrategy, cacheName, cacheLifetime)
  );
});

// Handle different cache strategies
async function handleRequest(request, strategy, cacheName, lifetime) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);

  switch (strategy) {
    case 'cache-first':
      if (cachedResponse) {
        return cachedResponse;
      }
      try {
        const networkResponse = await fetch(request);
        if (networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          cache.put(request, responseClone);
        }
        return networkResponse;
      } catch (error) {
        return new Response('Offline content not available', { status: 503 });
      }

    case 'network-first':
      try {
        const networkResponse = await fetch(request);
        if (networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          cache.put(request, responseClone);
        }
        return networkResponse;
      } catch (error) {
        if (cachedResponse) {
          return cachedResponse;
        }
        return new Response('Offline content not available', { status: 503 });
      }

    case 'stale-while-revalidate':
      if (cachedResponse) {
        // Return cached response immediately
        fetch(request).then(networkResponse => {
          if (networkResponse.status === 200) {
            cache.put(request, networkResponse);
          }
        });
        return cachedResponse;
      }
      try {
        const networkResponse = await fetch(request);
        if (networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          cache.put(request, responseClone);
        }
        return networkResponse;
      } catch (error) {
        return new Response('Image not available', { status: 503 });
      }

    default:
      return fetch(request);
  }
}

// Activate event with cache cleanup
self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (![STATIC_CACHE, DYNAMIC_CACHE].includes(cacheName)) {
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Clean up expired cache entries
      cleanupExpiredCache()
    ])
  );
});

// Clean up expired cache entries
async function cleanupExpiredCache() {
  const now = Date.now();
  const cachesToClean = [STATIC_CACHE, DYNAMIC_CACHE];
  
  for (const cacheName of cachesToClean) {
    const cache = await caches.open(cacheName);
    const keys = await cache.keys();
    
    for (const request of keys) {
      const response = await cache.match(request);
      if (response) {
        const cacheTime = response.headers.get('sw-cache-time');
        if (cacheTime) {
          const age = now - parseInt(cacheTime);
          const maxAge = getMaxAge(request.url);
          
          if (age > maxAge) {
            await cache.delete(request);
          }
        }
      }
    }
  }
}

// Get maximum age for different resource types
function getMaxAge(url) {
  const urlObj = new URL(url);
  const isStaticAsset = STATIC_ASSETS.some(asset => urlObj.pathname.startsWith(asset));
  const isImage = urlObj.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i);
  const isAudio = urlObj.pathname.match(/\.(mp3|wav|ogg|m4a)$/i);
  const isAPI = urlObj.pathname.startsWith('/api/');
  
  if (isStaticAsset) return CACHE_LIFETIMES.STATIC;
  if (isImage) return CACHE_LIFETIMES.IMAGES;
  if (isAudio) return CACHE_LIFETIMES.AUDIO;
  if (isAPI) return CACHE_LIFETIMES.API;
  return CACHE_LIFETIMES.DYNAMIC;
} 