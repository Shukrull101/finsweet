import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from 'lucide-react'
import { fakeSubmit } from '@/shared/lib/fakeSubmit'
import { FormSuccess, Input } from '@/shared/ui/Field'
import { subscribeSchema, type SubscribeValues } from '../model/schema'

export function SubscribeForm() {
  const [done, setDone] = useState(false)
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<SubscribeValues>({ resolver: zodResolver(subscribeSchema) })

  const onSubmit = async (v: SubscribeValues) => {
    await fakeSubmit(v)
    reset()
    setDone(true)
  }

  if (done) return <FormSuccess>You are subscribed. Check your inbox to confirm.</FormSuccess>

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-2 sm:flex-row sm:items-start">
      <div className="flex-1">
        <Input aria-label="Email" type="email" placeholder="name@mail.com" error={errors.email?.message} {...register('email')} />
      </div>
      <button disabled={isSubmitting} className="inline-flex items-center justify-center gap-2 rounded-md bg-ink px-5 py-3.5 text-sm font-medium text-white transition hover:bg-white hover:text-ink disabled:opacity-60">
        {isSubmitting ? 'Sending…' : 'Subscribe'} <ArrowRight size={16} />
      </button>
    </form>
  )
}
