import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#05070b]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Ao-qpnKUMOxV2eTA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(80,37,200,0.25),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.2),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
            Futuristic • Fluid • Bold
          </div>
          <h1 className="mt-4 text-5xl sm:text-6xl font-black tracking-tight text-white">
            SynrTechStudios
          </h1>
          <p className="mt-4 text-lg text-white/80">
            We craft immersive gaming experiences with a bleeding-edge tech stack, fluid interactions, and bold aesthetics. Dive into worlds where physics, AI, and design converge.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#games" className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-white hover:bg-white/15 border border-white/10">
              Explore Games
            </a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 px-5 py-3 text-white shadow-lg shadow-fuchsia-500/20">
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#05070b] to-transparent" />
    </section>
  )
}
