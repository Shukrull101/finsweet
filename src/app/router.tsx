import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/widgets/layout/ui/Layout'
import { NotFoundPage } from '@/pages/not-found/NotFoundPage'
import { getPost } from '@/entities/post/model/data'
import { getJob } from '@/entities/job/model/data'
import { getMember } from '@/entities/team/model/data'

const notFound = () => new Response('Not found', { status: 404 })
const noSub = { noSubscribe: true }

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        errorElement: <NotFoundPage />,
        children: [
          { index: true, lazy: async () => ({ Component: (await import('@/pages/home/HomePage')).HomePage }) },
          { path: 'service', lazy: async () => ({ Component: (await import('@/pages/service/ServicePage')).ServicePage }) },
          { path: 'company', lazy: async () => ({ Component: (await import('@/pages/company/CompanyPage')).CompanyPage }) },
          { path: 'career', lazy: async () => ({ Component: (await import('@/pages/career/CareerPage')).CareerPage }) },
          {
            path: 'career/:id',
            loader: ({ params }) => getJob(params.id) ?? (() => { throw notFound() })(),
            lazy: async () => ({ Component: (await import('@/pages/job/JobPage')).JobPage }),
          },
          { path: 'blog', lazy: async () => ({ Component: (await import('@/pages/blog/BlogPage')).BlogPage }) },
          {
            path: 'blog/:slug',
            handle: noSub,
            loader: ({ params }) => getPost(params.slug) ?? (() => { throw notFound() })(),
            lazy: async () => ({ Component: (await import('@/pages/post/PostPage')).PostPage }),
          },
          {
            path: 'team/:id',
            handle: noSub,
            loader: ({ params }) => getMember(params.id) ?? (() => { throw notFound() })(),
            lazy: async () => ({ Component: (await import('@/pages/team-member/TeamMemberPage')).TeamMemberPage }),
          },
          { path: 'contact', handle: noSub, lazy: async () => ({ Component: (await import('@/pages/contact/ContactPage')).ContactPage }) },
          { path: 'privacy-policy', handle: noSub, lazy: async () => ({ Component: (await import('@/pages/privacy/PrivacyPage')).PrivacyPage }) },
          { path: '*', element: <NotFoundPage /> },
        ],
      },
    ],
  },
])
