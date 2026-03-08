export const About = ({ t }: { t: any }) => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.8rem', marginBottom: '24px' }}>{t.about.title}</h2>
            <p style={{ fontSize: '1.2rem', color: '#425466' }}>{t.about.text}</p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <h3>60+</h3>
              <p>{t.about.stats.years}</p>
            </div>
            <div className="stat-item">
              <h3>100k+</h3>
              <p>{t.about.stats.projects}</p>
            </div>
            <div className="stat-item">
              <h3>25k+</h3>
              <p>{t.about.stats.products}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
