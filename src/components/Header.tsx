import { Menu, X, Globe } from 'lucide-react';

interface HeaderProps {
  lang: 'es' | 'en';
  setLang: (lang: 'es' | 'en') => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  t: any;
}

export const Header = ({ lang, setLang, isMenuOpen, setIsMenuOpen, t }: HeaderProps) => {
  const toggleLang = () => {
    setLang(lang === 'es' ? 'en' : 'es');
  };

  return (
    <header>
      <nav className="nav-container">
        <div className="logo">
          <span>PROLEGOS</span>
        </div>
        
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>{t.nav.home}</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>{t.nav.services}</a>
          <a href="#supply" onClick={() => setIsMenuOpen(false)}>{t.nav.supply}</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>{t.nav.about}</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>{t.nav.projects}</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>{t.nav.contact}</a>
          <button className="lang-toggle" onClick={toggleLang}>
            <Globe size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            {lang === 'es' ? 'English' : 'Español'}
          </button>
        </div>
      </nav>
    </header>
  );
};
