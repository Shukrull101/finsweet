import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from 'react'
import { cn } from '@/shared/lib/cn'

type Shared = { label?: string; error?: string; variant?: 'box' | 'line' }

const base = 'w-full bg-white text-sm text-ink outline-none transition placeholder:text-muted/60 focus:border-brand'
const variants = {
  box: 'rounded-md border border-ink/15 px-4 py-3.5 focus:ring-2 focus:ring-brand/20',
  line: 'rounded-none border-0 border-b border-ink/20 px-0 py-2',
}

const Shell = ({ label, error, children }: { label?: string; error?: string; children: React.ReactNode }) => (
  <label className="block text-left">
    {label && <span className="mb-1.5 block text-xs text-muted">{label}</span>}
    {children}
    {error && <span role="alert" className="mt-1 block text-xs text-red-500">{error}</span>}
  </label>
)

export const Input = forwardRef<HTMLInputElement, Shared & InputHTMLAttributes<HTMLInputElement>>(
  ({ label, error, variant = 'box', className, ...p }, ref) => (
    <Shell label={label} error={error}>
      <input ref={ref} aria-invalid={!!error} className={cn(base, variants[variant], error && 'border-red-500', className)} {...p} />
    </Shell>
  ),
)

export const Textarea = forwardRef<HTMLTextAreaElement, Shared & TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ label, error, variant = 'box', className, ...p }, ref) => (
    <Shell label={label} error={error}>
      <textarea ref={ref} rows={4} aria-invalid={!!error} className={cn(base, variants[variant], 'resize-none', error && 'border-red-500', className)} {...p} />
    </Shell>
  ),
)

export const FormSuccess = ({ children }: { children: React.ReactNode }) => (
  <p role="status" className="animate-pop rounded-md bg-mint px-4 py-3 text-sm text-ink">✅ {children}</p>
)
