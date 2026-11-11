import type { ReactNode } from 'react'
import { cn } from '@/shared/lib/cn'
import { Container } from './Container'

const bg = { white: 'bg-white', mint: 'bg-mint', peach: 'bg-peach', lilac: 'bg-lilac', dark: 'bg-ink text-white' }

export function Section({ tone = 'white', id, children, className }: {
  tone?: keyof typeof bg; id?: string; children: ReactNode; className?: string
}) {
  return (
    <section id={id} className={cn('py-14 md:py-20', bg[tone], className)}>
      <Container>{children}</Container>
    </section>
  )
}
