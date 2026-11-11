import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/config/routes'
import { Button } from '@/shared/ui/Button'
import { Photo } from '@/shared/ui/Photo'
import { Section } from '@/shared/ui/Section'
import { H2, Lead, SectionLabel } from '@/shared/ui/Typography'
import { Reveal } from '@/shared/lib/Reveal'
import { posts } from '@/entities/post/model/data'
import { PostCard } from '@/entities/post/ui/PostCard'
import { PostRow } from '@/entities/post/ui/PostRow'
import { getMember } from '@/entities/team/model/data'

const PAGE = 6

export function BlogPage() {
  const [shown, setShown] = useState(PAGE)
  const [main, ...rest] = posts
  const author = getMember(main.authorId)

  return (
    <>
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <Link to={ROUTES.post(main.slug)} className="group hero-rise block">
            <div className="mb-5 aspect-[16/10] overflow-hidden rounded-xl"><Photo src={main.image} alt="" className="transition-transform duration-700 group-hover:scale-105" /></div>
            <p className="mb-2 text-xs text-muted">{main.category} · {main.date}</p>
            <h1 className="mb-3 text-2xl leading-snug font-semibold group-hover:text-brand md:text-4xl">{main.title}</h1>
            <Lead className="mb-4">{main.excerpt}</Lead>
            <span className="flex items-center gap-2 text-sm"><img src={author?.photo} alt="" className="size-8 rounded-full object-cover object-top" />{author?.name}</span>
          </Link>
          <aside className="hero-rise rounded-xl bg-peach p-6 [animation-delay:150ms]">
            <h2 className="mb-5 font-semibold">Popular posts</h2>
            <div className="space-y-5">{rest.slice(0, 4).map((p) => <PostRow key={p.slug} post={p} />)}</div>
          </aside>
        </div>
      </Section>

      <Section tone="mint" className="py-12">
        <SectionLabel>Latest</SectionLabel>
        <H2 className="mb-8 text-2xl md:text-3xl lg:text-3xl">Read recent posts</H2>
        <div className="grid gap-x-10 gap-y-6 md:grid-cols-2">{rest.slice(4, 8).map((p) => <PostRow key={p.slug} post={p} />)}</div>
      </Section>

      <Section>
        <H2 className="mb-8 text-2xl md:text-3xl lg:text-3xl">All posts</H2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, shown).map((p, i) => <Reveal key={p.slug} delay={(i % 3) * 100}><PostCard post={p} /></Reveal>)}
        </div>
        {shown < posts.length && (
          <div className="mt-10 text-center"><Button variant="outline" onClick={() => setShown((n) => n + 3)}>Load more</Button></div>
        )}
      </Section>
    </>
  )
}
