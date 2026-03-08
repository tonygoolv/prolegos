export const Projects = ({ t }: { t: any }) => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2>{t.projects.title}</h2>
          <p>{t.projects.subtitle}</p>
        </div>
        <div className="projects-scroll">
          {t.projects.list.map((project: string, index: number) => (
            <div className="project-card" key={index}>
              <h3>{project}</h3>
              <div style={{ marginTop: '20px', color: '#635bff', fontWeight: 600 }}>Featured Project</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
