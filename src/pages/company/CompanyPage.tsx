import { img } from '@/shared/assets'
import { Photo } from '@/shared/ui/Photo'
import { Section } from '@/shared/ui/Section'
import { Deco, H2, Lead, SectionLabel } from '@/shared/ui/Typography'
import { Reveal } from '@/shared/lib/Reveal'
import { CountUp } from '@/shared/lib/CountUp'
import { Clients } from '@/widgets/clients/ui/Clients'
import { Values } from '@/widgets/values/ui/Values'
import { stats } from '@/entities/stat/model/data'
import { team } from '@/entities/team/model/data'
import { MemberCard } from '@/entities/team/ui/MemberCard'

export function CompanyPage() {
  return (
    <>
      <Section className="relative pb-6">
        <Deco className="top-12 right-8" />
        <div className="hero-rise max-w-3xl">
          <SectionLabel>Company</SectionLabel>
          <h1 className="mb-5 text-4xl leading-[1.15] font-semibold md:text-5xl">Award-winning company seen and used by millions around the world</h1>
          <Lead>A decade of building software for startups and large teams, with the same promise every time: clear plans, honest updates, working releases.</Lead>
        </div>
        <div className="mt-10 grid gap-3 md:grid-cols-[1.2fr_1fr_1.2fr]">
          {img.collage.map((src, i) => <Reveal key={i} delay={i * 120}><div className="aspect-[4/3] overflow-hidden rounded-lg md:aspect-[3/4]"><Photo src={src} alt="" /></div></Reveal>)}
        </div>
      </Section>

      <Section className="pt-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionLabel>Our history</SectionLabel>
            <H2 className="mb-5">From startups to titans of industry</H2>
            <Lead>We started as three people working on one client’s website. Today we run product teams for companies in twelve countries, and most of our work still comes from referrals.</Lead>
          </Reveal>
          <Reveal delay={120} className="rounded-xl bg-peach p-8">
            <dl className="grid grid-cols-2 gap-8">
              {stats.map((s) => (
                <div key={s.label}><dd className="text-3xl font-semibold md:text-4xl"><CountUp to={s.value} suffix={s.suffix} /></dd><span className="my-2 block h-0.5 w-8 bg-accent" /><dt className="text-sm text-ink/70">{s.label}</dt></div>
              ))}
            </dl>
          </Reveal>
        </div>
        <div className="mt-12"><Clients /></div>
      </Section>

      <Values />

      <Section>
        <Reveal className="mb-8 max-w-2xl">
          <SectionLabel>Our approach</SectionLabel>
          <H2 className="mb-4">We want to get local identification in every corner of the world in this era of global citizenship.</H2>
          <Lead>We work in the time zone of the client, speak the language of the team, and keep one shared board where everyone can see progress.</Lead>
        </Reveal>
        <Reveal><div className="aspect-[21/9] overflow-hidden rounded-xl"><Photo src={img.wide} alt="Finsweet office" /></div></Reveal>
      </Section>

      <Section className="pt-0">
        <Reveal className="mb-8">
          <SectionLabel>Our team</SectionLabel>
          <H2>Teamwork is the only way we work</H2>
        </Reveal>
        <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-3">
          {team.map((m, i) => <Reveal key={m.id} delay={(i % 3) * 100}><MemberCard member={m} /></Reveal>)}
        </div>
      </Section>
    </>
  )
}
