import React, { Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TelegramBubble from './components/TelegramBubble';

const About = React.lazy(() => import('./components/About'));
const Achievements = React.lazy(() => import('./components/Achievements'));
const Services = React.lazy(() => import('./components/Services'));
const Reviews = React.lazy(() => import('./components/Reviews'));
const Pricing = React.lazy(() => import('./components/Pricing'));
const Footer = React.lazy(() => import('./components/Footer'));

const App: React.FC = () => {
  return (
    <div className="bg-beige min-h-screen font-mono">
      <Header />
      <main className="w-full max-w-screen-lg mx-auto scroll-smooth overflow-x-hidden">
        <Hero />
        <Suspense fallback={<div>Loading...</div>}>
          <About />
          <Services />
          <Achievements />
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