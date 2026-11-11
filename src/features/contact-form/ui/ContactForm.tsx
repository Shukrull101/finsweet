import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { fakeSubmit } from '@/shared/lib/fakeSubmit'
import { Button } from '@/shared/ui/Button'
import { FormSuccess, Input, Textarea } from '@/shared/ui/Field'
import { contactSchema, type ContactValues } from '../model/schema'

export function ContactForm() {
  const [done, setDone] = useState(false)
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) })

  const onSubmit = async (v: ContactValues) => {
    await fakeSubmit(v)
    reset()
    setDone(true)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="Name" placeholder="Your name" error={errors.name?.message} {...register('name')} />
        <Input label="Email" type="email" placeholder="name@mail.com" error={errors.email?.message} {...register('email')} />
      </div>
      <Input label="Phone" type="tel" placeholder="+1 555 012 3456" error={errors.phone?.message} {...register('phone')} />
      <Textarea label="Message" placeholder="Tell us about your project" error={errors.message?.message} {...register('message')} />
      {done && <FormSuccess>Message sent. We will reply within 24 hours.</FormSuccess>}
      <Button type="submit" arrow disabled={isSubmitting}>{isSubmitting ? 'Sending…' : 'Send message'}</Button>
    </form>
  )
}
