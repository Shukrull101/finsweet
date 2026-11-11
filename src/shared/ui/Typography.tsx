import type { ReactNode } from 'react'
import { cn } from '@/shared/lib/cn'

/** Метка секции: оранжевая линия + подпись. */
export const SectionLabel = ({ children, className }: { children: ReactNode; className?: string }) => (
  <p className={cn('mb-4 flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase', className)}>
    <span className="h-0.5 w-5 bg-accent" />
    {children}
  </p>
)

export const H2 = ({ children, className }: { children: ReactNode; className?: string }) => (
  <h2 className={cn('text-[28px] leading-[1.2] font-semibold sm:text-3xl md:text-4xl lg:text-[44px]', className)}>{children}</h2>
)

export const Lead = ({ children, className }: { children: ReactNode; className?: string }) => (
  <p className={cn('text-sm leading-7 text-muted md:text-base', className)}>{children}</p>
)

/** Маленькая оранжево-синяя декорация из макета. */
export const Deco = ({ className }: { className?: string }) => (
  <span aria-hidden className={cn('pointer-events-none absolute grid grid-cols-2 gap-0.5', className)}>
    <i className="size-3 bg-accent" /><i className="size-3 bg-peach" />
    <i className="size-3 bg-brand/40" /><i className="size-3 bg-accent/60" />
  </span>
)
