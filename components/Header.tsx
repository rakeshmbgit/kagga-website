'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Search, Menu, X, BookOpen, Video, User, Info } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const t = useTranslations('navigation');
  const commonT = useTranslations('common');
  const locale = useLocale();

  const navigation = [
    { name: t('home'), href: `/${locale}`, icon: BookOpen },
    { name: t('allKaggas'), href: `/${locale}/kaggas`, icon: BookOpen },
    { name: t('videos'), href: `/${locale}/videos`, icon: Video },
    { name: t('aboutDVG'), href: `/${locale}/about-dvg`, icon: User },
    { name: t('aboutKagga'), href: `/${locale}/about-kagga`, icon: Info },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/${locale}/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-3 mr-8 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-karnataka-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-earth-900 group-hover:text-primary-600 transition-colors duration-200">{commonT('brandName')}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-earth-600 hover:text-primary-600 transition-all duration-200 font-medium px-4 py-2 rounded-xl hover:bg-primary-50 hover:shadow-md"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Medium Screen Navigation (fewer items) */}
          <nav className="hidden md:flex lg:hidden items-center space-x-4">
            {navigation.slice(0, 3).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-earth-600 hover:text-primary-600 transition-all duration-200 font-medium px-3 py-2 rounded-lg hover:bg-primary-50 text-sm"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-sm mx-6">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-earth-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder={t('search')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-earth-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm bg-white/80 backdrop-blur-sm"
                />
              </div>
            </form>
          </div>

          {/* Language Switcher */}
          <div className="hidden md:block ml-4">
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl text-earth-600 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20 bg-white/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-earth-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder={t('search')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-earth-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                  />
                </div>
              </form>

              {/* Mobile Navigation Links */}
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 px-3 py-2 text-earth-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-200"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}

              {/* Language Switcher */}
              <div className="px-3 py-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 