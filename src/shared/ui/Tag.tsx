import type { ReactNode } from 'react'
import { cn } from '@/shared/lib/cn'

export const Tag = ({ children, className }: { children: ReactNode; className?: string }) => (
  <span className={cn('inline-block rounded-full bg-lilac px-3 py-1 text-xs font-medium text-brand', className)}>{children}</span>
)
