// Common types used across the application
export interface BaseComponent {
  id: string;
  className?: string;
  'data-testid'?: string;
}

export interface AnimationConfig {
  duration?: number;
  delay?: number;
  stiffness?: number;
  damping?: number;
}

export interface ResponsiveConfig {
  mobile: string;
  tablet: string;
  desktop: string;
  large?: string;
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface APIResponse<T> {
  data: T;
  status: number;
  message?: string;
}
