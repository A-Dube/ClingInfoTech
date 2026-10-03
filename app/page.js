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

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
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
