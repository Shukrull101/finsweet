import { Link, useLoaderData } from 'react-router-dom'
import { ROUTES } from '@/shared/config/routes'
import { Photo } from '@/shared/ui/Photo'
import { Container } from '@/shared/ui/Container'
import { Section } from '@/shared/ui/Section'
import { H2 } from '@/shared/ui/Typography'
import { getMember } from '@/entities/team/model/data'
import { posts, type Post } from '@/entities/post/model/data'
import { PostCard } from '@/entities/post/ui/PostCard'

export function PostPage() {
  const post = useLoaderData() as Post
  const author = getMember(post.authorId)
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <Container className="py-12 md:py-16">
        <div className="hero-rise mx-auto max-w-3xl">
          <p className="mb-3 text-sm text-brand">{post.category}</p>
          <h1 className="mb-6 text-3xl leading-tight font-semibold md:text-5xl">{post.title}</h1>
          <Link to={ROUTES.member(post.authorId)} className="flex items-center gap-3 text-sm">
            <img src={author?.photo} alt="" className="size-10 rounded-full object-cover object-top" />
            <span><span className="block font-medium">{author?.name}</span><span className="text-muted">{post.date} · {post.readTime}</span></span>
          </Link>
        </div>
        <div className="hero-rise mt-10 aspect-[16/8] overflow-hidden rounded-xl [animation-delay:150ms]"><Photo src={post.image} alt="" /></div>
        <article className="mx-auto mt-10 max-w-2xl space-y-5 text-base leading-8 text-ink/85">
          {post.body.map((b, i) => {
            if (b.type === 'h') return <h2 key={i} className="pt-4 text-2xl font-semibold text-ink">{b.text}</h2>
            if (b.type === 'quote') return <blockquote key={i} className="border-l-4 border-accent bg-peach/50 py-4 pr-4 pl-6 text-xl font-medium text-ink">{b.text}</blockquote>
            if (b.type === 'ul') return <ul key={i} className="list-disc space-y-2 pl-6">{b.items.map((t) => <li key={t}>{t}</li>)}</ul>
            return <p key={i}>{b.text}</p>
          })}
        </article>
      </Container>
      <Section tone="mint">
        <H2 className="mb-8 text-2xl md:text-3xl lg:text-3xl">Related posts</H2>
        <div className="grid gap-5 md:grid-cols-3">{related.map((p) => <PostCard key={p.slug} post={p} />)}</div>
      </Section>
    </>
  )
}
