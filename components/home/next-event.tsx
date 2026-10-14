import Image from "next/image"
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react"
import { useTranslations } from 'next-intl'
import { Reveal } from "@/components/fx/reveal"
import { Tilt } from "@/components/fx/tilt"
import { SITE_URL } from "@/lib/seo"

/**
 * Dati "macchina" del prossimo evento, per i dati strutturati di Google (risultati Eventi).
 * Quando cambia l'evento, aggiornare questi campi insieme ai testi in messages/*.json (NextEvent).
 */
export const NEXT_EVENT = {
  url: "https://luma.com/fdgrol0p",
  poster: "/Event Posters/bitcoin-handle-with-care.png",
  startDate: "2026-10-15T17:30:00+02:00",
  endDate: "2026-10-15T19:30:00+02:00",
  inLanguage: "en",
  performer: "Luca Giuliani",
  streetAddress: "Corso Duca degli Abruzzi 24",
  postalCode: "10129",
}

export function NextEvent() {
  const t = useTranslations('NextEvent');

  const eventStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: t('eventName'),
    description: t('description'),
    startDate: NEXT_EVENT.startDate,
    endDate: NEXT_EVENT.endDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    inLanguage: NEXT_EVENT.inLanguage,
    image: [`${SITE_URL}${encodeURI(NEXT_EVENT.poster)}`],
    url: NEXT_EVENT.url,
    location: {
      '@type': 'Place',
      name: t('locationName'),
      address: {
        '@type': 'PostalAddress',
        streetAddress: NEXT_EVENT.streetAddress,
        postalCode: NEXT_EVENT.postalCode,
        addressLocality: 'Torino',
        addressRegion: 'TO',
        addressCountry: 'IT',
      },
    },
    performer: { '@type': 'Person', name: NEXT_EVENT.performer },
    organizer: { '@type': 'Organization', name: 'Bitcoin Torino', url: SITE_URL },
  }

  const details = [
    { icon: Calendar, title: t('date'), subtitle: t('time') },
    { icon: MapPin, title: t('locationName'), subtitle: t('address') },
    { icon: Users, title: t('participants'), subtitle: t('availability') },
  ]

  return (
    <section id="prossimo-evento" className="relative isolate overflow-hidden py-16 md:py-32 bg-white dark:bg-background scroll-mt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventStructuredData) }}
      />
      <div aria-hidden="true" className="absolute -left-40 top-1/3 -z-10 h-[32rem] w-[32rem] bg-[radial-gradient(closest-side,rgba(7,69,141,0.10),transparent)] dark:bg-[radial-gradient(closest-side,rgba(0,19,142,0.5),transparent)]" />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14 md:mb-20">
            <h2 className="text-3xl md:text-6xl font-bold tracking-tight">
              <span className="text-gradient">{t('title')}</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Locandina */}
            <Reveal className="relative">
              <div aria-hidden="true" className="absolute -inset-10 -z-10 bg-[radial-gradient(closest-side,rgba(9,85,165,0.4),rgba(0,19,142,0.25)_60%,transparent)] animate-float" />
              <Tilt className="rounded-3xl">
                <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl shadow-bitcoin-blue/25 ring-1 ring-black/5 dark:ring-white/10">
                  <Image
                    src={NEXT_EVENT.poster}
                    alt="Bitcoin: Handle with Care"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Tilt>
            </Reveal>

            {/* Contenuto */}
            <div className="space-y-8">
              <Reveal delay={100}>
                <span className="eyebrow mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#E55414] animate-ping-soft" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E55414]" />
                  </span>
                  {t('type')}
                </span>
                <h3 className="text-2xl md:text-4xl font-bold tracking-tight mb-5">
                  {t('eventName')}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                  {t('description')}
                </p>
              </Reveal>

              <ul className="space-y-3">
                {details.map(({ icon: Icon, title, subtitle }, i) => (
                  <Reveal as="li" key={title} delay={200 + i * 90}>
                    <div className="group flex items-center gap-4 rounded-2xl border border-border bg-gray-50/70 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-bitcoin-blue/40 hover:shadow-lg hover:shadow-bitcoin-blue/10 dark:bg-card/60">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-bitcoin-blue-light to-bitcoin-blue-dark text-white shadow-md shadow-bitcoin-blue/30 transition-transform group-hover:scale-110">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{title}</div>
                        <div className="text-sm text-muted-foreground">{subtitle}</div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ul>

              <Reveal delay={500}>
                <a
                  href={NEXT_EVENT.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine group inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-bitcoin-blue via-bitcoin-blue-light to-bitcoin-blue bg-[length:200%_100%] px-9 text-base font-bold text-white shadow-xl shadow-bitcoin-blue/30 transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0] hover:shadow-bitcoin-blue/50"
                >
                  <span className="relative z-10 inline-flex items-center">
                    {t('register')}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
