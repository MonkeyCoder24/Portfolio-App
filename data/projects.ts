export interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  github?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'JKM Legacy Hotel',
    description: 'A front-end hotel platform with Menu, Booking, and payment integration.',
    image: '/projects/ecommerce.jpg',
    tags: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
    link: 'https://github.com',
    github: 'https://github.com',
  },
  {
    id: 2,
    title: 'Inventory Management App',
    description: 'Collaborative Inventory management application with real-time updates and data features.',
    image: '/projects/tasks.jpg',
    tags: ['Node.js', 'TypeScript', 'MongoDB', 'Javascript'],
    link: 'https://github.com',
    github: 'https://github.com',
  },
  {
    id: 3,
    title: 'Mombassa Hair Salon',
    description: 'Calender integration providing appointments and visualizations for the owner.',
    image: '/projects/analytics.jpg',
    tags: ['HTML', 'CSS', 'Integration', 'CSS5'],
    link: 'https://github.com',
    github: 'https://github.com',
  },
  {
    id: 4,
    title: 'Nevelyns bakery',
    description: 'E-commerce platform for a bakery with product listings, shopping cart, and checkout features.',
    image: '/projects/chat.jpg',
    tags: ['HTML', 'CSS'],
    link: 'https://github.com',
    github: 'https://github.com',
  },
]
