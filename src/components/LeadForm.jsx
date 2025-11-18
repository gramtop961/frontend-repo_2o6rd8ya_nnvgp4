import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL

function LeadForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: '', notes: '' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const res = await fetch(`${API_BASE}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'website' })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed')
      setStatus('Booked! We also logged your details securely.')
      setForm({ name: '', email: '', phone: '', interest: '', notes: '' })
    } catch (err) {
      setStatus(`Error: ${err.message}`)
    }
  }

  return (
    <section id="book" className="py-16 bg-[#fff7f3]">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#3b2a2a] mb-6">Book a consultation</h2>
        <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-xl shadow">
          <input className="border rounded px-3 py-2" placeholder="Full name" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} required />
          <input type="email" className="border rounded px-3 py-2" placeholder="Email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} required />
          <input className="border rounded px-3 py-2" placeholder="Phone" value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} />
          <input className="border rounded px-3 py-2" placeholder="What are you looking for?" value={form.interest} onChange={(e)=>setForm({...form,interest:e.target.value})} />
          <textarea className="md:col-span-2 border rounded px-3 py-2" placeholder="Notes" value={form.notes} onChange={(e)=>setForm({...form,notes:e.target.value})} />
          <button className="md:col-span-2 bg-[#2f855a] hover:bg-[#276749] text-white px-5 py-3 rounded-lg transition">Book my slot</button>
        </form>
        {status && <p className="mt-3 text-sm text-[#6b4e4e]">{status}</p>}
      </div>
    </section>
  )
}

export default LeadForm
