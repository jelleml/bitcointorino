import { ArrowLeft } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import type { Pathname } from '@/i18n/routing'

/** Link "torna indietro" in vetro, da usare dentro PageHero. */
export function BackLink({ label, href = '/ecosystem' }: { label: string; href?: Pathname }) {
  return (
    <Link
      href={href}
      className="glass group inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-white/85 transition-colors hover:bg-white/15 hover:text-white"
    >
      <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
      {label}
    </Link>
  )
}
