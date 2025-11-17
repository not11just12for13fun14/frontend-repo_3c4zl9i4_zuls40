import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Sparkles, Disc3 } from 'lucide-react'

const navItems = [
  { to: '/teams', label: 'Teams' },
  { to: '/content', label: 'Content' },
  { to: '/events', label: 'Events' },
  { to: '/community', label: 'Community' },
  { to: '/about', label: 'About' },
  { to: '/shop', label: 'Shop' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkBase = 'text-sm tracking-wide uppercase px-4 py-2 rounded-md transition-colors'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Disc3 className="h-6 w-6 text-cyan-400 group-hover:rotate-90 transition-transform" />
              <Sparkles className="absolute -right-1 -top-1 h-3 w-3 text-violet-400" />
            </div>
            <span className="font-extrabold text-white tracking-wider text-lg">GRUND</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) => `${linkBase} ${isActive ? 'text-white bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#join" className="px-4 py-2 rounded-md bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 transition-colors">
              Join Community
            </a>
            <a href="/test" className="px-4 py-2 rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors">
              Status
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white/80 hover:text-white">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-2">
            {navItems.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `${linkBase} ${isActive ? 'text-white bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
              >
                {n.label}
              </NavLink>
            ))}
            <a href="#join" className="mt-2 px-4 py-2 rounded-md bg-cyan-500/20 text-cyan-300">Join Community</a>
          </div>
        </div>
      )}
    </header>
  )
}
