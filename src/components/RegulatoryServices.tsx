import { ShieldCheck, Lightbulb, BarChart3, GraduationCap } from 'lucide-react';

export const RegulatoryServices = ({ t }: { t: any }) => {
  const services = [
    {
      icon: <ShieldCheck size={32} />,
      title: t.services.audits.title,
      description: t.services.audits.description,
    },
    {
      icon: <Lightbulb size={32} />,
      title: t.services.consultancy.title,
      description: t.services.consultancy.description,
    },
    {
      icon: <BarChart3 size={32} />,
      title: t.services.intelligence.title,
      description: t.services.intelligence.description,
    },
    {
      icon: <GraduationCap size={32} />,
      title: t.services.training.title,
      description: t.services.training.description,
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>{t.services.title}</h2>
          <p>{t.services.subtitle}</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="icon-wrapper">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
