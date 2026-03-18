'use client'

import { Metadata } from "next"
import {Link} from "@/i18n/navigation"
import { Users, Building2, Store, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from 'next-intl'

export default function EcosystemPage() {
  const t = useTranslations('Ecosystem');

  const ecosystemSections = [
    {
      title: t('sections.people.title'),
      description: t('sections.people.description'),
      icon: Users,
      href: "/ecosystem/meetup",
      external: false,
      color: "text-bitcoin-blue",
      bgColor: "bg-bitcoin-blue/10",
    },
    {
      title: t('sections.activities.title'),
      description: t('sections.activities.description'),
      icon: Store,
      href: "https://btcmap.org/map#13/45.07013/7.67146",
      external: true,
      color: "text-bitcoin-blue",
      bgColor: "bg-bitcoin-blue/10",
    },
    {
      title: t('sections.spaces.title'),
      description: t('sections.spaces.description'),
      icon: MapPin,
      href: "/ecosystem/spazi",
      external: false,
      color: "text-bitcoin-blue",
      bgColor: "bg-bitcoin-blue/10",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Ecosystem Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {ecosystemSections.map((section, index) => {
              const Icon = section.icon
              const Content = (
                <>
                  <div className="flex flex-col items-center flex-1 w-full relative z-10">
                    <div className={`${section.bgColor} p-6 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-12 w-12 ${section.color}`} aria-hidden="true" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4 group-hover:text-bitcoin-blue transition-colors">
                      {section.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                      {section.description}
                    </p>
                  </div>
                  <div className="flex justify-center items-center text-bitcoin-blue font-medium text-lg mt-auto pb-4">
                    {t('explore')}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true" />
                  </div>
                </>
              )

              return section.external ? (
                <a
                  key={index}
                  href={section.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-xl p-12 border-2 border-gray-200 hover:border-bitcoin-blue transition-all duration-300 hover:shadow-xl text-center flex flex-col items-center justify-between"
                >
                  {Content}
                </a>
              ) : (
                <Link
                  key={index}
                  href={section.href}
                  className="group bg-white rounded-xl p-12 border-2 border-gray-200 hover:border-bitcoin-blue transition-all duration-300 hover:shadow-xl text-center flex flex-col items-center justify-between"
                >
                  {Content}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('ctaTitle')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t('ctaDescription')}
            </p>
            <Button asChild size="lg">
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

