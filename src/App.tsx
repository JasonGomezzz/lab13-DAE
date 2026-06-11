import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Characters from "@/components/Characters"
import Transformations from "@/components/Transformations"
import Timeline from "@/components/Timeline"
import Gallery from "@/components/Gallery"
import Stats from "@/components/Stats"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Characters />
        <Transformations />
        <Timeline />
        <Gallery />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App