import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { HiArrowUp } from "react-icons/hi2";
import styles from "./SplashLoader.module.css";

const MIN_DISPLAY_MS = 900;
const MIN_DISPLAY_REDUCED_MS = 220;
const REPLAY_DISPLAY_MS = 850;
const REPLAY_DISPLAY_REDUCED_MS = 200;
const SCROLL_SHOW_BTN = 360;

function wait(ms: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

export function SplashLoader() {
  const navigate = useNavigate();
  const location = useLocation();
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [showBackBtn, setShowBackBtn] = useState(false);
  const replaying = useRef(false);
  const initialDone = useRef(false);

  useEffect(() => {
    if (initialDone.current || replaying.current) return;

    const minMs = reduce ? MIN_DISPLAY_REDUCED_MS : MIN_DISPLAY_MS;
    let cancelled = false;

    const run = async () => {
      const started = performance.now();
      if (document.readyState !== "complete") {
        await new Promise<void>((resolve) => {
          window.addEventListener("load", () => resolve(), { once: true });
        });
      }
      const elapsed = performance.now() - started;
      const remaining = Math.max(0, minMs - elapsed);
      await wait(remaining);
      if (!cancelled) {
        initialDone.current = true;
        setVisible(false);
      }
    };

    void run();
    return () => {
      cancelled = true;
    };
  }, [reduce]);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const next = window.scrollY > SCROLL_SHOW_BTN;
        setShowBackBtn((prev) => (prev === next ? prev : next));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleBackToHome = useCallback(async () => {
    if (replaying.current || visible) return;
    replaying.current = true;
    const started = performance.now();
    setVisible(true);

    // Paint splash first so nav/scroll stay hidden behind the overlay.
    await new Promise<void>((resolve) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => resolve());
      });
    });

    if (location.pathname !== "/") {
      navigate("/");
      await wait(0);
    }

    // "instant" overrides global CSS scroll-behavior: smooth
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const displayMs = reduce ? REPLAY_DISPLAY_REDUCED_MS : REPLAY_DISPLAY_MS;
    const remaining = Math.max(0, displayMs - (performance.now() - started));
    await wait(remaining);

    setVisible(false);
    replaying.current = false;
  }, [location.pathname, navigate, reduce, visible]);

  return (
    <>
      <AnimatePresence>
        {visible ? (
          <motion.div
            key="splash"
            className={styles.overlay}
            role="status"
            aria-live="polite"
            aria-label="Loading Careerly"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: reduce ? 0.1 : 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              className={styles.stack}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduce ? 0 : 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className={styles.logoWrap}>
                <span className={styles.spinner} aria-hidden />
                <img
                  src="/brand/logo-mark.png"
                  alt=""
                  className={styles.logo}
                  width={60}
                  height={60}
                />
              </div>
              <h1 className={styles.brand}>CAREERLY</h1>
              <hr className={styles.divider} />
              <p className={styles.tagline}>
                Empowering Careers. Building Tomorrows.
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {showBackBtn && !visible ? (
          <motion.button
            key="back-top"
            type="button"
            className={styles.backBtn}
            aria-label="Back to home"
            title="Back to home"
            onClick={() => void handleBackToHome()}
            initial={reduce ? false : { opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, scale: 0.85 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
          >
            <HiArrowUp aria-hidden />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </>
  );
}
