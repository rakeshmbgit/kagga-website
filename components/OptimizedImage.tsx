'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = '100vw',
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Generate WebP version path
  const getWebPSrc = (originalSrc: string) => {
    if (originalSrc.includes('.jpg') || originalSrc.includes('.jpeg')) {
      return originalSrc.replace(/\.(jpg|jpeg)$/i, '.webp');
    }
    return originalSrc;
  };

  const webpSrc = getWebPSrc(src);

  return (
    <div className={`relative ${className}`}>
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          priority={priority}
          sizes={sizes}
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
        />
      </picture>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
      )}
    </div>
  );
} 