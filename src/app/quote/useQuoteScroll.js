import { useCallback, useRef } from "react";

const HEADER_OFFSET = 130;
const SCROLL_DURATION_MS = 800;

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function useQuoteScroll() {
  const scrollTimerRef = useRef(null);
  const scrollAnimationRef = useRef(null);

  const cancelScheduledScroll = useCallback(() => {
    if (scrollTimerRef.current !== null) {
      clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = null;
    }
    if (scrollAnimationRef.current !== null) {
      cancelAnimationFrame(scrollAnimationRef.current);
      scrollAnimationRef.current = null;
    }
  }, []);

  const scrollToSection = useCallback(
    (id) => {
      const element = document.getElementById(id);
      if (!element) return;

      cancelScheduledScroll();

      const targetPosition =
        element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      let startTime = null;

      const animateScroll = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / SCROLL_DURATION_MS, 1);
        const eased = easeInOutCubic(progress);

        window.scrollTo(0, startPosition + distance * eased);

        if (progress < 1) {
          scrollAnimationRef.current = requestAnimationFrame(animateScroll);
        } else {
          scrollAnimationRef.current = null;
        }
      };

      scrollAnimationRef.current = requestAnimationFrame(animateScroll);
    },
    [cancelScheduledScroll],
  );

  const scheduleScroll = useCallback(
    (id, delayMs = 350) => {
      cancelScheduledScroll();

      scrollTimerRef.current = setTimeout(() => {
        scrollTimerRef.current = null;
        scrollToSection(id);
      }, delayMs);
    },
    [cancelScheduledScroll, scrollToSection],
  );

  return { scrollToSection, scheduleScroll, cancelScheduledScroll };
}
