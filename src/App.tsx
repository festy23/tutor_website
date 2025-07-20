import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [showTitleInHeader, setShowTitleInHeader] = useState(false);

  return (
    <div className="bg-grid">
      <Header showTitle={showTitleInHeader} />
      <main className="container mx-auto px-4">
        <section id="hero" className="section-container">
          <Hero setShouldShowTitle={setShowTitleInHeader} />
        </section>
        <section id="about" className="section-container"><About /></section>
        <section id="services" className="section-container"><Services /></section>
        <section id="achievements" className="section-container"><Achievements /></section>
        <section id="reviews" className="section-container"><Reviews /></section>
        <section id="pricing" className="section-container"><Pricing /></section>
      </main>
      <Footer />
    </div>
  );
};

export default App;