export type Job = { id: string; title: string; dept: string; location: string; type: string; experience: string; details: string[]; requirements: string[]; responsibilities: string[] }

const common = {
  details: [
    'Create and maintain features for products used by thousands of people every day',
    'Work in a small cross-functional team with designers, QA, and a project manager',
    'Take part in planning, estimation, and retrospectives',
    'Write clear documentation for what you build',
    'Flexible hours and a remote-friendly team',
  ],
  requirements: [
    'Strong fundamentals and a few real projects you can show us',
    'Comfortable explaining decisions to non-technical people',
    'Experience with Git and code review',
    'Good written English',
  ],
  responsibilities: [
    'Own tasks from first discussion to release',
    'Review teammates’ work and ask good questions',
    'Flag risks early and propose options',
    'Keep quality high while delivering on time',
  ],
}

const row = (id: string, title: string, dept: string, location: string, type: string, experience: string): Job => ({ id, title, dept, location, type, experience, ...common })

export const jobs: Job[] = [
  row('full-stack-developer', 'Full Stack Developer', 'Engineering', 'Remote', 'Full time', '3–5 years'),
  row('product-designer', 'Product Designer', 'Design', 'Dushanbe', 'Full time', '2–4 years'),
  row('qa-engineer', 'QA Engineer', 'Engineering', 'Remote', 'Part time', '1–3 years'),
  row('devops-engineer', 'DevOps Engineer', 'Engineering', 'Remote', 'Full time', '3–5 years'),
  row('project-manager', 'Project Manager', 'Management', 'Dushanbe', 'Full time', '4–6 years'),
  row('support-specialist', 'Support Specialist', 'Support', 'Remote', 'Full time', '1–2 years'),
]

export const departments = ['All', ...Array.from(new Set(jobs.map((j) => j.dept)))]
export const getJob = (id?: string) => jobs.find((j) => j.id === id)
