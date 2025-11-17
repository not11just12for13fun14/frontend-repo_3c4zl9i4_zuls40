import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { TeamSpotlight, UpcomingEvents, ContentHub, Sponsors, JoinCTA } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0b10]">
      <Navbar />
      <main>
        <Hero />
        <div className="relative z-10 -mt-16">
          <div className="max-w-7xl mx-auto px-6">
            <TeamSpotlight />
            <UpcomingEvents />
            <ContentHub />
            <JoinCTA />
            <Sponsors />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
