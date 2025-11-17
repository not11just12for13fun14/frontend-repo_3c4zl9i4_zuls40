import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

export default function Events() {
  const events = [
    { name: 'Champions Circuit – Split 2', date: 'Dec 12, 7PM UTC', place: 'Online', info: 'Qualifier: Swiss format' },
    { name: 'Global Open – Playoffs', date: 'Jan 5, 6PM UTC', place: 'Stockholm Arena', info: 'Double Elimination' },
  ]

  return (
    <div className="pt-20 min-h-screen bg-[#0a0b10] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-extrabold">Events</h1>
        <p className="text-white/70 mt-2">Schedule, results, and ticket info.</p>

        <div className="mt-8 space-y-3">
          {events.map((e) => (
            <motion.div key={e.name} whileHover={{ y: -2 }} className="rounded-2xl p-6 border border-white/10 bg-white/5">
              <h3 className="text-xl font-bold">{e.name}</h3>
              <div className="mt-2 flex items-center gap-4 text-white/80 text-sm">
                <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-cyan-300" /> {e.date}</div>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-violet-300" /> {e.place}</div>
              </div>
              <p className="mt-3 text-white/70 text-sm">{e.info}</p>
              <div className="mt-4 flex gap-2">
                <a href="#" className="px-4 py-2 rounded-md bg-cyan-500 text-black font-semibold">Tickets</a>
                <a href="#" className="px-4 py-2 rounded-md border border-white/20 text-white">Details</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
