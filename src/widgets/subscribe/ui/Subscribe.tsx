import { Container } from '@/shared/ui/Container'
import { Reveal } from '@/shared/lib/Reveal'
import { SubscribeForm } from '@/features/subscribe/ui/SubscribeForm'

/** Глобальный синий блок Subscribe — рендерится в Layout. */
export function Subscribe() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-sm bg-brand px-6 py-12 text-white md:px-14 md:py-14">
            <span aria-hidden className="absolute top-0 left-0 grid grid-cols-2">
              <i className="size-4 bg-accent" /><i className="size-4 bg-peach/80" /><i className="size-4 bg-white/30" /><i className="size-4 bg-accent/50" />
            </span>
            <span aria-hidden className="absolute inset-y-0 right-0 flex"><i className="w-2 bg-peach" /><i className="w-2 bg-ink/80" /></span>
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <p className="mb-3 text-xs font-medium tracking-[0.2em] uppercase text-white/80">Newsletter</p>
                <h2 className="text-2xl leading-snug font-semibold md:text-3xl">Subscribe to our newsletter to get the latest updates.</h2>
              </div>
              <SubscribeForm />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
