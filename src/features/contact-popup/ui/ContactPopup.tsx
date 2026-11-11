import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { X } from 'lucide-react'
import { fakeSubmit } from '@/shared/lib/fakeSubmit'
import { Button } from '@/shared/ui/Button'
import { FormSuccess, Input, Textarea } from '@/shared/ui/Field'
import { popupSchema, type PopupValues } from '@/features/contact-form/model/schema'
import { usePopup } from '../model/PopupContext'

export function ContactPopup() {
  const { open, hide } = usePopup()
  const [done, setDone] = useState(false)
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<PopupValues>({ resolver: zodResolver(popupSchema) })

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && hide()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, hide])

  useEffect(() => {
    if (!open) {
      setDone(false)
      reset()
    }
  }, [open, reset])

  if (!open) return null

  const onSubmit = async (v: PopupValues) => {
    await fakeSubmit(v)
    reset()
    setDone(true)
  }

  return (
    <div className="fixed inset-0 z-50 grid animate-fade-in place-items-center bg-ink/70 p-0 backdrop-blur-sm sm:p-6" onMouseDown={(e) => e.target === e.currentTarget && hide()}>
      <div role="dialog" aria-modal="true" aria-labelledby="popup-title" className="relative max-h-full w-full animate-pop overflow-y-auto bg-white p-6 sm:max-w-md sm:rounded-xl sm:p-10">
        <button onClick={hide} aria-label="Close" className="absolute top-4 right-4 grid size-8 place-items-center rounded bg-ink text-white transition hover:rotate-90 hover:bg-brand"><X size={16} /></button>
        <h2 id="popup-title" className="mb-2 text-3xl leading-tight font-semibold">Have a question? Let’s get in touch with us 👋</h2>
        <p className="mb-6 text-sm text-muted">Fill up the form and our team will get back to you within 24 hrs.</p>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
          <Input variant="line" label="Name" placeholder="Your name" error={errors.name?.message} {...register('name')} />
          <Input variant="line" label="Email" type="email" placeholder="name@mail.com" error={errors.email?.message} {...register('email')} />
          <Textarea variant="line" label="Message" rows={2} placeholder="Type your message" error={errors.message?.message} {...register('message')} />
          {done && <FormSuccess>Thanks! We will be in touch soon.</FormSuccess>}
          <Button type="submit" arrow disabled={isSubmitting}>{isSubmitting ? 'Sending…' : 'Send message'}</Button>
        </form>
      </div>
    </div>
  )
}
