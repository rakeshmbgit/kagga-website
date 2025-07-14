'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { dvgInfo } from '@/data/dvg-info';
import { BookOpen, Calendar, MapPin, Award, Quote, ArrowRight, ExternalLink, Sparkles, Crown } from 'lucide-react';
import Link from 'next/link';

export default function AboutDVGPage() {
  const t = useTranslations('about.dvg');
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
                <Crown className="w-4 h-4" />
                <span>ಕನ್ನಡ ಸಾಹಿತ್ಯದ ರತ್ನ</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent mb-6 animate-fade-in kannada-heading py-2">
                <span className="block">{t('fullName')}</span>
                <span className="block text-xl md:text-2xl lg:text-3xl mt-2 text-gray-600">{t('shortName')}</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                {t('philosopherPoetDesc')}
              </p>
            </div>
          </div>

          {/* Hero Section */}
          <div className="backdrop-blur-md bg-white/80 rounded-2xl shadow-xl border border-white/20 p-8 mb-12 transform hover:scale-[1.02] transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Portrait */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-red-100 to-yellow-100 rounded-2xl aspect-square flex items-center justify-center border-2 border-white/20 shadow-lg overflow-hidden">
                  <img
                    src="/dvg.jpg"
                    alt="Portrait of D.V. Gundappa"
                    className="object-cover w-full h-full rounded-2xl"
                  />
                </div>
              </div>
              {/* Key Information */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent mb-8">
                  1887 – 1975
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl border border-white/20">
                    <Calendar className="w-6 h-6 text-red-500" />
                    <div>
                      <p className="text-sm text-gray-600 font-medium">{t('born')}</p>
                      <p className="font-bold text-gray-900">{t('bornDate')}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-red-50 rounded-xl border border-white/20">
                    <MapPin className="w-6 h-6 text-yellow-500" />
                    <div>
                      <p className="text-sm text-gray-600 font-medium">{t('birthplace')}</p>
                      <p className="font-bold text-gray-900">{t('birthplaceName')}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl border border-white/20">
                    <Award className="w-6 h-6 text-red-500" />
                    <div>
                      <p className="text-sm text-gray-600 font-medium">{t('awardsList')}</p>
                      <p className="font-bold text-gray-900">{t('awardsList')}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-red-50 rounded-xl border border-white/20">
                    <BookOpen className="w-6 h-6 text-yellow-500" />
                    <div>
                      <p className="text-sm text-gray-600 font-medium">{t('masterpiece')}</p>
                      <p className="font-bold text-gray-900">{t('masterpieceName')}</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t('legacyDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Early Life & Education */}
          <div className="backdrop-blur-md bg-white/80 rounded-2xl shadow-xl border border-white/20 p-8 mb-12 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent kannada-heading">
                {t('earlyLife')}
              </h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                {t('earlyLifeDesc')}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t('earlyLifeDesc2')}
              </p>
            </div>
          </div>

          {/* Literary Career & Journalism */}
          <div className="backdrop-blur-md bg-white/80 rounded-2xl shadow-xl border border-white/20 p-8 mb-12 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent kannada-heading">
                {t('literaryCareer')}
              </h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                {t('literaryCareerDesc')}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t('literaryCareerDesc2')}
              </p>
            </div>
          </div>

          {/* Major Works */}
          <div className="backdrop-blur-md bg-white/80 rounded-2xl shadow-xl border border-white/20 p-8 mb-12 transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent kannada-heading">
              {t('majorWorks')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl border border-white/20">
                  <BookOpen className="w-6 h-6 text-red-500" />
                  <div>
                    <span className="font-bold text-gray-900">{t('mankuthimmanaKaggaTitle')}</span>
                    <p className="text-gray-700 text-sm">{t('mankuthimmanaKaggaDesc')}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-red-50 rounded-xl border border-white/20">
                  <BookOpen className="w-6 h-6 text-yellow-500" />
                  <div>
                    <span className="font-bold text-gray-900">{t('marulaMuniyanaKaggaTitle')}</span>
                    <p className="text-gray-700 text-sm">{t('marulaMuniyanaKaggaDesc')}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl border border-white/20">
                  <BookOpen className="w-6 h-6 text-red-500" />
                  <div>
                    <span className="font-bold text-gray-900">{t('jnapakachitrashaaleTitle')}</span>
                    <p className="text-gray-700 text-sm">{t('jnapakachitrashaaleDesc')}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-red-50 rounded-xl border border-white/20">
                  <BookOpen className="w-6 h-6 text-yellow-500" />
                  <div>
                    <span className="font-bold text-gray-900">{t('bhagavadGeetaTitle')}</span>
                    <p className="text-gray-700 text-sm">{t('bhagavadGeetaDesc')}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl border border-white/20">
                  <BookOpen className="w-6 h-6 text-red-500" />
                  <div>
                    <span className="font-bold text-gray-900">{t('antahpuraTitle')}</span>
                    <p className="text-gray-700 text-sm">{t('antahpuraDesc')}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-red-50 rounded-xl border border-white/20">
                  <BookOpen className="w-6 h-6 text-yellow-500" />
                  <div>
                    <span className="font-bold text-gray-900">{t('purusharthaTitle')}</span>
                    <p className="text-gray-700 text-sm">{t('purusharthaDesc')}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl border border-white/20">
                  <BookOpen className="w-6 h-6 text-red-500" />
                  <div>
                    <span className="font-bold text-gray-900">{t('vasanthaKusumanjaliTitle')}</span>
                    <p className="text-gray-700 text-sm">{t('vasanthaKusumanjaliDesc')}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-red-50 rounded-xl border border-white/20">
                  <BookOpen className="w-6 h-6 text-yellow-500" />
                  <div>
                    <span className="font-bold text-gray-900">{t('biographiesTitle')}</span>
                    <p className="text-gray-700 text-sm">{t('biographiesDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy & Legacy */}
          <div className="backdrop-blur-md bg-white/80 rounded-2xl shadow-xl border border-white/20 p-8 mb-12 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent kannada-heading">
                {t('philosophyLegacy')}
              </h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                {t('philosophyLegacyDesc')}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t('philosophyLegacyDesc2')}
              </p>
            </div>
          </div>

          {/* Quote Section */}
          <div className="bg-gradient-to-r from-red-500/10 to-yellow-500/10 backdrop-blur-md rounded-2xl p-8 mb-12 border border-white/20 text-center">
            <Quote className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-serif text-gray-800 mb-6 italic leading-relaxed">
              "{t('quoteText')}"
            </blockquote>
            <p className="text-gray-600 text-lg font-medium">
              {t('quoteTranslation')}
            </p>
          </div>

          {/* CTA Section */}
          <div className="backdrop-blur-md bg-white/80 rounded-2xl shadow-xl border border-white/20 p-8 text-center transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
              {t('exploreWisdom')}
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              {t('exploreWisdomDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="kaggas"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-500 to-yellow-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 group"
              >
                <BookOpen className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-200" />
                {t('readAllKaggas')}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="about-kagga"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 border-2 border-gray-200 group"
              >
                {t('learnAboutKagga')}
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 