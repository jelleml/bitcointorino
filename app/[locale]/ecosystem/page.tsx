import {Link} from "@/i18n/navigation"
import { Users, Store, MapPin, ArrowRight } from "lucide-react"
import { useTranslations } from 'next-intl'
import { PageHero } from "@/components/layout/page-hero"
import { ContactCta } from "@/components/layout/contact-cta"
import { Reveal } from "@/components/fx/reveal"

export default function EcosystemPage() {
  const t = useTranslations('Ecosystem');

  const ecosystemSections = [
    {
      title: t('sections.people.title'),
      description: t('sections.people.description'),
      icon: Users,
      href: "/ecosystem/meetup",
      external: false,
    },
    {
      title: t('sections.activities.title'),
      description: t('sections.activities.description'),
      icon: Store,
      href: "https://btcmap.org/map#13/45.07013/7.67146",
      external: true,
    },
    {
      title: t('sections.spaces.title'),
      description: t('sections.spaces.description'),
      icon: MapPin,
      href: "/ecosystem/spazi",
      external: false,
    },
  ]

  const cardClass = "spotlight-card group h-full p-10 md:p-12 text-center flex flex-col items-center justify-between"

  return (
    <main className="min-h-screen">
      <PageHero
        title={t('title')}
        subtitle={t('description')}
      />

      {/* Ecosystem Grid */}
      <section className="section-alt py-16 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {ecosystemSections.map((section, index) => {
              const Icon = section.icon
              const Content = (
                <>
                  <div className="flex flex-col items-center flex-1 w-full">
                    <div className="relative mb-8">
                      <div aria-hidden="true" className="absolute inset-0 rounded-3xl bg-bitcoin-blue/40 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="icon-tile h-20 w-20 rounded-3xl">
                        <Icon className="h-10 w-10" aria-hidden="true" />
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight mb-4 transition-colors group-hover:text-bitcoin-blue">
                      {section.title}
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                      {section.description}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-bitcoin-blue font-semibold text-lg mt-auto">
                    {t('explore')}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" aria-hidden="true" />
                  </div>
                  <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-bitcoin-blue via-[#5B8DEF] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                </>
              )

              return (
                <Reveal key={index} delay={index * 110}>
                  {section.external ? (
                    <a href={section.href} target="_blank" rel="noopener noreferrer" className={cardClass}>
                      {Content}
                    </a>
                  ) : (
                    <Link href={section.href} className={cardClass}>
                      {Content}
                    </Link>
                  )}
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <ContactCta title={t('ctaTitle')} description={t('ctaDescription')} label={t('contactUs')} />
    </main>
  )
}
