import { Container } from '@/shared/ui/Container'
import { Section } from '@/shared/ui/Section'

const sections: [string, string[]][] = [
  ['Information we collect', ['Contact details you send us through forms: name, email, phone, and your message.', 'Technical data such as browser type and pages visited, collected through basic analytics.']],
  ['How we use it', ['To reply to your questions and job applications.', 'To send the newsletter, only if you subscribed.', 'To improve the site.']],
  ['Sharing', ['We do not sell your data. We share it only with service providers who help us run the site, under written agreements.']],
  ['Your rights', ['You can ask us to see, correct, or delete your data at any time by writing to hello@finsweet.com.']],
]

export function PrivacyPage() {
  return (
    <>
      <Container className="hero-rise py-12 md:py-16">
        <h1 className="mb-3 text-4xl font-semibold md:text-5xl">Privacy policy</h1>
        <p className="text-sm text-muted">Last updated: June 1, 2024</p>
      </Container>
      <Section tone="mint">
        <div className="mx-auto max-w-3xl space-y-10">
          {sections.map(([title, items], i) => (
            <section key={title}>
              <h2 className="mb-3 text-xl font-semibold">{i + 1}. {title}</h2>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-ink/80">{items.map((t) => <li key={t}>{t}</li>)}</ul>
            </section>
          ))}
        </div>
      </Section>
    </>
  )
}
