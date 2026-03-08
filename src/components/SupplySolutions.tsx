import { Paintbrush, Droplets, Zap, CheckCircle2 } from 'lucide-react';

export const SupplySolutions = ({ t }: { t: any }) => {
  const lines = [
    {
      icon: <Paintbrush size={24} />,
      title: t.supply.lines.protection.title,
      description: t.supply.lines.protection.description,
    },
    {
      icon: <Droplets size={24} />,
      title: t.supply.lines.hydraulic.title,
      description: t.supply.lines.hydraulic.description,
    },
    {
      icon: <Zap size={24} />,
      title: t.supply.lines.electrical.title,
      description: t.supply.lines.electrical.description,
    },
  ];

  return (
    <section id="supply" className="supply-section">
      <div className="container">
        <div className="supply-grid">
          <div className="supply-content">
            <h2>{t.supply.title}</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '32px' }}>{t.supply.description}</p>
            
            <div className="supply-lines">
              {lines.map((line, index) => (
                <div className="supply-line-item" key={index}>
                  <div className="icon-wrapper" style={{ minWidth: '56px' }}>{line.icon}</div>
                  <div>
                    <h4>{line.title}</h4>
                    <p>{line.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="methodology-card" style={{ background: '#f6f9fc', padding: '60px', borderRadius: '32px' }}>
            <h3>{t.supply.model.title}</h3>
            <div style={{ marginTop: '32px', display: 'grid', gap: '20px' }}>
              {t.supply.model.items.map((item: string, index: number) => (
                <div key={index} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <CheckCircle2 size={20} color="#635bff" />
                  <span style={{ fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
