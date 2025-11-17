import { Twitter, Youtube, Twitch, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/40">
      <div className="max-w-7xl mx-auto px-6 py-10 text-white/70">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-bold">GRUND.gg</h4>
            <p className="mt-2 text-sm">Elite esports org. Competitive by design. Community at the core.</p>
          </div>
          <div>
            <h5 className="text-white/90 font-semibold">Explore</h5>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="/teams" className="hover:text-white">Teams</a></li>
              <li><a href="/content" className="hover:text-white">Content</a></li>
              <li><a href="/events" className="hover:text-white">Events</a></li>
              <li><a href="/community" className="hover:text-white">Community</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white/90 font-semibold">About</h5>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="/about" className="hover:text-white">Mission</a></li>
              <li><a href="/about" className="hover:text-white">Leadership</a></li>
              <li><a href="/shop" className="hover:text-white">Shop</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white/90 font-semibold">Follow</h5>
            <div className="mt-2 flex items-center gap-3">
              <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter /></a>
              <a href="#" aria-label="YouTube" className="hover:text-white"><Youtube /></a>
              <a href="#" aria-label="Twitch" className="hover:text-white"><Twitch /></a>
              <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram /></a>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs">© {new Date().getFullYear()} GRUND.gg — All rights reserved.</p>
      </div>
    </footer>
  )
}
