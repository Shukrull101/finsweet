import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/shared/lib/cn'

type Props = {
  variant?: 'primary' | 'outline' | 'link' | 'light'
  to?: string
  arrow?: boolean
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const styles = {
  primary: 'bg-brand text-white px-6 py-3.5 rounded-md hover:bg-[#4749d6] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/30 active:translate-y-0 disabled:bg-brand/40 disabled:hover:translate-y-0 disabled:hover:shadow-none',
  light: 'bg-white text-ink px-6 py-3.5 rounded-md hover:bg-peach hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50',
  outline: 'border border-ink/20 text-ink px-6 py-3.5 rounded-md hover:border-brand hover:text-brand hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-40',
  link: 'text-brand px-0 py-1 hover:gap-3',
}

export function Button({ variant = 'primary', to, arrow, children, className, ...rest }: Props) {
  const cls = cn(
    'inline-flex items-center justify-center gap-2 text-sm font-medium transition-all duration-200 disabled:cursor-not-allowed',
    styles[variant],
    className,
  )
  const content = (
    <>
      {children}
      {(arrow || variant === 'link') && <ArrowRight size={16} />}
    </>
  )
  if (to) return <Link to={to} className={cls}>{content}</Link>
  return <button className={cls} {...rest}>{content}</button>
}
