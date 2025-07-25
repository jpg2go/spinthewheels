// JavaScript optimization utilities

// Debounce function for performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate = false
): ((...args: Parameters<T>) => void) => {
  let timeout: number | null = null;
  return (...args: Parameters<T>) => {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
};

// Throttle function for performance
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Lazy load components with intersection observer
export const lazyLoadComponent = (
  componentLoader: () => Promise<any>,
  fallback?: React.ReactNode
) => {
  return () => {
    return new Promise((resolve) => {
      // Use requestIdleCallback for better performance
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          componentLoader().then(resolve);
        });
      } else {
        setTimeout(() => {
          componentLoader().then(resolve);
        }, 0);
      }
    });
  };
};

// Optimize event listeners
export const optimizeEventListeners = () => {
  // Use passive listeners for better scroll performance
  const addPassiveListener = (element: Element, event: string, handler: EventListener) => {
    element.addEventListener(event, handler, { passive: true });
  };

  // Remove event listeners properly
  const removeEventListener = (element: Element, event: string, handler: EventListener) => {
    element.removeEventListener(event, handler);
  };

  return { addPassiveListener, removeEventListener };
};

// Memory management utilities
export const memoryOptimizer = {
  // Clear unused references
  clearUnusedReferences: () => {
    if ('gc' in window) {
      (window as any).gc();
    }
  },

  // Monitor memory usage
  getMemoryUsage: () => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      return {
        used: memory.usedJSHeapSize,
        total: memory.totalJSHeapSize,
        limit: memory.jsHeapSizeLimit,
      };
    }
    return null;
  },

  // Check if memory usage is high
  isMemoryUsageHigh: () => {
    const usage = memoryOptimizer.getMemoryUsage();
    if (usage) {
      return usage.used / usage.limit > 0.8; // 80% threshold
    }
    return false;
  },
};

// Code splitting utilities
export const codeSplitter = {
  // Load component only when needed
  loadComponent: (importFn: () => Promise<any>) => {
    return new Promise((resolve) => {
      // Use requestIdleCallback for non-critical components
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          importFn().then(resolve);
        });
      } else {
        setTimeout(() => {
          importFn().then(resolve);
        }, 0);
      }
    });
  },

  // Preload component in background
  preloadComponent: (importFn: () => Promise<any>) => {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        importFn();
      });
    }
  },
};

// Performance monitoring
export const performanceMonitor = {
  // Measure function execution time
  measure: (name: string, fn: () => any) => {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    console.log(`${name} took ${end - start}ms`);
    return result;
  },

  // Monitor long tasks
  monitorLongTasks: () => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) { // 50ms threshold
            console.warn('Long task detected:', entry);
          }
        }
      });
      observer.observe({ entryTypes: ['longtask'] });
    }
  },

  // Monitor layout shifts
  monitorLayoutShifts: () => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if ((entry as any).value > 0.1) { // 0.1 threshold
            console.warn('Layout shift detected:', entry);
          }
        }
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    }
  },
};

// Initialize performance optimizations
export const initializeOptimizations = () => {
  // Monitor performance issues
  performanceMonitor.monitorLongTasks();
  performanceMonitor.monitorLayoutShifts();

  // Optimize scroll performance
  const { addPassiveListener } = optimizeEventListeners();
  
  // Add passive scroll listeners
  document.addEventListener('scroll', () => {}, { passive: true });
  document.addEventListener('touchstart', () => {}, { passive: true });
  document.addEventListener('touchmove', () => {}, { passive: true });

  // Memory cleanup on page visibility change
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      // Page is hidden, can perform cleanup
      if (memoryOptimizer.isMemoryUsageHigh()) {
        memoryOptimizer.clearUnusedReferences();
      }
    }
  });
}; 