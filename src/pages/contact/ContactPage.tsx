import { Mail, MapPin, Phone } from 'lucide-react'
import { Container } from '@/shared/ui/Container'
import { Lead } from '@/shared/ui/Typography'
import { ContactForm } from '@/features/contact-form/ui/ContactForm'

export function ContactPage() {
  return (
    <>
      <Container className="grid gap-10 py-14 md:py-20 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div className="hero-rise">
          <h1 className="mb-4 text-4xl leading-tight font-semibold md:text-5xl">Have a question? Let’s get in touch with us 👋</h1>
          <Lead className="mb-8 max-w-md">Fill in the form and we will reply within 24 hours on working days.</Lead>
          <ContactForm />
        </div>
        <aside className="hero-rise relative overflow-hidden rounded-xl bg-brand p-8 text-white [animation-delay:150ms] md:p-10">
          <span aria-hidden className="absolute -right-10 -bottom-10 size-48 rounded-full bg-white/10" />
          <h2 className="mb-6 text-2xl font-semibold">Contact details</h2>
          <ul className="space-y-5 text-sm">
            <li className="flex gap-3"><Phone size={18} /><a href="tel:+15550123456" className="hover:underline">+1 (555) 012-3456</a></li>
            <li className="flex gap-3"><Mail size={18} /><a href="mailto:hello@finsweet.com" className="hover:underline">hello@finsweet.com</a></li>
            <li className="flex gap-3"><MapPin size={18} />12 Rudaki Avenue, Dushanbe, Tajikistan</li>
          </ul>
        </aside>
      </Container>
      <Container className="pb-16">
        <div className="aspect-[16/7] min-h-64 overflow-hidden rounded-xl bg-mint">
          <iframe title="Finsweet office on the map" className="size-full border-0" loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=68.76%2C38.55%2C68.82%2C38.59&layer=mapnik" />
        </div>
      </Container>
    </>
  )
}
