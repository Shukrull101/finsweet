import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Paperclip } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/config/routes'
import { fakeSubmit } from '@/shared/lib/fakeSubmit'
import { Button } from '@/shared/ui/Button'
import { FormSuccess, Input, Textarea } from '@/shared/ui/Field'
import { applySchema, type ApplyValues } from '../model/schema'

export function ApplyForm() {
  const [done, setDone] = useState(false)
  const { register, handleSubmit, reset, watch, formState: { errors, isSubmitting } } = useForm<ApplyValues>({ resolver: zodResolver(applySchema) })
  const file = watch('resume')?.[0]

  const onSubmit = async (v: ApplyValues) => {
    await fakeSubmit(v)
    reset()
    setDone(true)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Input placeholder="First name" aria-label="First name" error={errors.firstName?.message} {...register('firstName')} />
        <Input placeholder="Last name" aria-label="Last name" error={errors.lastName?.message} {...register('lastName')} />
        <Input placeholder="Email" type="email" aria-label="Email" error={errors.email?.message} {...register('email')} />
        <Input placeholder="Phone number" type="tel" aria-label="Phone" error={errors.phone?.message} {...register('phone')} />
      </div>
      <Textarea placeholder="Why do you think you are a good fit for this role?" aria-label="Why you" rows={5} error={errors.why?.message} {...register('why')} />
      <div>
        <label className="flex cursor-pointer items-center gap-3 rounded-md border border-dashed border-ink/25 px-4 py-4 text-sm text-muted transition hover:border-brand hover:text-brand">
          <Paperclip size={18} />
          {file ? file.name : 'Attach your resume (PDF, DOC, DOCX, up to 5 MB)'}
          <input type="file" accept=".pdf,.doc,.docx" className="sr-only" {...register('resume')} />
        </label>
        {errors.resume && <p role="alert" className="mt-1 text-xs text-red-500">{errors.resume.message as string}</p>}
      </div>
      <div>
        <label className="flex items-start gap-3 text-sm text-muted">
          <input type="checkbox" className="mt-1 size-4 accent-brand" {...register('agree')} />
          <span>I agree to accept the <Link to={ROUTES.privacy} className="text-brand underline">privacy policy</Link>. We will only use your contact details to reply about this application.</span>
        </label>
        {errors.agree && <p role="alert" className="mt-1 text-xs text-red-500">{errors.agree.message}</p>}
      </div>
      {done && <FormSuccess>Application sent. We will get back to you within a week.</FormSuccess>}
      <Button type="submit" arrow disabled={isSubmitting}>{isSubmitting ? 'Sending…' : 'Submit application'}</Button>
    </form>
  )
}
