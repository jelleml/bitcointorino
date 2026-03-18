'use client'

import { Building2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from 'next-intl'
import { Link } from "@/i18n/navigation"

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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-bitcoin-blue to-bitcoin-blue-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/ecosystem"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              {t('backToEcosystem')}
            </Link>
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-white/10 p-4 rounded-lg">
                <Building2 className="h-8 w-8" aria-hidden="true" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">{t('title')}</h1>
            </div>
            <p className="text-xl text-gray-100">
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      {/* Companies List */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {mappedCompanies.map((company, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-950 rounded-lg p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-bitcoin-blue transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <span className="px-3 py-1 bg-bitcoin-blue/10 text-bitcoin-blue text-sm font-medium rounded-full">
                        {company.category}
                      </span>
                      <h3 className="text-2xl font-bold mt-3 mb-2">{company.name}</h3>
                      <p className="text-muted-foreground mb-4">{company.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {company.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {service}
                      </span>
                    ))}
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
