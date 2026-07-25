import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useReducedMotion,
  type TargetAndTransition,
  type Transition,
} from "framer-motion";
import styles from "./CinematicPageHero.module.css";

const MotionLink = motion.create(Link);

const HERO_POSTER = "/services/svc-hero-bg.png";
const HERO_VIDEO_MP4 = "/services/svc-hero.mp4";
const HERO_VIDEO_WEBM = "/services/svc-hero.webm";

const springSoft: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 22,
  mass: 0.9,
};

function hoverSafe(
  reduce: boolean | null,
  value: TargetAndTransition,
): TargetAndTransition | undefined {
  return reduce ? undefined : value;
}

export type CinematicHeroCta = {
  label: string;
  href: string;
};

type HeroCtaProps = {
  cta: CinematicHeroCta;
  className: string;
  whileHover?: TargetAndTransition;
  whileTap?: TargetAndTransition;
};

function isAppPath(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

function isExternalHttp(href: string) {
  return /^https?:\/\//i.test(href);
}

function HeroCta({ cta, className, whileHover, whileTap }: HeroCtaProps) {
  if (isAppPath(cta.href)) {
    return (
      <MotionLink
        to={cta.href}
        className={className}
        whileHover={whileHover}
        whileTap={whileTap}
      >
        {cta.label}
      </MotionLink>
    );
  }

  const external = isExternalHttp(cta.href);

  return (
    <motion.a
      href={cta.href}
      className={className}
      whileHover={whileHover}
      whileTap={whileTap}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {cta.label}
    </motion.a>
  );
}

export type CinematicPageHeroProps = {
  titleId: string;
  eyebrow: string;
  title: string;
  lead: string;
  primaryCta: CinematicHeroCta;
  secondaryCta: CinematicHeroCta;
};

/** Full-bleed cream/gold cinematic page hero — Services-matching layout. */
export function CinematicPageHero({
  titleId,
  eyebrow,
  title,
  lead,
  primaryCta,
  secondaryCta,
}: CinematicPageHeroProps) {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (reduce) return;
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const tryPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          /* autoplay may be blocked briefly; mute + retry below */
        });
      }
    };

    tryPlay();
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);

    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
    };
  }, [reduce]);

  return (
    <section className={styles.hero} aria-labelledby={titleId}>
      <div className={styles.media} aria-hidden>
        {reduce ? (
          <img className={styles.mediaLayer} src={HERO_POSTER} alt="" />
        ) : (
          <video
            ref={videoRef}
            className={styles.mediaLayer}
            autoPlay
            muted
            loop
            playsInline
            poster={HERO_POSTER}
            preload="auto"
          >
            <source src={HERO_VIDEO_MP4} type="video/mp4" />
            <source src={HERO_VIDEO_WEBM} type="video/webm" />
          </video>
        )}
        <div className={styles.scrim} />
      </div>

      <div className={`container ${styles.inner}`}>
        <motion.div className={styles.copy}>
          <motion.p
            className={styles.eyebrow}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springSoft, delay: 0.05 }}
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            id={titleId}
            className={styles.title}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springSoft, delay: 0.12 }}
          >
            {title}
          </motion.h1>
          <motion.div
            className={styles.rule}
            initial={reduce ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.p
            className={styles.lead}
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springSoft, delay: 0.22 }}
          >
            {lead}
          </motion.p>
          <motion.div
            className={styles.actions}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springSoft, delay: 0.3 }}
          >
            <HeroCta
              cta={primaryCta}
              className={`btn btn-gold ${styles.ctaPrimary}`}
              whileHover={hoverSafe(reduce, { y: -3, scale: 1.02 })}
              whileTap={hoverSafe(reduce, { scale: 0.98 })}
            />
            <HeroCta
              cta={secondaryCta}
              className={`btn btn-ghost ${styles.ctaGhost}`}
              whileHover={hoverSafe(reduce, { y: -2 })}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
