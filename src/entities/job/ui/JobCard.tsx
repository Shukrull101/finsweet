import { MapPin, Clock } from 'lucide-react'
import { ROUTES } from '@/shared/config/routes'
import { Button } from '@/shared/ui/Button'
import { Tag } from '@/shared/ui/Tag'
import type { Job } from '../model/data'

export const JobCard = ({ job }: { job: Job }) => (
  <article className="rounded-xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
    <Tag className="mb-3">{job.dept}</Tag>
    <h3 className="mb-3 text-lg font-semibold">{job.title}</h3>
    <p className="mb-5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
      <span className="flex items-center gap-1"><MapPin size={13} />{job.location}</span>
      <span className="flex items-center gap-1"><Clock size={13} />{job.type}</span>
    </p>
    <Button variant="link" to={ROUTES.job(job.id)}>Apply now</Button>
  </article>
)
