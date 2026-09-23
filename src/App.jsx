import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Languages from './components/Languages'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      {/* Línea decorativa fina superior con degradado */}
      <div className="top-decorative-line" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Languages />
        {/* <Music /> */}
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App