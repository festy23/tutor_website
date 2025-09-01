import { useState, useCallback } from 'react';

interface AppState {
  // UI State
  theme: 'light' | 'dark';
  isMobileMenuOpen: boolean;
  isLoading: boolean;
  
  // User Preferences
  preferredLanguage: 'ru' | 'en';
  hasSeenIntro: boolean;
  
  // Performance
  renderMetrics: Record<string, number>;
}

interface AppActions {
  setTheme: (theme: 'light' | 'dark') => void;
  toggleMobileMenu: () => void;
  setLoading: (loading: boolean) => void;
  setLanguage: (lang: 'ru' | 'en') => void;
  markIntroSeen: () => void;
  updateRenderMetric: (component: string, time: number) => void;
}

export const useAppStore = (): AppState & AppActions => {
  const [state, setState] = useState<AppState>({
    theme: 'light',
    isMobileMenuOpen: false,
    isLoading: false,
    preferredLanguage: 'ru',
    hasSeenIntro: false,
    renderMetrics: {},
  });

  const setTheme = useCallback((theme: 'light' | 'dark') => {
    setState(prev => ({ ...prev, theme }));
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setState(prev => ({ ...prev, isMobileMenuOpen: !prev.isMobileMenuOpen }));
  }, []);

  const setLoading = useCallback((isLoading: boolean) => {
    setState(prev => ({ ...prev, isLoading }));
  }, []);

  const setLanguage = useCallback((preferredLanguage: 'ru' | 'en') => {
    setState(prev => ({ ...prev, preferredLanguage }));
  }, []);

  const markIntroSeen = useCallback(() => {
    setState(prev => ({ ...prev, hasSeenIntro: true }));
  }, []);

  const updateRenderMetric = useCallback((component: string, time: number) => {
    setState(prev => ({
      ...prev,
      renderMetrics: {
        ...prev.renderMetrics,
        [component]: time,
      },
    }));
  }, []);

  return {
    ...state,
    setTheme,
    toggleMobileMenu,
    setLoading,
    setLanguage,
    markIntroSeen,
    updateRenderMetric,
  };
};
