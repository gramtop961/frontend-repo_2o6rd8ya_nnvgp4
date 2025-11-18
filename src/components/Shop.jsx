import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL

function Shop() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/products`)
        const data = await res.json()
        setProducts(data.products || [])
      } catch (e) {
        setError('Failed to load products')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const checkout = async (product) => {
    try {
      const res = await fetch(`${API_BASE}/api/checkout/create-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: [{ product_id: product.id, quantity: 1 }] })
      })
      const data = await res.json()
      if (data.checkout_url) {
        window.location.href = data.checkout_url
      } else {
        alert('Unable to start checkout')
      }
    } catch (e) {
      alert('Checkout failed')
    }
  }

  if (loading) return <section id="shop" className="py-16"><div className="max-w-6xl mx-auto px-6">Loading...</div></section>
  if (error) return <section id="shop" className="py-16"><div className="max-w-6xl mx-auto px-6 text-red-600">{error}</div></section>

  return (
    <section id="shop" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#3b2a2a] mb-6">Shop perfumes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-[#fff7f3]">
              {p.image && <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#3b2a2a]">{p.title}</h3>
                {p.description && <p className="text-sm text-[#6b4e4e] mt-1 line-clamp-2">{p.description}</p>}
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[#2f855a] font-bold">${(p.price_cents/100).toFixed(2)}</span>
                  <button onClick={() => checkout(p)} className="bg-[#ed8936] hover:bg-[#dd6b20] text-white px-4 py-2 rounded-lg">Buy</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Shop
