import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0b10]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-white/10 text-white/90 text-xs uppercase tracking-widest">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" /> Live • Esports
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            GRUND.gg — Elite Esports. Built by Community.
          </h1>
          <p className="mt-4 text-white/80 text-lg max-w-xl">
            We compete at the edge. We build together. Join the movement powering next-gen players, creators, and fans.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#join" className="px-6 py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-colors">Join the Community</a>
            <a href="#watch" className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors">Watch Live</a>
          </div>
        </motion.div>

        <motion.ul
          className="grid grid-cols-2 gap-3"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          {[
            { k: 'Wins', v: '124' },
            { k: 'Tournaments', v: '36' },
            { k: 'Active Players', v: '18' },
            { k: 'Community', v: '12k+' },
          ].map((s) => (
            <motion.li
              key={s.k}
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              className="rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-sm p-4 text-white"
            >
              <p className="text-white/60 text-xs uppercase tracking-widest">{s.k}</p>
              <p className="text-3xl font-extrabold mt-1">{s.v}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
