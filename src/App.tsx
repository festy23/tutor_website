import React from 'react';
import ErrorBoundary from './shared/components/ErrorBoundary';
import LazySection from './shared/components/LazySection';
import SEOHead from './shared/components/SEOHead';
import { AppProvider } from './shared/providers/AppProvider';
import { withPerformanceTracking } from './shared/patterns/withPerformanceTracking';
import Header from './components/Header';
import OptimizedHero from './features/hero/components/OptimizedHero';
import TelegramBubble from './components/TelegramBubble';

// Lazy load heavy components for better performance
const About = React.lazy(() => import('./components/About'));
const Services = React.lazy(() => import('./components/Services'));
const Reviews = React.lazy(() => import('./components/Reviews'));
const Pricing = React.lazy(() => import('./components/Pricing'));
const Footer = React.lazy(() => import('./components/Footer'));

const AppComponent: React.FC = () => {
  return (
    <AppProvider>
      <ErrorBoundary>
        <SEOHead />
        <div className="bg-beige bg-grid min-h-screen font-sans">
          <Header />

          <main className="w-full scroll-smooth overflow-x-hidden">
            <OptimizedHero />
            
            {/* Lazy-loaded sections with intersection observer */}
            <LazySection rootMargin="200px">
              <About />
            </LazySection>
            
            <LazySection rootMargin="200px">
              <Services />
            </LazySection>
            
            <LazySection rootMargin="200px">
              <Reviews />
            </LazySection>
            
            <LazySection rootMargin="200px">
              <Pricing />
            </LazySection>
          </main>
          
          <LazySection rootMargin="100px">
            <Footer />
          </LazySection>
          
          <TelegramBubble />
        </div>
      </ErrorBoundary>
    </AppProvider>
  );
};

// Apply performance tracking to the main App component
const App = withPerformanceTracking(React.memo(AppComponent), 'App');

export default App;