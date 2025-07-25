// Mobile optimization utilities

export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export const isSlowConnection = (): boolean => {
  if (typeof navigator === 'undefined') return false;
  
  const connection = (navigator as any).connection;
  if (!connection) return false;
  
  return connection.effectiveType === 'slow-2g' || 
         connection.effectiveType === '2g' || 
         connection.effectiveType === '3g';
};

export const shouldReduceAnimations = (): boolean => {
  return isMobile() || isSlowConnection() || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const optimizeForMobile = () => {
  if (isMobile()) {
    // Reduce animation complexity on mobile
    document.documentElement.style.setProperty('--animation-duration', '0.5s');
    
    // Optimize touch interactions
    document.documentElement.style.setProperty('--touch-target-size', '44px');
    
    // Reduce visual effects for better performance
    document.documentElement.style.setProperty('--shadow-intensity', '0.1');
  }
};

// Lazy load images with intersection observer
export const lazyLoadImages = () => {
  if (typeof IntersectionObserver === 'undefined') return;
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset.src || '';
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
};

// Debounce function for mobile performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: number;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}; 