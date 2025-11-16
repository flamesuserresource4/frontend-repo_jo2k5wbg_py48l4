export default function CTA() {
  return (
    <section id="contact" className="relative bg-[#05070b] py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-600/20 via-fuchsia-600/20 to-cyan-500/20 p-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-[#0a0e17] p-8 rounded-2xl">
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white">Collaborate with SynrTechStudios</h3>
              <p className="mt-2 text-white/70 max-w-2xl">Have a world to build? We partner with publishers, brands and platforms to deliver next-gen interactive experiences.</p>
            </div>
            <div className="mt-6 md:mt-0 flex items-center md:justify-end">
              <a href="mailto:contact@synrtech.studio" className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-white border border-white/10 hover:bg-white/15">contact@synrtech.studio</a>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-white/40">© {new Date().getFullYear()} SynrTechStudios. All rights reserved.</p>
      </div>
    </section>
  )
}
