'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { dvgInfo } from '@/data/dvg-info';
import { BookOpen, Calendar, MapPin, Award, Quote, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function AboutDVGPage() {
  const t = useTranslations('about.dvg');
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

          {/* Hero Section */}
          <div className="bg-white rounded-xl shadow-sm border border-earth-200 p-8 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Portrait Placeholder */}
              <div className="lg:col-span-1">
                <div className="bg-earth-100 rounded-lg aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-12 h-12 text-primary-600" />
                    </div>
                    <p className="text-earth-600 text-sm">
                      Portrait of D.V. Gundappa
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Information */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-earth-900 mb-6">
                  D.V. Gundappa (1887-1975)
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-primary-600" />
                    <div>
                      <p className="text-sm text-earth-600">Born</p>
                      <p className="font-medium">{dvgInfo.birthDate}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary-600" />
                    <div>
                      <p className="text-sm text-earth-600">Birthplace</p>
                      <p className="font-medium">{dvgInfo.birthplace}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-primary-600" />
                    <div>
                      <p className="text-sm text-earth-600">Notable Award</p>
                      <p className="font-medium">Padma Bhushan (1974)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-5 h-5 text-primary-600" />
                    <div>
                      <p className="text-sm text-earth-600">Masterpiece</p>
                      <p className="font-medium">Mankuthimmana Kagga</p>
                    </div>
                  </div>
                </div>

                <p className="text-earth-700 leading-relaxed">
                  D.V. Gundappa, popularly known as DVG, was one of the most prominent Kannada writers, 
                  philosophers, and journalists of the 20th century. His works continue to inspire and 
                  guide people even today, bridging ancient Indian wisdom with modern life.
                </p>
              </div>
            </div>
          </div>

          {/* Biography */}
          <div className="bg-white rounded-xl shadow-sm border border-earth-200 p-8 mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-earth-900">
              Biography
            </h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-earth-700 leading-relaxed mb-6">
                {t('biography')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-primary-600" />
                  <div>
                    <p className="text-sm text-earth-600">Born</p>
                    <p className="font-medium text-earth-900">1887</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-primary-600" />
                  <div>
                    <p className="text-sm text-earth-600">Died</p>
                    <p className="font-medium text-earth-900">1975</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary-600" />
                  <div>
                    <p className="text-sm text-earth-600">Place</p>
                    <p className="font-medium text-earth-900">Karnataka, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Notable Works */}
          <div className="bg-white rounded-xl shadow-sm border border-earth-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-earth-900 mb-6">
              Notable Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dvgInfo.notableWorks.map((work, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 border border-earth-200 rounded-lg hover:shadow-md transition-shadow duration-200">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-primary-600" />
                  </div>
                  <span className="font-medium text-earth-900">{work}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Awards and Recognition */}
          <div className="bg-white rounded-xl shadow-sm border border-earth-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-earth-900 mb-6">
              Awards and Recognition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dvgInfo.awards.map((award, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 border border-earth-200 rounded-lg">
                  <div className="w-8 h-8 bg-wisdom-100 rounded-lg flex items-center justify-center">
                    <Award className="w-4 h-4 text-wisdom-600" />
                  </div>
                  <span className="font-medium text-earth-900">{award}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Legacy */}
          <div className="bg-white rounded-xl shadow-sm border border-earth-200 p-8 mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-wisdom-100 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-wisdom-600" />
              </div>
              <h2 className="text-2xl font-bold text-earth-900">
              Legacy
            </h2>
          </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-earth-700 leading-relaxed">
                {t('legacy')}
              </p>
            </div>
          </div>

          {/* Quote Section */}
          <div className="bg-gradient-to-r from-primary-50 to-wisdom-50 rounded-xl p-8 text-center">
            <Quote className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <blockquote className="text-xl md:text-2xl font-serif text-earth-800 mb-4 italic">
              "ಮಂಕುತಿಮ್ಮನ ಕಗ್ಗದಲ್ಲಿ ಜೀವನದ ಎಲ್ಲಾ ಸತ್ಯಗಳಿವೆ"
            </blockquote>
            <p className="text-earth-600">
              "All truths of life are contained in Mankuthimmana Kagga"
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-xl shadow-sm border border-earth-200 p-8 text-center">
            <h2 className="text-2xl font-bold text-earth-900 mb-4">
              Explore DVG's Wisdom
            </h2>
            <p className="text-earth-600 mb-6 max-w-2xl mx-auto">
              Discover the profound wisdom of D.V. Gundappa through his masterpiece, Mankuthimmana Kagga. 
              Each of the 945 verses contains timeless insights that are as relevant today as they were when written.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="kaggas"
                className="btn-primary inline-flex items-center justify-center"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Read All Kaggas
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="about-kagga"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Learn About Mankuthimmana Kagga
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 