export default function Community() {
  return (
    <div className="pt-20 min-h-screen bg-[#0a0b10] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-extrabold">Community</h1>
        <p className="text-white/70 mt-2 max-w-2xl">We are community-first. Join the Discord, find scrims, access resources, and help shape the future of GRUND.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl p-6 border border-white/10 bg-gradient-to-br from-cyan-600/20 to-violet-600/10">
            <h3 className="text-xl font-bold">Join Discord</h3>
            <p className="text-white/70 mt-1">Exclusive channels, early drops, and team access.</p>
            <a href="https://discord.com" target="_blank" className="mt-4 inline-block px-5 py-3 rounded-lg bg-cyan-500 text-black font-semibold">Enter</a>
          </div>

          <div className="rounded-2xl p-6 border border-white/10 bg-white/5">
            <h3 className="text-xl font-bold">Recruitment</h3>
            <p className="text-white/70 mt-1">Submit your profile to try out for GRUND rosters.</p>
            <a href="#" className="mt-4 inline-block px-5 py-3 rounded-lg border border-white/20 text-white">Apply</a>
          </div>
        </div>
      </div>
    </div>
  )
}
