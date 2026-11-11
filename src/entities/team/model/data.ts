import { img } from '@/shared/assets'

export type Member = { id: string; name: string; role: string; photo: string; bio: string }

const bio = 'Joined Finsweet to build products people enjoy using. Cares about clear communication, small releases, and teams that help each other grow.'

export const team: Member[] = [
  { id: 'javena-melo', name: 'Javena Melo', role: 'Support Assist', photo: img.team[0], bio },
  { id: 'adam-clark', name: 'Adam Clark', role: 'Project Manager', photo: img.team[1], bio },
  { id: 'sara-lopez', name: 'Sara Lopez', role: 'UI/UX Designer', photo: img.team[2], bio },
  { id: 'omar-rahim', name: 'Omar Rahim', role: 'Full Stack Developer', photo: img.team[3], bio },
  { id: 'lena-fox', name: 'Lena Fox', role: 'QA Engineer', photo: img.team[4], bio },
  { id: 'ravi-patel', name: 'Ravi Patel', role: 'DevOps Engineer', photo: img.team[5], bio },
]

export const getMember = (id?: string) => team.find((m) => m.id === id)
