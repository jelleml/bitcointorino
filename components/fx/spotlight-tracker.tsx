'use client'

import { useEffect } from 'react'

/**
 * Un solo listener globale che aggiorna --mx/--my su qualsiasi .spotlight-card sotto il puntatore,
 * così l'alone che segue il cursore funziona anche nelle pagine renderizzate lato server.
 */
export function SpotlightTracker() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest?.('.spotlight-card') as HTMLElement | null
      if (!card) return
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`)
      card.style.setProperty('--my', `${e.clientY - rect.top}px`)
    }
    document.addEventListener('pointermove', onMove, { passive: true })
    return () => document.removeEventListener('pointermove', onMove)
  }, [])

  return null
}
