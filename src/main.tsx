import { StrictMode, lazy, Suspense, useEffect, startTransition } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { optimizeForMobile, lazyLoadImages } from './utils/mobileOptimization';
import { initializeOptimizations } from './utils/jsOptimizer';

// Defer CSS loading to prevent render blocking
const loadCSS = () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/src/index.css';
  document.head.appendChild(link);
};

// Load CSS after critical content
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadCSS);
} else {
  loadCSS();
}

// Lazy load the main App component
const App = lazy(() => import('./App.tsx'));

// Loading fallback
const LoadingFallback = () => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 animate-spin">
        <div className="w-8 h-8 bg-white rounded-lg"></div>
      </div>
      <p className="text-gray-600">Loading Spin the Wheels...</p>
    </div>
  </div>
);

// Mobile optimization component with deferred execution
const MobileOptimizer = () => {
  useEffect(() => {
    // Initialize performance optimizations
    initializeOptimizations();
    
    // Defer non-critical optimizations
    startTransition(() => {
      optimizeForMobile();
      lazyLoadImages();
    });
  }, []);
  
  return null;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <MobileOptimizer />
        <Suspense fallback={<LoadingFallback />}>
          <App />
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
