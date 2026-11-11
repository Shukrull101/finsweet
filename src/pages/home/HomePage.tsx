import { ROUTES } from '@/shared/config/routes'
import { img } from '@/shared/assets'
import { Button } from '@/shared/ui/Button'
import { Container } from '@/shared/ui/Container'
import { Photo } from '@/shared/ui/Photo'
import { Section } from '@/shared/ui/Section'
import { Deco, H2, Lead, SectionLabel } from '@/shared/ui/Typography'
import { Reveal } from '@/shared/lib/Reveal'
import { Clients } from '@/widgets/clients/ui/Clients'
import { Stats } from '@/widgets/stats/ui/Stats'
import { Values } from '@/widgets/values/ui/Values'
import { Process } from '@/widgets/process/ui/Process'
import { homeServices } from '@/entities/service/model/data'
import { ServiceCard } from '@/entities/service/ui/ServiceCard'
import { posts } from '@/entities/post/model/data'
import { PostCard } from '@/entities/post/ui/PostCard'
import { TestimonialSlider } from '@/features/testimonials/ui/TestimonialSlider'
import { testimonials } from '@/features/testimonials/model/data'

export function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <Container className="grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2">
          <div className="hero-rise">
            <h1 className="mb-5 text-4xl leading-[1.15] font-semibold sm:text-5xl lg:text-[54px]">Transform your idea into reality with Finsweet</h1>
            <p className="mb-8 max-w-md text-sm leading-7 text-white/70 md:text-base">We design, build, and support software that helps your business grow, from the first sketch to the tenth release.</p>
            <Button to={ROUTES.contact} arrow>Request a quote</Button>
          </div>
          <div className="hero-rise relative [animation-delay:150ms]">
            <Deco className="-top-3 -left-3 z-10" />
            <div className="float aspect-[4/3] overflow-hidden rounded-xl"><Photo src={img.hero} alt="Finsweet team at work" /></div>
          </div>
        </Container>
        <Clients dark />
      </section>

      <Section>
        <div className="mb-10 grid gap-6 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionLabel>About us</SectionLabel>
            <H2>The company leads the entire web design process from concept to delivery.</H2>
          </Reveal>
          <Reveal delay={120} className="lg:pt-8">
            <h3 className="mb-3 text-xl font-semibold">The era of technology</h3>
            <Lead>Our teams of designers, developers, and testers work side by side. You get one group of people who understand your product and stay with it after launch.</Lead>
          </Reveal>
        </div>
        <Reveal className="mb-10 grid gap-3 sm:grid-cols-3">
          {img.collage.map((src, i) => <div key={i} className="aspect-[4/5] overflow-hidden rounded-lg"><Photo src={src} alt="" className="transition-transform duration-700 hover:scale-105" /></div>)}
        </Reveal>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Stats className="flex-1" />
          <Button variant="link" to={ROUTES.company}>More about us</Button>
        </div>
      </Section>

      <Values />

      <Section tone="peach">
        <Reveal className="mb-10 max-w-2xl">
          <SectionLabel>Our services</SectionLabel>
          <H2 className="mb-6">We build software solutions that solve clients’ business challenges</H2>
          <Button to={ROUTES.service} arrow>View all services</Button>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {homeServices.map((s, i) => (
            <Reveal key={s.id} delay={i * 120}><ServiceCard title={s.title} text={s.short} icon={s.icon} to={`${ROUTES.service}#${s.id}`} /></Reveal>
          ))}
        </div>
      </Section>

      <Process />

      <Section tone="white">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <SectionLabel>Testimonials</SectionLabel>
            <H2 className="mb-5">Our customers love what we do</H2>
            <Lead className="mb-6">Real words from people we have built products with.</Lead>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">{testimonials.map((t) => <img key={t.name} src={t.avatar} alt="" className="size-10 rounded-full border-2 border-white object-cover" />)}</div>
              <span className="text-sm text-muted">950+ happy clients</span>
            </div>
          </Reveal>
          <Reveal delay={120}><TestimonialSlider /></Reveal>
        </div>
      </Section>

      <Section tone="mint">
        <Reveal className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div><SectionLabel>Blog</SectionLabel><H2>Read our latest blogs & news</H2></div>
          <Button variant="link" to={ROUTES.blog}>All posts</Button>
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-2">
          {posts.slice(0, 2).map((p, i) => <Reveal key={p.slug} delay={i * 120}><PostCard post={p} horizontal /></Reveal>)}
        </div>
      </Section>
    </>
  )
}
