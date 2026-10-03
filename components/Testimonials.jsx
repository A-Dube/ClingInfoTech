import { testimonials } from '../lib/content';

export default function Testimonials() {
  return (
    <section className="container sec">
      <h2 className="title">Testimonials</h2>
      <p className="sub">
        Your voice, our pride. Read the stories of the clients we have worked with, and join our family of satisfied customers.
      </p>
      <div className="grid g-300">
        {testimonials.map((t) => (
          <figure key={t.n} className="glass2 card quote">
            <blockquote>&ldquo;{t.q}&rdquo;</blockquote>
            <figcaption>
              <div className="person">{t.n}</div>
              {t.r && <div className="muted small">{t.r}</div>}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
