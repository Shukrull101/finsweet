import type { ImgHTMLAttributes } from 'react'
import { cn } from '@/shared/lib/cn'

export const Photo = ({ className, alt = '', ...p }: ImgHTMLAttributes<HTMLImageElement>) => (
  <img loading="lazy" alt={alt} className={cn('size-full object-cover', className)} {...p} />
)
