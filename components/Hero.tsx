'use client'

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 animate-slideUp">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          Hi, I'm a Front-End Developer
        </h2>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Building amazing web applications and showcasing my work. Let me show you what I can create.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-slate-400 hover:border-blue-400 hover:text-blue-400 rounded-lg font-semibold transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
