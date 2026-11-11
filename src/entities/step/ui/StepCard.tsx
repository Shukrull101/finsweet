import { Step } from '../model/data'

export const StepCard = ({ step, index }: { step: Step; index: number }) => (
  <article className="relative rounded-lg border border-ink/10 bg-white p-5 transition duration-300 hover:border-brand/40 hover:shadow-lg">
    <span className="absolute top-4 right-4 text-xs text-muted">{String(index + 1).padStart(2, '0')}</span>
    <step.icon size={20} className="mb-4 text-accent" />
    <h3 className="mb-1.5 font-semibold">{step.title}</h3>
    <p className="text-sm leading-6 text-muted">{step.text}</p>
  </article>
)
