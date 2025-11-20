import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.25),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(124,58,237,0.25),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 w-full">
        <div className="py-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Enterprise-grade IT Solutions
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Building your digital future with precision and flair
            </h1>
            <p className="mt-5 text-slate-300 text-lg max-w-xl">
              MF Enterprises delivers end-to-end IT solutions — cloud, AI, cybersecurity, and custom software — wrapped in a modern, human-centered approach.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="pointer-events-auto inline-flex items-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-3 text-white font-medium shadow-[0_8px_30px_rgba(59,130,246,0.35)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.55)] transition-shadow">
                Start a Project
              </a>
              <a href="#services" className="pointer-events-auto inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-white font-medium backdrop-blur hover:bg-white/15">
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
        <div className="hidden lg:block" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  )
}
