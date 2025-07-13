'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { allKaggas } from '@/data/kaggas';
import { Search, Filter, BookOpen, Play, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('');
  const [filteredKaggas, setFilteredKaggas] = useState(allKaggas);
  
  const t = useTranslations('search');
  const commonT = useTranslations('common');

  // Get unique themes
  const themes = Array.from(new Set(allKaggas.flatMap(kagga => kagga.themes))).sort();

  // Filter Kaggas based on search and theme
  useEffect(() => {
    let filtered = allKaggas;

    if (searchQuery) {
      filtered = filtered.filter(kagga =>
        kagga.id.toString().includes(searchQuery) ||
        kagga.kannadaText.toLowerCase().includes(searchQuery.toLowerCase()) ||
        kagga.transliteration.toLowerCase().includes(searchQuery.toLowerCase()) ||
        kagga.englishTranslation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        kagga.themes.some(theme => theme.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (selectedTheme) {
      filtered = filtered.filter(kagga => kagga.themes.includes(selectedTheme));
    }

    setFilteredKaggas(filtered);
  }, [searchQuery, selectedTheme]);

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
              {t('subtitle')}
            </p>
          </div>

          {/* Search and Filter */}
          <div className="bg-white rounded-xl shadow-sm border border-earth-200 p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Search */}
              <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-earth-400 w-5 h-5" />
              <input
                type="text"
                  placeholder={t('placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-earth-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

              {/* Theme Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-earth-400 w-5 h-5" />
                <select
                  value={selectedTheme}
                  onChange={(e) => setSelectedTheme(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-earth-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white"
                >
                  <option value="">{t('filterByTheme')}</option>
                      {themes.map((theme) => (
                    <option key={theme} value={theme}>
                      {theme}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-earth-900 mb-4">
              {t('results')} ({filteredKaggas.length})
            </h2>
            
            {filteredKaggas.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-earth-400 mx-auto mb-4" />
                <p className="text-earth-600 text-lg">
                  {t('noResults')}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredKaggas.map((kagga) => (
                  <Link
                    key={kagga.id}
                    href={`kaggas/${kagga.id}`}
                    className="bg-white rounded-xl shadow-sm border border-earth-200 p-6 hover:shadow-md transition-shadow duration-200 group"
                  >
                <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-primary-600" />
                    </div>
                      <span className="text-sm font-medium text-earth-600">
                        #{kagga.id}
                      </span>
                </div>
                
                <div className="mb-4">
                      <p className="kagga-text text-lg leading-relaxed text-center mb-3">
                    {kagga.kannadaText}
                  </p>
                      <p className="translation text-sm text-earth-600 text-center">
                    "{kagga.englishTranslation}"
                  </p>
                </div>

                    {kagga.themes && kagga.themes.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                        {kagga.themes.slice(0, 2).map((theme, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 bg-earth-100 text-earth-700 rounded-full text-xs"
                        >
                          {theme}
                        </span>
                      ))}
                        {kagga.themes.length > 2 && (
                          <span className="px-2 py-1 bg-earth-100 text-earth-700 rounded-full text-xs">
                            +{kagga.themes.length - 2}
                        </span>
                      )}
                  </div>
                )}
                  </Link>
                ))}
            </div>
          )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 