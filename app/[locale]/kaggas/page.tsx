'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import KaggaCard from '@/components/KaggaCard';
import { kaggas } from '@/data/kaggas';
import { Search, Filter, ChevronLeft, ChevronRight, BookOpen, Sparkles } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-red-100">
      <Header />
      
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Header */}
          <div className="text-center mb-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-yellow-500/10 rounded-3xl blur-3xl"></div>
            <div className="relative py-12">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-8 animate-pulse">
                <Sparkles className="w-4 h-4" />
                <span>ಕರ್ನಾಟಕದ ಸಂಸ್ಕೃತಿ</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent mb-6 animate-fade-in kannada-heading py-2">
                {navT('allKaggas')}
              </h1>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                {t('showing')} <span className="font-bold text-red-600">{filteredKaggas.length}</span> {t('kaggas')} {t('of')} <span className="font-bold text-yellow-600">945</span>
              </p>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="backdrop-blur-md bg-white/80 rounded-2xl shadow-xl border border-white/20 p-8 mb-12 transform hover:scale-[1.02] transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Search */}
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-red-500 transition-colors duration-200" />
                <input
                  type="text"
                  placeholder={t('search')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                />
              </div>

              {/* Theme Filter */}
              <div className="relative group">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-yellow-500 transition-colors duration-200" />
                <select
                  value={selectedTheme}
                  onChange={(e) => setSelectedTheme(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200 bg-white/50 backdrop-blur-sm appearance-none"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
            {currentKaggas.map((kagga: Kagga, index: number) => (
              <div
                key={kagga.id}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <KaggaCard kagga={kagga} variant="compact" />
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-3 border-2 border-gray-200 rounded-xl hover:border-red-500 hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 group"
              >
                <ChevronLeft className="w-5 h-5 group-hover:text-red-500 transition-colors duration-200" />
              </button>
              
              <span className="text-lg font-semibold text-gray-700 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                {currentPage} {t('of')} {totalPages}
              </span>
              
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-3 border-2 border-gray-200 rounded-xl hover:border-yellow-500 hover:bg-yellow-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 group"
              >
                <ChevronRight className="w-5 h-5 group-hover:text-yellow-500 transition-colors duration-200" />
              </button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 