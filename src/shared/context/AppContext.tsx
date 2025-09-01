import { createContext } from 'react';

interface AppContextType {
  // Add any context-specific methods here
  initializeApp: () => void;
  logPerformanceMetric: (component: string, time: number) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export type { AppContextType };
