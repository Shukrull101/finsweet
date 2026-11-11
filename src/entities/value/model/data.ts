import { Truck, Award, LifeBuoy, type LucideIcon } from 'lucide-react'

export const values: { title: string; text: string; icon: LucideIcon }[] = [
  { title: 'On time delivery', text: 'We agree on dates up front and tell you early if anything moves.', icon: Truck },
  { title: 'Best quality', text: 'Code review, tests, and design review on every change.', icon: Award },
  { title: 'Support 24/7', text: 'A real engineer answers, day or night.', icon: LifeBuoy },
]
