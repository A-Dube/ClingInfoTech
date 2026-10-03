import { whatsapp } from '../lib/content';

export default function Hero() {
  return (
    <section id="top" className="container hero">
      <div className="grid g-320 hero-grid">
        <div>
          <p className="eyebrow">End-to-end IT solutions</p>
          <h1 className="hero-title">Making your ideas happen!</h1>
          <p className="lead">
            We provide website development, mobile application development, digital marketing, custom web portals,
            an IT team for your next idea and ERP development, for all your business needs.
          </p>
          <div className="row">
            <a href="#contact" className="btn">Talk to us</a>
            <a href={whatsapp} className="btn ghost">Chat on WhatsApp</a>
          </div>
        </div>
        <div className="glass2 hero-card">
          <img src="/images/hero.webp" alt="Cling Info Tech" width="1080" height="988" />
          <div className="row chips">
            {['Web', 'Mobile', 'ERP', 'AI / ML', '3D'].map((c) => <span key={c} className="chip">{c}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
