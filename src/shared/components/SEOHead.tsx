import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Репетитор по Python и Информатике | Konovalov Ivan',
  description = 'Профессиональная подготовка к ЕГЭ/ОГЭ по информатике и обучение программированию на Python. Первое занятие бесплатно!',
  keywords = ['репетитор', 'python', 'информатика', 'егэ', 'огэ', 'программирование', 'вшэ'],
  ogImage = '/assets/profile_pic.webp',
  canonicalUrl = window.location.href
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords.join(', '));
    updateMetaTag('author', 'Konovalov Ivan');
    updateMetaTag('robots', 'index, follow');

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', canonicalUrl, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:locale', 'ru_RU', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Konovalov Ivan - Репетитор по Python",
      "description": description,
      "url": canonicalUrl,
      "telephone": "+7-XXX-XXX-XXXX", // Replace with actual phone
      "email": "ivankon1@icloud.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "RU",
        "addressLocality": "Moscow"
      },
      "serviceArea": {
        "@type": "Place",
        "name": "Online tutoring worldwide"
      },
      "priceRange": "$$"
    };

    let structuredDataScript = document.querySelector('#structured-data');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.setAttribute('type', 'application/ld+json');
      structuredDataScript.setAttribute('id', 'structured-data');
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, ogImage, canonicalUrl]);

  return null; // This component doesn't render anything
};

export default SEOHead;
