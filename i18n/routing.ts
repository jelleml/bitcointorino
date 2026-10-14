import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['it', 'en'],
  defaultLocale: 'it',
  localePrefix: 'always',
  // URL localizzati: le pagine inglesi hanno slug in inglese.
  // Chiave = percorso interno (cartella in app/[locale]), valore = URL pubblico per lingua.
  pathnames: {
    '/': '/',
    '/ecosystem': '/ecosystem',
    '/ecosystem/meetup': '/ecosystem/meetup',
    '/ecosystem/merchant': '/ecosystem/merchant',
    '/ecosystem/aziende': {it: '/ecosystem/aziende', en: '/ecosystem/companies'},
    '/ecosystem/spazi': {it: '/ecosystem/spazi', en: '/ecosystem/spaces'},
    '/sportello': {it: '/sportello', en: '/help-desk'},
    '/soci': {it: '/soci', en: '/membership'},
    '/eventi': {it: '/eventi', en: '/events'},
    '/faq': '/faq',
    '/media-kit': '/media-kit',
    '/privacy': '/privacy',
    '/cookie-policy': '/cookie-policy',
  },
});

export type Pathname = keyof typeof routing.pathnames;
