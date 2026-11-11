import { Code2, Headset, Cloud, Compass, Cpu, FlaskConical, type LucideIcon } from 'lucide-react'
import { img } from '@/shared/assets'

export type Service = { id: string; title: string; short: string; heading: string; text: string; icon: LucideIcon; image: string }

export const services: Service[] = [
  { id: 'technical-support', title: 'Technical support', short: 'We are ready to help your team any day, any hour.', heading: 'Best in class tech support for your company. We become your tech backbone', text: 'Our support engineers watch your systems around the clock, fix incidents fast, and document every fix so the same problem never costs you twice.', icon: Headset, image: img.service[0] },
  { id: 'development', title: 'Development', short: 'Web, mobile and backend products built by certified developers.', heading: 'Bring your idea to reality with a certified team of developers', text: 'From first prototype to production release, we build on modern, well-supported technologies and ship in small steps you can review every week.', icon: Code2, image: img.service[1] },
  { id: 'aws-azure', title: 'AWS/Azure', short: 'Deploy, scale and protect your apps on leading clouds.', heading: 'We help you deploy, manage and secure your application on leading web services', text: 'We design cloud setups that fit your traffic and your budget, automate deployments, and keep access and backups under control.', icon: Cloud, image: img.service[2] },
  { id: 'consulting', title: 'Consulting', short: 'Advice from people who have shipped products like yours.', heading: 'Get advice from world class professionals', text: 'Book a working session on architecture, hiring, or roadmap. You leave with a written plan and clear next steps.', icon: Compass, image: img.service[3] },
  { id: 'information-technology', title: 'Information Technology', short: 'Infrastructure, security and tooling for growing teams.', heading: 'We want to get local identification in every corner of the world in this era of global citizenship', text: 'We set up the networks, devices, and internal tools your team uses every day, and keep them secure and up to date.', icon: Cpu, image: img.service[4] },
]

export const homeServices = [
  { ...services[0] },
  { id: 'testing', title: 'Testing management', short: 'Manual and automated testing that catches bugs before your users do.', icon: FlaskConical },
  { ...services[1] },
]
