import { motion } from 'framer-motion'

const games = [
  {
    name: 'SYN/FLUID',
    tag: 'Experimental Arena',
    blurb: 'A kinetic dueling sandbox where liquid metal reacts to every move.',
  },
  {
    name: 'NEURODRIFT',
    tag: 'Sci-fi Racer',
    blurb: 'Neural-linked drifting through shifting cityscapes and warped gravity.',
  },
  {
    name: 'BLACK ORB',
    tag: 'Atmospheric Puzzle',
    blurb: 'Decode the orb’s signals and reshape the space around it.',
  },
]

export default function Games() {
  return (
    <section id="games" className="relative bg-[#05070b] py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(236,72,153,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured worlds</h2>
            <p className="mt-3 text-white/70 max-w-xl">Playable prototypes and upcoming titles born in our R&D lab.</p>
          </div>
          <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white/10 px-4 py-2 text-white border border-white/10 hover:bg-white/15">Request demo access</a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {games.map((g, i) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6"
            >
              <div className="absolute -inset-px bg-gradient-to-tr from-indigo-500/0 via-fuchsia-500/0 to-cyan-400/0 group-hover:to-cyan-400/10" />
              <div className="text-xs text-white/60">{g.tag}</div>
              <h3 className="mt-2 text-xl font-semibold text-white">{g.name}</h3>
              <p className="mt-2 text-white/70 text-sm">{g.blurb}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm text-cyan-300/90">
                Learn more →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
