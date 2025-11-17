import { motion } from 'framer-motion'
import { Twitch, Youtube, Newspaper } from 'lucide-react'

export default function Content() {
  const cards = [
    { title: 'Live: Matchday Hub', icon: <Twitch className="h-5 w-5" />, desc: 'Stream and live stats.' },
    { title: 'Top Plays: Weekly', icon: <Youtube className="h-5 w-5" />, desc: 'Highlights from scrims and officials.' },
    { title: 'Articles & Breakdowns', icon: <Newspaper className="h-5 w-5" />, desc: 'Meta analysis, strategy, and news.' },
  ]

  return (
    <div className="pt-20 min-h-screen bg-[#0a0b10] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-extrabold">Content Hub</h1>
        <p className="text-white/70 mt-2">Videos, livestreams, and articles.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {cards.map((c) => (
            <motion.a key={c.title} whileHover={{ scale: 1.02 }} href="#" className="rounded-2xl p-6 border border-white/10 bg-white/5 block">
              <div className="flex items-center gap-3 text-cyan-300">{c.icon}<span className="uppercase text-xs">Feature</span></div>
              <h3 className="text-xl font-bold mt-2">{c.title}</h3>
              <p className="text-white/70 mt-1 text-sm">{c.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  )
}
