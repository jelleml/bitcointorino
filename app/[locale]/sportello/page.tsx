import { Metadata } from "next"
import {
  ArrowRight,
  Building2,
  Check,
  FileText,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Info,
  Mail,
  ShieldAlert,
  Store,
  User,
  Users,
  X,
} from "lucide-react"
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { Button } from "@/components/ui/button"

const SPORTELLO_EMAIL = "bitcoin.torino@proton.me"

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Sportello.meta' })

  return {
    title: t('title'),
    description: t('description'),
  }
}

const whatIcons = [FileText, GraduationCap, Handshake]
const audienceIcons = [Store, Building2, Users, HeartHandshake, User]

export default function SportelloPage() {
  const t = useTranslations('Sportello')

  const whatItems = t.raw('what.items') as { title: string; description: string }[]
  const audience = t.raw('audience.items') as { title: string; topics: string[] }[]
  const lanes = t.raw('how.lanes') as { title: string; description: string }[]
  const facts = t.raw('how.facts') as { label: string; value: string }[]
  const limits = t.raw('limits.items') as string[]
  const partnerRules = t.raw('partners.items') as { title: string; description: string }[]
  const checklist = t.raw('contact.checklist') as string[]

  const mailto = `mailto:${SPORTELLO_EMAIL}?subject=${encodeURIComponent(t('email.subject'))}&body=${encodeURIComponent(t('email.body'))}`

  return (
    <main className="min-h-screen">
      {/* Cos'è lo Sportello */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold">{t('what.title')}</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whatItems.map((item, index) => {
                const Icon = whatIcons[index]
                return (
                  <div
                    key={index}
                    className="group bg-card rounded-lg p-8 border-2 border-border hover:border-bitcoin-blue transition-colors"
                  >
                    <div className="mb-4 inline-flex p-3 rounded-lg bg-bitcoin-blue/10 dark:bg-white/10 group-hover:bg-bitcoin-blue dark:group-hover:bg-white/20 transition-colors">
                      <Icon
                        className="h-6 w-6 text-bitcoin-blue group-hover:text-white transition-colors"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-lg border-2 border-bitcoin-blue/20 bg-bitcoin-blue/5 dark:border-white/20 dark:bg-white/5 p-6">
              <Info className="h-6 w-6 flex-shrink-0 text-bitcoin-blue" aria-hidden="true" />
              <p className="text-muted-foreground">{t('what.notConsulting')}</p>
            </div>

            <div className="mt-10 text-center">
              <Button asChild size="lg" className="text-base bg-bitcoin-blue text-white hover:bg-bitcoin-blue-dark dark:bg-white dark:text-bitcoin-blue-dark dark:hover:bg-gray-200">
                <a href={mailto}>
                  <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
                  {t('what.cta')}
                </a>
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">{t('what.free')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* A chi si rivolge */}
      <section className="py-20 bg-gray-50 dark:bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">{t('audience.title')}</h2>
            </div>
            {/* Da PC: tre card nella prima riga, le ultime due a metà riga ciascuna */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              {audience.map((group, index) => {
                const Icon = audienceIcons[index]
                return (
                  <div
                    key={index}
                    className={`group bg-card rounded-lg p-6 border-2 border-border hover:border-bitcoin-blue transition-colors ${index < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-shrink-0 p-3 rounded-lg bg-bitcoin-blue/10 dark:bg-white/10 group-hover:bg-bitcoin-blue dark:group-hover:bg-white/20 transition-colors">
                        <Icon
                          className="h-6 w-6 text-bitcoin-blue group-hover:text-white transition-colors"
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="text-xl font-bold">{group.title}</h3>
                    </div>
                    <ul className="space-y-2 border-t pt-4">
                      {group.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start gap-2 text-muted-foreground">
                          <Check className="h-5 w-5 flex-shrink-0 text-bitcoin-blue mt-0.5" aria-hidden="true" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Come funziona */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">{t('how.title')}</h2>
            </div>
            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {lanes.map((lane, index) => (
                <li
                  key={index}
                  className="bg-card rounded-lg p-6 border-2 border-border hover:border-bitcoin-blue transition-colors"
                >
                  <div className="mb-4 flex items-center justify-center h-10 w-10 rounded-full bg-bitcoin-blue dark:bg-white dark:text-bitcoin-blue-dark text-white font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{lane.title}</h3>
                  <p className="text-muted-foreground">{lane.description}</p>
                </li>
              ))}
            </ol>

            <dl className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6 rounded-lg border-2 border-bitcoin-blue/20 bg-bitcoin-blue/5 dark:border-white/20 dark:bg-white/5 p-6">
              {facts.map((fact, index) => (
                <div key={index}>
                  <dt className="text-sm uppercase tracking-wide text-bitcoin-blue font-bold mb-1">
                    {fact.label}
                  </dt>
                  <dd className="text-muted-foreground">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Cosa non facciamo */}
      <section className="py-20 bg-gray-50 dark:bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">{t('limits.title')}</h2>
            </div>
            <ul className="bg-card rounded-lg border-2 border-border divide-y">
              {limits.map((limit, index) => (
                <li key={index} className="flex items-start gap-3 p-5 text-muted-foreground">
                  <X className="h-5 w-5 flex-shrink-0 text-red-600 dark:text-red-300 mt-0.5" aria-hidden="true" />
                  <span>{limit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Rinvio ai partner */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">{t('partners.title')}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {partnerRules.map((rule, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-8 border-2 border-border hover:border-bitcoin-blue transition-colors"
                >
                  <h3 className="text-xl font-bold mb-2">{rule.title}</h3>
                  <p className="text-muted-foreground">{rule.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contatto */}
      <section className="py-20 bg-gradient-to-br from-bitcoin-blue to-bitcoin-blue-dark dark:from-[#00138E] dark:to-[#00052E] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title')}</h2>
              <p className="text-lg text-gray-100">{t('contact.description')}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {checklist.map((item, index) => (
                <li key={index} className="flex items-start gap-3 rounded-lg bg-white/10 p-4">
                  <Check className="h-5 w-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mb-10 flex items-start gap-3 rounded-lg border-2 border-white/40 p-5">
              <ShieldAlert className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
              <p className="font-medium">{t('contact.warning')}</p>
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="text-base text-black bg-white hover:bg-gray-300">
                <a href={mailto}>
                  {t('contact.cta')}
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </a>
              </Button>
              <p className="mt-4 text-sm text-white/70">{SPORTELLO_EMAIL}</p>
            </div>

            <div className="mt-12 space-y-3 text-sm text-white/70 border-t border-white/20 pt-6">
              <p>{t('contact.disclaimer')}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
