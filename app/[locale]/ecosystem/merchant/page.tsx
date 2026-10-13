'use client'

import { Store, Coffee, ShoppingBag, Utensils, Map } from "lucide-react"
import { useTranslations } from 'next-intl'
import { BackLink } from "@/components/layout/back-link"
import { PageHero } from "@/components/layout/page-hero"
import { ContactCta } from "@/components/layout/contact-cta"
import { Reveal } from "@/components/fx/reveal"

export default function MerchantPage() {
  const t = useTranslations('Ecosystem.Merchant');

  const merchants = [
    {
      id: "bar",
      icon: Coffee,
      address: "Via esempio 1, Torino",
      accepts: ["Bitcoin", "Lightning"],
    },
    {
      id: "retail",
      icon: ShoppingBag,
      address: "Corso esempio 2, Torino",
      accepts: ["Bitcoin", "Lightning"],
    },
    {
      id: "food",
      icon: Utensils,
      address: "Piazza esempio 3, Torino",
      accepts: ["Bitcoin", "Lightning"],
    },
  ]

  const mappedMerchants = merchants.map(m => ({
    ...m,
    name: t(`items.${m.id}.name`),
    category: t(`items.${m.id}.category`),
    description: t(`items.${m.id}.description`),
  }))

  return (
    <main className="min-h-screen">
      <PageHero
        title={t('title')}
        subtitle={t('description')}
        back={<BackLink label={t('backToEcosystem')} />}
      />

      {/* Merchants List */}
      <section className="section-alt py-16 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {mappedMerchants.map((merchant, index) => {
              const Icon = merchant.icon
              return (
                <Reveal key={index}>
                  <div className="spotlight-card group p-7">
                    <div className="flex items-start gap-5">
                      <div className="icon-tile h-12 w-12">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold tracking-tight mb-1">{merchant.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{merchant.category}</p>
                        <p className="text-muted-foreground leading-relaxed mb-4">{merchant.description}</p>
                        <div className="flex items-center text-sm text-muted-foreground mb-4">
                          <Map className="mr-2 h-4 w-4 text-bitcoin-blue" aria-hidden="true" />
                          <span>{merchant.address}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {merchant.accepts.map((method, idx) => (
                            <span key={idx} className="chip normal-case tracking-normal">
                              ₿ {method}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
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
