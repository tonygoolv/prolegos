import { MapPin, Phone, Mail, Send } from 'lucide-react';

export const Contact = ({ t }: { t: any }) => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <div>
              <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>{t.contact.title}</h2>
              <p style={{ opacity: 0.8, fontSize: '1.2rem' }}>Get in touch with our experts.</p>
            </div>
            
            <div style={{ display: 'grid', gap: '32px' }}>
              <div className="contact-item">
                <div className="icon-wrapper"><MapPin size={24} /></div>
                <div>
                  <h4 style={{ color: 'white' }}>Address</h4>
                  <p>{t.contact.address}</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon-wrapper"><Phone size={24} /></div>
                <div>
                  <h4 style={{ color: 'white' }}>Phone</h4>
                  <p>{t.contact.phone}</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon-wrapper"><Mail size={24} /></div>
                <div>
                  <h4 style={{ color: 'white' }}>Email</h4>
                  <p>{t.contact.email}</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder={t.contact.form.name} required />
            <input type="email" placeholder={t.contact.form.email} required />
            <textarea placeholder={t.contact.form.message} rows={5} required></textarea>
            <button type="submit" className="cta-button">
              {t.contact.form.send} <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
