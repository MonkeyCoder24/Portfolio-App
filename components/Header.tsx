'use client'

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold gradient-text">Portfolio</h1>
        
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <button
              onClick={() => scrollToSection('projects')}
              className="hover:text-blue-400 transition-colors"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('skills')}
              className="hover:text-blue-400 transition-colors"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
