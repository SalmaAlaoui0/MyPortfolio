import './App.css'
import StarsBackground from './components/StarsBackground.tsx'
import { Footer } from './layout/Footer'
import { Navbar } from './layout/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { Contact } from './sections/Contact'

function App() {

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      <StarsBackground id="stars" />
      < Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App