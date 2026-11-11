import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { ROUTES } from '@/shared/config/routes'
import { Container } from '@/shared/ui/Container'
import { Logo } from '@/shared/ui/Logo'
import { services } from '@/entities/service/model/data'

const cols = [
  { title: 'Finsweet', links: [['Home', ROUTES.home], ['Service', ROUTES.service], ['Company', ROUTES.company], ['Career', ROUTES.career], ['Blog', ROUTES.blog]] },
  { title: 'Service', links: services.map((s) => [s.title, `${ROUTES.service}#${s.id}`]) },
  { title: 'Resources', links: [['About us', ROUTES.company], ['Contact us', ROUTES.contact], ['Privacy policy', ROUTES.privacy], ['Open roles', ROUTES.career], ['Blog', ROUTES.blog]] },
]
const socials = [[Facebook, 'Facebook'], [Twitter, 'Twitter'], [Instagram, 'Instagram'], [Linkedin, 'LinkedIn']] as const

export function Footer() {
  return (
    <footer className="bg-white pt-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr]">
          <div>
            <h2 className="mb-6 text-4xl leading-tight font-semibold md:text-5xl">Let’s make<br />something special</h2>
            <p className="mb-1 font-semibold">Let’s talk 👋</p>
            <a href="tel:+15550123456" className="block text-sm text-muted hover:text-brand">+1 (555) 012-3456</a>
            <a href="mailto:hello@finsweet.com" className="block text-sm text-muted hover:text-brand">hello@finsweet.com</a>
            <p className="mt-4 max-w-xs text-sm text-muted">12 Rudaki Avenue, Dushanbe, Tajikistan</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {cols.map((c) => (
              <nav key={c.title} aria-label={c.title}>
                <h3 className="mb-4 text-sm font-semibold">{c.title}</h3>
                <ul className="space-y-2.5">
                  {c.links.map(([label, to]) => <li key={label}><Link to={to} className="text-sm text-muted transition hover:text-brand">{label}</Link></li>)}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink/10 py-6 sm:flex-row">
          <div className="flex items-center gap-4"><Logo dark={false} className="text-lg" /><span className="text-xs text-muted">© 2024 Finsweet. All rights reserved.</span></div>
          <ul className="flex gap-3">
            {socials.map(([Icon, name]) => (
              <li key={name}><a href="#" aria-label={name} className="grid size-9 place-items-center rounded-full bg-ink text-white transition hover:-translate-y-1 hover:bg-brand"><Icon size={15} /></a></li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="h-6 bg-peach" />
    </footer>
  )
}
