import { HeroBricks } from '@/components/home/hero-bricks'

/** Sfondo della hero: blu notte, luce dall'alto, seta luminosa e muro di mattoni interattivo. */
export function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Luce dall'alto, come un faro su un palco */}
      <div className="absolute left-1/2 top-[-35%] h-[90%] w-[120%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(147,194,247,0.28),rgba(9,85,165,0.12)_35%,transparent_65%)] animate-breathe" />

      {/* Seta luminosa che si muove lentamente */}
      <div className="absolute -left-[20%] top-[10%] h-[70%] w-[75%] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(9,85,165,0.45),transparent_65%)] animate-drift" />
      <div className="absolute -right-[20%] bottom-[-10%] h-[75%] w-[80%] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(0,19,142,0.85),transparent_65%)] animate-drift [animation-delay:-20s] [animation-direction:reverse]" />

      {/* Muro di mattoni a vista che reagisce al puntatore */}
      <HeroBricks />

      {/* Orizzonte luminoso in basso */}
      <div className="absolute bottom-[-30%] left-1/2 h-[55%] w-[110%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(147,194,247,0.22),transparent_60%)]" />

      {/* Vignettatura per dare profondità ai bordi */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,2,12,0.65)_100%)]" />
    </div>
  )
}
