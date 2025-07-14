'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { BookOpen, Mail, Github, Heart } from 'lucide-react';
import { useState } from 'react';
import DisclaimerModal from './DisclaimerModal';

const Footer = () => {
  const t = useTranslations('footer');
  const navT = useTranslations('navigation');
  const commonT = useTranslations('common');
  const locale = useLocale();
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const quickLinks = [
    { name: navT('home'), href: `/${locale}` },
    { name: navT('allKaggas'), href: `/${locale}/kaggas` },
    { name: navT('videos'), href: `/${locale}/videos` },
    { name: navT('aboutDVG'), href: `/${locale}/about-dvg` },
    { name: navT('aboutKagga'), href: `/${locale}/about-kagga` },
  ];

  const resources = [
    { name: t('search'), href: `/${locale}/search` },
    { name: t('browseByTheme'), href: `/${locale}/themes` },
    { name: t('contactUs'), href: `mailto:contact@dvg-kagga.com` },
    { name: t('disclaimer'), onClick: () => setShowDisclaimer(true) },
  ];

  return (
    <footer className="bg-gradient-to-br from-earth-900 via-primary-900 to-earth-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-karnataka-pattern"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-karnataka-500 rounded-lg flex items-center justify-center shadow-lg">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">{commonT('brandName')}</span>
            </div>
            <p className="text-earth-300 mb-4 max-w-md leading-relaxed">
              {t('description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:contact@dvg-kagga.com"
                className="text-earth-300 hover:text-primary-400 transition-all duration-200 hover:scale-110"
                aria-label="Contact us via email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/rakeshmbgit/kagga-website"
                className="text-earth-300 hover:text-primary-400 transition-all duration-200 hover:scale-110"
                aria-label="Visit our GitHub repository"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-200">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-earth-300 hover:text-primary-400 transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-200">{t('resources')}</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.name}>
                  {link.href ? (
                    <Link
                      href={link.href}
                      className="text-earth-300 hover:text-primary-400 transition-all duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      onClick={link.onClick}
                      className="text-earth-300 hover:text-primary-400 transition-all duration-200 hover:translate-x-1 inline-block underline"
                      aria-label="Show disclaimer"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-earth-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-earth-400 text-sm">
            © {new Date().getFullYear()} {commonT('brandName')} {commonT('digitalRepository')}. {t('allRightsReserved')}.
          </p>
          <div className="flex items-center space-x-2 text-earth-400 text-sm mt-4 md:mt-0">
            <span>{t('madeWith')}</span>
            <Heart className="w-4 h-4 text-primary-400 animate-pulse" />
            <span>{t('forKannadaLiterature')}</span>
          </div>
        </div>
      </div>
      <DisclaimerModal open={showDisclaimer} onClose={() => setShowDisclaimer(false)} />
    </footer>
  );
};

export default Footer; 