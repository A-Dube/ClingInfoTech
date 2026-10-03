import { site, quickLinks, legal, footerServices } from '../lib/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container grid g-220 foot-grid">
        <div>
          <a href="#top" className="logo-link foot-logo" aria-label="Cling Info Tech home"><><img className="logo-for-dark" src="/images/logo-light.png" alt="Cling Info Tech" width="256" height="108" /><img className="logo-for-light" src="/images/logo.png" alt="" aria-hidden="true" width="256" height="108" /></></a>
          <p className="muted small">Cling Info Tech Works Private Limited</p>
        </div>
        <div>
          <div className="bold">Quick links</div>
          {quickLinks.map(([t, u]) => <a key={t} href={site + u} className="flink">{t}</a>)}
        </div>
        <div>
          <div className="bold">Services</div>
          {footerServices.map((s) => <div key={s} className="flink muted">{s}</div>)}
        </div>
        <div>
          <div className="bold">Legal</div>
          {legal.map(([t, u]) => <a key={t} href={site + u} className="flink">{t}</a>)}
        </div>
      </div>
      <div className="container muted small copy">© Cling Infotech. All rights reserved.</div>
    </footer>
  );
}
