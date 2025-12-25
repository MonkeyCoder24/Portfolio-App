export interface SkillGroup {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    items: ['HTML', 'CSS', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'MongoDB'],
  },
  {
    category: 'Tools & DevOps',
    items: ['Git','GitHub Actions'],
  },
]
