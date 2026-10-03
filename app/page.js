'use client';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Services from '../components/Services';
import TechFocus from '../components/TechFocus';
import Clients from '../components/Clients';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import PaletteSwitcher from '../components/PaletteSwitcher';
import { palettes } from '../lib/content';

export default function Home() {
  const [palette, setPalette] = useState('classic');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('cling-palette');
      if (saved && palettes.some((p) => p.id === saved)) setPalette(saved);
    } catch (e) {}
  }, []);

  const choose = (id) => {
    setPalette(id);
    try { localStorage.setItem('cling-palette', id); } catch (e) {}
  };

  return (
    <div className="page" data-palette={palette}>
      <div className="wrap">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <About />
          <Services />
          <TechFocus />
          <Clients />
          <Team />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
      <PaletteSwitcher value={palette} onChange={choose} />
    </div>
  );
}
