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
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { PageHero } from "@/components/layout/page-hero"
import { SectionHeading } from "@/components/layout/section-heading"
import { CtaBand } from "@/components/layout/cta-band"
import { Reveal } from "@/components/fx/reveal"
import { CopyButton } from "@/components/media-kit/copy-button"
import { pageMetadata } from "@/lib/seo"

const SPORTELLO_EMAIL = "bitcoin.torino@proton.me"

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return pageMetadata(locale, 'Sportello.meta', '/sportello')
}

const whatIcons = [FileText, GraduationCap, Handshake]
const audienceIcons = [Store, Building2, Users, HeartHandshake, User]

export default function SportelloPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  const t = useTranslations('Sportello')
  const tCta = useTranslations('SportelloCta')

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
      <PageHero
        title={tCta('title')}
        subtitle={tCta('description')}
      >
        <div className="flex flex-col items-center gap-3">
          <a href={mailto} className="btn-shine btn-orange group inline-flex h-14 items-center justify-center whitespace-nowrap rounded-full px-6 sm:px-9 text-base font-bold">
            <span className="relative z-10 inline-flex items-center">
              <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
              {t('what.cta')}
            </span>
          </a>
          <span className="text-sm text-white/70">{t('what.free')}</span>
        </div>
      </PageHero>

      {/* Cos'è lo Sportello */}
      <section className="py-16 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeading title={t('what.title')} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whatItems.map((item, index) => {
                const Icon = whatIcons[index]
                return (
                  <Reveal key={index} delay={index * 100}>
                    <div className="spotlight-card group h-full p-8">
                      <div className="icon-tile mb-6 h-14 w-14">
                        <Icon className="h-7 w-7" aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </Reveal>
                )
              })}
            </div>

            <Reveal className="mt-8">
              <div className="callout flex-col sm:flex-row">
                <Info className="h-6 w-6 flex-shrink-0 text-bitcoin-blue" aria-hidden="true" />
                <p className="text-muted-foreground">{t('what.notConsulting')}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* A chi si rivolge */}
      <section className="section-alt py-16 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeading title={t('audience.title')} />
            {/* Da PC: tre card nella prima riga, le ultime due a metà riga ciascuna */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              {audience.map((group, index) => {
                const Icon = audienceIcons[index]
                return (
                  <Reveal
                    key={index}
                    delay={(index % 3) * 100}
                    className={index < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}
                  >
                    <div className="spotlight-card group h-full p-7">
                      <div className="flex items-center gap-4 mb-5">
                        <div className="icon-tile h-12 w-12">
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-bold">{group.title}</h3>
                      </div>
                      <ul className="space-y-2.5 border-t pt-5">
                        {group.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start gap-2.5 text-muted-foreground">
                            <Check className="h-5 w-5 flex-shrink-0 text-bitcoin-blue mt-0.5" aria-hidden="true" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Come funziona */}
      <section className="py-16 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeading title={t('how.title')} />
            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {lanes.map((lane, index) => (
                <Reveal as="li" key={index} delay={index * 100}>
                  <div className="spotlight-card h-full p-7">
                    <div className="step-badge mb-5">{index + 1}</div>
                    <h3 className="text-lg font-bold mb-2">{lane.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{lane.description}</p>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal className="mt-10">
              <dl className="callout !grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 !gap-8 sm:!gap-6">
                {facts.map((fact, index) => (
                  <div key={index}>
                    <dt className="text-xs uppercase tracking-[0.15em] text-bitcoin-blue font-bold mb-1.5">
                      {fact.label}
                    </dt>
                    <dd className="text-muted-foreground">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Cosa non facciamo */}
      <section className="section-alt py-16 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading title={t('limits.title')} />
            <Reveal>
              <ul className="spotlight-card divide-y hover:!translate-y-0">
                {limits.map((limit, index) => (
                  <li key={index} className="flex items-start gap-3 p-5 text-muted-foreground">
                    <X className="h-5 w-5 flex-shrink-0 text-red-600 dark:text-red-300 mt-0.5" aria-hidden="true" />
                    <span>{limit}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Rinvio ai partner */}
      <section className="py-16 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeading title={t('partners.title')} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {partnerRules.map((rule, index) => (
                <Reveal key={index} delay={index * 100}>
                  <div className="spotlight-card h-full p-8">
                    <h3 className="text-xl font-bold mb-2">{rule.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{rule.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contatto */}
      <CtaBand
        title={t('contact.title')}
        description={t('contact.description')}
        icon={<Mail className="h-9 w-9" aria-hidden="true" />}
      >
        <ul className="space-y-3 mb-8 text-left">
          {checklist.map((item, index) => (
            <li key={index} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
              <Check className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#93C2F7]" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="callout callout-night mb-10 flex-col sm:flex-row text-left">
          <ShieldAlert className="h-6 w-6 flex-shrink-0 text-[#93C2F7]" aria-hidden="true" />
          <p className="font-medium">{t('contact.warning')}</p>
        </div>

        <a href={mailto} className="btn-shine btn-light group">
          <span className="relative z-10 inline-flex items-center">
            {t('contact.cta')}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </a>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-white/60">
          <span>{SPORTELLO_EMAIL}</span>
          <CopyButton
            value={SPORTELLO_EMAIL}
            label={t('contact.copy')}
            copiedLabel={t('contact.copied')}
            className="rounded-full border border-white/25 p-1.5 text-white/60 hover:border-white hover:text-white"
          />
        </div>

        <p className="mt-10 border-t border-white/15 pt-6 text-left text-sm text-white/60">
          {t('contact.disclaimer')}
        </p>
      </CtaBand>
    </main>
  )
}
