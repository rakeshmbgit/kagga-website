import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'kn'],

  // Used when no locale matches
  defaultLocale: 'en',
  
  // Always redirect to locale-prefixed routes
  localePrefix: 'always'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(kn|en)/:path*']
}; 