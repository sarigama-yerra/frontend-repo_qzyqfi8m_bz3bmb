import { CheckCircle2, Workflow, Gauge, Users } from 'lucide-react'

const steps = [
  { icon: Users, title: 'Discover', desc: 'Workshops to align on goals, constraints, and success metrics.' },
  { icon: Workflow, title: 'Design', desc: 'Solution architecture, UX flows, and technical planning.' },
  { icon: Gauge, title: 'Build', desc: 'Agile delivery with transparent milestones and QA.' },
  { icon: CheckCircle2, title: 'Scale', desc: 'Observability, SRE practices, and continuous improvement.' },
]

export default function Process() {
  return (
    <section id="process" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">A clear, proven process</h2>
          <p className="mt-3 text-slate-300">Structure that keeps momentum while staying flexible to your needs.</p>
        </div>

        <ol className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }, idx) => (
            <li key={title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/80 to-cyan-400/80 text-white shadow">
                <Icon className="h-6 w-6" />
              </div>
              <p className="text-xs text-slate-300/70">Step {idx + 1}</p>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -z-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}
