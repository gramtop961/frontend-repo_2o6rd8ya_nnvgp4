import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#fde6d8]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#3b2a2a] drop-shadow-sm">Find your signature scent</h1>
        <p className="mt-4 text-lg md:text-xl text-[#6b4e4e]">An AI stylist that recommends perfumes, books consultations, and lets you check out in a few clicks.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="#shop" className="bg-[#2f855a] hover:bg-[#276749] text-white px-5 py-3 rounded-lg transition">Shop perfumes</a>
          <a href="#book" className="bg-[#ed8936] hover:bg-[#dd6b20] text-white px-5 py-3 rounded-lg transition">Book a scent consult</a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#fde6d8] via-transparent to-transparent" />
    </section>
  )
}

export default Hero
