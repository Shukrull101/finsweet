import { z } from 'zod'

const phone = z.string().min(1, 'Enter your phone').regex(/^\+?[0-9\s()-]{7,18}$/, 'Use digits, spaces, + ( ) -')

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Enter your name'),
  email: z.string().min(1, 'Enter your email').email('Enter a valid email'),
  phone,
  message: z.string().trim().min(10, 'Write at least 10 characters'),
})
export type ContactValues = z.infer<typeof contactSchema>

export const popupSchema = contactSchema.omit({ phone: true })
export type PopupValues = z.infer<typeof popupSchema>
