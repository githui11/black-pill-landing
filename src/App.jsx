import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Global ScrollTrigger refresh
    window.addEventListener('resize', () => ScrollTrigger.refresh());
    return () => window.removeEventListener('resize', () => ScrollTrigger.refresh());
  }, []);

  return (
    <main className="w-full min-h-screen bg-primary font-sans text-text selection:bg-accent/30 selection:text-accent">
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <Footer />
    </main>
  );
}

export default App;
