import React, { useEffect, useCallback } from 'react';
import profilePic from '../../assets/profile_pic.webp';
import { useAppStore } from '../store/appStore';
import { AppContext } from '../context/AppContext';

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const appStore = useAppStore();
  const { updateRenderMetric, setLoading } = appStore;

  const initializeApp = useCallback(() => {
    setLoading(true);
    
    // Initialize app-wide services
    Promise.all([
      // Preload critical resources
      import('aos').then(AOS => AOS.default.init({ duration: 1000, once: true })),
      // Preload critical images
      new Promise(resolve => {
        const img = new Image();
        img.onload = resolve;
        img.src = profilePic;
      }),
    ]).finally(() => {
      setLoading(false);
    });
  }, [setLoading]);

  const logPerformanceMetric = (component: string, time: number) => {
    updateRenderMetric(component, time);
    
    // Log to external monitoring service in production
    if (import.meta.env.PROD && time > 16) {
      console.warn(`Performance: ${component} took ${time.toFixed(2)}ms to render`);
    }
  };

  useEffect(() => {
    initializeApp();
  }, [initializeApp]);

  const contextValue = {
    initializeApp,
    logPerformanceMetric,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
