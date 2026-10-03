import { stats } from '../lib/content';

export default function Stats() {
  return (
    <section className="container sec tight">
      <div className="grid g-210">
        {stats.map(([n, l]) => (
          <div key={l} className="glass card-sm">
            <div className="stat gt">{n}</div>
            <div className="muted">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
