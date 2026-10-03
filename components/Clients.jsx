import { clients, site } from '../lib/content';

export default function Clients() {
  return (
    <section className="container sec">
      <h2 className="title reveal">Our global presence</h2>
      <p className="sub reveal">Expanding our global footprint across diverse markets and cultures.</p>
      <div className="row chips mb48">
        {['Noida, India', 'Pune, India', 'Moradabad, India', 'Conakry, Guinea'].map((c) => <span key={c} className="chip">{c}</span>)}
      </div>
      <h2 className="title reveal">Our diverse clientele</h2>
      <div className="spacer" />
      <div className="logo-grid reveal">
        {clients.map(([name, src, href]) => {
          const img = <img src={src} alt={name} loading="lazy" />;
          return href
            ? <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="logo reveal">{img}</a>
            : <div key={name} className="logo reveal">{img}</div>;
        })}
      </div>
      <a href={`${site}clients`} className="btn ghost mt24">View all clients</a>
    </section>
  );
}
