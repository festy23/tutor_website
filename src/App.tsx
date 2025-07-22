import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-beige bg-grid min-h-screen font-mono">
      <Header />
      <main className="w-full max-w-screen-lg mx-auto scroll-smooth">
        <Hero />
        <About />
        <Services />
        <Achievements />
        <Reviews />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;