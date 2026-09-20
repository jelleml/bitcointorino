import { Metadata } from "next"
import { Link } from "@/i18n/navigation"
import {
  ArrowRight,
  BookOpen,
  Building2,
  Calendar,
  CheckCircle2,
  Handshake,
  Mail,
  Megaphone,
  ScrollText,
  Send,
  ShieldCheck,
  UserPlus,
  Users,
  Vote,
  Wallet,
} from "lucide-react"
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { Button } from "@/components/ui/button"

// Modulo di adesione. Sostituire con l'URL del form quando disponibile: il
// resto della pagina non cambia, la CTA segue questa costante.
const MEMBERSHIP_FORM_URL = "mailto:bitcoin.torino@proton.me?subject=Richiesta%20di%20adesione"

const CONTACT_EMAIL = "bitcoin.torino@proton.me"

const isExternalForm = MEMBERSHIP_FORM_URL.startsWith('http')

const formLinkProps = isExternalForm
  ? { target: "_blank", rel: "noopener noreferrer" as const }
  : {}

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

const membershipItems = [
  { id: "vote", Icon: Vote },
  { id: "projects", Icon: Users },
  { id: "fee", Icon: Wallet },
  { id: "transparency", Icon: ScrollText },
]

const pillars = [
  { id: "divulgation", Icon: BookOpen },
  { id: "adoption", Icon: ShieldCheck },
  { id: "promotion", Icon: Megaphone },
  { id: "connection", Icon: Handshake },
]

const channels = [
  { id: "events", Icon: Calendar, href: "https://luma.com/user/bitcointorino" },
  { id: "channel", Icon: Send, href: "https://t.me/bitcointorinochannel" },
  { id: "group", Icon: Users, href: "https://t.me/bitcointorinogroup" },
]

export default function SociPage() {
  const t = useTranslations('Soci')
  const tAbout = useTranslations('About')

  const steps = t.raw('steps.items') as { title: string; description: string }[]
  const facts = t.raw('facts.items') as { label: string; value: string }[]

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-bitcoin-blue to-bitcoin-blue-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <UserPlus className="h-12 w-12" aria-hidden="true" />
              </div>
            </div>
            <p className="text-sm md:text-base uppercase tracking-wide text-white/70 mb-4">
              {t('hero.eyebrow')}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-base text-black bg-white hover:bg-gray-300">
                <a href={MEMBERSHIP_FORM_URL} {...formLinkProps}>
                  {t('hero.cta')}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base text-white border-white hover:bg-transparent hover:border-gray-300 hover:text-gray-300"
              >
                <a href="#come-funziona">{t('hero.ctaSecondary')}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cosa facciamo */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('pillars.title')}</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t('pillars.description')}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-8 md:p-12 border-2 border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px]">
                {pillars.map(({ id, Icon }) => (
                  <div key={id} className="group text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-lg bg-bitcoin-blue/10 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-bitcoin-blue" aria-hidden="true" />
                      </div>
                    </div>
                    <h3 className="font-bold mb-2 group-hover:text-bitcoin-blue transition-colors">
                      {tAbout(`${id}.title`)}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {tAbout(`${id}.description`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cosa comporta essere socio */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('membership.title')}</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t('membership.description')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {membershipItems.map(({ id, Icon }) => (
                <div
                  key={id}
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
                      <h3 className="text-xl font-bold mb-2">{t(`membership.items.${id}.title`)}</h3>
                      <p className="text-muted-foreground">
                        {t(`membership.items.${id}.description`)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Come funziona */}
      <section id="come-funziona" className="py-20 bg-gray-50 dark:bg-black scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('steps.title')}</h2>
              <p className="text-lg text-muted-foreground">{t('steps.description')}</p>
            </div>
            <ol className="space-y-6">
              {steps.map((step, index) => (
                <li
                  key={index}
                  className="bg-white dark:bg-gray-950 rounded-lg p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-bitcoin-blue transition-colors"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-bitcoin-blue text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex items-start gap-3 rounded-lg border-2 border-bitcoin-blue/20 bg-bitcoin-blue/5 p-6">
              <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-bitcoin-blue" aria-hidden="true" />
              <p className="text-muted-foreground">{t('steps.note')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* L'associazione in breve */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-bitcoin-blue/10">
                  <Building2 className="h-8 w-8 text-bitcoin-blue" aria-hidden="true" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('facts.title')}</h2>
              <p className="text-lg text-muted-foreground">{t('facts.description')}</p>
            </div>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-px overflow-hidden rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-gray-200 dark:bg-gray-700">
              {facts.map((fact, index) => (
                <div key={index} className="bg-white dark:bg-gray-950 p-6">
                  <dt className="text-sm uppercase tracking-wide text-muted-foreground mb-1">
                    {fact.label}
                  </dt>
                  <dd className="font-medium">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Prima dell'adesione */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('before.title')}</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t('before.description')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {channels.map(({ id, Icon, href }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 p-6 hover:border-bitcoin-blue hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-4 rounded-full bg-bitcoin-blue/10 group-hover:bg-bitcoin-blue group-hover:scale-110 transition-all duration-300">
                      <Icon
                        className="h-8 w-8 text-bitcoin-blue group-hover:text-white transition-colors"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t(`before.channels.${id}.title`)}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {t(`before.channels.${id}.description`)}
                    </p>
                    <span className="text-bitcoin-blue font-medium group-hover:underline">
                      {t(`before.channels.${id}.link`)} →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="py-16 bg-white dark:bg-black border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
            <p className="text-lg text-muted-foreground mb-6">{t('cta.description')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={MEMBERSHIP_FORM_URL}
                {...formLinkProps}
                className="inline-flex items-center justify-center px-6 py-3 bg-bitcoin-blue text-white font-medium rounded-lg hover:bg-bitcoin-blue-dark transition-colors"
              >
                {t('cta.primary')}
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-bitcoin-blue text-bitcoin-blue font-medium rounded-lg hover:bg-bitcoin-blue hover:text-white transition-colors"
              >
                <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
                {t('cta.secondary')}
              </a>
            </div>
            <p className="mt-6 text-muted-foreground">
              <Link href="/faq" className="text-bitcoin-blue font-medium hover:underline">
                {t('cta.faq')}
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
