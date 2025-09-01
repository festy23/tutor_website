// Animation configurations for consistent motion design

export const SPRING_CONFIGS = {
  gentle: {
    type: 'spring' as const,
    stiffness: 100,
    damping: 15
  },
  bouncy: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 20
  },
  snappy: {
    type: 'spring' as const,
    stiffness: 400,
    damping: 30
  }
};

export const FADE_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export const SCALE_VARIANTS = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 }
};

export const SLIDE_VARIANTS = {
  left: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 }
  },
  right: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 }
  }
};
