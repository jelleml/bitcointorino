'use client'

import { Building2 } from "lucide-react"
import { useTranslations } from 'next-intl'
import { BackLink } from "@/components/layout/back-link"
import { PageHero } from "@/components/layout/page-hero"
import { ContactCta } from "@/components/layout/contact-cta"
import { Reveal } from "@/components/fx/reveal"

export default function AziendePage() {
  const t = useTranslations('Ecosystem.Companies');

  const companies = [
    {
      id: "company1",
    },
    {
      id: "company2",
    },
    {
      id: "startup1",
    },
  ]

  const mappedCompanies = companies.map(c => ({
    ...c,
    name: t(`items.${c.id}.name`),
    description: t(`items.${c.id}.description`),
    category: t(`items.${c.id}.category`),
    services: t.raw(`items.${c.id}.services`) as string[],
  }))

  return (
    <main className="min-h-screen">
      <PageHero
        title={t('title')}
        subtitle={t('description')}
        back={<BackLink label={t('backToEcosystem')} />}
        icon={
          <div className="glass flex h-16 w-16 items-center justify-center rounded-2xl">
            <Building2 className="h-8 w-8" aria-hidden="true" />
          </div>
        }
      />

      {/* Companies List */}
      <section className="section-alt py-16 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {mappedCompanies.map((company, index) => (
              <Reveal key={index}>
                <div className="spotlight-card p-7">
                  <span className="chip">{company.category}</span>
                  <h3 className="text-2xl font-bold tracking-tight mt-4 mb-2">{company.name}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">{company.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {company.services.map((service, idx) => (
                      <span key={idx} className="chip-muted">{service}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCta title={t('ctaTitle')} description={t('ctaDescription')} label={t('contactUs')} />
    </main>
  )
}
