import { Section } from '@/shared/ui/Section'
import { H2, Lead, SectionLabel } from '@/shared/ui/Typography'
import { Reveal } from '@/shared/lib/Reveal'
import { values } from '@/entities/value/model/data'
import { ValueCard } from '@/entities/value/ui/ValueCard'

export const Values = () => (
  <Section tone="mint">
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal>
        <SectionLabel>Our expertise</SectionLabel>
        <H2 className="mb-5">We want to get local identification in every corner of the world in this era of global citizenship</H2>
        <Lead>We hire local people, learn local markets, and build products that feel native wherever they are used.</Lead>
      </Reveal>
      <div className="space-y-4">
        {values.map((v, i) => <Reveal key={v.title} delay={i * 120}><ValueCard {...v} /></Reveal>)}
      </div>
    </div>
  </Section>
)
