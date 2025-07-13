'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Play, Video, Clock, Users, BookOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function VideosPage() {
  const t = useTranslations('videos');
  const navT = useTranslations('navigation');

  return (
    <div className="min-h-screen bg-earth-50">
      <Header />
      
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-earth-900 mb-4">
              {t('title')}
            </h1>
            <p className="text-xl text-earth-600 max-w-3xl mx-auto">
              {t('description')}
            </p>
          </div>

          {/* Coming Soon */}
          <div className="bg-white rounded-xl shadow-sm border border-earth-200 p-12 text-center">
            <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Video className="w-12 h-12 text-primary-600" />
            </div>
            <h2 className="text-2xl font-bold text-earth-900 mb-4">
              {t('comingSoon')}
            </h2>
            <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
              We're working hard to bring you comprehensive video explanations of Mankuthimmana Kagga. 
              These videos will feature expert scholars and teachers explaining the profound wisdom 
              contained in each verse.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Play className="w-6 h-6 text-primary-600" />
                </div>
                <p className="text-sm text-earth-600">Expert Explanations</p>
                <p className="font-semibold text-earth-900">Coming Soon</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-wisdom-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-wisdom-600" />
                </div>
                <p className="text-sm text-earth-600">Detailed Analysis</p>
                <p className="font-semibold text-earth-900">Coming Soon</p>
              </div>
                  <div className="text-center">
                <div className="w-12 h-12 bg-earth-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-earth-600" />
                </div>
                <p className="text-sm text-earth-600">Interactive Learning</p>
                <p className="font-semibold text-earth-900">Coming Soon</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="kaggas"
                className="btn-primary inline-flex items-center justify-center"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Read Kaggas Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="search"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Search Kaggas
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* What to Expect */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-earth-900 mb-6 text-center">
              What to Expect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-earth-200 p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Play className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-earth-900 mb-2">
                  Expert Commentary
                </h3>
                <p className="text-earth-600 text-sm">
                  Detailed explanations by renowned scholars and teachers of Kannada literature and philosophy.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-earth-200 p-6">
                <div className="w-12 h-12 bg-wisdom-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-wisdom-600" />
                </div>
                <h3 className="text-lg font-semibold text-earth-900 mb-2">
                  Context & Background
                </h3>
                <p className="text-earth-600 text-sm">
                  Historical and cultural context to help understand the deeper meaning of each verse.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-earth-200 p-6">
                <div className="w-12 h-12 bg-earth-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-earth-600" />
                </div>
                <h3 className="text-lg font-semibold text-earth-900 mb-2">
                  Modern Relevance
                </h3>
                <p className="text-earth-600 text-sm">
                  How the ancient wisdom applies to contemporary life and modern challenges.
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