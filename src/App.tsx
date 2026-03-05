import { useState } from 'react'
import './App.css'
import { translations } from './translations'

function App() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[lang];

  const toggleLang = () => {
    setLang(prev => prev === 'es' ? 'en' : 'es');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="app">
      <header>
        <nav className="nav-container">
          <div className="logo">PROLEGOS</div>
          
          <button 
            className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger"></span>
          </button>

          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={closeMenu}>{t.nav.home}</a>
            <a href="#services" onClick={closeMenu}>{t.nav.services}</a>
            <a href="#about" onClick={closeMenu}>{t.nav.about}</a>
            <a href="#contact" onClick={closeMenu}>{t.nav.contact}</a>
            <button className="lang-toggle" onClick={() => { toggleLang(); closeMenu(); }}>
              {lang === 'es' ? 'English' : 'Español'}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container">
            <h1>{t.hero.title}</h1>
            <p>{t.hero.subtitle}</p>
            <a href="#contact" className="cta-button">{t.hero.cta}</a>
          </div>
        </section>

        <section id="services" className="services-section">
          <div className="container">
            <h2 className="section-title">{t.services.title}</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3>{t.services.audits.title}</h3>
                <p>{t.services.audits.description}</p>
              </div>
              <div className="service-card">
                <h3>{t.services.consultancy.title}</h3>
                <p>{t.services.consultancy.description}</p>
              </div>
              <div className="service-card">
                <h3>{t.services.intelligence.title}</h3>
                <p>{t.services.intelligence.description}</p>
              </div>
              <div className="service-card">
                <h3>{t.services.training.title}</h3>
                <p>{t.services.training.description}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <div className="about-content">
              <h2>{t.about.title}</h2>
              <p>{t.about.text}</p>
            </div>
          </div>
        </section>

        <section className="clients-section">
          <div className="container">
            <h2 className="section-title">{t.clients.title}</h2>
            <div className="clients-grid">
              <div className="client-logo">COFEPRIS</div>
              <div className="client-logo">ISO 9001</div>
              <div className="client-logo">NOM-059</div>
              <div className="client-logo">NOM-241</div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <h3>{t.contact.title}</h3>
                <p><strong>Address:</strong> {t.contact.address}</p>
                <p><strong>Phone:</strong> {t.contact.phone}</p>
                <p><strong>Email:</strong> {t.contact.email}</p>
              </div>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder={t.contact.form.name} required />
                <input type="email" placeholder={t.contact.form.email} required />
                <textarea placeholder={t.contact.form.message} rows={5} required></textarea>
                <button type="submit" className="cta-button">{t.contact.form.send}</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} PROLEGOS S.A. de C.V. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
