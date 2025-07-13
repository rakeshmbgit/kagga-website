'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Play, Video, Clock, Users, BookOpen, ArrowRight, Sparkles, Camera } from 'lucide-react';
import Link from 'next/link';

export default function VideosPage() {
  const t = useTranslations('videos');
  const navT = useTranslations('navigation');

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-red-100">
      <Header />
      
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Header */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-yellow-500/10 rounded-3xl blur-3xl"></div>
            <div className="relative">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
                <Camera className="w-4 h-4" />
                <span>ವಿಡಿಯೋ ಶಿಕ್ಷಣ</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent mb-6 animate-fade-in">
                {t('title')}
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                {t('description')}
              </p>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="backdrop-blur-md bg-white/80 rounded-2xl shadow-xl border border-white/20 p-12 text-center transform hover:scale-[1.02] transition-all duration-300">
            <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Video className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
              {t('comingSoon')}
            </h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              {t('comingSoonDesc')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-gray-600 font-medium mb-2">{t('expertExplanations')}</p>
                <p className="font-bold text-gray-900">Coming Soon</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-gray-600 font-medium mb-2">{t('detailedAnalysis')}</p>
                <p className="font-bold text-gray-900">Coming Soon</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-gray-600 font-medium mb-2">{t('interactiveLearning')}</p>
                <p className="font-bold text-gray-900">Coming Soon</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="kaggas"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-500 to-yellow-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 group"
              >
                <BookOpen className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-200" />
                {t('readKaggasNow')}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="search"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 border-2 border-gray-200 group"
              >
                {t('searchKaggas')}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>

          {/* What to Expect */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
              {t('whatToExpect')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="backdrop-blur-md bg-white/80 rounded-2xl shadow-lg border border-white/20 p-8 hover:scale-105 transition-transform duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t('expertCommentary')}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {t('expertCommentaryDesc')}
                </p>
              </div>
              
              <div className="backdrop-blur-md bg-white/80 rounded-2xl shadow-lg border border-white/20 p-8 hover:scale-105 transition-transform duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t('contextBackground')}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {t('contextBackgroundDesc')}
                </p>
              </div>
              
              <div className="backdrop-blur-md bg-white/80 rounded-2xl shadow-lg border border-white/20 p-8 hover:scale-105 transition-transform duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t('modernRelevance')}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {t('modernRelevanceDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 