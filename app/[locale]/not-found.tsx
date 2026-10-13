import { useTranslations } from "next-intl"
import { Home } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { HeroBackground } from "@/components/home/hero-background"

/** 404: stessa testata blu notte della home. */
export default function NotFound() {
  const t = useTranslations("NotFound")

  return (
    <section
      className="noise relative isolate overflow-hidden min-h-[calc(100svh-4rem)] flex items-center py-20 md:py-28 text-white"
      style={{ background: "linear-gradient(to bottom, #00020C 0%, #00052E 50%, #00138E 100%)" }}
    >
      <HeroBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/85 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#E55414] animate-ping-soft" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E55414]" />
            </span>
            {t("eyebrow")}
          </span>

          <h1 className="relative mb-2 animate-fade-up [animation-delay:100ms]">
            <div aria-hidden="true" className="absolute inset-x-[10%] inset-y-[20%] -z-10 rounded-full bg-[#0955A5]/40 blur-[80px]" />
            <span className="sr-only">{t("heading")}</span>
            <span aria-hidden="true" className="block text-[7rem] sm:text-[9rem] md:text-[12rem] font-bold leading-none tracking-tighter bg-gradient-to-b from-white to-[#93C2F7]/40 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(147,194,247,0.35)]">
              404
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-base md:text-xl text-white/80 leading-relaxed animate-fade-up [animation-delay:200ms]">
            {t("subtitle")}
          </p>

          <div className="mt-10 animate-fade-up [animation-delay:300ms]">
            <Link href="/" className="btn-shine btn-light group">
              <span className="relative z-10 inline-flex items-center">
                <Home className="mr-2 h-5 w-5" aria-hidden="true" />
                {t("home")}
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#93C2F7]/60 to-transparent" />
    </section>
  )
}
