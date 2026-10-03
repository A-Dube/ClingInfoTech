import { site } from '../lib/content';

export default function Navbar() {
  return (
    <div className="container nav-outer">
      <header className="nav glass">
        <a href="#top" className="logo-link" aria-label="Cling Info Tech home"><><img className="logo-for-dark" src="/images/logo-light.png" alt="Cling Info Tech" width="256" height="108" /><img className="logo-for-light" src="/images/logo.png" alt="" aria-hidden="true" width="256" height="108" /></></a>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#tech">Tech focus</a>
          <a href="#team">Team</a>
          <a href={`${site}clients`}>Clients</a>
          <a href={`${site}career`}>Career</a>
        </nav>
        <a href="#contact" className="btn btn-sm">Start a project</a>
      </header>
    </div>
  );
}
