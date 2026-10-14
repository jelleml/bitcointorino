/**
 * SEO utility functions
 */

import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { getPathname } from '@/i18n/navigation'
import { routing, type Pathname } from '@/i18n/routing'

export const SITE_URL = 'https://www.bitcointorino.to'
export const LOCALES = routing.locales
export const LOGO_URL = `${SITE_URL}/media-kit/bitcoin-torino-pictogram-orange.png`

const OG_LOCALE: Record<string, string> = { it: 'it_IT', en: 'en_US' }

/** URL pubblico assoluto di una pagina in una lingua, a partire dal percorso interno (es. "/sportello" → /en/help-desk). */
export const localizedUrl = (locale: string, path: Pathname = '/') =>
  `${SITE_URL}${getPathname({ locale, href: path })}`

/** Versioni linguistiche di una pagina (hreflang), con x-default sull'URL senza lingua che reindirizza in base al browser. */
export const languageAlternates = (path: Pathname = '/') => ({
  ...Object.fromEntries(LOCALES.map((l) => [l, localizedUrl(l, path)])),
  'x-default': `${SITE_URL}${path}`,
})

/**
 * Metadata completi di una pagina: titolo e descrizione propri, canonical, versioni IT/EN
 * e anteprima social coerente con la pagina (non quella della home).
 * `namespace` è il gruppo dei messaggi con `title` e `description` (es. "Meta.faq", "Soci.meta").
 */
export async function pageMetadata(locale: string, namespace: string, path: Pathname = '/'): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace })
  const title = t('title')
  const description = t('description')
  const url = localizedUrl(locale, path)

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates(path),
    },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: 'Bitcoin Torino',
      locale: OG_LOCALE[locale],
      alternateLocale: LOCALES.filter((l) => l !== locale).map((l) => OG_LOCALE[l]),
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Bitcoin Torino' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png'],
    },
  }
}

export interface SEOConfig {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  tags?: string[]
}

/**
 * Generate structured data for articles (JSON-LD)
 */
export function generateArticleStructuredData(config: {
  title: string
  description: string
  author: string
  datePublished: string
  dateModified?: string
  url: string
  imageUrl?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: config.title,
    description: config.description,
    author: {
      '@type': 'Person',
      name: config.author,
    },
    datePublished: config.datePublished,
    dateModified: config.dateModified || config.datePublished,
    url: config.url,
    image: config.imageUrl,
    publisher: {
      '@type': 'Organization',
      name: 'Bitcoin Torino',
      logo: {
        '@type': 'ImageObject',
        url: LOGO_URL,
      },
    },
  }
}

/**
 * Generate structured data for events (JSON-LD)
 */
export function generateEventStructuredData(config: {
  name: string
  description: string
  startDate: string
  endDate?: string
  location: string
  url: string
  imageUrl?: string
  isOnline?: boolean
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: config.name,
    description: config.description,
    startDate: config.startDate,
    endDate: config.endDate,
    location: config.isOnline
      ? {
          '@type': 'VirtualLocation',
          url: config.url,
        }
      : {
          '@type': 'Place',
          name: config.location,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Torino',
            addressCountry: 'IT',
          },
        },
    image: config.imageUrl,
    organizer: {
      '@type': 'Organization',
      name: 'Bitcoin Torino',
      url: SITE_URL,
    },
  }
}

/**
 * Generate structured data for organization (JSON-LD)
 */
export function generateOrganizationStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: 'Bitcoin Torino',
    alternateName: 'Associazione Bitcoin Torino',
    url: SITE_URL,
    logo: LOGO_URL,
    description:
      'Associazione dedicata alla promozione e sviluppo dell\'ecosistema Bitcoin a Torino e dintorni',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Torino',
      addressCountry: 'IT',
    },
    sameAs: [
      'https://x.com/BitcoinTorino',
      'https://t.me/bitcointorinochannel',
      'https://instagram.com/bitcointorino',
      'https://linkedin.com/company/bitcoin-torino',
      'https://luma.com/bitcoin-torino-calendar',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'bitcoin.torino@proton.me',
      contactType: 'customer support',
    },
  }
}

