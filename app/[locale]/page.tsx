'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import KaggaCard from '@/components/KaggaCard';
import { kaggas } from '@/data/kaggas';
import { BookOpen, Video, Search, Heart, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Kagga } from '@/types/kagga';

export default function HomePage() {
  const t = useTranslations();
  const commonT = useTranslations('common');
  const homeT = useTranslations('home');

  // Get featured Kaggas (first 6)
  const featuredKaggas = kaggas.slice(0, 6);

  const features = [
    {
      icon: BookOpen,
      title: homeT('features.kaggasTitle'),
      description: homeT('features.kaggasDesc'),
    },
    {
      icon: Video,
      title: homeT('features.videosTitle'),
      description: homeT('features.videosDesc'),
    },
    {
      icon: Search,
      title: homeT('features.searchTitle'),
      description: homeT('features.searchDesc'),
    },
    {
      icon: Heart,
      title: homeT('features.favoritesTitle'),
      description: homeT('features.favoritesDesc'),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-karnataka-50 via-white to-primary-50">
      <Header />
      
      <main>
        <Hero />

        {/* Features Section */}
        <section className="py-16 bg-white/80 backdrop-blur-sm relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-karnataka-pattern"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-primary-500 to-karnataka-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4 mr-2" />
                Discover
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-earth-900 mb-4">
                {homeT('discoverTitle')}
              </h2>
              <p className="text-xl text-earth-600 max-w-3xl mx-auto leading-relaxed">
                {homeT('discoverSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="card text-center group hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-karnataka-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary-200 group-hover:to-karnataka-200 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-primary-600 group-hover:text-primary-700 transition-colors duration-300" />
                    </div>
                  <h3 className="text-xl font-semibold text-earth-900 mb-2">
                      {feature.title}
                    </h3>
                  <p className="text-earth-600 leading-relaxed">
                      {feature.description}
                    </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Kaggas Section */}
        <section className="py-16 bg-gradient-to-br from-karnataka-50 to-primary-50 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-karnataka-pattern"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-karnataka-500 to-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                <BookOpen className="w-4 h-4 mr-2" />
                Featured
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-earth-900 mb-4">
                {homeT('featuredKaggas')}
              </h2>
              <p className="text-xl text-earth-600 max-w-3xl mx-auto leading-relaxed">
                {homeT('featuredSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {featuredKaggas.map((kagga: Kagga, index: number) => (
                <div
                  key={kagga.id}
                  className="group"
                  >
                  <KaggaCard kagga={kagga} />
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="kaggas"
                className="btn-primary inline-flex items-center group glow-effect"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                {homeT('viewAllKaggas')}
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 