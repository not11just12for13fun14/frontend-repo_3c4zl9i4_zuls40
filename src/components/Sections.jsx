import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Users2, Calendar, PlayCircle, Shield, ArrowUpRight, Twitch, Youtube, Twitter } from 'lucide-react'

function SectionHeader({ title, caption }) {
  return (
    <div className="flex items-end justify-between mb-6">
      <div>
        <p className="text-xs uppercase tracking-widest text-white/50">{caption}</p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">{title}</h2>
      </div>
      <a href="#" className="text-cyan-300 hover:text-cyan-200 inline-flex items-center gap-1">
        View all <ArrowUpRight className="h-4 w-4" />
      </a>
    </div>
  )
}

export function TeamSpotlight() {
  const players = [
    { name: 'Viper', role: 'IGL', kda: '1.28', img: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=800&auto=format&fit=crop' },
    { name: 'Ghost', role: 'Entry', kda: '1.34', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop' },
    { name: 'Nova', role: 'Flex', kda: '1.21', img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop' },
    { name: 'Aero', role: 'Support', kda: '1.12', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop' },
  ]

  return (
    <section className="py-12">
      <SectionHeader title="Team Spotlight" caption="Roster" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {players.map((p) => (
          <motion.div
            key={p.name}
            whileHover={{ y: -4 }}
            className="relative rounded-xl overflow-hidden bg-white/5 border border-white/10"
          >
            <img src={p.img} alt={p.name} className="h-56 w-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-white font-bold text-lg">{p.name}</p>
              <p className="text-white/70 text-sm">{p.role} • KDA {p.kda}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export function UpcomingEvents() {
  const events = [
    { title: 'Champions Circuit – Split 2', date: 'Dec 12', game: 'Valorant', prize: '$50k' },
    { title: 'Global Open – Playoffs', date: 'Jan 5', game: 'CS2', prize: '$75k' },
    { title: 'Arena Masters – Finals', date: 'Jan 20', game: 'Rocket League', prize: '$20k' },
  ]

  return (
    <section className="py-12">
      <SectionHeader title="Upcoming Events" caption="Tournaments" />
      <div className="grid md:grid-cols-3 gap-4">
        {events.map((e) => (
          <div key={e.title} className="rounded-xl p-4 bg-gradient-to-br from-indigo-600/20 to-cyan-600/10 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-semibold">{e.title}</p>
                <p className="text-white/60 text-sm">{e.game}</p>
              </div>
              <Calendar className="text-cyan-300" />
            </div>
            <div className="mt-6 flex items-center justify-between text-white/80 text-sm">
              <span>{e.date}</span>
              <span className="px-2 py-1 rounded bg-white/10">Prize {e.prize}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function ContentHub() {
  const items = [
    { type: 'Stream', title: 'Matchday Live', icon: <Twitch className="h-4 w-4" /> },
    { type: 'Video', title: 'Top 10 Plays', icon: <Youtube className="h-4 w-4" /> },
    { type: 'Article', title: 'Meta Breakdown', icon: <Shield className="h-4 w-4" /> },
  ]

  return (
    <section className="py-12">
      <SectionHeader title="Latest Content" caption="Watch & Read" />
      <div className="grid md:grid-cols-3 gap-4">
        {items.map((i) => (
          <motion.a
            key={i.title}
            whileHover={{ scale: 1.02 }}
            href="#"
            className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/90"
          >
            <div className="flex items-center gap-2 text-cyan-300">{i.icon}<span className="text-xs uppercase">{i.type}</span></div>
            <p className="mt-2 text-white font-semibold">{i.title}</p>
            <div className="mt-4 inline-flex items-center gap-2 text-white/70 text-sm">
              <PlayCircle className="h-4 w-4" /> Watch now
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}

export function Sponsors() {
  const sponsors = ['HyperX', 'NVIDIA', 'SteelSeries', 'DXRacer', 'Monster']

  return (
    <section className="py-12">
      <SectionHeader title="Partners" caption="Powered By" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {sponsors.map((s) => (
          <div key={s} className="h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors">
            <span className="font-semibold tracking-wide">{s}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export function JoinCTA() {
  return (
    <section id="join" className="py-16">
      <div className="rounded-2xl p-8 bg-gradient-to-br from-cyan-600/20 via-violet-700/10 to-transparent border border-white/10 text-center">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Join GRUND — Build the Edge</h3>
        <p className="mt-2 text-white/70 max-w-2xl mx-auto">Become a member, get early drops, scrim access, and shape our path to the podium.</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a href="https://discord.com" target="_blank" className="px-6 py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400">Join Discord</a>
          <a href="#" className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10">Become a Member</a>
        </div>
      </div>
    </section>
  )
}
