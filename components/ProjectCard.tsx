'use client'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  github?: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group card-hover bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden backdrop-blur">
      <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:opacity-75 transition-opacity"></div>
        <div className="text-6xl text-slate-600 group-hover:scale-110 transition-transform duration-300">
          📁
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-300 text-sm mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-slate-700 text-slate-200 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm font-semibold text-center transition-colors"
          >
            View Project
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 border border-slate-600 hover:border-blue-400 rounded text-sm font-semibold text-center transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
