import { useState } from 'react'
import './App.css'
import { translations } from './translations'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { RegulatoryServices } from './components/RegulatoryServices'
import { SupplySolutions } from './components/SupplySolutions'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[lang];

  return (
    <div className="app">
      <Header 
        lang={lang} 
        setLang={setLang} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        t={t} 
      />
      
      <main>
        <Hero t={t} />
        <RegulatoryServices t={t} />
        <SupplySolutions t={t} />
        <About t={t} />
        <Projects t={t} />
        
        <section className="clients-section">
          <div className="container">
            <h2 className="section-title">{t.clients.title}</h2>
            <div className="clients-grid">
              <div className="client-logo">COFEPRIS</div>
              <div className="client-logo">ISO 9001</div>
              <div className="client-logo">NOM-059</div>
              <div className="client-logo">NOM-241</div>
              <div className="client-logo">INFONAVIT</div>
            </div>
          </div>
        </section>

        <Contact t={t} />
      </main>

      <Footer />
    </div>
  )
}

export default App
