import Spline from '@splinetool/react-spline'
import React from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const floatTransition = (delay = 0) => ({
  duration: 4,
  delay,
  repeat: Infinity,
  repeatType: 'mirror',
  ease: 'easeInOut',
})

export default function Hero() {
  // Cursor reactive motion values (centered, smoothed)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 120, damping: 20, mass: 0.4 })
  const sy = useSpring(my, { stiffness: 120, damping: 20, mass: 0.4 })

  // Derived transforms for layered parallax
  const bgX = useTransform(sx, [ -200, 200 ], [ 12, -12 ])
  const bgY = useTransform(sy, [ -200, 200 ], [ 8, -8 ])
  const orbX = useTransform(sx, [ -200, 200 ], [ -20, 20 ])
  const orbY = useTransform(sy, [ -200, 200 ], [ -16, 16 ])
  const cardRotateY = useTransform(sx, [ -200, 200 ], [ 8, -8 ])
  const cardRotateX = useTransform(sy, [ -200, 200 ], [ -6, 6 ])
  const shineX = useTransform(sx, [ -200, 200 ], [ '-30%', '130%' ])

  const handleMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - (bounds.left + bounds.width / 2)
    const y = e.clientY - (bounds.top + bounds.height / 2)
    mx.set(Math.max(-200, Math.min(200, x)))
    my.set(Math.max(-200, Math.min(200, y)))
  }

  const handleLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <section
      className="relative min-h-[100vh] flex items-center overflow-hidden bg-slate-950"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {/* Spline background with subtle parallax to cursor */}
      <motion.div className="absolute inset-0" style={{ x: bgX, y: bgY }}>
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      {/* Soft professional glows and grain for depth */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.20),transparent_35%),radial-gradient(circle_at_85%_25%,rgba(99,102,241,0.20),transparent_38%),radial-gradient(circle_at_50%_85%,rgba(14,165,233,0.18),transparent_40%)]" />
        <div className="absolute inset-0 opacity-[0.06] mix-blend-soft-light"
             style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '3px 3px' }} />
      </div>

      {/* Cursor spotlight following the pointer for a premium feel */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(600px 600px at var(--x) var(--y), rgba(59,130,246,0.22), transparent 60%)',
        }}
        // Update CSS vars from motion values
        onMouseMove={(e) => {
          const { left, top } = e.currentTarget.getBoundingClientRect()
          e.currentTarget.style.setProperty('--x', `${e.clientX - left}px`)
          e.currentTarget.style.setProperty('--y', `${e.clientY - top}px`)
        }}
      />

      {/* Floating orbs react to cursor + float loop */}
      <motion.div
        className="absolute -left-10 top-24 h-40 w-40 rounded-full bg-cyan-400/25 blur-2xl"
        animate={{ y: [0, -28, 0], x: [0, 18, 0] }}
        transition={floatTransition(0.15)}
        style={{ x: orbX, y: orbY }}
      />
      <motion.div
        className="absolute right-10 bottom-16 h-52 w-52 rounded-full bg-indigo-500/25 blur-2xl"
        animate={{ y: [0, 24, 0], x: [0, -16, 0] }}
        transition={floatTransition(0.35)}
        style={{ x: useTransform(orbX, (v) => -v * 0.8), y: useTransform(orbY, (v) => -v * 0.8) }}
      />
      <motion.div
        className="absolute left-1/2 top-10 h-24 w-24 -translate-x-1/2 rounded-full bg-blue-400/20 blur-xl"
        animate={{ y: [0, -18, 0] }}
        transition={floatTransition(0.55)}
        style={{ x: useTransform(orbX, (v) => v * 0.4), y: useTransform(orbY, (v) => v * 0.4) }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 w-full">
        <div className="py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
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
              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="pointer-events-auto inline-flex items-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-3 text-white font-medium shadow-[0_8px_30px_rgba(59,130,246,0.35)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.55)] transition-shadow"
              >
                Start a Project
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="pointer-events-auto inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-white font-medium backdrop-blur hover:bg-white/15"
              >
                Explore Services
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* MF 3D Parallax Card */}
        <div className="relative hidden lg:flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.1, ease: 'easeOut', delay: 0.1 }}
            style={{ rotateY: cardRotateY, rotateX: cardRotateX }}
            className="relative w-[540px] h-[540px] rounded-[32px] border border-white/15 bg-white/10 backdrop-blur-xl shadow-[0_20px_100px_rgba(59,130,246,0.25)] overflow-hidden will-change-transform"
          >
            {/* Gradient beams (slow rotation) */}
            <motion.div
              className="absolute -top-1/3 left-1/3 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-400/40 to-blue-600/30 blur-3xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute -bottom-1/4 -left-1/4 h-80 w-80 rounded-full bg-gradient-to-tr from-fuchsia-500/20 to-indigo-500/20 blur-3xl"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />

            {/* MF Monogram */}
            <motion.div
              initial={{ y: 40, opacity: 0, letterSpacing: '0.6em' }}
              animate={{ y: 0, opacity: 1, letterSpacing: '0.05em' }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 blur-2xl rounded-3xl" />
                <h2 className="relative text-[168px] leading-none font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-200 to-blue-300 drop-shadow-[0_10px_40px_rgba(59,130,246,0.35)]">
                  MF
                </h2>
                {/* Shine sweep follows cursor subtly */}
                <motion.div
                  className="pointer-events-none absolute -top-8 -bottom-8 -left-10 -right-10 overflow-hidden"
                >
                  <motion.div
                    style={{ x: shineX }}
                    transition={{ type: 'spring', stiffness: 90, damping: 20 }}
                    className="h-full w-[45%] rotate-12 bg-gradient-to-r from-transparent via-white/35 to-transparent"
                  />
                </motion.div>
                {/* Sparkles */}
                <motion.span
                  className="absolute -top-6 -left-4 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_20px_6px_rgba(34,211,238,0.45)]"
                  animate={{ y: [0, -10, 0] }}
                  transition={floatTransition(0.1)}
                />
                <motion.span
                  className="absolute -bottom-4 right-6 h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_20px_6px_rgba(59,130,246,0.45)]"
                  animate={{ y: [0, 10, 0] }}
                  transition={floatTransition(0.3)}
                />
              </div>
            </motion.div>

            {/* Bottom label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white/80"
            >
              <span className="text-sm">MF Enterprises</span>
              <span className="text-xs text-white/60">IT Solutions & Services</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Fade to page */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  )
}
