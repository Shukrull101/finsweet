import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { Button } from '@/shared/ui/Button'
import { Container } from '@/shared/ui/Container'
import { Section } from '@/shared/ui/Section'
import { H2, SectionLabel } from '@/shared/ui/Typography'
import { cn } from '@/shared/lib/cn'
import { ApplyForm } from '@/features/apply-form/ui/ApplyForm'
import type { Job } from '@/entities/job/model/data'

const tabs = [['details', 'Details'], ['requirements', 'Requirements'], ['responsibilities', 'Responsibilities']] as const

export function JobPage() {
  const job = useLoaderData() as Job
  const [tab, setTab] = useState<(typeof tabs)[number][0]>('details')

  return (
    <>
      <Section>
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="hero-rise">
            <SectionLabel>Career at Finsweet</SectionLabel>
            <h1 className="mb-4 text-4xl font-semibold md:text-5xl">{job.title}</h1>
            <p className="mb-6 max-w-md text-sm leading-7 text-muted">Join a team that ships real products and values your ideas.</p>
            <Button arrow onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}>Apply now</Button>
          </div>
          <div className="hero-rise rounded-xl bg-peach p-7 [animation-delay:150ms]">
            <h2 className="mb-3 font-semibold">Job description</h2>
            <ul className="space-y-1.5 text-sm text-ink/80">
              <li>Experience: {job.experience}</li>
              <li>Department: {job.dept}</li>
              <li>Location: {job.location}</li>
              <li>Type: {job.type}</li>
            </ul>
          </div>
        </div>
      </Section>

      <Container>
        <div className="rounded-xl bg-mint p-6 md:p-12">
          <div role="tablist" className="mb-8 flex justify-center gap-6 border-b border-ink/10 md:gap-12">
            {tabs.map(([id, label]) => (
              <button key={id} role="tab" aria-selected={tab === id} onClick={() => setTab(id)}
                className={cn('-mb-px border-b-2 px-1 pb-3 text-sm font-semibold transition md:text-base', tab === id ? 'border-brand text-brand' : 'border-transparent text-ink/60 hover:text-ink')}>
                {label}
              </button>
            ))}
          </div>
          <ul key={tab} className="mx-auto max-w-3xl animate-fade-in list-disc space-y-3 pl-5 text-sm leading-7 text-ink/80">
            {job[tab].map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
      </Container>

      <Section id="apply">
        <div className="mx-auto max-w-3xl">
          <H2 className="mb-8 text-2xl md:text-3xl lg:text-3xl">Apply now</H2>
          <ApplyForm />
        </div>
      </Section>
    </>
  )
}
