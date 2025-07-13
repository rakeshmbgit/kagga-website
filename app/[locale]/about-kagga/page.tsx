'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { kaggaInfo } from '@/data/dvg-info';
import { BookOpen, Quote, Star, Users, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutKaggaPage() {
  const t = useTranslations('about.kagga');
  const navT = useTranslations('navigation');

  return (
    <div className="min-h-screen bg-earth-50">
      <Header />
      
      <main className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-earth-900 mb-4">
              {t('title')}
            </h1>
            <p className="text-xl text-earth-600">
              {t('subtitle')}
            </p>
          </div>

          {/* Description */}
          <div className="bg-white rounded-xl shadow-sm border border-earth-200 p-8 mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-earth-900">
                About the Work
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-earth-700 leading-relaxed mb-6">
                {t('description')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="w-6 h-6 text-primary-600" />
                  </div>
                  <p className="text-2xl font-bold text-earth-900">945</p>
                  <p className="text-sm text-earth-600">Verses</p>
                </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-wisdom-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Star className="w-6 h-6 text-wisdom-600" />
                  </div>
                  <p className="text-2xl font-bold text-earth-900">50+</p>
                  <p className="text-sm text-earth-600">Themes</p>
                </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-earth-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-earth-600" />
                  </div>
                  <p className="text-2xl font-bold text-earth-900">Millions</p>
                  <p className="text-sm text-earth-600">Readers</p>
                </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-6 h-6 text-primary-600" />
                  </div>
                  <p className="text-2xl font-bold text-earth-900">1943</p>
                  <p className="text-sm text-earth-600">Published</p>
                </div>
              </div>
            </div>
          </div>

          {/* Structure */}
          <div className="bg-white rounded-xl shadow-sm border border-earth-200 p-8 mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-wisdom-100 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-wisdom-600" />
              </div>
              <h2 className="text-2xl font-bold text-earth-900">
                Structure & Themes
            </h2>
          </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-earth-700 leading-relaxed">
                {t('structure')}
                </p>
            </div>
          </div>

          {/* Sample Verses */}
          <div className="bg-gradient-to-r from-primary-50 to-wisdom-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-earth-900 mb-6 text-center">
              Sample Verses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="kagga-text text-lg text-center mb-3">
                  "ಜಲದ ಬುಗ್ಗೆ ಜಲವೇ ಸುರಿಯುತ್ತದೆ, ಮನದ ಬುಗ್ಗೆ ಮನವೇ ಸುರಿಯುತ್ತದೆ"
                </p>
                <p className="text-sm text-earth-600 text-center">
                  "From a water spring flows water, from a mind spring flows mind"
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="kagga-text text-lg text-center mb-3">
                  "ಕಾಲವೇ ಗುರು, ಕಾಲವೇ ಶಿಷ್ಯ, ಕಾಲವೇ ಜ್ಞಾನ, ಕಾಲವೇ ವಿದ್ಯೆ"
                </p>
                <p className="text-sm text-earth-600 text-center">
                  "Time is the teacher, time is the student, time is knowledge, time is learning"
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-white rounded-xl shadow-sm border border-earth-200 p-8 text-center">
            <h2 className="text-2xl font-bold text-earth-900 mb-4">
              Start Your Journey
            </h2>
            <p className="text-earth-600 mb-6 max-w-2xl mx-auto">
              Begin exploring the wisdom of Mankuthimmana Kagga. Each verse offers 
              profound insights that can guide you through life's challenges and joys.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="kaggas"
                className="btn-primary inline-flex items-center justify-center"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Explore All Kaggas
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="search"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Search by Theme
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 