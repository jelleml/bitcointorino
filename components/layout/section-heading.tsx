import type { ReactNode } from 'react'
import { Reveal } from '@/components/fx/reveal'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  title: ReactNode
  description?: ReactNode
  icon?: ReactNode
  as?: 'h1' | 'h2'
  className?: string
}

/** Titolo di sezione con gradiente animato e comparsa allo scroll, come in home. */
export function SectionHeading({ title, description, icon, as: Tag = 'h2', className }: SectionHeadingProps) {
  return (
    <Reveal className={cn('text-center mb-12 md:mb-16', className)}>
      {icon && <div className="mb-6 flex justify-center">{icon}</div>}
      <Tag className="text-[1.75rem] leading-tight md:text-5xl font-bold tracking-tight">
        <span className="text-gradient">{title}</span>
      </Tag>
      {description && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{description}</p>
      )}
    </Reveal>
  )
}
