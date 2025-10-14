import React, { useState, useRef, useEffect } from 'react';

/**
 * OptimizedImage - Smart image component with WebP support, lazy loading, and progressive enhancement
 */
const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  useThumbnail = false,
  priority = false,
  sizes = "100vw",
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority); // Load immediately if priority
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  // Extract filename without extension for WebP lookup
  const getImagePaths = (src) => {
    const filename = src.split('/').pop().split('.')[0];
    const basePath = '/bar_photos';
    
    if (useThumbnail) {
      return {
        webp: `${basePath}/thumbnails/${filename}_thumb.webp`,
        fallback: `${basePath}/thumbnails/${filename}_thumb.jpg`,
        placeholder: `${basePath}/thumbnails/${filename}_thumb.jpg`
      };
    }
    
    return {
      webp: `${basePath}/webp/${filename}.webp`,
      fallback: src,
      placeholder: `${basePath}/thumbnails/${filename}_thumb.jpg`
    };
  };

  const { webp, fallback, placeholder } = getImagePaths(src);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px' // Start loading 50px before entering viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`} {...props}>
      {/* Placeholder/Loading state */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-warmGray animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-goldTan border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Main image with WebP support */}
      {isInView && (
        <picture>
          <source 
            srcSet={webp} 
            type="image/webp"
            sizes={sizes}
          />
          <img
            src={hasError ? placeholder : fallback}
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleLoad}
            onError={handleError}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;