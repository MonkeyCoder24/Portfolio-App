'use client'

import { skills } from '@/data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 gradient-text">Skills & Technologies</h2>
        <p className="text-slate-300 mb-12 text-lg">
          Technologies and tools I work with
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="card-hover bg-slate-800/50 border border-slate-700 rounded-lg p-6 backdrop-blur">
              <h3 className="text-xl font-bold mb-4 text-blue-400">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="text-slate-300 flex items-center">
                    <span className="mr-3 text-blue-400">▸</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
