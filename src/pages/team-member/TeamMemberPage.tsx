import { useLoaderData } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { Container } from '@/shared/ui/Container'
import { Section } from '@/shared/ui/Section'
import { H2, Lead } from '@/shared/ui/Typography'
import { posts } from '@/entities/post/model/data'
import { PostCard } from '@/entities/post/ui/PostCard'
import type { Member } from '@/entities/team/model/data'

const icons = [[Twitter, 'Twitter'], [Instagram, 'Instagram'], [Linkedin, 'LinkedIn'], [Facebook, 'Facebook']] as const

export function TeamMemberPage() {
  const m = useLoaderData() as Member
  const own = posts.filter((p) => p.authorId === m.id)
  const list = own.length ? own : posts.slice(0, 2)

  return (
    <>
      <Container className="hero-rise py-14 text-center md:py-20">
        <img src={m.photo} alt={m.name} className="mx-auto mb-6 size-40 rounded-full object-cover object-top md:size-48" />
        <h1 className="mb-1 text-3xl font-semibold md:text-4xl">{m.name}</h1>
        <p className="mb-4 text-brand">{m.role}</p>
        <Lead className="mx-auto mb-6 max-w-xl">{m.bio}</Lead>
        <ul className="flex justify-center gap-3">
          {icons.map(([Icon, name]) => <li key={name}><a href="#" aria-label={name} className="grid size-9 place-items-center rounded-full bg-ink text-white transition hover:-translate-y-1 hover:bg-brand"><Icon size={15} /></a></li>)}
        </ul>
      </Container>
      <Section tone="mint">
        <H2 className="mb-8 text-2xl md:text-3xl lg:text-3xl">Blog posts from {m.name.split(' ')[0]}</H2>
        <div className="grid gap-5 md:grid-cols-2">{list.map((p) => <PostCard key={p.slug} post={p} horizontal />)}</div>
      </Section>
    </>
  )
}
