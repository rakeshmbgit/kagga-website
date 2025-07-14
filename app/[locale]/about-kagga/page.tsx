'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { kaggaInfo } from '@/data/dvg-info';
import { BookOpen, Quote, Star, Users, Calendar, ArrowRight, Sparkles, Heart } from 'lucide-react';
import Link from 'next/link';

export default function AboutKaggaPage() {
  const t = useTranslations('about.kagga');
  const navT = useTranslations('navigation');

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-red-100">
      <Header />
      
      <main className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Header */}
          <div className="text-center mb-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-yellow-500/10 rounded-3xl blur-3xl"></div>
            <div className="relative py-8">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
                <Heart className="w-4 h-4" />
                <span>ಕನ್ನಡ ಸಾಹಿತ್ಯ</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent mb-6 animate-fade-in kannada-heading py-2">
                {t('title')}
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                {t('timelessMasterpieceDesc')}
              </p>
            </div>
          </div>

          {/* Kagga Overview */}
          <div className="backdrop-blur-md bg-white/80 rounded-2xl shadow-xl border border-white/20 p-8 mb-12 transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent kannada-heading">
                {t('aboutTheWorkTitle')}
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-800 space-y-6">
              <p>
                <span className="font-semibold">{t('title')}</span> ({t('title')}), {t('aboutTheWorkDesc')}
              </p>
              <p>
                {t('description')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-200">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">{t('versesCountDesc')}</p>
                  <p className="text-sm text-gray-600 font-medium">{t('verses')}</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-200">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">{t('yearPublishedDesc')}</p>
                  <p className="text-sm text-gray-600 font-medium">{t('yearPublished')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* The Spirit of Kagga */}
          <div className="backdrop-blur-md bg-white/80 rounded-2xl shadow-xl border border-white/20 p-8 mb-12 transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent kannada-heading">
                {t('spiritOfKagga')}
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-800 space-y-6">
              <p>
                {t('spiritOfKaggaDesc')}
              </p>
              <div className="bg-gradient-to-r from-yellow-50 to-red-50 rounded-xl p-6 border-l-4 border-yellow-400 shadow-md animate-fade-in-up">
                <p className="kagga-text text-xl text-center mb-2 text-gray-900 font-bold">
                  ಹುಲ್ಲಾಗು ಬೆಟ್ಟದಡಿ, ಮನೆಗೆ ಮಲ್ಲಿಗೆಯಾಗು<br/>
                  ಕಲ್ಲಾಗು ಕಷ್ಟಗಳ ಮಳೆಯ ವಿಧಿ ಸುರಿಯೆ<br/>
                  ಬೆಲ್ಲ ಸಕ್ಕರೆಯಾಗು ದೀನ ದುರ್ಬಲರಿಂಗೆ<br/>
                  ಎಲ್ಲರೊಳಗೊಂದಾಗು ಮಂಕುತಿಮ್ಮ
                </p>
                <p className="text-center italic text-gray-700 mb-2">
                  {t('verseTranslation')}
                </p>
                <p className="text-center text-gray-600">
                  <span className="font-medium">{t('verseExplanation')}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Significance */}
          <div className="backdrop-blur-md bg-white/80 rounded-2xl shadow-xl border border-white/20 p-8 mb-12 transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Quote className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent kannada-heading">
                {t('significance')}
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-800 space-y-6">
              <p>
                <span className="font-semibold">{t('title')}</span> {t('significanceDesc')}
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="backdrop-blur-md bg-white/80 rounded-2xl shadow-xl border border-white/20 p-8 text-center transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent kannada-heading">
              {t('startYourJourney')}
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              {t('startYourJourneyDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="kaggas"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-500 to-yellow-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 group"
              >
                <BookOpen className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-200" />
                {t('exploreAllKaggas')}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="search"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 border-2 border-gray-200 group"
              >
                {t('searchByTheme')}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 