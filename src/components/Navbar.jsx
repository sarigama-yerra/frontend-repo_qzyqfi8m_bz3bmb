import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

function NavLink({ href, children }) {
  return (
    <a href={href} className="text-sm text-slate-200/80 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-md">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div className="leading-tight">
              <p className="text-white font-semibold">MF Enterprises</p>
              <p className="text-xs text-slate-300/70">IT Solutions & Services</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#solutions">Solutions</NavLink>
            <NavLink href="#process">Process</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a href="#contact" className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-white text-sm font-medium shadow-[0_8px_30px_rgba(59,130,246,0.35)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.55)] transition-shadow">
              Get a Quote
            </a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3 md:hidden">
            <div className="grid gap-3">
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#solutions">Solutions</NavLink>
              <NavLink href="#process">Process</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-white text-sm font-medium shadow-[0_8px_30px_rgba(59,130,246,0.35)]">
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
