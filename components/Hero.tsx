'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, BookOpen, Play, Search, Sparkles } from 'lucide-react';

const Hero = () => {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative bg-karnataka-gradient-soft overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-karnataka-pattern"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-bounce-gentle"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-karnataka-300 rounded-full opacity-30 animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary-300 rounded-full opacity-25 animate-bounce-gentle" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-gradient-to-r from-primary-500 to-karnataka-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              Karnataka's Pride
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-earth-900 mb-8 leading-tight">
              {t('title')}
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-600 font-semibold mb-6">
              {t('subtitle')}
            </p>
            
            <p className="text-lg text-earth-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t('description')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href={`/${locale}/kaggas`}
                className="btn-primary inline-flex items-center group glow-effect"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                {t('exploreButton')}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link
                href={`/${locale}/videos`}
                className="btn-secondary inline-flex items-center"
              >
                <Play className="w-4 h-4 mr-2" />
                {t('watchVideosButton')}
              </Link>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="hero-card">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-karnataka-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-earth-900 mb-4">
                  {t('kaggasCount')}
                </h3>
                <p className="text-earth-600 mb-6 leading-relaxed">
                  {t('description')}
                </p>
                <Link
                  href={`/${locale}/kaggas`}
                  className="btn-primary inline-flex items-center"
                >
                  <Search className="w-4 h-4 mr-2" />
                  {t('searchButton')}
                </Link>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-400 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-karnataka-400 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 