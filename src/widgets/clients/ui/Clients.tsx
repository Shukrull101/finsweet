import { Container } from '@/shared/ui/Container'
import { cn } from '@/shared/lib/cn'

const clients = ['Logoipsum', 'Brightpath', 'Nova Labs', 'Harbor Pay', 'Orbitly']

export const Clients = ({ dark }: { dark?: boolean }) => (
  <div className={cn('py-8', dark ? 'bg-ink text-white/60' : 'text-muted')}>
    <Container className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:justify-between">
      <span className="text-xs">Trusted by 950+ clients</span>
      {clients.map((c) => <span key={c} className="text-base font-semibold tracking-tight opacity-70 transition hover:opacity-100">{c}</span>)}
    </Container>
  </div>
)
