'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { BookOpen, Mail, Github, Heart } from 'lucide-react';

const Footer = () => {
  const t = useTranslations('footer');
  const navT = useTranslations('navigation');
  const locale = useLocale();

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
  ];

  return (
    <footer className="bg-earth-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">DVG Kagga</span>
            </div>
            <p className="text-earth-300 mb-4 max-w-md">
              {t('description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:contact@dvg-kagga.com"
                className="text-earth-300 hover:text-white transition-colors duration-200"
                aria-label="Contact us via email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/dvg-kagga"
                className="text-earth-300 hover:text-white transition-colors duration-200"
                aria-label="Visit our GitHub repository"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-earth-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('resources')}</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-earth-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-earth-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-earth-400 text-sm">
            © {new Date().getFullYear()} DVG Kagga Digital Repository. {t('allRightsReserved')}.
          </p>
          <div className="flex items-center space-x-2 text-earth-400 text-sm mt-4 md:mt-0">
            <span>{t('madeWith')}</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>{t('forKannadaLiterature')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 