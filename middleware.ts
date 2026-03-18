import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'it'],

  // Used when no locale matches
  defaultLocale: 'it',
  localePrefix: 'always'
});

export const config = {
  // Match all pathnames except for the ones starting with:
  // - api (API routes)
  // - _next (Next.js internals)
  // - _vercel (Vercel internals)
  // - static files (e.g. favicon.ico, sitemap.xml, etc.)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', '/', '/(it|en)/:path*']
};
