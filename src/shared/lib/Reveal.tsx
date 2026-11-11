import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from './cn'

/** Плавное появление блока при скролле (IntersectionObserver). */
export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisible(true)
        io.disconnect()
      }
    }, { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn('transition-all duration-700 ease-out', visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0', className)}
    >
      {children}
    </div>
  )
}
