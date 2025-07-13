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
  BookOpen,
  Sparkles,
  Quote
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
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-red-100">
      <Header />
      
      <main className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <Link href={`/${locale}`} className="hover:text-red-500 transition-colors duration-200">
                  {navT('home')}
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <Link href={`/${locale}/kaggas`} className="hover:text-red-500 transition-colors duration-200">
                  {navT('allKaggas')}
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li className="text-gray-900 font-medium">
                {t('title', { id: kagga.id })}
              </li>
            </ol>
          </nav>

          {/* Kagga Content */}
          <div className="backdrop-blur-md bg-white/80 rounded-2xl shadow-xl border border-white/20 p-8 mb-8 transform hover:scale-[1.01] transition-all duration-300">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                    {t('title', { id: kagga.id })}
                  </h1>
                  <p className="text-gray-600 font-medium">
                    ಮಂಕುತಿಮ್ಮನ ಕಗ್ಗ
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleShare}
                  className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200 group"
                  aria-label={commonT('share')}
                >
                  <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                </button>
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`p-3 rounded-xl transition-all duration-200 group ${
                    isLiked ? 'text-red-500 bg-red-50' : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                  }`}
                  aria-label={isLiked ? commonT('unfavorite') : commonT('favorite')}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''} group-hover:scale-110 transition-transform duration-200`} />
                </button>
                <button
                  onClick={handlePrint}
                  className="p-3 text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 rounded-xl transition-all duration-200 group"
                  aria-label={commonT('print')}
                >
                  <Printer className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                </button>
              </div>
            </div>

            {/* Kannada Text */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                {t('originalText')}
              </h2>
              <div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl p-8 border border-white/20">
                <p className="kagga-text text-xl leading-relaxed text-center text-gray-800">
                  {kagga.kannadaText}
                </p>
              </div>
            </div>

            {/* Transliteration */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                {t('transliteration')}
              </h2>
              <div className="bg-gradient-to-r from-yellow-50 to-red-50 rounded-xl p-8 border border-white/20">
                <p className="transliteration text-xl leading-relaxed text-center text-gray-800">
                  {kagga.transliteration}
                </p>
              </div>
            </div>

            {/* English Translation */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                {t('englishTranslation')}
              </h2>
              <div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl p-8 border border-white/20">
                <p className="translation text-xl md:text-2xl text-center text-gray-800 italic">
                  "{kagga.englishTranslation}"
                </p>
              </div>
            </div>

            {/* Word-by-Word Meaning */}
            {kagga.wordByWordMeaning && (
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                  {t('wordByWordMeaning')}
                </h2>
                <div className="bg-gradient-to-r from-yellow-50 to-red-50 rounded-xl p-8 border border-white/20">
                  <p className="meaning text-base text-gray-800 leading-relaxed">
                    {kagga.wordByWordMeaning}
                  </p>
                </div>
              </div>
            )}

            {/* Detailed Meaning */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                {t('meaning')}
              </h2>
              <div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl p-8 border border-white/20">
                <p className="meaning text-base leading-relaxed text-gray-800">
                  {kagga.meaning}
                </p>
              </div>
            </div>

            {/* Themes */}
            {kagga.themes && kagga.themes.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                  {t('themes')}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {kagga.themes.map((theme, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-red-100 to-yellow-100 text-gray-700 rounded-full text-sm font-medium border border-red-200/50 hover:from-red-200 hover:to-yellow-200 transition-all duration-200"
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
                  <h2 className="text-xl font-bold text-gray-900 bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                    {t('videoExplanation')}
                  </h2>
                  <button
                    onClick={handleVideoToggle}
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold"
                  >
                    <Play className="w-4 h-4" />
                    <span>{showVideo ? t('hideVideo') : t('showVideo')}</span>
                  </button>
                </div>
                
                {showVideo && (
                  <div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl p-8 border border-white/20">
                    <div className="aspect-video bg-gradient-to-r from-red-100 to-yellow-100 rounded-xl flex items-center justify-center border border-white/20">
                      <div className="text-center">
                        <Play className="w-16 h-16 text-red-500 mx-auto mb-4" />
                        <p className="text-gray-600 font-medium">
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
          <div className="flex items-center justify-between backdrop-blur-md bg-white/80 rounded-2xl shadow-xl border border-white/20 p-6">
            {prevKagga ? (
              <Link
                href={`/${locale}/kaggas/${prevKagga.id}`}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold group"
              >
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                <span>{commonT('previous')}</span>
              </Link>
            ) : (
              <div></div>
            )}

            <div className="text-lg font-bold text-gray-700 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              {kagga.id} {commonT('of')} 945
            </div>

            {nextKagga ? (
              <Link
                href={`/${locale}/kaggas/${nextKagga.id}`}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold group"
              >
                <span>{commonT('next')}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
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