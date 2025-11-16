import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Games from './components/Games'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-[#05070b] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Games />
        <CTA />
      </main>
    </div>
  )
}

export default App
