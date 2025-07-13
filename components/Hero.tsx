'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, BookOpen, Play, Search } from 'lucide-react';

const Hero = () => {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-wisdom-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-dots-pattern"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-earth-900 mb-6">
              {t('title')}
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-600 font-semibold mb-4">
              {t('subtitle')}
            </p>
            
            <p className="text-lg text-earth-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              {t('description')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href={`/${locale}/kaggas`}
                className="btn-primary inline-flex items-center group"
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
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-earth-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-earth-900 mb-4">
                  945 Kaggas
                </h3>
                <p className="text-earth-600 mb-6">
                  {t('description')}
                </p>
                <Link
                  href={`/${locale}/search`}
                  className="btn-primary inline-flex items-center"
                >
                  <Search className="w-4 h-4 mr-2" />
                  {t('searchButton')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 