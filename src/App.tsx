import React, { Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TelegramBubble from './components/TelegramBubble';

const About = React.lazy(() => import('./components/About'));
const Services = React.lazy(() => import('./components/Services'));
const Reviews = React.lazy(() => import('./components/Reviews'));
const Pricing = React.lazy(() => import('./components/Pricing'));
const Footer = React.lazy(() => import('./components/Footer'));

const App: React.FC = () => {
  return (
    <div className="bg-beige bg-grid min-h-screen font-sans">
      <Header />
      <main className="w-full scroll-smooth overflow-x-hidden">
        <Hero />
        <Suspense fallback={<div>Loading...</div>}>
          <About />
          <Services />
          <Reviews />
          <Pricing />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <TelegramBubble />
    </div>
  );
};

export default App;