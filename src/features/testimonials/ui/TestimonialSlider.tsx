import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../model/data'

export function TestimonialSlider() {
  const [i, setI] = useState(0)
  const t = testimonials[i]
  const go = (d: number) => setI((i + d + testimonials.length) % testimonials.length)

  return (
    <div className="relative rounded-xl bg-white p-6 shadow-xl shadow-brand/10 md:p-10">
      <Quote className="absolute top-5 right-6 text-brand/20" size={44} />
      <div key={i} className="animate-fade-in">
        <p className="mb-8 text-lg leading-8 font-medium">{t.quote}</p>
        <div className="flex items-center gap-3">
          <img src={t.avatar} alt="" className="size-11 rounded-full object-cover object-top" />
          <div><p className="text-sm font-semibold">{t.name}</p><p className="text-xs text-muted">{t.role}</p></div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-1.5" aria-hidden>
          {testimonials.map((_, n) => <span key={n} className={`h-1.5 rounded-full transition-all ${n === i ? 'w-6 bg-brand' : 'w-1.5 bg-ink/20'}`} />)}
        </div>
        <div className="flex gap-2">
          <button onClick={() => go(-1)} aria-label="Previous review" className="grid size-9 place-items-center rounded-full border border-ink/15 transition hover:border-brand hover:bg-brand hover:text-white"><ChevronLeft size={18} /></button>
          <button onClick={() => go(1)} aria-label="Next review" className="grid size-9 place-items-center rounded-full border border-ink/15 transition hover:border-brand hover:bg-brand hover:text-white"><ChevronRight size={18} /></button>
        </div>
      </div>
    </div>
  )
}
