import { team } from '../lib/content';

export default function Team() {
  return (
    <section id="team" className="container sec">
      <h2 className="title reveal">Meet our leadership team</h2>
      <div className="spacer" />
      <div className="grid g-220">
        {team.map((m) => (
          <div key={m.name} className="glass card-photo reveal">
            <div className="photo">
              <img src={m.img} alt={m.name} style={{ objectFit: m.fit, background: m.bg }} />
            </div>
            <div className="person">{m.name}</div>
            <div className="muted">{m.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
