import { Link } from 'react-router-dom'
import { cn } from '@/shared/lib/cn'

export const Logo = ({ dark = true, className }: { dark?: boolean; className?: string }) => (
  <Link to="/" aria-label="Finsweet — home" className={cn('flex items-center gap-2 text-xl font-semibold', dark ? 'text-white' : 'text-ink', className)}>
    <span className="grid size-6 grid-cols-2 gap-0.5">
      <i className="bg-accent" /><i className="bg-brand" /><i className="bg-brand" /><i className="bg-white/70" />
    </span>
    Finsweet
  </Link>
)
