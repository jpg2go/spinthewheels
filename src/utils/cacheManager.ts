// Cache management utilities for efficient cache lifetimes

export interface CacheConfig {
  name: string;
  maxAge: number;
  strategy: 'cache-first' | 'network-first' | 'stale-while-revalidate';
}

export const CACHE_CONFIGS = {
  STATIC: {
    name: 'static',
    maxAge: 365 * 24 * 60 * 60 * 1000, // 1 year
    strategy: 'cache-first' as const,
  },
  DYNAMIC: {
    name: 'dynamic',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
    strategy: 'network-first' as const,
  },
  API: {
    name: 'api',
    maxAge: 5 * 60 * 1000, // 5 minutes
    strategy: 'network-first' as const,
  },
  IMAGES: {
    name: 'images',
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    strategy: 'stale-while-revalidate' as const,
  },
  AUDIO: {
    name: 'audio',
    maxAge: 90 * 24 * 60 * 60 * 1000, // 90 days
    strategy: 'cache-first' as const,
  },
};

export class CacheManager {
  private static instance: CacheManager;
  private cache: Map<string, { data: any; timestamp: number; maxAge: number }> = new Map();

  static getInstance(): CacheManager {
    if (!CacheManager.instance) {
      CacheManager.instance = new CacheManager();
    }
    return CacheManager.instance;
  }

  // Set cache with lifetime
  set(key: string, data: any, config: CacheConfig): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      maxAge: config.maxAge,
    });
  }

  // Get cache with lifetime check
  get(key: string): any | null {
    const item = this.cache.get(key);
    if (!item) return null;

    const now = Date.now();
    const age = now - item.timestamp;

    if (age > item.maxAge) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  // Clear expired cache entries
  cleanup(): void {
    const now = Date.now();
    for (const [key, item] of this.cache.entries()) {
      const age = now - item.timestamp;
      if (age > item.maxAge) {
        this.cache.delete(key);
      }
    }
  }

  // Clear all cache
  clear(): void {
    this.cache.clear();
  }

  // Get cache size
  size(): number {
    return this.cache.size;
  }

  // Get cache statistics
  getStats(): { size: number; entries: number } {
    let totalSize = 0;
    for (const [key, item] of this.cache.entries()) {
      totalSize += JSON.stringify(item.data).length;
    }
    return {
      size: totalSize,
      entries: this.cache.size,
    };
  }
}

// Utility functions for cache management
export const cacheUtils = {
  // Determine cache config based on URL
  getCacheConfig(url: string): CacheConfig {
    const urlObj = new URL(url);
    const path = urlObj.pathname;
    
    if (path.startsWith('/static/') || path.includes('.js') || path.includes('.css')) {
      return CACHE_CONFIGS.STATIC;
    }
    if (path.startsWith('/api/')) {
      return CACHE_CONFIGS.API;
    }
    if (path.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
      return CACHE_CONFIGS.IMAGES;
    }
    if (path.match(/\.(mp3|wav|ogg|m4a)$/i)) {
      return CACHE_CONFIGS.AUDIO;
    }
    return CACHE_CONFIGS.DYNAMIC;
  },

  // Check if cache is still valid
  isCacheValid(timestamp: number, maxAge: number): boolean {
    return Date.now() - timestamp < maxAge;
  },

  // Format cache age for display
  formatCacheAge(timestamp: number): string {
    const age = Date.now() - timestamp;
    const minutes = Math.floor(age / (1000 * 60));
    const hours = Math.floor(age / (1000 * 60 * 60));
    const days = Math.floor(age / (1000 * 60 * 60 * 24));

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return 'Just now';
  },
};

// Auto-cleanup cache every hour
setInterval(() => {
  CacheManager.getInstance().cleanup();
}, 60 * 60 * 1000); // 1 hour 