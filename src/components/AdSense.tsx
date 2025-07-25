import { useEffect } from 'react';
import { useState } from 'react';

interface AdSenseProps {
  adSlot?: string;
  adFormat?: 'auto' | 'fluid';
  fullWidthResponsive?: boolean;
  style?: React.CSSProperties;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export const AdSense: React.FC<AdSenseProps> = ({
  adSlot,
  adFormat = 'auto',
  fullWidthResponsive = true,
  style = {}
}) => {
  useEffect(() => {
    // Initialize AdSense
    if (typeof window !== 'undefined' && window.adsbygoogle) {
      try {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
      } catch (error) {
        console.warn('AdSense initialization error:', error);
      }
    }
  }, []);

  // Auto ads configuration
  if (adFormat === 'auto') {
    return (
      <div style={style}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-4542839087220625"
          data-ad-slot={adSlot}
          data-ad-format="auto"
          data-full-width-responsive={fullWidthResponsive}
        />
      </div>
    );
  }

  // Fluid ads configuration
  return (
    <div style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-4542839087220625"
        data-ad-slot={adSlot}
      />
    </div>
  );
};

// Auto ads initialization component
export const AdSenseAutoAds: React.FC = () => {
  useEffect(() => {
    // Initialize auto ads
    if (typeof window !== 'undefined') {
      // Wait for AdSense script to load
      const initAutoAds = () => {
        if (window.adsbygoogle) {
          try {
            window.adsbygoogle = window.adsbygoogle || [];
            window.adsbygoogle.push({
              google_ad_client: 'ca-pub-4542839087220625',
              enable_page_level_ads: true,
              overlays: { bottom: true },
              anchors: { bottom: true },
              inarticle: { enabled: true },
              inpage: { enabled: true }
            });
          } catch (error) {
            console.warn('Auto ads initialization error:', error);
          }
        } else {
          // Retry after a short delay
          setTimeout(initAutoAds, 1000);
        }
      };

      // Start initialization
      initAutoAds();
    }
  }, []);

  return null;
};

// AdSense loading status hook
export const useAdSenseStatus = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const checkAdSense = () => {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        setIsLoaded(true);
      } else {
        setTimeout(checkAdSense, 500);
      }
    };

    checkAdSense();
  }, []);

  return { isLoaded, hasError };
}; 