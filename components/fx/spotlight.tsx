'use client'

import { type ElementType, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SpotlightProps = {
  children: ReactNode
  className?: string
  as?: ElementType
}

/** Card con un alone luminoso che segue il puntatore (vedi .spotlight-card in globals.css). */
export function Spotlight({ children, className, as: Tag = 'div' }: SpotlightProps) {
  const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <Tag className={cn('spotlight-card', className)} onPointerMove={onPointerMove}>
      {children}
    </Tag>
  )
}
