import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

// Utility to truncate a string to a max length with NO ellipsis
function truncate(str: string, n: number) {
  return (str.length > n) ? str.slice(0, n) : str;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = '/vite.svg',
  ogType = 'website',
  twitterCard = 'summary_large_image'
}) => {
  const baseUrl = 'https://spinthewheels.cc';
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  // Use the full title for SEO/browser (do not truncate)
  const safeTitle = title;
  // Add console log to debug
  console.log('SEO Component rendered with:', { title: safeTitle, description, canonical });
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{safeTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={safeTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="Spin the Wheels" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={safeTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Spin the Wheels" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Force update meta tags */}
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default SEO; 