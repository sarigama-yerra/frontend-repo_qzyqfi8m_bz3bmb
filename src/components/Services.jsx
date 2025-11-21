import { Shield, Cloud, Cpu, Code2, Brain, LineChart } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  { icon: Cloud, title: 'Cloud & DevOps', desc: 'Infrastructure as code, CI/CD pipelines, scalable cloud architectures.' },
  { icon: Shield, title: 'Cybersecurity', desc: 'Zero-trust strategies, threat modeling, audits, and compliance.' },
  { icon: Cpu, title: 'AI & Automation', desc: 'LLM integration, process automation, intelligent assistants.' },
  { icon: Code2, title: 'Custom Software', desc: 'Web, mobile, and backend systems tailored to your business.' },
  { icon: Brain, title: 'Data & Insights', desc: 'Data platforms, analytics dashboards, and predictive models.' },
  { icon: LineChart, title: 'IT Strategy', desc: 'Roadmaps, architecture reviews, and technology modernization.' },
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      {/* subtle animated dividing line */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Services crafted for impact</h2>
          <p className="mt-3 text-slate-300">We combine engineering rigor with design finesse to deliver outcomes that move the needle.</p>
        </div>

        <motion.div
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={item}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:bg-white/10"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/80 to-cyan-400/80 text-white shadow">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
              <div className="absolute inset-0 -z-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-blue-500/10 to-cyan-500/10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
