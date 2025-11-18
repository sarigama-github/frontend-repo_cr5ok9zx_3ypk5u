import { useState } from 'react'
import { Menu, X, Bot, Discord } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header className="relative z-20">
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#top" className="inline-flex items-center gap-2 text-white/90 hover:text-white">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/20 ring-1 ring-inset ring-indigo-400/30">
            <Bot className="h-5 w-5 text-indigo-300" />
          </div>
          <span className="text-lg font-semibold tracking-tight">AstraBot</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#" className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white px-4 py-2 rounded-lg transition-colors">
            <Discord className="h-4 w-4" />
            Add to Discord
          </a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white/80 hover:bg-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mx-4 rounded-xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 overflow-hidden">
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="block text-white/80 hover:text-white py-2" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#" className="mt-2 inline-flex w-full items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white px-4 py-2 rounded-lg transition-colors">
              <Discord className="h-4 w-4" />
              Add to Discord
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
