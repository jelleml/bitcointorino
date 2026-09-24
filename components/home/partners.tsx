import { useTranslations } from 'next-intl'

export function Partners() {
  const t = useTranslations('Partners');

  // Mock partner logos (in production, these would be actual logo images)
// ...
  const partners = [
    { name: "Plan B Network", logo: "/Partners/logo-plan-b-network.svg?v=2", href: "https://planb.network" },
    { name: "Blox Space", logo: "/Partners/logo-blox.svg?v=2", className: "scale-75", href: "https://linkedin.com/company/blox-space" },
    { name: "BitCuneo", logo: "/Partners/logo-bitcuneo.svg?v=2", href: "https://bitcuneo.it" },
    { name: "BitBox", logo: "/Partners/logo-bitbox.svg?v=2", className: "scale-75", href: "https://bitbox.swiss" },
    { name: "BitPolito", logo: "/Partners/logo-bitpolito.svg", href: "https://t.me/bitpolito" },
    { name: "Osservatorio Bitcoin PoliTO", logo: "/Partners/logo-osservatorio-bitcoin.svg?v=2", className: "scale-75", href: "https://crypto.polito.it/bitcoin" },
    { name: "BTCPay Server Italia", logo: "/Partners/logo-btcpay-server.svg?v=2", href: "https://btcpayserver.org" },
    { name: "Bitcoin4Business", logo: "/Partners/logo-b4b.svg?v=2", href: "https://www.bitcoin4business.it" },
    { name: "TaxCare", logo: "/Partners/logo-taxcare.svg", className: "scale-75", href: "https://www.taxcare.it" },
    { name: "Club Orange", logo: "/Partners/logo-orange-club.svg", className: "scale-75", href: "https://www.cluborange.org" },
    { name: "Fondazione Piemonte Innova", label: "Fondazione\nPiemonte Innova", logo: "/Partners/logo-fondazione-piemonte-innova.png", className: "dark:brightness-0 dark:invert", href: "https://www.fondazionepiemonteinnova.it" },
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

        {/* Two identical copies side by side: translating by -50% loops seamlessly */}
        <div className="group/marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee group-hover/marquee:[animation-play-state:paused] group-focus-within/marquee:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                aria-hidden={copy === 1 ? true : undefined}
                className={`flex shrink-0 gap-8 pr-8 motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:pr-0 ${copy === 1 ? 'motion-reduce:hidden' : ''}`}
              >
                {partners.map((partner) => (
                  <li
                    key={partner.name}
                    className="w-48 shrink-0 flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-bitcoin-blue transition-colors group"
                  >
                    <a
                      href={partner.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={copy === 1 ? -1 : undefined}
                      className="text-center block w-full h-full"
                    >
                      <div className="w-full h-24 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <img src={partner.logo} alt={`${partner.name} logo`} className={`max-w-full max-h-full object-contain ${partner.className || ''}`} />
                      </div>
                      <div className="text-sm font-medium text-muted-foreground group-hover:text-bitcoin-blue transition-colors break-words hyphens-auto whitespace-pre-line">
                        {partner.label ?? partner.name}
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
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
