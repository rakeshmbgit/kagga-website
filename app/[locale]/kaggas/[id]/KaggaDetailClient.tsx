'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LikeButton from '@/components/LikeButton';
import { Kagga } from '@/types/kagga';
import { 
  ChevronLeft, 
  ChevronRight, 
  Share2, 
  Play, 
  Printer, 
  Quote
} from 'lucide-react';
import Link from 'next/link';

interface KaggaDetailClientProps {
  kagga: Kagga;
  prevKagga: Kagga | null;
  nextKagga: Kagga | null;
}

export default function KaggaDetailClient({ kagga, prevKagga, nextKagga }: KaggaDetailClientProps) {
  const t = useTranslations('KaggaDetail');
  const locale = useLocale();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Kagga ${kagga.id}`,
          text: kagga.kannadaText,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      } catch (error) {
        console.error('Error copying to clipboard:', error);
      }
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Navigation Header */}
        <div className="flex items-center justify-between mb-8">
          <Link 
            href={`/${locale}/kaggas`}
            className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            {t('backToList')}
          </Link>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={handleShare}
              className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
            >
              <Share2 className="w-5 h-5" />
              <span className="hidden sm:inline">{t('share')}</span>
            </button>
            
            <button
              onClick={handlePrint}
              className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
            >
              <Printer className="w-5 h-5" />
              <span className="hidden sm:inline">{t('print')}</span>
            </button>
          </div>
        </div>

        {/* Kagga Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header with Kagga Number and Like Button */}
          <div className="bg-gradient-to-r from-red-600 to-yellow-600 p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 rounded-full p-3">
                  <Quote className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{t('kagga')} #{kagga.id}</h1>
                  <p className="text-red-100">{t('mankuthimmanaKagga')}</p>
                </div>
              </div>
              
              <LikeButton 
                kaggaId={kagga.id} 
                className="bg-white/20 text-white hover:bg-white/30"
                size="lg"
              />
            </div>
          </div>

          {/* Content Sections */}
          <div className="p-6 space-y-8">
            {/* Original Text (ಕನ್ನಡ) */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                {t('originalText')}
              </h2>
              <div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl p-8 border border-white/20">
                <p className="kannada text-2xl md:text-3xl text-center text-gray-800 leading-relaxed">
                  {kagga.kannadaText}
                </p>
              </div>
            </div>

            {/* Meaning in Kannada */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                {t('englishTranslation')}
              </h2>
              <div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl p-8 border border-white/20">
                <p className="translation text-xl md:text-2xl text-center text-gray-800 italic">
                  {kagga.meaningInKannada}
                </p>
              </div>
            </div>

            {/* Transliteration */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                {t('transliteration')}
              </h2>
              <div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl p-8 border border-white/20">
                <p className="transliteration text-xl md:text-2xl text-center text-gray-800">
                  {kagga.transliteration}
                </p>
              </div>
            </div>

            {/* Meaning & Interpretation */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                {t('detailedMeaning')}
              </h2>
              <div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl p-8 border border-white/20">
                <p className="meaning text-lg md:text-xl text-gray-800 leading-relaxed">
                  {kagga.meaningInEnglish}
                </p>
              </div>
            </div>

            {/* Themes */}
            {kagga.themes && kagga.themes.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                  {t('themes')}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {kagga.themes.map((theme, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-red-100 to-yellow-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium border border-red-200"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Video Section */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                {t('videoSection')}
              </h2>
              <div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl p-8 border border-white/20">
                <div className="flex items-center justify-center space-x-4">
                  <div className="bg-red-600 text-white rounded-full p-4">
                    <Play className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {t('videoComingSoon')}
                    </h3>
                    <p className="text-gray-600">
                      {t('videoDescription')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="flex items-center justify-between mt-8">
          {prevKagga ? (
            <Link
              href={`/${locale}/kaggas/${prevKagga.id}`}
              className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>{t('previousKagga')} #{prevKagga.id}</span>
            </Link>
          ) : (
            <div></div>
          )}

          {nextKagga ? (
            <Link
              href={`/${locale}/kaggas/${nextKagga.id}`}
              className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
            >
              <span>{t('nextKagga')} #{nextKagga.id}</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </main>

            <Footer />
    </div>
  );
} 