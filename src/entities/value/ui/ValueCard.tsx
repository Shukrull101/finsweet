import type { LucideIcon } from 'lucide-react'

export const ValueCard = ({ title, text, icon: Icon }: { title: string; text: string; icon: LucideIcon }) => (
  <article className="flex gap-4 rounded-lg bg-white p-5 shadow-sm transition duration-300 hover:translate-x-1 hover:shadow-md">
    <span className="grid size-10 shrink-0 place-items-center rounded-md bg-peach text-accent"><Icon size={18} /></span>
    <div>
      <h3 className="mb-1 font-semibold">{title}</h3>
      <p className="text-sm leading-6 text-muted">{text}</p>
    </div>
  </article>
)
