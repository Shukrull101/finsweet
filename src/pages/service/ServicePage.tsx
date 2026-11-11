import { ArrowRight } from 'lucide-react'
import { ROUTES } from '@/shared/config/routes'
import { Button } from '@/shared/ui/Button'
import { Section } from '@/shared/ui/Section'
import { H2, Lead, SectionLabel } from '@/shared/ui/Typography'
import { TextPhoto } from '@/shared/ui/TextPhoto'
import { Process } from '@/widgets/process/ui/Process'
import { services } from '@/entities/service/model/data'

export function ServicePage() {
  return (
    <>
      <Section tone="peach" className="py-16 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="hero-rise">
            <SectionLabel>What we do</SectionLabel>
            <h1 className="mb-5 text-4xl leading-[1.15] font-semibold md:text-5xl">We build software solutions that solve clients’ business challenges</h1>
            <Lead className="mb-7 max-w-lg">Pick a service to see how we work, or talk to us about something that does not fit a category.</Lead>
            <Button to={ROUTES.contact} arrow>Start a project</Button>
          </div>
          <nav aria-label="Services" className="hero-rise [animation-delay:150ms]">
            <ul className="divide-y divide-ink/10 rounded-xl bg-white/60 p-2">
              {services.map((s) => (
                <li key={s.id}><a href={`#${s.id}`} className="group flex items-center justify-between rounded-lg px-4 py-3.5 font-medium transition hover:bg-white hover:text-brand">{s.title}<ArrowRight size={16} className="transition group-hover:translate-x-1" /></a></li>
              ))}
            </ul>
          </nav>
        </div>
      </Section>

      <Process />

      {services.map((s, i) => (
        <Section key={s.id} id={s.id} tone={i % 2 === 1 ? 'mint' : 'white'}>
          <TextPhoto label={s.title} title={s.heading} text={s.text} image={s.image} reverse={i % 2 === 0} cta={{ to: ROUTES.contact, label: 'Talk to us' }} />
        </Section>
      ))}
    </>
  )
}
