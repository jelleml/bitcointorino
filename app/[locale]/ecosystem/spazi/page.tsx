'use client'

import { MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from 'next-intl'
import Image from "next/image"
import { PageHero } from "@/components/layout/page-hero"
import { ContactCta } from "@/components/layout/contact-cta"
import { Reveal } from "@/components/fx/reveal"

export default function SpaziPage() {
  const t = useTranslations('Ecosystem.Spaces');

  const spaces = [
    {
      id: "blox",
      address: "Via Pietro Micca, 21/B, Torino",
      image: "/Spazi/logo-blox.jpg",
      mapsLink: "https://maps.app.goo.gl/9jpuBg4GYpL3i85KA",
    },
    {
      id: "polito",
      address: "Corso Castelfidardo, 122, Torino",
      image: "/Spazi/logo-politecnico-di-torino.jpg",
      mapsLink: "https://maps.app.goo.gl/nwpoNC9mAzEjvkit9",
    },
    {
      id: "planb",
      address: "Corso Valdocco, 3C, Torino",
      image: "/Spazi/logo-plan-b.jpg",
      mapsLink: "https://maps.app.goo.gl/wmvGGaTH8xdGdkj1A",
    },
  ]

  const mappedSpaces = spaces.map(s => ({
    ...s,
    name: t(`items.${s.id}.name`),
    type: t(`items.${s.id}.type`),
    description: t(`items.${s.id}.description`),
    features: t.raw(`items.${s.id}.features`) as string[],
  }))

  return (
    <main className="min-h-screen">
      <PageHero title={t('title')} />

      {/* Spaces List */}
      <section className="section-alt py-16 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-6">
            {mappedSpaces.map((space) => (
              <Reveal key={space.id}>
                <div className="spotlight-card group p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8 mb-6">
                    <div className="flex-1 order-2 md:order-1">
                      <span className="chip">{space.type}</span>
                      <h3 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight">{space.name}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-4 mt-3">
                        <MapPin className="mr-2 h-4 w-4 text-bitcoin-blue" aria-hidden="true" />
                        <span>{space.address}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{space.description}</p>
                    </div>
                    {space.image && (
                      <div className="relative w-full md:w-72 h-48 md:h-56 flex-shrink-0 order-1 md:order-2 overflow-hidden rounded-2xl ring-1 ring-border shadow-xl shadow-bitcoin-blue/10">
                        <Image
                          src={space.image}
                          alt={space.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    )}
                  </div>

                  <div className="border-t pt-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-3">{t('services')}</p>
                      <div className="flex flex-wrap gap-2">
                        {space.features.map((feature, idx) => (
                          <span key={idx} className="chip-muted">{feature}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Button asChild>
                        <a href={space.mapsLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                          {t('openInMaps')}
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCta
        title={t('ctaTitle')}
        description={t('ctaDescription')}
        label={t('contactUs')}
        icon={<MapPin className="h-9 w-9" aria-hidden="true" />}
      />
    </main>
  )
}
