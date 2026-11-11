import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { NAV } from '@/shared/config/routes'
import { cn } from '@/shared/lib/cn'
import { Logo } from '@/shared/ui/Logo'
import { Container } from '@/shared/ui/Container'
import { usePopup } from '@/features/contact-popup/model/PopupContext'

const linkCls = ({ isActive }: { isActive: boolean }) =>
  cn('relative text-sm transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-accent after:transition-all',
    isActive ? 'text-white after:w-full' : 'text-white/70 after:w-0 hover:text-white hover:after:w-full')

export function Header() {
  const [menu, setMenu] = useState(false)
  const { pathname } = useLocation()
  const { show } = usePopup()

  useEffect(() => setMenu(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menu])

  return (
    <header className="sticky top-0 z-40 bg-ink">
      <Container className="flex h-[72px] items-center justify-between">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-6 lg:gap-9 md:flex">
          {NAV.map((n) => <NavLink key={n.to} to={n.to} end={n.to === '/'} className={linkCls}>{n.label}</NavLink>)}
        </nav>
        <button onClick={show} className="hidden items-center gap-1.5 rounded-md border border-white/25 px-4 py-2 text-sm text-white transition hover:border-accent hover:bg-accent md:inline-flex">
          Ask a question <ArrowUpRight size={15} />
        </button>
        <button className="grid size-10 place-items-center text-white md:hidden" aria-label={menu ? 'Close menu' : 'Open menu'} aria-expanded={menu} onClick={() => setMenu(!menu)}>
          {menu ? <X /> : <Menu />}
        </button>
      </Container>

      <div className={cn('fixed inset-x-0 top-[72px] bottom-0 bg-ink transition-all duration-300 md:hidden', menu ? 'visible translate-x-0 opacity-100' : 'invisible translate-x-full opacity-0')}>
        <nav aria-label="Mobile" className="flex flex-col gap-1 p-5">
          {NAV.map((n, i) => (
            <NavLink key={n.to} to={n.to} end={n.to === '/'} style={{ transitionDelay: menu ? `${i * 50}ms` : '0ms' }}
              className={({ isActive }) => cn('border-b border-white/10 py-4 text-2xl font-medium transition-all', menu ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0', isActive ? 'text-accent' : 'text-white')}>
              {n.label}
            </NavLink>
          ))}
          <button onClick={() => { setMenu(false); show() }} className="mt-6 rounded-md bg-brand py-4 text-white">Ask a question</button>
        </nav>
      </div>
    </header>
  )
}
