import { useMemo, useState } from 'react'
import { cn } from '@/shared/lib/cn'
import { departments, jobs } from '@/entities/job/model/data'
import { JobCard } from '@/entities/job/ui/JobCard'

export function JobsFilter() {
  const [dept, setDept] = useState('All')
  const list = useMemo(() => (dept === 'All' ? jobs : jobs.filter((j) => j.dept === dept)), [dept])

  return (
    <>
      <div role="tablist" className="mb-8 flex flex-wrap gap-2">
        {departments.map((d) => (
          <button key={d} role="tab" aria-selected={dept === d} onClick={() => setDept(d)}
            className={cn('rounded-full px-4 py-2 text-sm font-medium transition', dept === d ? 'bg-brand text-white' : 'bg-white text-ink hover:bg-brand/10')}>
            {d}
          </button>
        ))}
      </div>
      <div key={dept} className="grid animate-fade-in gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((j) => <JobCard key={j.id} job={j} />)}
      </div>
    </>
  )
}
