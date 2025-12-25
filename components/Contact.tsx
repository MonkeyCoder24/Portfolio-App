'use client'

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.')
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center gradient-text">Get In Touch</h2>
        <p className="text-slate-300 text-center mb-12 text-lg">
          Have a project in mind? Let's talk!
        </p>

        <form onSubmit={handleSubmit} className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 backdrop-blur">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Your name"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 flex justify-center gap-6">
          <a
            href="https://github.com/MonkeyCoder24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors text-2xl"
            title="GitHub"
          >
            GH
          </a>
          <a
            href="https://www.linkedin.com/in/emmanuel-ansah-49454a375/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors text-2xl"
            title="LinkedIn"
          >
            LI
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors text-2xl"
            title="Twitter"
          >
            TW
          </a>
        </div>
      </div>
    </section>
  )
}
