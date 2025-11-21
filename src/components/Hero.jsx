import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const floatTransition = (delay = 0) => ({
  duration: 4,
  delay,
  repeat: Infinity,
  repeatType: 'mirror',
  ease: 'easeInOut',
})

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Color glow overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.25),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(124,58,237,0.25),transparent_35%)]" />

      {/* Floating orbs */}
      <motion.div className="absolute -left-10 top-24 h-40 w-40 rounded-full bg-cyan-500/20 blur-2xl" animate={{ y: [0, -30, 0], x: [0, 20, 0] }} transition={floatTransition(0.2)} />
      <motion.div className="absolute right-10 bottom-20 h-52 w-52 rounded-full bg-indigo-500/20 blur-2xl" animate={{ y: [0, 30, 0], x: [0, -20, 0] }} transition={floatTransition(0.5)} />
      <motion.div className="absolute left-1/2 top-10 h-24 w-24 -translate-x-1/2 rounded-full bg-blue-400/20 blur-xl" animate={{ y: [0, -20, 0] }} transition={floatTransition(0.8)} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 w-full">
        <div className="py-36">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }}>
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

        {/* Stunning MF entry */}
        <div className="relative hidden lg:flex items-center justify-center">
          {/* Glass card */}
          <motion.div initial={{ opacity: 0, scale: 0.85, filter: 'blur(8px)' }} animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} transition={{ duration: 1.1, ease: 'easeOut', delay: 0.1 }} className="relative w-[520px] h-[520px] rounded-[32px] border border-white/15 bg-white/10 backdrop-blur-xl shadow-[0_20px_100px_rgba(59,130,246,0.25)] overflow-hidden">
            {/* Gradient beams */}
            <motion.div className="absolute -top-1/3 left-1/3 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-400/40 to-blue-600/30 blur-3xl" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} />
            <motion.div className="absolute -bottom-1/4 -left-1/4 h-80 w-80 rounded-full bg-gradient-to-tr from-fuchsia-500/20 to-indigo-500/20 blur-3xl" animate={{ rotate: -360 }} transition={{ duration: 22, repeat: Infinity, ease: 'linear' }} />

            {/* MF Monogram */}
            <motion.div initial={{ y: 40, opacity: 0, letterSpacing: '0.6em' }} animate={{ y: 0, opacity: 1, letterSpacing: '0.05em' }} transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }} className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 blur-2xl rounded-3xl" />
                <h2 className="relative text-[160px] leading-none font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-200 to-blue-300 drop-shadow-[0_10px_40px_rgba(59,130,246,0.35)]">
                  MF
                </h2>
                {/* Shine sweep */}
                <motion.div initial={{ x: '-120%' }} animate={{ x: '120%' }} transition={{ duration: 2.4, delay: 0.6, repeat: Infinity, repeatDelay: 2 }} className="pointer-events-none absolute -top-6 -bottom-6 -left-6 -right-6">
                  <div className="h-full w-[40%] rotate-12 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                </motion.div>
                {/* Sparkles */}
                <motion.span className="absolute -top-6 -left-4 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_20px_6px_rgba(34,211,238,0.45)]" animate={{ y: [0, -10, 0] }} transition={floatTransition(0.1)} />
                <motion.span className="absolute -bottom-4 right-6 h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_20px_6px_rgba(59,130,246,0.45)]" animate={{ y: [0, 10, 0] }} transition={floatTransition(0.3)} />
              </div>
            </motion.div>

            {/* Bottom label */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white/80">
              <span className="text-sm">MF Enterprises</span>
              <span className="text-xs text-white/60">IT Solutions & Services</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Fade to page */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  )
}
