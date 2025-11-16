import { Cpu, Atom, Shield, Sparkle, Joystick } from 'lucide-react'

const features = [
  {
    title: 'Simulation-grade Physics',
    desc: 'Fluid dynamics, soft-body deformation and destructible environments tuned for gameplay.',
    icon: Atom,
  },
  {
    title: 'AI-driven Systems',
    desc: 'Procedural worlds, emergent NPC behaviors and adaptive difficulty via ML pipelines.',
    icon: Cpu,
  },
  {
    title: 'Secure Netcode',
    desc: 'Authoritative servers with lag compensation, encryption, and anti-cheat primitives.',
    icon: Shield,
  },
  {
    title: 'Signature Feel',
    desc: 'Haptics, audio-reactive VFX and micro-interactions that feel unmistakably SynrTech.',
    icon: Joystick,
  },
]

export default function Features() {
  return (
    <section id="tech" className="relative bg-[#05070b] py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Technology stack that bends reality</h2>
          <p className="mt-3 text-white/70">From engine plugins to cloud orchestration, we obsess over pipelines that turn ideas into frames-per-second.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/20 to-cyan-400/20" />
              <f.icon className="relative h-6 w-6 text-white" />
              <h3 className="relative mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="relative mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
