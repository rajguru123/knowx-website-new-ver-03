'use client';

import { useEffect, type RefObject } from 'react';

/**
 * Overlay behaviour for modals:
 * locks body scroll, closes on Escape, keeps Tab inside, moves focus in and restores it on close.
 * On touch devices focus goes to the dialog itself so the keyboard does not pop up immediately.
 */
export function useOverlay(open: boolean, onClose: () => void, ref: RefObject<HTMLElement>) {
  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const getFocusable = () =>
      Array.from(
        ref.current?.querySelectorAll<HTMLElement>(
          'a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])'
        ) ?? []
      ).filter((n) => n.offsetParent !== null);

    const t = window.setTimeout(() => {
      const coarse = window.matchMedia?.('(pointer: coarse)').matches;
      const target = coarse ? ref.current : getFocusable()[0] ?? ref.current;
      target?.focus();
    }, 0);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;
      const f = getFocusable();
      if (!f.length) return;
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);

    return () => {
      window.clearTimeout(t);
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [open, onClose, ref]);
}

/**
 * Fade-up on scroll. Only blocks that start below the fold are hidden, so the first screen is never blank.
 * A timeout reveals everything as a safety net. Uses a data attribute, so React's className is untouched.
 */
export function useReveal(rootRef: RefObject<HTMLElement>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) return;

    const els = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]')).filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight * 0.92
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            (en.target as HTMLElement).dataset.rv = 'in';
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
    );
    els.forEach((el) => {
      el.dataset.rv = 'pre';
      io.observe(el);
    });
    const safety = window.setTimeout(() => els.forEach((el) => (el.dataset.rv = 'in')), 4000);
    return () => {
      window.clearTimeout(safety);
      io.disconnect();
    };
  }, [rootRef]);
}
