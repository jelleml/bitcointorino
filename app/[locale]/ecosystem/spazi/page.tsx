'use client'

import { MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from 'next-intl'
import Image from "next/image"

export default function SpaziPage() {
  const t = useTranslations('Ecosystem.Spaces');

  const spaces = [
    {
      id: "blox",
      address: "Via Pietro Micca, 21/B, Torino",
      image: "/image-blox.jpg",
      mapsLink: "https://maps.app.goo.gl/9jpuBg4GYpL3i85KA",
    },
    {
      id: "polito",
      address: "Corso Castelfidardo, 122, Torino",
      image: "/image-politecnico-di-torino.jpg",
      mapsLink: "https://maps.app.goo.gl/nwpoNC9mAzEjvkit9",
    },
    {
      id: "planb",
      address: "Corso Valdocco, 3C, Torino",
      image: "/image-plan-b.jpg",
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
      <div className="pt-12 pb-2 md:pb-6">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
        </div>
      </div>

      {/* Spaces List */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {mappedSpaces.map((space, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-950 rounded-lg p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-bitcoin-blue transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6 mb-4">
                    <div className="flex-1 order-2 md:order-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="px-3 py-1 bg-bitcoin-blue/10 text-bitcoin-blue text-sm font-medium rounded-full">
                          {space.type}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold">{space.name}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-4 mt-3">
                        <MapPin className="mr-2 h-4 w-4" aria-hidden="true" />
                        <span>{space.address}</span>
                      </div>
                      <p className="text-muted-foreground mb-2">{space.description}</p>
                    </div>
                    {space.image && (
                      <div className="relative w-full md:w-72 h-48 md:h-56 rounded-lg overflow-hidden flex-shrink-0 order-1 md:order-2 border border-gray-200 dark:border-gray-800">
                        <Image
                          src={space.image}
                          alt={space.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                  <div className="border-t pt-4 mt-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-sm font-semibold mb-2">{t('services')}</p>
                      <div className="flex flex-wrap gap-2">
                        {space.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Button variant="outline" size="sm" asChild>
                        <a href={space.mapsLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                          <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                          {t('openInMaps')}
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              {t('ctaTitle')}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {t('ctaDescription')}
            </p>
            <Button asChild size="lg" className="bg-bitcoin-blue hover:bg-bitcoin-blue/90 text-white">
              <a href="mailto:info@bitcointorino.org">
                {t('contactUs')}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
