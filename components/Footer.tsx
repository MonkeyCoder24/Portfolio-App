'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-700 bg-slate-900/50 py-8 px-6">
      <div className="max-w-6xl mx-auto text-center text-slate-400">
        <p>© {currentYear} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  )
}
