'use client';
import { useState } from 'react';
import { offices, email, phone, social } from '../lib/content';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Name: ${f.get('name')}\nPhone: ${f.get('phone')}\nCompany: ${f.get('company')}\n\n${f.get('message')}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent('Website enquiry')}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="container sec">
      <div className="grid g-320 gap48">
        <div>
          <h2 className="title">Find us</h2>
          <div className="spacer" />
          <div className="stack">
            {offices.map(([t, a]) => (
              <div key={t} className="glass card-office">
                <div className="bold">{t}</div>
                <div className="muted">{a}</div>
              </div>
            ))}
          </div>
        </div>
        <form className="glass2 card-form" onSubmit={onSubmit}>
          <h2 className="form-title">Send us a message</h2>
          <p className="muted"><a href={`mailto:${email}`}>{email}</a> · {phone}</p>
          <div className="stack">
            <label>Full name<input name="name" type="text" /></label>
            <label>Email *<input name="email" type="email" required /></label>
            <label>Phone<input name="phone" type="tel" /></label>
            <label>Company<input name="company" type="text" /></label>
            <label>Message *<textarea name="message" rows="4" required /></label>
            <button type="submit" className="btn submit">Submit</button>
            {sent && <p className="muted m0" role="status">Opening your email app…</p>}
          </div>
          <div className="row links">
            {social.map(([n, u]) => <a key={n} href={u}>{n}</a>)}
          </div>
        </form>
      </div>
    </section>
  );
}
