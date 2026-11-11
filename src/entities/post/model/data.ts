import { img } from '@/shared/assets'
import { team } from '@/entities/team/model/data'

export type Block = { type: 'p' | 'h' | 'quote'; text: string } | { type: 'ul'; items: string[] }
export type Post = { slug: string; title: string; category: string; date: string; readTime: string; image: string; excerpt: string; authorId: string; body: Block[] }

const body: Block[] = [
  { type: 'p', text: 'Good products start with a clear question. Before choosing tools, we write down who the product is for, what they are trying to do, and how we will know it worked.' },
  { type: 'h', text: 'Start small, learn fast' },
  { type: 'p', text: 'A small release teaches more than a long plan. Ship the narrowest version that solves the problem, watch how people use it, and let that decide what to build next.' },
  { type: 'quote', text: 'The fastest way to a better product is a shorter feedback loop.' },
  { type: 'h', text: 'What we check before every release' },
  { type: 'ul', items: ['The main task works on a phone and a laptop', 'Forms explain errors and keep what the user typed', 'Pages load fast on a slow connection', 'Someone outside the team has tried it'] },
  { type: 'p', text: 'None of this is complicated. The value comes from doing it every time, and from making it easy for the whole team to do.' },
]

const raw: [string, string, string][] = [
  ["Today's best design trends for digital products", 'Design', 'Jun 12, 2024'],
  ['A practical guide to building a brand strategy', 'Branding', 'Jun 08, 2024'],
  ['How small teams ship faster without cutting corners', 'Process', 'May 30, 2024'],
  ['Why a cloud cost audit pays for itself', 'Cloud', 'May 22, 2024'],
  ['Designing web forms people actually finish', 'UX', 'May 15, 2024'],
  ['Inside our code review culture', 'Engineering', 'May 03, 2024'],
  ['Scaling a design system across five products', 'Design', 'Apr 26, 2024'],
  ['Security basics every startup needs in year one', 'Security', 'Apr 18, 2024'],
  ['What clients should ask before hiring an agency', 'Business', 'Apr 09, 2024'],
]

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export const posts: Post[] = raw.map(([title, category, date], i) => ({
  slug: slugify(title),
  title, category, date,
  readTime: `${4 + (i % 4)} min read`,
  image: img.blog[i],
  excerpt: 'Practical lessons from our projects, written for people who build and buy digital products.',
  authorId: team[i % team.length].id,
  body,
}))

export const getPost = (slug?: string) => posts.find((p) => p.slug === slug)
