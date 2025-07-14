'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Kagga } from '@/types/kagga';
import LikeButton from '@/components/LikeButton';
import { BookOpen, Play, Share2 } from 'lucide-react';

interface KaggaCardProps {
  kagga: Kagga;
  variant?: 'default' | 'compact' | 'featured';
  showVideo?: boolean;
}

const KaggaCard = ({ kagga, variant = 'default', showVideo = true }: KaggaCardProps) => {
  const locale = useLocale();
  const t = useTranslations('common');
  const isCompact = variant === 'compact';
  const isFeatured = variant === 'featured';

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/${locale}/kaggas/${kagga.id}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${t('kagga')} ${kagga.id} - ${kagga.englishTranslation}`,
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
      className={`card group hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 ${
        isFeatured ? 'ring-2 ring-primary-200 shadow-xl' : ''
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-100 to-karnataka-100 rounded-lg flex items-center justify-center group-hover:from-primary-200 group-hover:to-karnataka-200 transition-all duration-300">
            <BookOpen className="w-4 h-4 text-primary-600 group-hover:text-primary-700 transition-colors duration-300" />
          </div>
          <span className="font-semibold text-earth-900">{t('kagga')} {kagga.id}</span>
        </div>
        
        {!isCompact && (
          <div className="flex items-center space-x-2">
            <button
              onClick={handleShare}
              className="p-1 text-earth-400 hover:text-primary-600 transition-all duration-200 hover:scale-110"
              aria-label={t('shareThisKagga')}
            >
              <Share2 className="w-4 h-4" />
            </button>
            <LikeButton 
              kaggaId={kagga.id} 
              size="sm"
              showCount={false}
              className="p-1 text-earth-400 hover:text-primary-600 transition-all duration-200 hover:scale-110"
            />
          </div>
        )}
      </div>

      <div className="mb-4">
        <p className={`kagga-text ${isCompact ? 'text-base' : 'text-lg'} mb-2 leading-relaxed`}>
          {kagga.kannadaText}
        </p>
        <p className="transliteration text-sm">
          {kagga.transliteration}
        </p>
      </div>

      {!isCompact && (
        <div className="mb-4">
          <p className="translation text-base leading-relaxed">
            "{kagga.englishTranslation}"
          </p>
        </div>
      )}

      {!isCompact && (
        <div className="mb-4">
          <p className="meaning text-sm line-clamp-3 leading-relaxed">
            {kagga.meaningInEnglish}
          </p>
        </div>
      )}

      <div className="mb-4">
        <div className="flex flex-wrap gap-1">
          {kagga.themes.slice(0, isCompact ? 2 : 3).map((theme) => (
            <span
              key={theme}
              className="px-2 py-1 bg-gradient-to-r from-primary-50 to-karnataka-50 text-primary-700 text-xs rounded-full border border-primary-100"
            >
              {theme}
            </span>
          ))}
          {kagga.themes.length > (isCompact ? 2 : 3) && (
            <span className="px-2 py-1 bg-gradient-to-r from-primary-50 to-karnataka-50 text-primary-700 text-xs rounded-full border border-primary-100">
              +{kagga.themes.length - (isCompact ? 2 : 3)}
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-earth-100">
        <Link
          href={`/${locale}/kaggas/${kagga.id}`}
          className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center group transition-all duration-200"
        >
          {t('readFullKagga')}
          <BookOpen className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform duration-200" />
        </Link>

        {showVideo && kagga.videoUrl && (
          <Link
            href={`/${locale}/videos`}
            className="text-earth-600 hover:text-primary-600 font-medium text-sm flex items-center group transition-all duration-200"
          >
            <Play className="w-3 h-3 mr-1 group-hover:scale-110 transition-transform duration-200" />
            {t('watchVideo')}
          </Link>
        )}
      </div>

      {isFeatured && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-primary-500 to-karnataka-500 text-white text-xs px-3 py-1 rounded-full shadow-lg">
          {t('featured')}
        </div>
      )}
    </div>
  );
};

export default KaggaCard; 