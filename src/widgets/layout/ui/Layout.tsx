import { Outlet, ScrollRestoration, useMatches } from 'react-router-dom'
import { Header } from '@/widgets/header/ui/Header'
import { Footer } from '@/widgets/footer/ui/Footer'
import { Subscribe } from '@/widgets/subscribe/ui/Subscribe'
import { PopupProvider } from '@/features/contact-popup/model/PopupContext'
import { ContactPopup } from '@/features/contact-popup/ui/ContactPopup'

/** На страницах с handle={{ noSubscribe: true }} синий блок скрывается (по ТЗ). */
export function Layout() {
  const matches = useMatches()
  const hide = matches.some((m) => (m.handle as { noSubscribe?: boolean } | undefined)?.noSubscribe)

  return (
    <PopupProvider>
      <Header />
      <main><Outlet /></main>
      {!hide && <Subscribe />}
      <Footer />
      <ContactPopup />
      <ScrollRestoration />
    </PopupProvider>
  )
}
