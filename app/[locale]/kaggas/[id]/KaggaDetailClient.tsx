'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Kagga } from '@/types/kagga';
import { 
  ChevronLeft, 
  ChevronRight, 
  Share2, 
  Heart, 
  Play, 
  Printer, 
  BookOpen
} from 'lucide-react';
import Link from 'next/link';

interface KaggaDetailClientProps {
  kagga: Kagga;
  prevKagga: Kagga | null;
  nextKagga: Kagga | null;
}

export default function KaggaDetailClient({ kagga, prevKagga, nextKagga }: KaggaDetailClientProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const t = useTranslations('kagga');
  const commonT = useTranslations('common');
  const navT = useTranslations('navigation');
  const locale = useLocale();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${t('title', { id: kagga.id })} - ${kagga.englishTranslation}`,
          text: kagga.kannadaText,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleVideoToggle = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div className="min-h-screen bg-earth-50">
      <Header />
      
      <main className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-earth-600">
              <li>
                <Link href={`/${locale}`} className="hover:text-primary-600">
                  {navT('home')}
                </Link>
              </li>
              <li>
                <span className="text-earth-400">/</span>
              </li>
              <li>
                <Link href={`/${locale}/kaggas`} className="hover:text-primary-600">
                  {navT('allKaggas')}
                </Link>
              </li>
              <li>
                <span className="text-earth-400">/</span>
              </li>
              <li className="text-earth-900 font-medium">
                {t('title', { id: kagga.id })}
              </li>
            </ol>
          </nav>

          {/* Kagga Content */}
          <div className="bg-white rounded-xl shadow-sm border border-earth-200 p-8 mb-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-earth-900">
                    {t('title', { id: kagga.id })}
                  </h1>
                  <p className="text-earth-600">
                    ಮಂಕುತಿಮ್ಮನ ಕಗ್ಗ
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleShare}
                  className="p-2 text-earth-400 hover:text-primary-600 transition-colors duration-200"
                  aria-label={commonT('share')}
                >
                  <Share2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`p-2 transition-colors duration-200 ${
                    isLiked ? 'text-red-500' : 'text-earth-400 hover:text-red-500'
                  }`}
                  aria-label={isLiked ? commonT('unfavorite') : commonT('favorite')}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                </button>
                <button
                  onClick={handlePrint}
                  className="p-2 text-earth-400 hover:text-primary-600 transition-colors duration-200"
                  aria-label={commonT('print')}
                >
                  <Printer className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Kannada Text */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-earth-900 mb-4">
                {t('originalText')}
              </h2>
              <div className="bg-earth-50 rounded-lg p-6">
                <p className="kagga-text text-2xl md:text-3xl leading-relaxed text-center">
                  {kagga.kannadaText}
                </p>
              </div>
            </div>

            {/* Transliteration */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-earth-900 mb-4">
                {t('transliteration')}
              </h2>
              <div className="bg-earth-50 rounded-lg p-6">
                <p className="transliteration text-lg md:text-xl text-center">
                  {kagga.transliteration}
                </p>
              </div>
            </div>

            {/* English Translation */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-earth-900 mb-4">
                {t('englishTranslation')}
              </h2>
              <div className="bg-earth-50 rounded-lg p-6">
                <p className="translation text-lg md:text-xl text-center">
                  "{kagga.englishTranslation}"
                </p>
              </div>
            </div>

            {/* Word-by-Word Meaning */}
            {kagga.wordByWordMeaning && (
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-earth-900 mb-4">
                  {t('wordByWordMeaning')}
                </h2>
                <div className="bg-earth-50 rounded-lg p-6">
                  <p className="meaning text-base">
                    {kagga.wordByWordMeaning}
                  </p>
                </div>
              </div>
            )}

            {/* Detailed Meaning */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-earth-900 mb-4">
                {t('meaning')}
              </h2>
              <div className="bg-earth-50 rounded-lg p-6">
                <p className="meaning text-base leading-relaxed">
                  {kagga.meaning}
                </p>
              </div>
            </div>

            {/* Themes */}
            {kagga.themes && kagga.themes.length > 0 && (
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-earth-900 mb-4">
                  {t('themes')}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {kagga.themes.map((theme, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Video Section */}
            {kagga.videoUrl && (
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-earth-900">
                    {t('videoExplanation')}
                  </h2>
                  <button
                    onClick={handleVideoToggle}
                    className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                  >
                    <Play className="w-4 h-4" />
                    <span>{showVideo ? t('hideVideo') : t('showVideo')}</span>
                  </button>
                </div>
                
                {showVideo && (
                  <div className="bg-earth-50 rounded-lg p-6">
                    <div className="aspect-video bg-earth-200 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Play className="w-16 h-16 text-earth-400 mx-auto mb-4" />
                        <p className="text-earth-600">
                          Video explanation coming soon!
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            {prevKagga ? (
              <Link
                href={`/${locale}/kaggas/${prevKagga.id}`}
                className="flex items-center space-x-2 px-4 py-2 bg-white border border-earth-200 rounded-lg hover:bg-earth-50 transition-colors duration-200"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{commonT('previous')}</span>
              </Link>
            ) : (
              <div></div>
            )}

            <div className="text-sm text-earth-600">
              {kagga.id} {commonT('of')} 945
            </div>

            {nextKagga ? (
              <Link
                href={`/${locale}/kaggas/${nextKagga.id}`}
                className="flex items-center space-x-2 px-4 py-2 bg-white border border-earth-200 rounded-lg hover:bg-earth-50 transition-colors duration-200"
              >
                <span>{commonT('next')}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 