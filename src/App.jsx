import Hero from './components/Hero'
import LeadForm from './components/LeadForm'
import Shop from './components/Shop'

function App() {
  return (
    <div className="min-h-screen bg-[#fde6d8]">
      <Hero />
      <Shop />
      <LeadForm />
      <footer className="py-10 text-center text-[#6b4e4e]">© 2025 Parfum Studio. All rights reserved.</footer>
    </div>
  )
}

export default App
