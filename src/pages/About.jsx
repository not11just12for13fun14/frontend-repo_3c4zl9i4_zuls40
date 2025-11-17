export default function About() {
  return (
    <div className="pt-20 min-h-screen bg-[#0a0b10] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-extrabold">About GRUND</h1>
        <p className="text-white/70 mt-2 max-w-3xl">GRUND is a bold, elite, community-driven esports organization. Our mission is to compete at the highest level while empowering the next generation of players and creators.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl p-6 border border-white/10 bg-white/5">
            <h3 className="text-lg font-semibold">Mission</h3>
            <p className="text-white/70 mt-1 text-sm">Compete with excellence. Build with community. Lead with vision.</p>
          </div>
          <div className="rounded-2xl p-6 border border-white/10 bg-white/5">
            <h3 className="text-lg font-semibold">Identity</h3>
            <p className="text-white/70 mt-1 text-sm">Futuristic, competitive, and unapologetically bold.</p>
          </div>
          <div className="rounded-2xl p-6 border border-white/10 bg-white/5">
            <h3 className="text-lg font-semibold">Leadership</h3>
            <p className="text-white/70 mt-1 text-sm">Experienced operators from esports, tech, and media.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
