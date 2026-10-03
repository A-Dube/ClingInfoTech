import { services } from '../lib/content';

export default function Services() {
  return (
    <section id="services" className="container sec">
      <h2 className="title">Services</h2>
      <p className="sub">
        We never use a pre-designed template for your website. All design layouts are developed from the ground up,
        meeting the exacting standards you demand.
      </p>
      <div className="grid g-270">
        {services.map(([t, d], i) => (
          <a key={t} href="#contact" className="glass2 card service">
            <div className="tag num">{String(i + 1).padStart(2, '0')}</div>
            <h3>{t}</h3>
            <p className="muted m0">{d}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
