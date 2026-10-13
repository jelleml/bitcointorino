import { Metadata } from "next"
import {
  ArrowRight,
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
import { PageHero } from "@/components/layout/page-hero"
import { SectionHeading } from "@/components/layout/section-heading"
import { Reveal } from "@/components/fx/reveal"

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
  const steps = t.raw('join.steps') as string[]

  const participation = [
    { icon: Eye, title: t('participation.observer.title'), description: t('participation.observer.description') },
    { icon: Wrench, title: t('participation.operational.title'), description: t('participation.operational.description') },
  ]

  return (
    <main className="min-h-screen">
      <PageHero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
      >
        <a
          href={MEMBERSHIP_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shine btn-orange group inline-flex h-14 items-center justify-center rounded-full px-9 text-base font-bold"
        >
          <span className="relative z-10 inline-flex items-center">
            {t('hero.cta')}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </a>
      </PageHero>

      {/* Cosa ottieni come socio */}
      <section className="section-alt py-16 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeading title={t('benefits.title')} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefitIcons[index]
                return (
                  <Reveal key={index} delay={(index % 2) * 100}>
                    <div className="spotlight-card group h-full p-7">
                      {/* Su mobile l'icona sta sopra ai testi, da sm torna affiancata */}
                      <div className="flex flex-col items-start gap-5 sm:flex-row">
                        <div className="icon-tile h-12 w-12 shrink-0">
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Due modalità di partecipazione */}
      <section className="py-16 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeading title={t('participation.title')} description={t('participation.description')} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {participation.map(({ icon: Icon, title, description }, index) => (
                <Reveal key={title} delay={index * 100}>
                  <div className="spotlight-card group h-full p-8">
                    <div className="icon-tile mb-6 h-14 w-14">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quota associativa */}
      <section className="section-alt section-night overflow-hidden py-16 md:py-28">
        {/* Sfondo blu notte visibile solo in light mode, come la fascia Sportello in home */}
        <div aria-hidden="true" className="band-night-mesh absolute inset-0 -z-20 bg-[length:300%_300%] animate-gradient-pan dark:hidden" />
        <div aria-hidden="true" className="absolute -top-32 -right-32 -z-10 h-96 w-96 rounded-full bg-[#93C2F7]/20 blur-3xl animate-aurora dark:hidden" />
        <div aria-hidden="true" className="absolute -bottom-40 -left-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-[#00138E]/70 blur-3xl animate-aurora [animation-delay:-8s] dark:hidden" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] dark:hidden" />

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading title={t('fee.title')} />
            <Reveal>
              <div className="spotlight-card relative p-10 md:p-14 text-center">
                <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 h-40 w-80 -translate-x-1/2 rounded-full bg-bitcoin-blue/15 blur-3xl dark:bg-[#00138E]/60" />
                <p className="text-6xl md:text-7xl font-bold tracking-tight mb-6">
                  <span className="text-gradient">{t('fee.amount')}</span>
                </p>
                <p className="text-base md:text-lg text-muted-foreground">{t('fee.description')}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Come iscriverti */}
      <section className="py-16 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading title={t('join.title')} description={t('join.description')} />

            <ol className="space-y-5">
              {steps.map((step, index) => (
                <Reveal as="li" key={index} delay={index * 100}>
                  <div className="spotlight-card p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                      <div className="flex items-center gap-5 flex-1">
                        <div className="step-badge">{index + 1}</div>
                        <p className="text-lg font-medium">{step}</p>
                      </div>
                      {index === 0 && (
                        <a
                          href={MEMBERSHIP_FORM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-bitcoin-blue to-bitcoin-blue-light px-6 font-bold text-white shadow-lg shadow-bitcoin-blue/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-bitcoin-blue/40 sm:flex-shrink-0"
                        >
                          {t('join.formLink')}
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal className="mt-8">
              {/* Su mobile l'icona sta sopra al testo, da sm torna affiancata */}
              <div className="callout flex-col sm:flex-row">
                <Info className="h-6 w-6 flex-shrink-0 text-bitcoin-blue" aria-hidden="true" />
                <p className="text-muted-foreground">{t('join.note')}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
