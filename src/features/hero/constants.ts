import type { Discipline } from './types';

export const DISCIPLINES: Discipline[] = [
  {
    id: 'python',
    name: 'python',
    displayName: 'python'
  },
  {
    id: 'informatics',
    name: 'информатике',
    displayName: 'информатике'
  }
];

export const ANIMATION_CONFIG = {
  interval: 3000,
  springConfig: {
    type: 'spring' as const,
    stiffness: 200,
    damping: 20,
    duration: 0.6
  }
};
