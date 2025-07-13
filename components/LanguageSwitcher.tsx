'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Globe, ChevronDown } from 'lucide-react';

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('common');

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' }
  ];

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  const handleLanguageChange = (newLocale: string) => {
    setIsOpen(false);
    
    // Handle the case where we're already on the target locale
    if (locale === newLocale) {
      return;
    }
    
    // Extract the path without the locale prefix
    let pathWithoutLocale = pathname;
    
    // Remove the current locale prefix
    if (pathname.startsWith(`/${locale}/`)) {
      pathWithoutLocale = pathname.substring(`/${locale}`.length);
    } else if (pathname === `/${locale}`) {
      pathWithoutLocale = '';
    } else {
      // If pathname doesn't start with current locale, it might be corrupted
      // Try to extract the path after the first locale segment
      const segments = pathname.split('/').filter(Boolean);
      if (segments.length > 0 && (segments[0] === 'en' || segments[0] === 'kn')) {
        pathWithoutLocale = '/' + segments.slice(1).join('/');
      } else {
        pathWithoutLocale = '';
      }
    }
    
    // Construct the new path
    const newPath = pathWithoutLocale ? `/${newLocale}${pathWithoutLocale}` : `/${newLocale}`;
    
    // Prevent double locale paths
    if (newPath.includes(`/${newLocale}/${newLocale}`)) {
      router.push(`/${newLocale}`);
      return;
    }
    
    router.push(newPath);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-earth-600 hover:text-primary-600 transition-colors duration-200 rounded-lg hover:bg-earth-50"
        aria-label={t('language')}
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLanguage.nativeName}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-earth-200 py-1 z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-earth-50 transition-colors duration-200 ${
                locale === language.code ? 'text-primary-600 bg-primary-50' : 'text-earth-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{language.nativeName}</span>
                {locale === language.code && (
                  <span className="text-primary-600">✓</span>
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher; 