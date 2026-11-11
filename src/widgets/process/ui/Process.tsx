import { Section } from '@/shared/ui/Section'
import { H2, Lead, SectionLabel } from '@/shared/ui/Typography'
import { Reveal } from '@/shared/lib/Reveal'
import { steps } from '@/entities/step/model/data'
import { StepCard } from '@/entities/step/ui/StepCard'

export const Process = () => (
  <Section tone="lilac">
    <SectionLabel>Our process</SectionLabel>
    <H2 className="mb-4 max-w-2xl">The process we are working with our clients worldwide</H2>
    <Lead className="mb-10 max-w-xl">Six clear steps from the first call to long-term support, so you always know what happens next.</Lead>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((s, i) => <Reveal key={s.title} delay={(i % 3) * 100}><StepCard step={s} index={i} /></Reveal>)}
    </div>
  </Section>
)
