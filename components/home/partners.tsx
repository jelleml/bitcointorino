import { useTranslations } from 'next-intl'

export function Partners() {
  const t = useTranslations('Partners');

  // Mock partner logos (in production, these would be actual logo images)
// ...
  const partners = [
    { name: "Plan B Network", logo: "/logo-plan-b-network.svg?v=2", href: "https://planb.network" },
    { name: "Blox Space", logo: "/logo-blox.svg?v=2", className: "scale-75", href: "https://linkedin.com/company/blox-space" },
    { name: "Comune di Torino", logo: "/logo-comune-di-torino.svg?v=2", href: "https://comune.torino.it" },
    { name: "BitCuneo", logo: "/logo-bitcuneo.svg?v=2", href: "https://bitcuneo.it" },
    { name: "ToTeM", logo: "/logo-totem.svg?v=2", className: "scale-150", href: "https://torinotechmap.it" },
    { name: "BitBox", logo: "/logo-bitbox.svg?v=2", className: "scale-75", href: "https://bitbox.swiss" },
    { name: "Politecnico di Torino", logo: "/logo-politecnico-di-torino.svg?v=2", href: "https://polito.it" },
    { name: "BitCare Forum", logo: "/logo-bitcare-forum.svg?v=2", href: "https://bitcareforum.it" },
  ]

  return (
    <section
      id="partner"
      className="pt-16 md:pt-[114px] pb-16 md:pb-[164px] bg-gray-50 dark:bg-black scroll-mt-16"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('title')}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-bitcoin-blue transition-colors group"
            >
              <a 
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center block w-full h-full"
              >
                {/* Actual logo image */}
                <div className="w-24 h-24 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <img src={partner.logo} alt={`${partner.name} logo`} className={`max-w-full max-h-full object-contain ${partner.className || ''}`} />
                </div>
                <div className="text-sm font-medium text-muted-foreground group-hover:text-bitcoin-blue transition-colors">
                  {partner.name}
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            {t('becomePartner')}{" "}
            <a
              href="mailto:bitcoin.torino@proton.me"
              className="text-bitcoin-blue font-bold hover:underline"
            >
              {t('contactUs')}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
