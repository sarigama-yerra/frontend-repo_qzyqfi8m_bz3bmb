import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.08),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(124,58,237,0.08),transparent_35%)]" />

      <Navbar />

      <main className="relative">
        <Hero />
        <Services />
        <Process />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <p>© {new Date().getFullYear()} MF Enterprises. All rights reserved.</p>
          <div className="text-sm">Crafted with precision • Secure • Scalable</div>
        </div>
      </footer>
    </div>
  )
}

export default App
