import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Disable browser's default scroll restoration to avoid jumping to old positions natively
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // If there is no hash, scroll to top unconditionally.
    if (!hash) {
      window.scrollTo(0, 0);
      
      // Backup flush to catch React rendering layout shifts
      const timeout = setTimeout(() => {
        window.scrollTo(0, 0);
      }, 50);
      
      return () => clearTimeout(timeout);
    }

    // If there is a hash, scroll to it smoothly. 
    // Small timeout ensures Framer Motion has rendered the destination component first.
    let timeoutId: ReturnType<typeof setTimeout>;

    const attemptScroll = () => {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      
      if (element) {
        // Offset for sticky nav if needed
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    };

    // Fast attempt, then backup attempt for safety
    timeoutId = setTimeout(() => {
      attemptScroll();
      // Secondary attempt for slower layout shifts
      setTimeout(attemptScroll, 500);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname, hash]);
};
