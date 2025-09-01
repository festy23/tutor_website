import { useEffect, useRef } from 'react';

interface A11yOptions {
  announcePageChanges?: boolean;
  manageFocus?: boolean;
  trapFocus?: boolean;
}

export const useA11y = (options: A11yOptions = {}) => {
  const {
    announcePageChanges = true,
    manageFocus = true,
    trapFocus = false,
  } = options;

  const announcementRef = useRef<HTMLDivElement>(null);
  const focusTrapRef = useRef<HTMLDivElement>(null);

  // Announce page changes to screen readers
  const announce = (message: string) => {
    if (announcePageChanges && announcementRef.current) {
      announcementRef.current.textContent = message;
    }
  };

  // Focus management
  const focusFirst = () => {
    if (manageFocus) {
      const firstFocusable = document.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      firstFocusable?.focus();
    }
  };

  const focusMain = () => {
    if (manageFocus) {
      const main = document.querySelector<HTMLElement>('main');
      if (main) {
        main.tabIndex = -1;
        main.focus();
        main.blur();
      }
    }
  };

  // Focus trap for modals
  useEffect(() => {
    if (!trapFocus || !focusTrapRef.current) return;

    const element = focusTrapRef.current;
    const focusableElements = element.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          e.preventDefault();
        }
      }
    };

    element.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      element.removeEventListener('keydown', handleTabKey);
    };
  }, [trapFocus]);

  return {
    announce,
    focusFirst,
    focusMain,
    announcementRef,
    focusTrapRef,
  };
};
