import { useState } from 'react'
import { Menu, X, Gamepad2, Sparkles, Github } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Games', href: '#games' },
    { label: 'Technology', href: '#tech' },
    { label: 'Studio', href: '#studio' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-3">
          <a href="#" className="flex items-center gap-2">
            <div className="relative">
              <span className="absolute -inset-2 rounded-full bg-gradient-to-tr from-indigo-500/40 via-fuchsia-500/40 to-cyan-500/40 blur-md" />
              <Gamepad2 className="relative h-7 w-7 text-white" />
            </div>
            <span className="text-white font-semibold tracking-wide">SynrTechStudios</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20">
              <Sparkles className="h-4 w-4" /> Get in touch
            </a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-3">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-white/80 hover:text-white hover:bg-white/5">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20">
                <Sparkles className="h-4 w-4" /> Get in touch
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/60 hover:text-white px-3 py-2">
                <Github className="h-4 w-4" /> Github
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
