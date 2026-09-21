import { Metadata } from "next"
import {
  ArrowRight,
  CalendarDays,
  Eye,
  Handshake,
  Info,
  PartyPopper,
  Ticket,
  Vote,
  Wrench,
} from "lucide-react"
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { Button } from "@/components/ui/button"

const MEMBERSHIP_FORM_URL = "https://forms.gle/gXgsVYPf8fqnZ6678"

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Soci.meta' })

  return {
    title: t('title'),
    description: t('description'),
  }
}

const benefitIcons = [PartyPopper, Ticket, Handshake, Vote]

export default function SociPage() {
  const t = useTranslations('Soci')

  const benefits = t.raw('benefits.items') as { title: string; description: string }[]
  const operationalItems = t.raw('participation.operational.items') as string[]
  const meetings = t.raw('meetings.items') as string[]
  const steps = t.raw('join.steps') as string[]

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-bitcoin-blue to-bitcoin-blue-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm md:text-base uppercase tracking-wide text-white/70 mb-4">
              {t('hero.eyebrow')}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8">
              {t('hero.subtitle')}
            </p>
            <Button asChild size="lg" className="text-base text-black bg-white hover:bg-gray-300">
              <a href={MEMBERSHIP_FORM_URL} target="_blank" rel="noopener noreferrer">
                {t('hero.cta')}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Cosa ottieni come socio */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              {t('benefits.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefitIcons[index]
                return (
                  <div
                    key={index}
                    className="group bg-white dark:bg-gray-950 rounded-lg p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-bitcoin-blue transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 rounded-lg bg-bitcoin-blue/10 group-hover:bg-bitcoin-blue transition-colors">
                        <Icon
                          className="h-6 w-6 text-bitcoin-blue group-hover:text-white transition-colors"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Due modalità di partecipazione */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('participation.title')}</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t('participation.description')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group bg-white dark:bg-gray-950 rounded-lg p-8 border-2 border-gray-200 dark:border-gray-700 hover:border-bitcoin-blue transition-colors">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-bitcoin-blue/10 group-hover:bg-bitcoin-blue transition-colors">
                  <Eye
                    className="h-6 w-6 text-bitcoin-blue group-hover:text-white transition-colors"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{t('participation.observer.title')}</h3>
                <p className="text-muted-foreground">{t('participation.observer.description')}</p>
              </div>

              <div className="group bg-white dark:bg-gray-950 rounded-lg p-8 border-2 border-gray-200 dark:border-gray-700 hover:border-bitcoin-blue transition-colors">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-bitcoin-blue/10 group-hover:bg-bitcoin-blue transition-colors">
                  <Wrench
                    className="h-6 w-6 text-bitcoin-blue group-hover:text-white transition-colors"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{t('participation.operational.title')}</h3>
                <p className="text-muted-foreground mb-4">
                  {t('participation.operational.description')}
                </p>
                <ul className="space-y-2">
                  {operationalItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span
                        className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-bitcoin-blue"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-8 text-center text-muted-foreground max-w-3xl mx-auto">
              {t('participation.note')}
            </p>
          </div>
        </div>
      </section>

      {/* Riunioni */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-bitcoin-blue/10">
                  <CalendarDays className="h-8 w-8 text-bitcoin-blue" aria-hidden="true" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">{t('meetings.title')}</h2>
            </div>
            <ul className="space-y-4">
              {meetings.map((meeting, index) => (
                <li
                  key={index}
                  className="bg-white dark:bg-gray-950 rounded-lg p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-bitcoin-blue transition-colors text-muted-foreground"
                >
                  {meeting}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Quota associativa */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">{t('fee.title')}</h2>
            <div className="bg-white dark:bg-gray-950 rounded-lg p-8 md:p-12 border-2 border-gray-200 dark:border-gray-700 text-center">
              <p className="text-5xl md:text-6xl font-bold text-bitcoin-blue mb-6">
                {t('fee.amount')}
              </p>
              <p className="text-lg text-muted-foreground">{t('fee.description')}</p>
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-lg border-2 border-bitcoin-blue/20 bg-bitcoin-blue/5 p-6">
              <Info className="h-6 w-6 flex-shrink-0 text-bitcoin-blue" aria-hidden="true" />
              <p className="text-muted-foreground">{t('fee.validity')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Come iscriverti */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('join.title')}</h2>
              <p className="text-lg text-muted-foreground">{t('join.description')}</p>
            </div>

            <ol className="space-y-6">
              {steps.map((step, index) => (
                <li
                  key={index}
                  className="bg-white dark:bg-gray-950 rounded-lg p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-bitcoin-blue transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                    <div className="flex items-center gap-5 flex-1">
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-bitcoin-blue text-white font-bold">
                        {index + 1}
                      </div>
                      <p className="text-lg font-medium">{step}</p>
                    </div>
                    {index === 0 && (
                      <a
                        href={MEMBERSHIP_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 bg-bitcoin-blue text-white font-medium rounded-lg hover:bg-bitcoin-blue-dark transition-colors sm:flex-shrink-0"
                      >
                        {t('join.formLink')}
                        <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-8 text-muted-foreground">{t('join.after')}</p>

            <div className="mt-8 flex items-start gap-3 rounded-lg border-2 border-bitcoin-blue/20 bg-bitcoin-blue/5 p-6">
              <Info className="h-6 w-6 flex-shrink-0 text-bitcoin-blue" aria-hidden="true" />
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">{t('join.noteLabel')}</span>{' '}
                {t('join.note')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
