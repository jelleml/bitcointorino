import { MetadataRoute } from 'next'
import { LOCALES, languageAlternates, localizedUrl } from '@/lib/seo'
import type { Pathname } from '@/i18n/routing'

// Pagine pubbliche (percorso interno). Ognuna esce in sitemap per IT ed EN con il proprio URL
// localizzato, le versioni collegate tra loro (hreflang) e senza passare dai redirect.
const pages: { path: Pathname; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/sportello', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/ecosystem', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/eventi', changeFrequency: 'daily', priority: 0.9 },
  { path: '/ecosystem/meetup', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/ecosystem/aziende', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/ecosystem/merchant', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/ecosystem/spazi', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/soci', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/faq', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/media-kit', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/cookie-policy', changeFrequency: 'yearly', priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(({ path, changeFrequency, priority }) =>
    LOCALES.map((locale) => ({
      url: localizedUrl(locale, path),
      changeFrequency,
      priority,
      alternates: { languages: languageAlternates(path) },
    }))
  )
}
