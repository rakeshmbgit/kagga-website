'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { kaggas } from '@/data/kaggas';
import { Search, Filter, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { Kagga } from '@/types/kagga';

const ITEMS_PER_PAGE = 20;

export default function KaggasPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('');
  const [filteredKaggas, setFilteredKaggas] = useState<Kagga[]>(kaggas);
  
  const t = useTranslations('common');
  const navT = useTranslations('navigation');
  const locale = useLocale();

  // Get unique themes
  const themes = Array.from(new Set(kaggas.flatMap((kagga: any) => kagga.themes))).sort();

  // Filter Kaggas based on search and theme
  useEffect(() => {
    let filtered = kaggas;

    if (searchQuery) {
      filtered = filtered.filter((kagga: Kagga) =>
        kagga.id.toString().includes(searchQuery) ||
        kagga.kannadaText.toLowerCase().includes(searchQuery.toLowerCase()) ||
        kagga.transliteration.toLowerCase().includes(searchQuery.toLowerCase()) ||
        kagga.englishTranslation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        kagga.themes.some((theme: string) => theme.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (selectedTheme) {
      filtered = filtered.filter((kagga: Kagga) => kagga.themes.includes(selectedTheme));
    }

    setFilteredKaggas(filtered);
    setCurrentPage(1);
  }, [searchQuery, selectedTheme]);

  const totalPages = Math.ceil(filteredKaggas.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentKaggas = filteredKaggas.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-earth-50">
      <Header />
      
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-earth-900 mb-2">
              {navT('allKaggas')}
            </h1>
            <p className="text-earth-600">
              {t('showing')} {filteredKaggas.length} {t('kaggas')} {t('of')} 945
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
                  placeholder={t('search')}
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
                  <option value="">{t('allThemes')}</option>
                    {themes.map((theme) => (
                      <option key={theme} value={theme}>
                        {theme}
                      </option>
                    ))}
                  </select>
                </div>
            </div>
          </div>

          {/* Kaggas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {currentKaggas.map((kagga: Kagga) => (
              <Link
                key={kagga.id}
                href={`/${locale}/kaggas/${kagga.id}`}
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
                    {kagga.themes.slice(0, 2).map((theme: string, index: number) => (
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

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-2 border border-earth-200 rounded-lg hover:bg-earth-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <span className="text-sm text-earth-600">
                {currentPage} {t('of')} {totalPages}
              </span>
              
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-2 border border-earth-200 rounded-lg hover:bg-earth-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 