import {
  Coffee, ShoppingBag, Utensils, HeartPulse, Briefcase, Wrench, Puzzle, BedDouble,
  MapPin, Globe, ExternalLink, BadgeCheck, Landmark, type LucideIcon,
} from "lucide-react"
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { PageHero } from "@/components/layout/page-hero"
import { ContactCta } from "@/components/layout/contact-cta"
import { Reveal } from "@/components/fx/reveal"
import { SectionNav } from "@/components/layout/section-nav"
import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import {
  getTorinoPlaces, categoryOf, btcMapUrl, directionsUrl, BTCMAP_TORINO_URL, RADIUS_KM,
  type BtcMapPlace, type PlaceCategory,
} from "@/lib/btcmap"

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return pageMetadata(locale, 'Meta.merchant', '/ecosystem/merchant')
}

// Ordine delle sezioni e icona di ciascuna categoria
const CATEGORIES: { id: PlaceCategory; icon: LucideIcon }[] = [
  { id: 'food', icon: Utensils },
  { id: 'bars', icon: Coffee },
  { id: 'shops', icon: ShoppingBag },
  { id: 'wellness', icon: HeartPulse },
  { id: 'professional', icon: Briefcase },
  { id: 'services', icon: Wrench },
  { id: 'leisure', icon: Puzzle },
  { id: 'stays', icon: BedDouble },
]

const externalLinkProps = { target: "_blank", rel: "noopener noreferrer" } as const

export default async function MerchantPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  const t = await getTranslations('Ecosystem.Merchant')
  const places = await getTorinoPlaces()

  const verifiedLabel = (place: BtcMapPlace) =>
    place.verified_at
      ? t('verifiedOn', { date: new Date(place.verified_at).toLocaleDateString(locale === 'it' ? 'it-IT' : 'en-GB', { month: 'short', year: 'numeric' }) })
      : null

  const PlaceCard = ({ place, icon: Icon, label }: { place: BtcMapPlace; icon: LucideIcon; label: string }) => (
    <div className="spotlight-card group flex h-full flex-col p-6">
      <div className="flex items-start gap-4">
        <div className="icon-tile h-11 w-11 shrink-0">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{label}</p>
          <h3 className="mt-1 text-xl font-bold tracking-tight break-words">{place.name}</h3>
        </div>
      </div>

      {place.description && (
        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{place.description}</p>
      )}

      {place.address && (
        <a
          href={directionsUrl(place)}
          {...externalLinkProps}
          className="mt-4 flex items-start text-sm text-muted-foreground transition-colors hover:text-bitcoin-blue"
        >
          <MapPin className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-bitcoin-blue" aria-hidden="true" />
          <span>{place.address}</span>
        </a>
      )}

      <div className="mt-auto pt-6">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t pt-5 text-sm font-medium">
          {place.website && (
            <a href={place.website} {...externalLinkProps} className="inline-flex items-center text-bitcoin-blue hover:underline dark:text-[#93C2F7]">
              <Globe className="mr-1.5 h-4 w-4" aria-hidden="true" />
              {t('website')}
            </a>
          )}
          <a href={btcMapUrl(place)} {...externalLinkProps} className="ml-auto inline-flex items-center text-bitcoin-blue hover:underline dark:text-[#93C2F7]">
            <ExternalLink className="mr-1.5 h-4 w-4" aria-hidden="true" />
            {t('viewOnBtcmap')}
          </a>
        </div>
        {verifiedLabel(place) && (
          <p className="mt-4 inline-flex items-center text-xs text-muted-foreground">
            <BadgeCheck className="mr-1 h-3.5 w-3.5" aria-hidden="true" />
            {verifiedLabel(place)}
          </p>
        )}
      </div>
    </div>
  )

  const groups = places
    ? CATEGORIES.map((c) => ({ ...c, places: places.merchants.filter((p) => categoryOf(p) === c.id) })).filter((g) => g.places.length)
    : []

  return (
    <main className="min-h-screen">
      <PageHero
        title={t('title')}
        subtitle={places ? t('intro', { count: places.merchants.length, radius: RADIUS_KM }) : t('description')}
        subtitleClassName="md:max-w-none md:whitespace-nowrap"
      >
        <a
          href={BTCMAP_TORINO_URL}
          {...externalLinkProps}
          className="glass inline-flex h-12 items-center rounded-full px-7 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/15"
        >
          <MapPin className="mr-2 h-5 w-5" aria-hidden="true" />
          {t('openMap')}
        </a>
      </PageHero>

      <section className="section-alt py-16 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {places ? (
              <>
                <SectionNav
                  label={t('sectionsLabel')}
                  items={[
                    ...groups.map((g) => ({ id: g.id, label: t(`categories.${g.id}`), count: g.places.length })),
                    ...(places.atms.length ? [{ id: 'atm', label: t('atmTitle'), count: places.atms.length }] : []),
                  ]}
                />

                <div className="space-y-14 md:space-y-20">
                  {groups.map((group) => (
                    <div key={group.id} id={group.id} className="scroll-mt-24">
                      <Reveal>
                        <h2 className="mb-6 flex items-baseline gap-3 text-2xl md:text-3xl font-bold tracking-tight">
                          {t(`categories.${group.id}`)}
                          <span className="text-base font-medium text-muted-foreground">{group.places.length}</span>
                        </h2>
                      </Reveal>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {group.places.map((place) => (
                          <Reveal key={place.id} className="h-full">
                            <PlaceCard place={place} icon={group.icon} label={t(`categories.${group.id}`)} />
                          </Reveal>
                        ))}
                      </div>
                    </div>
                  ))}

                  {places.atms.length > 0 && (
                    <div id="atm" className="scroll-mt-24">
                      <Reveal>
                        <h2 className="mb-2 flex items-baseline gap-3 text-2xl md:text-3xl font-bold tracking-tight">
                          {t('atmTitle')}
                          <span className="text-base font-medium text-muted-foreground">{places.atms.length}</span>
                        </h2>
                        <p className="mb-6 max-w-3xl text-muted-foreground">{t('atmDescription')}</p>
                      </Reveal>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {places.atms.map((place) => (
                          <Reveal key={place.id} className="h-full">
                            <PlaceCard place={place} icon={Landmark} label={t('atmLabel')} />
                          </Reveal>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <Reveal className="mx-auto max-w-2xl text-center">
                <p className="text-lg text-muted-foreground">{t('unavailable')}</p>
              </Reveal>
            )}

            {/* Crediti dei dati */}
            <Reveal className="mt-16 md:mt-20 flex justify-center text-center">
              <p className="max-w-3xl text-sm text-muted-foreground">
                {t.rich('attribution', {
                  btcmap: (chunks) => <a href="https://btcmap.org" {...externalLinkProps} className="underline hover:text-foreground">{chunks}</a>,
                  osm: (chunks) => <a href="https://www.openstreetmap.org/copyright" {...externalLinkProps} className="underline hover:text-foreground">{chunks}</a>,
                })}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <ContactCta title={t('ctaTitle')} description={t('ctaDescription')} label={t('contactUs')} />
    </main>
  )
}
