import { Search, PenTool, Code2, Bug, Rocket, Wrench, type LucideIcon } from 'lucide-react'

export type Step = { title: string; text: string; icon: LucideIcon }

export const steps: Step[] = [
  { title: 'Discover', text: 'We learn your goals, users, and constraints before writing a line of code.', icon: Search },
  { title: 'Designing', text: 'Wireframes and clickable prototypes you can test with real people.', icon: PenTool },
  { title: 'Development', text: 'Weekly builds in small increments, reviewed together.', icon: Code2 },
  { title: 'Testing', text: 'Automated and manual checks on every release candidate.', icon: Bug },
  { title: 'Deployment', text: 'Safe, repeatable releases with a rollback plan ready.', icon: Rocket },
  { title: 'Maintenance', text: 'Monitoring, updates, and support after launch.', icon: Wrench },
]
