export default function Shop() {
  const products = [
    { name: 'GRUND Pro Jersey', price: '$79', img: 'https://images.unsplash.com/photo-1520975922323-2531f9cc773c?q=80&w=1400&auto=format&fit=crop' },
    { name: 'GRUND Hoodie', price: '$89', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1400&auto=format&fit=crop' },
    { name: 'Dad Hat', price: '$29', img: 'https://images.unsplash.com/photo-1603252110451-cd7b4c0b23ed?q=80&w=1400&auto=format&fit=crop' },
  ]

  return (
    <div className="pt-20 min-h-screen bg-[#0a0b10] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-extrabold">Shop</h1>
        <p className="text-white/70 mt-2">Bold merch for a bold org.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <img src={p.img} alt={p.name} className="h-64 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-bold">{p.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-white/80">{p.price}</span>
                  <button className="px-4 py-2 rounded-md bg-cyan-500 text-black font-semibold">Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
