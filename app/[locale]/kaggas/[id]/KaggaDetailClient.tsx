'use client';

import { useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Kagga } from '@/types/kagga';
import { ArrowLeft, Share2, Printer, Heart, Play, BookOpen } from 'lucide-react';
import Link from 'next/link';
import LikeButton from '@/components/LikeButton';

interface KaggaDetailClientProps {
  kagga: Kagga;
  prevKagga?: Kagga | null;
  nextKagga?: Kagga | null;
}

export default function KaggaDetailClient({ kagga, prevKagga, nextKagga }: KaggaDetailClientProps) {
  const t = useTranslations('KaggaDetail');
  const locale = useLocale();

  // Add structured data for individual Kagga
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": `Kagga ${kagga.id} - Mankutimmana Kagga by D.V. Gundappa`,
      "description": kagga.englishTranslation,
      "author": {
        "@type": "Person",
        "name": "D.V. Gundappa",
        "alternateName": "DVG"
      },
      "text": kagga.kannadaText,
      "translation": kagga.englishTranslation,
      "inLanguage": ["kn", "en"],
      "isPartOf": {
        "@type": "Book",
        "name": "Mankutimmana Kagga",
        "author": {
          "@type": "Person",
          "name": "D.V. Gundappa"
        }
      },
      "position": kagga.id,
      "keywords": kagga.themes.join(", ")
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [kagga]);

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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-red-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link
            href={`/${locale}/kaggas`}
            className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('backToList')}
          </Link>
          
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {t('kagga')} {kagga.id} - {t('mankutimmanaKagga')}
              </h1>
              <p className="text-lg text-gray-600">
                {t('mankutimmanaKagga')} by D.V. Gundappa
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <LikeButton kaggaId={kagga.id} size="lg" />
              <button
                onClick={handleShare}
                className="p-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                aria-label={t('share')}
              >
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={handlePrint}
                className="p-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                aria-label={t('print')}
              >
                <Printer className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Kagga Content */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 mb-8">
          {/* Original Text */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-red-500" />
              {t('originalText')}
            </h2>
            <div className="bg-gradient-to-r from-red-50 to-yellow-50 p-6 rounded-2xl border border-red-100">
              <p className="text-2xl md:text-3xl font-kannada leading-relaxed text-gray-800 mb-4">
                {kagga.kannadaText}
              </p>
              <p className="text-lg text-gray-600 italic">
                {kagga.transliteration}
              </p>
            </div>
          </div>

          {/* Kannada Meaning */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t('kannadaMeaning')}
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl border border-green-100">
              <p className="text-xl font-kannada leading-relaxed text-gray-800">
                {kagga.meaningInKannada}
              </p>
            </div>
          </div>

          {/* Detailed Meaning */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t('detailedMeaning')}
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
              <p className="text-lg leading-relaxed text-gray-800">
                {kagga.meaningInEnglish}
              </p>
            </div>
          </div>

          {/* Themes */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t('themes')}
            </h2>
            <div className="flex flex-wrap gap-2">
              {kagga.themes.map((theme) => (
                <span
                  key={theme}
                  className="px-4 py-2 bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-full text-sm font-medium"
                >
                  {theme}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Play className="w-6 h-6 mr-2 text-red-500" />
            {t('videoSection')}
          </h2>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl border border-green-100">
            <p className="text-lg text-gray-700 mb-4">
              {t('videoComingSoon')}
            </p>
            <p className="text-gray-600">
              {t('videoDescription')}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Link
            href={`/${locale}/kaggas/${Math.max(1, kagga.id - 1)}`}
            className={`inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
              kagga.id === 1
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-red-500 to-yellow-500 text-white hover:shadow-lg hover:scale-105'
            }`}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('previousKagga')}
          </Link>
          
          <Link
            href={`/${locale}/kaggas/${Math.min(945, kagga.id + 1)}`}
            className={`inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
              kagga.id === 945
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-red-500 to-yellow-500 text-white hover:shadow-lg hover:scale-105'
            }`}
          >
            {t('nextKagga')}
            <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
} 