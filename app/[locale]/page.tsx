'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import KaggaCard from '@/components/KaggaCard';
import { allKaggas } from '@/data/kaggas';
import { BookOpen, Video, Search, Heart } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const t = useTranslations();
  const commonT = useTranslations('common');

  // Get featured Kaggas (first 6)
  const featuredKaggas = allKaggas.slice(0, 6);

  const features = [
    {
      icon: BookOpen,
      title: '945 Kaggas',
      description: 'Complete collection of Mankuthimmana Kagga with translations and meanings',
    },
    {
      icon: Video,
      title: 'Video Explanations',
      description: 'Visual insights and detailed explanations by scholars and experts',
    },
    {
      icon: Search,
      title: 'Advanced Search',
      description: 'Find specific Kaggas by theme, content, or keywords',
    },
    {
      icon: Heart,
      title: 'Personal Favorites',
      description: 'Save and organize your favorite Kaggas for easy access',
    },
  ];

  return (
    <div className="min-h-screen bg-earth-50">
      <Header />
      
      <main>
        <Hero />

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-earth-900 mb-4">
                Discover the Complete Kagga Experience
              </h2>
              <p className="text-xl text-earth-600 max-w-3xl mx-auto">
                Explore the profound wisdom of D.V. Gundappa through our comprehensive digital platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary-600" />
                    </div>
                  <h3 className="text-xl font-semibold text-earth-900 mb-2">
                      {feature.title}
                    </h3>
                  <p className="text-earth-600">
                      {feature.description}
                    </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Kaggas Section */}
        <section className="py-16 bg-earth-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-earth-900 mb-4">
                Featured Kaggas
              </h2>
              <p className="text-xl text-earth-600 max-w-3xl mx-auto">
                Start your journey with these timeless verses of wisdom
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {featuredKaggas.map((kagga, index) => (
                <div
                  key={kagga.id}
                  >
                  <KaggaCard kagga={kagga} />
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="kaggas"
                className="btn-primary inline-flex items-center group"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                View All Kaggas
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