import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets window scroll on real route changes (pathname / search).
 * Leaves hash navigations alone so in-page anchors can still work.
 */
export function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    // Intentional in-page anchors — don't force top.
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      if (!id) return;

      const scrollToHash = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "auto", block: "start" });
          return true;
        }
        return false;
      };

      if (scrollToHash()) return;

      // Lazy routes may mount after this effect; retry once on next frame.
      const raf = requestAnimationFrame(() => {
        scrollToHash();
      });
      return () => cancelAnimationFrame(raf);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, search, hash]);

  return null;
}
