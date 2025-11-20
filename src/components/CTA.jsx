export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/30 to-cyan-500/20 p-10 backdrop-blur">
          <div className="max-w-2xl">
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
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -z-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}
