import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'

export default function Teams() {
  const teams = [
    { name: 'GRUND Valorant', achievements: ['Champions Circuit QF', 'Regional #1'], color: 'from-violet-600/30 to-cyan-600/20' },
    { name: 'GRUND CS2', achievements: ['LAN Top 4', 'Qualifier Winner'], color: 'from-cyan-600/30 to-emerald-600/20' },
    { name: 'GRUND Rocket League', achievements: ['Major Top 8'], color: 'from-indigo-600/30 to-violet-600/20' },
  ]

  return (
    <div className="pt-20 min-h-screen bg-[#0a0b10] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-extrabold">Teams & Players</h1>
        <p className="text-white/70 mt-2">Profiles, stats, and achievements.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {teams.map((t) => (
            <motion.div key={t.name} whileHover={{ y: -4 }} className={`rounded-2xl p-6 border border-white/10 bg-gradient-to-br ${t.color}`}>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center"><Trophy className="text-cyan-300" /></div>
                <h3 className="text-xl font-bold">{t.name}</h3>
              </div>
              <ul className="mt-4 text-white/80 text-sm list-disc list-inside">
                {t.achievements.map((a) => <li key={a}>{a}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
