import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { CareerlyHeroFX } from "../../components/CareerlyHeroFX/CareerlyHeroFX";
import styles from "./Hero.module.css";

function playWhenReady(video: HTMLVideoElement | null) {
  if (!video) return;
  const tryPlay = () => {
    void video.play().catch(() => {
      /* autoplay can be blocked; muted + playsInline usually works */
    });
  };
  if (video.readyState >= 2) tryPlay();
  else video.addEventListener("loadeddata", tryPlay, { once: true });
}

export function Hero() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    playWhenReady(logoRef.current);
  }, []);

  useEffect(() => {
    const root = heroRef.current;
    const video = logoRef.current;
    if (!root || !video) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) playWhenReady(video);
        else video.pause();
      },
      { threshold: 0.05 },
    );
    io.observe(root);
    return () => io.disconnect();
  }, []);

  return (
    <section className={styles.hero} ref={heroRef} aria-label="Careerly hero">
      <div className={styles.videoWrap} aria-hidden>
        <CareerlyHeroFX />
      </div>

      <div className={styles.heroShade} aria-hidden />

      <div className={styles.welcome}>
        <span className={styles.welcomeText}>Welcome</span>
      </div>

      <div className={styles.logoStage} aria-hidden>
        <video
          ref={logoRef}
          className={styles.logoVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/videos/hero-logo.webm" type="video/webm" />
        </video>
      </div>

      <div className={`container ${styles.heroCopy}`}>
        <motion.div
          className={styles.ctas}
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link to="/contact" className={`btn btn-gold ${styles.ctaPrimary}`}>
            Contact Us
          </Link>
          <Link to="/services" className={`btn ${styles.ctaGhost}`}>
            Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
