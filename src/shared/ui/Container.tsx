import type { ReactNode } from 'react'
import { cn } from '@/shared/lib/cn'

export const Container = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn('mx-auto w-full max-w-[1200px] px-5 md:px-8', className)}>{children}</div>
)
