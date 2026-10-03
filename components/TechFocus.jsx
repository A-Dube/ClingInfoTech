import { techFocus, site } from '../lib/content';

export default function TechFocus() {
  return (
    <section id="tech" className="container sec">
      <h2 className="title">Current tech focus</h2>
      <p className="sub">Where our team is putting its energy right now.</p>
      <div className="grid g-300">
        {techFocus.map((v) => (
          <div key={v.title} className="glass2 media-card">
            <video src={v.src} autoPlay muted loop playsInline controls preload="auto" />
            <div className="media-body">
              <div className="tag">{v.tag}</div>
              <div className="media-title">{v.title}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="row mt24">
        <a href={`${site}ai`} className="btn ghost">Explore AI/ML</a>
        <a href={`${site}video3d`} className="btn ghost">See 3D videos</a>
      </div>
    </section>
  );
}
