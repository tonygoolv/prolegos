import { ArrowRight } from 'lucide-react';

export const Hero = ({ t }: { t: any }) => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <h1>{t.hero.title}</h1>
        <p>{t.hero.subtitle}</p>
        <a href="#contact" className="cta-button">
          {t.hero.cta} <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
};
