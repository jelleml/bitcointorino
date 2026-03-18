import Image from "next/image"
import { useTranslations } from 'next-intl'

export function TorinoBitcoinCity() {
  const t = useTranslations('TorinoBitcoinCity');

  return (
    <section
      className="relative bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('/parallax-bg2.jpg')",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="flex justify-center mb-[50px]">
            <div style={{ width: "780px", maxWidth: "100%" }}>
              <Image
                src="/torino-bitcoin-city-logo.png"
                alt="Torino Bitcoin City"
                width={1621}
                height={487}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
          <p className="text-xl md:text-2xl text-gray-100 leading-relaxed font-light">
            {t('description')}
          </p>
        </div>
      </div>
    </section>
  )
}
