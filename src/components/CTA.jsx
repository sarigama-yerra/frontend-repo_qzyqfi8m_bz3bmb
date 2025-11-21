import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/30 to-cyan-500/20 p-10 backdrop-blur relative overflow-hidden"
        >
          <motion.div
            aria-hidden
            className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-cyan-400/20 blur-2xl"
            animate={{ y: [0, -16, 0], x: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden
            className="absolute -left-10 -bottom-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"
            animate={{ y: [0, 16, 0], x: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          />

          <div className="max-w-2xl relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build something remarkable</h2>
            <p className="mt-3 text-slate-200">Tell us about your goals and we’ll craft a tailored path to get you there.</p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid gap-4 sm:grid-cols-2">
              <input required placeholder="Your Name" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none" />
              <input required type="email" placeholder="Email" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none" />
              <input placeholder="Company" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none sm:col-span-2" />
              <textarea required placeholder="What can we help you build?" rows={4} className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none sm:col-span-2" />
              <button className="sm:col-span-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-3 text-white font-medium shadow-[0_8px_30px_rgba(59,130,246,0.35)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.55)] transition-shadow">
                Request Consultation
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
