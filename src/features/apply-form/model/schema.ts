import { z } from 'zod'

const MAX = 5 * 1024 * 1024
const okTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']

export const applySchema = z.object({
  firstName: z.string().trim().min(2, 'Enter your first name'),
  lastName: z.string().trim().min(2, 'Enter your last name'),
  email: z.string().min(1, 'Enter your email').email('Enter a valid email'),
  phone: z.string().min(1, 'Enter your phone').regex(/^\+?[0-9\s()-]{7,18}$/, 'Use digits, spaces, + ( ) -'),
  why: z.string().trim().min(20, 'Tell us a bit more (20+ characters)'),
  resume: z
    .custom<FileList>()
    .refine((f) => f && f.length > 0, 'Attach your resume')
    .refine((f) => !f || f.length === 0 || okTypes.includes(f[0].type), 'Use PDF, DOC or DOCX')
    .refine((f) => !f || f.length === 0 || f[0].size <= MAX, 'File must be under 5 MB'),
  agree: z.literal(true, { errorMap: () => ({ message: 'Please accept the privacy policy' }) }),
})
export type ApplyValues = z.infer<typeof applySchema>
