export const ROUTES = {
  home: '/',
  service: '/service',
  company: '/company',
  career: '/career',
  job: (id: string) => `/career/${id}`,
  blog: '/blog',
  post: (slug: string) => `/blog/${slug}`,
  member: (id: string) => `/team/${id}`,
  contact: '/contact',
  privacy: '/privacy-policy',
} as const

export const NAV = [
  { to: ROUTES.home, label: 'Home' },
  { to: ROUTES.service, label: 'Service' },
  { to: ROUTES.company, label: 'Company' },
  { to: ROUTES.career, label: 'Career' },
  { to: ROUTES.blog, label: 'Blog' },
  { to: ROUTES.contact, label: 'Contact us' },
] as const
