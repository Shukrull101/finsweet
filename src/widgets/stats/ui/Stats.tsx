import { CountUp } from '@/shared/lib/CountUp'
import { cn } from '@/shared/lib/cn'
import { stats } from '@/entities/stat/model/data'

export const Stats = ({ className }: { className?: string }) => (
  <dl className={cn('grid grid-cols-2 gap-6 lg:grid-cols-4', className)}>
    {stats.map((s) => (
      <div key={s.label}>
        <dd className="text-3xl font-semibold md:text-4xl"><CountUp to={s.value} suffix={s.suffix} /></dd>
        <span className="my-2 block h-0.5 w-8 bg-accent" />
        <dt className="text-sm text-muted">{s.label}</dt>
      </div>
    ))}
  </dl>
)
