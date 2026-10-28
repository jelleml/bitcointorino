import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for the ones starting with:
  // - api (API routes)
  // - _next (Next.js internals)
  // - _vercel (Vercel internals)
  // - static files (e.g. favicon.ico, sitemap.xml, etc.)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', '/', '/(it|en)/:path*']
};
