import type { ReactNode } from 'react'
import { cn } from '@/shared/lib/cn'
import { Reveal } from '@/shared/lib/Reveal'
import { Button } from './Button'
import { Photo } from './Photo'
import { H2, Lead, SectionLabel } from './Typography'

/** Секция «текст + фото». reverse — зеркальное расположение. */
export function TextPhoto({ label, title, text, image, reverse, cta, children }: {
  label?: string; title: string; text: string; image: string; reverse?: boolean
  cta?: { to: string; label: string }; children?: ReactNode
}) {
  return (
    <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
      <Reveal className={cn(reverse && 'md:order-2')}>
        <div className="aspect-[4/3] overflow-hidden rounded-xl">
          <Photo src={image} alt={title} className="transition-transform duration-700 hover:scale-105" />
        </div>
      </Reveal>
      <Reveal delay={120} className={cn(reverse && 'md:order-1')}>
        {label && <SectionLabel>{label}</SectionLabel>}
        <H2 className="mb-5 text-2xl md:text-3xl lg:text-4xl">{title}</H2>
        <Lead className="mb-6">{text}</Lead>
        {children}
        {cta && <Button variant="link" to={cta.to}>{cta.label}</Button>}
      </Reveal>
    </div>
  )
}
