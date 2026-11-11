import type { LucideIcon } from 'lucide-react'
import { Button } from '@/shared/ui/Button'

export function ServiceCard({ title, text, icon: Icon, to }: { title: string; text: string; icon: LucideIcon; to: string }) {
  return (
    <article className="group rounded-xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <span className="mb-5 grid size-11 place-items-center rounded-lg bg-peach text-accent transition group-hover:bg-accent group-hover:text-white"><Icon size={20} /></span>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="mb-5 text-sm leading-6 text-muted">{text}</p>
      <Button variant="link" to={to}>Read more</Button>
    </article>
  )
}
