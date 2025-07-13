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
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-yellow-500/10 rounded-3xl blur-3xl"></div>
            <div className="relative">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
                <Crown className="w-4 h-4" />
                <span>ಕನ್ನಡ ಸಾಹಿತ್ಯದ ರತ್ನ</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent mb-6 animate-fade-in">
                {t('title')}
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                {t('subtitle')}
              </p>
            </div>
          </div>

          {/* Hero Section */}
          <div className="backdrop-blur-md bg-white/80 rounded-2xl shadow-xl border border-white/20 p-8 mb-12 transform hover:scale-[1.02] transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Portrait Placeholder */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-red-100 to-yellow-100 rounded-2xl aspect-square flex items-center justify-center border-2 border-white/20 shadow-lg">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <BookOpen className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-gray-600 text-sm font-medium">
                      {t('portrait')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Information */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent mb-8">
                  D.V. Gundappa (1887-1975)
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl border border-white/20">
                    <Calendar className="w-6 h-6 text-red-500" />
                    <div>
                      <p className="text-sm text-gray-600 font-medium">{t('born')}</p>
                      <p className="font-bold text-gray-900">{dvgInfo.birthDate}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-red-50 rounded-xl border border-white/20">
                    <MapPin className="w-6 h-6 text-yellow-500" />
                    <div>
                      <p className="text-sm text-gray-600 font-medium">{t('birthplace')}</p>
                      <p className="font-bold text-gray-900">{dvgInfo.birthplace}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl border border-white/20">
                    <Award className="w-6 h-6 text-red-500" />
                    <div>
                      <p className="text-sm text-gray-600 font-medium">{t('notableAward')}</p>
                      <p className="font-bold text-gray-900">Padma Bhushan (1974)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-red-50 rounded-xl border border-white/20">
                    <BookOpen className="w-6 h-6 text-yellow-500" />
                    <div>
                      <p className="text-sm text-gray-600 font-medium">{t('masterpiece')}</p>
                      <p className="font-bold text-gray-900">Mankuthimmana Kagga</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed text-lg">
                  D.V. Gundappa, popularly known as DVG, was one of the most prominent Kannada writers, 
                  philosophers, and journalists of the 20th century. His works continue to inspire and 
                  guide people even today, bridging ancient Indian wisdom with modern life.
                </p>
              </div>
            </div>
          </div>

          {/* Biography */}
          <div className="backdrop-blur-md bg-white/80 rounded-2xl shadow-xl border border-white/20 p-8 mb-12 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                {t('biographyTitle')}
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                {t('biography')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl border border-white/20">
                  <Calendar className="w-6 h-6 text-red-500" />
                  <div>
                    <p className="text-sm text-gray-600 font-medium">{t('born')}</p>
                    <p className="font-bold text-gray-900">1887</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-red-50 rounded-xl border border-white/20">
                  <Calendar className="w-6 h-6 text-yellow-500" />
                  <div>
                    <p className="text-sm text-gray-600 font-medium">{t('died')}</p>
                    <p className="font-bold text-gray-900">1975</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl border border-white/20">
                  <MapPin className="w-6 h-6 text-red-500" />
                  <div>
                    <p className="text-sm text-gray-600 font-medium">{t('place')}</p>
                    <p className="font-bold text-gray-900">Karnataka, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Notable Works */}
          <div className="backdrop-blur-md bg-white/80 rounded-2xl shadow-xl border border-white/20 p-8 mb-12 transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
              {t('notableWorks')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dvgInfo.notableWorks.map((work, index) => (
                <div key={index} className="flex items-center space-x-4 p-6 bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl border border-white/20 hover:scale-105 transition-transform duration-200 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-bold text-gray-900">{work}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Awards and Recognition */}
          <div className="backdrop-blur-md bg-white/80 rounded-2xl shadow-xl border border-white/20 p-8 mb-12 transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
              {t('awardsAndRecognition')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dvgInfo.awards.map((award, index) => (
                <div key={index} className="flex items-center space-x-4 p-6 bg-gradient-to-r from-yellow-50 to-red-50 rounded-xl border border-white/20 hover:scale-105 transition-transform duration-200 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-bold text-gray-900">{award}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Legacy */}
          <div className="backdrop-blur-md bg-white/80 rounded-2xl shadow-xl border border-white/20 p-8 mb-12 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                {t('legacyTitle')}
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                {t('legacy')}
              </p>
            </div>
          </div>

          {/* Quote Section */}
          <div className="bg-gradient-to-r from-red-500/10 to-yellow-500/10 backdrop-blur-md rounded-2xl p-8 mb-12 border border-white/20 text-center">
            <Quote className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-serif text-gray-800 mb-6 italic leading-relaxed">
              "ಮಂಕುತಿಮ್ಮನ ಕಗ್ಗದಲ್ಲಿ ಜೀವನದ ಎಲ್ಲಾ ಸತ್ಯಗಳಿವೆ"
            </blockquote>
            <p className="text-gray-600 text-lg font-medium">
              "All truths of life are contained in Mankuthimmana Kagga"
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