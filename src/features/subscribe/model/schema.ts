import { z } from 'zod'

export const subscribeSchema = z.object({
  email: z.string().min(1, 'Enter your email').email('Enter a valid email, like name@mail.com'),
})
export type SubscribeValues = z.infer<typeof subscribeSchema>
