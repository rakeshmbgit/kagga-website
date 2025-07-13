'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Kagga } from '@/types/kagga';
import { BookOpen, Play, Share2, Heart } from 'lucide-react';

interface KaggaCardProps {
  kagga: Kagga;
  variant?: 'default' | 'compact' | 'featured';
  showVideo?: boolean;
}

const KaggaCard = ({ kagga, variant = 'default', showVideo = true }: KaggaCardProps) => {
  const locale = useLocale();
  const isCompact = variant === 'compact';
  const isFeatured = variant === 'featured';

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/${locale}/kaggas/${kagga.id}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Kagga ${kagga.id} - ${kagga.englishTranslation}`,
          text: kagga.kannadaText,
          url: shareUrl,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
    }
  };

  return (
    <div
      className={`card group hover:shadow-lg transition-all duration-300 ${
        isFeatured ? 'ring-2 ring-primary-200' : ''
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-primary-600" />
          </div>
          <span className="font-semibold text-earth-900">Kagga {kagga.id}</span>
        </div>
        
        {!isCompact && (
          <div className="flex items-center space-x-2">
            <button
              onClick={handleShare}
              className="p-1 text-earth-400 hover:text-primary-600 transition-colors duration-200"
              aria-label="Share this Kagga"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              className="p-1 text-earth-400 hover:text-red-500 transition-colors duration-200"
              aria-label="Add to favorites"
            >
              <Heart className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      <div className="mb-4">
        <p className={`kagga-text ${isCompact ? 'text-base' : 'text-lg'} mb-2`}>
          {kagga.kannadaText}
        </p>
        <p className="transliteration text-sm">
          {kagga.transliteration}
        </p>
      </div>

      {!isCompact && (
        <div className="mb-4">
          <p className="translation text-base">
            "{kagga.englishTranslation}"
          </p>
        </div>
      )}

      {!isCompact && (
        <div className="mb-4">
          <p className="meaning text-sm line-clamp-3">
            {kagga.meaning}
          </p>
        </div>
      )}

      <div className="mb-4">
        <div className="flex flex-wrap gap-1">
          {kagga.themes.slice(0, isCompact ? 2 : 3).map((theme) => (
            <span
              key={theme}
              className="px-2 py-1 bg-earth-100 text-earth-700 text-xs rounded-full"
            >
              {theme}
            </span>
          ))}
          {kagga.themes.length > (isCompact ? 2 : 3) && (
            <span className="px-2 py-1 bg-earth-100 text-earth-700 text-xs rounded-full">
              +{kagga.themes.length - (isCompact ? 2 : 3)}
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-earth-100">
        <Link
          href={`/${locale}/kaggas/${kagga.id}`}
          className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center group"
        >
          Read Full Kagga
          <BookOpen className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform duration-200" />
        </Link>

        {showVideo && kagga.videoUrl && (
          <Link
            href={`/${locale}/videos`}
            className="text-earth-600 hover:text-primary-600 font-medium text-sm flex items-center group"
          >
            <Play className="w-3 h-3 mr-1 group-hover:scale-110 transition-transform duration-200" />
            Watch Video
          </Link>
        )}
      </div>

      {isFeatured && (
        <div className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
          Featured
        </div>
      )}
    </div>
  );
};

export default KaggaCard; 