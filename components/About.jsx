import { story, vision, mission, journey } from '../lib/content';

export default function About() {
  return (
    <>
      <section id="about" className="container sec">
        <h2 className="title reveal">Our story</h2>
        <p className="sub reveal">Innovation at its best is what we believe in.</p>
        <div className="glass2 card-lg story reveal">{story}</div>
        <div className="grid g-300">
          <div className="glass2 card reveal"><div className="tag">OUR VISION</div><p className="muted m0">{vision}</p></div>
          <div className="glass2 card reveal"><div className="tag">OUR MISSION</div><p className="muted m0">{mission}</p></div>
        </div>
      </section>
      <section className="container sec">
        <h2 className="title reveal">A journey as dynamic as us</h2>
        <div className="spacer" />
        <div className="grid g-250 gap20">
          {journey.map(([y, t]) => (
            <div key={y} className="glass card-sm reveal">
              <div className="year gt">{y}</div>
              <p className="muted mt">{t}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
