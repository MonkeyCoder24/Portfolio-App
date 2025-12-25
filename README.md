# Portfolio Showcase App

A modern, responsive portfolio website built with Next.js, React, and TypeScript to showcase your projects and skills.

## Features

- ✨ Modern, responsive design
- 🎨 Beautiful gradient animations
- 📱 Mobile-friendly layout
- ⚡ Fast performance with Next.js
- 🎯 Smooth scrolling navigation
- 💌 Contact form section
- 🌙 Dark theme with blue accents
- 📊 Skills showcase
- 🚀 Easy to customize

## Tech Stack

- **Framework**: Node.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: React
- **Animations**: CSS animations

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd Portfolio-App
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Update Your Projects

Edit `data/projects.ts` to add your own projects:

```typescript
{
  id: 1,
  title: 'Your Project',
  description: 'Project description',
  image: '/projects/image.jpg',
  tags: ['React', 'TypeScript'],
  link: 'https://your-project-link.com',
  github: 'https://github.com/your-repo',
}
```

### Update Your Skills

Edit `data/skills.ts` to list your technologies:

```typescript
{
  category: 'Frontend',
  items: ['React', 'TypeScript', 'Tailwind CSS'],
}
```

### Customize Personal Info

- Update the hero section in `components/Hero.tsx`
- Update social links in `components/Contact.tsx`
- Change colors in `tailwind.config.ts`

### Add Social Links

In `components/Contact.tsx`, update the social media links:

```typescript
<a href="https://github.com/your-username">GitHub</a>
<a href="https://linkedin.com/in/your-profile">LinkedIn</a>
```

## Project Structure

```
Portfolio-App/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── ...
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── ProjectCard.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   ├── projects.ts         # Projects data
│   └── skills.ts           # Skills data
├── styles/
│   └── globals.css         # Global styles
├── public/                 # Static assets
└── package.json
```

## Building for Production

```bash
npm run build
npm run start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Click Deploy

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`

## Tips for Success

1. **Add Real Projects**: Replace the sample projects with your actual work
2. **Update Skills**: List technologies you actually use
3. **Add Images**: Place project screenshots in `public/projects/`
4. **Customize Colors**: Modify Tailwind colors in `tailwind.config.ts`
5. **Add More Sections**: Create new components and add them to `page.tsx`
6. **SEO**: Update metadata in `app/layout.tsx`
7. **Analytics**: Integrate Google Analytics or similar

## License

Feel free to use this template for your own portfolio!
