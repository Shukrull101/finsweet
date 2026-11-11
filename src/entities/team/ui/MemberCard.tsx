import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { ROUTES } from '@/shared/config/routes'
import type { Member } from '../model/data'

const socials = [[Twitter, 'Twitter'], [Instagram, 'Instagram'], [Linkedin, 'LinkedIn'], [Facebook, 'Facebook']] as const

/** Карточка сотрудника: при наведении фото затемняется, появляются имя, должность и соцсети. */
export const MemberCard = ({ member }: { member: Member }) => (
  <article className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-ink">
    <img src={member.photo} alt={member.name} className="size-full object-cover object-top transition duration-700 group-hover:scale-105 group-hover:grayscale" />
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-5 pt-16 text-white transition-opacity duration-300 group-hover:opacity-0">
      <h3 className="font-semibold">{member.name}</h3>
      <p className="text-sm text-white/70">{member.role}</p>
    </div>
    <div className="absolute inset-0 flex flex-col justify-end bg-ink/70 p-5 pb-7 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
      <h3 className="text-xl font-semibold">
        <Link to={ROUTES.member(member.id)} className="after:absolute after:inset-0 focus-visible:outline-offset-[-6px]">{member.name}</Link>
      </h3>
      <p className="mt-1 mb-4 text-sm text-white/70">{member.role}</p>
      <ul className="relative z-10 flex gap-4">
        {socials.map(([Icon, name]) => <li key={name}><a href="#" aria-label={`${member.name} on ${name}`} className="transition hover:text-accent"><Icon size={16} /></a></li>)}
      </ul>
    </div>
    <span aria-hidden className="absolute inset-x-0 bottom-0 flex h-2"><i className="w-8 bg-accent" /><i className="w-8 bg-peach" /><i className="w-8 bg-brand/50" /><i className="flex-1 bg-brand" /></span>
  </article>
)
