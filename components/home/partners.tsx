'use client'

import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'

// Seconds for one full pass over the partner list
const LOOP_SECONDS = 40
// Pixels the pointer must travel before a press becomes a drag instead of a click
const DRAG_THRESHOLD = 5

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
    { name: "Fondazione Piemonte Innova", label: "Fondazione\nPiemonte Innova", logo: "/Partners/logo-fondazione-piemonte-innova.png", logoDark: "/Partners/logo-fondazione-piemonte-innova-dark.png", href: "https://piemonteinnova.it" },
    { name: "ToTeM - Torino Tech Map", label: "ToTeM\nTorino Tech Map", logo: "/Partners/logo-totem.png", logoDark: "/Partners/logo-totem-dark.png", href: "https://torinotechmap.it" },
  ]

  const trackRef = useRef<HTMLDivElement>(null)
  const offset = useRef(0)
  const paused = useRef(false)
  const drag = useRef<{ startX: number; startOffset: number; pointerId: number; moved: boolean } | null>(null)
  const suppressClick = useRef(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    let frame = 0
    let last = performance.now()
    const tick = (now: number) => {
      const dt = (now - last) / 1000
      last = now
      if (reducedMotion.matches) {
        track.style.transform = ''
      } else {
        // The track holds two identical copies, so wrapping by half its width is seamless
        const half = track.scrollWidth / 2
        if (!paused.current && !drag.current) offset.current -= (half / LOOP_SECONDS) * dt
        if (half > 0) offset.current = ((offset.current % half) - half) % half
        track.style.transform = `translate3d(${offset.current}px, 0, 0)`
      }
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return
    drag.current = { startX: e.clientX, startOffset: offset.current, pointerId: e.pointerId, moved: false }
  }

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = drag.current
    if (!d || d.pointerId !== e.pointerId) return
    const dx = e.clientX - d.startX
    if (!d.moved && Math.abs(dx) > DRAG_THRESHOLD) {
      d.moved = true
      // Capture only once it is a real drag, otherwise plain clicks would lose their link target
      e.currentTarget.setPointerCapture(e.pointerId)
    }
    if (d.moved) offset.current = d.startOffset + dx
  }

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = drag.current
    if (!d || d.pointerId !== e.pointerId) return
    suppressClick.current = d.moved
    drag.current = null
  }

  const onClickCapture = (e: React.MouseEvent) => {
    if (suppressClick.current) {
      e.preventDefault()
      e.stopPropagation()
      suppressClick.current = false
    }
  }

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
        <div
          className="relative overflow-hidden select-none cursor-grab active:cursor-grabbing touch-pan-y motion-reduce:cursor-auto [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
          onMouseEnter={() => { paused.current = true }}
          onMouseLeave={() => { paused.current = false }}
          onFocus={() => { paused.current = true }}
          onBlur={() => { paused.current = false }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onClickCapture={onClickCapture}
        >
          <div ref={trackRef} className="flex w-max will-change-transform motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center">
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
                      draggable={false}
                      className="text-center block w-full h-full"
                    >
                      <div className="w-full h-24 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <img src={partner.logo} draggable={false} alt={`${partner.name} logo`} className={`max-w-full max-h-full object-contain ${partner.logoDark ? 'dark:hidden' : ''} ${partner.className || ''}`} />
                        {partner.logoDark && (
                          <img src={partner.logoDark} draggable={false} alt={`${partner.name} logo`} className={`hidden dark:block max-w-full max-h-full object-contain ${partner.className || ''}`} />
                        )}
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
