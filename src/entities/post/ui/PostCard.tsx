import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/config/routes'
import { Photo } from '@/shared/ui/Photo'
import { Button } from '@/shared/ui/Button'
import { cn } from '@/shared/lib/cn'
import { getMember } from '@/entities/team/model/data'
import type { Post } from '../model/data'

export function PostCard({ post, horizontal }: { post: Post; horizontal?: boolean }) {
  const author = getMember(post.authorId)
  return (
    <article className={cn('group overflow-hidden rounded-xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl', horizontal ? 'grid sm:grid-cols-[40%_1fr]' : 'flex flex-col')}>
      <Link to={ROUTES.post(post.slug)} className={cn('block overflow-hidden', horizontal ? 'aspect-[4/3] sm:aspect-auto' : 'aspect-[4/3]')} tabIndex={-1} aria-hidden>
        <Photo src={post.image} className="transition-transform duration-700 group-hover:scale-105" />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="mb-2 text-xs text-muted">{post.category} · {post.date}</p>
        <h3 className="mb-4 text-lg leading-snug font-semibold"><Link to={ROUTES.post(post.slug)} className="hover:text-brand">{post.title}</Link></h3>
        <div className="mt-auto flex items-center justify-between">
          {horizontal ? <Button variant="link" to={ROUTES.post(post.slug)}>Read more</Button> : (
            <Link to={ROUTES.member(post.authorId)} className="flex items-center gap-2 text-xs text-muted hover:text-brand">
              <img src={author?.photo} alt="" className="size-7 rounded-full object-cover object-top" />{author?.name}
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}
