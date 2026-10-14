import Image from "next/image"
import { useTranslations } from 'next-intl'
import { Reveal } from "@/components/fx/reveal"

export function TorinoBitcoinCity() {
  const t = useTranslations('TorinoBitcoinCity');

  return (
    <section
      className="relative isolate overflow-hidden md:bg-fixed bg-center bg-cover py-16 md:py-40"
      style={{ backgroundImage: "url('/parallax-bg2.jpg')" }}
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-[#00020C]/90 via-[#00052E]/65 to-[#00020C]/90" />
      <div aria-hidden="true" className="absolute left-1/2 top-1/2 -z-10 h-[30rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(9,85,165,0.3),transparent)] animate-aurora" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Reveal className="flex justify-center mb-12">
            <div className="w-[780px] max-w-full animate-float [animation-duration:8s]">
              <Image
                src="/torino-bitcoin-city.png"
                alt="Torino Bitcoin City"
                width={1024}
                height={420}
                sizes="(min-width: 832px) 780px, calc(100vw - 2rem)"
                className="w-full h-auto drop-shadow-[0_10px_40px_rgba(147,194,247,0.35)]"
              />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-lg md:text-2xl text-white/85 leading-relaxed font-light">
              {t('description')}
            </p>
          </Reveal>
          <div aria-hidden="true" className="mx-auto mt-12 h-px w-40 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        </div>
      </div>
    </section>
  )
}
