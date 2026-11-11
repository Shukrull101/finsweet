import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/config/routes'
import type { Post } from '../model/data'

export const PostRow = ({ post }: { post: Post }) => (
  <Link to={ROUTES.post(post.slug)} className="group flex items-center gap-4">
    <img src={post.image} alt="" className="size-20 shrink-0 rounded-lg object-cover transition group-hover:scale-105" />
    <div>
      <h3 className="text-sm leading-snug font-semibold group-hover:text-brand md:text-base">{post.title}</h3>
      <p className="mt-1 text-xs text-muted">{post.date}</p>
    </div>
  </Link>
)
