import { Code2, Coffee, HeartPulse, Laptop, Plane, GraduationCap } from 'lucide-react'
import { img } from '@/shared/assets'
import { Section } from '@/shared/ui/Section'
import { Deco, H2, Lead, SectionLabel } from '@/shared/ui/Typography'
import { Reveal } from '@/shared/lib/Reveal'
import { JobsFilter } from '@/features/jobs-filter/ui/JobsFilter'

const perks = [
  { icon: Laptop, title: 'Remote friendly', text: 'Work from home or from our Dushanbe office.' },
  { icon: GraduationCap, title: 'Learning budget', text: 'Courses, books, and conferences paid for.' },
  { icon: HeartPulse, title: 'Health cover', text: 'Insurance for you from your first day.' },
  { icon: Plane, title: 'Paid time off', text: '24 days a year plus public holidays.' },
  { icon: Coffee, title: 'Team gatherings', text: 'Two company trips every year.' },
  { icon: Code2, title: 'Modern tools', text: 'Good hardware and the software you ask for.' },
]

export function CareerPage() {
  return (
    <>
      <Section className="relative pb-10 text-center">
        <Deco className="top-10 right-8" />
        <div className="hero-rise mx-auto max-w-3xl">
          <SectionLabel className="justify-center">Careers at Finsweet</SectionLabel>
          <h1 className="text-3xl leading-tight font-semibold md:text-5xl">We hire people who are always passionate about what they do</h1>
        </div>
        <p
          aria-label="Careers"
          className="hero-rise my-6 bg-clip-text text-[clamp(72px,19vw,260px)] leading-none font-black tracking-tight text-transparent [animation-delay:150ms]"
          style={{ backgroundImage: `url("${img.careers}")`, backgroundSize: 'cover', backgroundPosition: 'center', WebkitBackgroundClip: 'text' }}
        >
          Careers
        </p>
        <Lead className="mx-auto max-w-xl">Open roles are listed below. If you do not see yours, send us your resume anyway.</Lead>
      </Section>

      <Section tone="mint" id="roles">
        <JobsFilter />
      </Section>

      <Section>
        <Reveal className="mb-10 max-w-2xl">
          <SectionLabel>Why Finsweet</SectionLabel>
          <H2>Come and join a team of highly skilled professionals</H2>
        </Reveal>
        <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 100} className="flex gap-4">
              <p.icon size={22} className="mt-1 shrink-0 text-accent" />
              <div><h3 className="mb-1 font-semibold">{p.title}</h3><p className="text-sm leading-6 text-muted">{p.text}</p></div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}
