'use client'

import { Store, ArrowLeft, Coffee, ShoppingBag, Utensils, Map } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from 'next-intl'
import { Link } from "@/i18n/navigation"

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
      <div className="pt-12 pb-6">
        <div className="container mx-auto px-4 text-center">
            <Link
              href="/ecosystem"
              className="inline-flex items-center text-bitcoin-blue hover:underline mb-6 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              {t('backToEcosystem')}
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
            <p className="text-xl text-muted-foreground">
              {t('description')}
            </p>
        </div>
      </div>

      {/* Merchants List */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {mappedMerchants.map((merchant, index) => {
                const Icon = merchant.icon
                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-950 rounded-lg p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-bitcoin-blue transition-colors"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-bitcoin-blue/10 p-3 rounded-lg">
                        <Icon className="h-6 w-6 text-bitcoin-blue" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-2xl font-bold mb-1">{merchant.name}</h3>
                            <p className="text-sm text-muted-foreground">{merchant.category}</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-3">{merchant.description}</p>
                        <div className="flex items-center text-sm text-muted-foreground mb-3">
                          <Map className="mr-2 h-4 w-4" aria-hidden="true" />
                          <span>{merchant.address}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {merchant.accepts.map((method, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-bitcoin-blue/10 text-bitcoin-blue text-sm font-medium rounded-full"
                            >
                              ₿ {method}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
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
