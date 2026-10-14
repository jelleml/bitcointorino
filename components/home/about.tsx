import { BookOpen, ShieldCheck, Megaphone, Handshake } from "lucide-react"
import { useTranslations } from 'next-intl'
import { Reveal } from "@/components/fx/reveal"
import { Spotlight } from "@/components/fx/spotlight"

const ITEMS = [
  { key: 'divulgation', icon: BookOpen },
  { key: 'adoption', icon: ShieldCheck },
  { key: 'promotion', icon: Megaphone },
  { key: 'connection', icon: Handshake },
] as const

export function About() {
  const t = useTranslations('About');

  return (
    <section id="chi-siamo" className="relative isolate overflow-hidden py-16 md:py-32 bg-gray-50 dark:bg-muted scroll-mt-16">
      <div aria-hidden="true" className="dot-pattern absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div aria-hidden="true" className="absolute -top-40 left-1/2 -z-10 h-80 w-[60rem] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(7,69,141,0.10),transparent)] dark:bg-[radial-gradient(closest-side,rgba(0,19,142,0.4),transparent)]" />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Titolo nascosto alla vista ma mantenuto per screen reader e SEO */}
          <h2 className="sr-only">{t('title')}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {ITEMS.map(({ key, icon: Icon }, i) => (
              <Reveal key={key} delay={i * 110}>
                <Spotlight className="group h-full p-7 md:p-8">
                  <span aria-hidden="true" className="absolute right-6 top-5 font-mono text-xs text-muted-foreground/60">
                    0{i + 1}
                  </span>
                  <div className="relative mb-6 inline-flex">
                    <div aria-hidden="true" className="absolute inset-0 rounded-2xl bg-bitcoin-blue/40 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-bitcoin-blue-light to-bitcoin-blue-dark text-white shadow-lg shadow-bitcoin-blue/30 ring-1 ring-white/20 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 transition-colors group-hover:text-bitcoin-blue">
                    {t(`${key}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t(`${key}.description`)}
                  </p>
                  <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-bitcoin-blue via-[#5B8DEF] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
