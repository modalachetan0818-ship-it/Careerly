import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { GOOGLE_FORM_URL } from "../../constants/links";
import styles from "./Tracks.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

const tracks = [
  {
    title: "IT Careers",
    text: "Development, QA, data, and cloud pathways for freshers and experienced talent — with guidance at every step.",
    points: ["Skill mapping", "Tech interview prep", "Role-fit clarity"],
    to: "/services",
    external: false,
    cta: "Explore Services",
    btnClass: "btn btn-gold",
    alt: false,
  },
  {
    title: "Non-IT Careers",
    text: "HR, sales, administration, counseling, and business paths across Bengaluru — shaped around your goals.",
    points: ["Career counseling", "Profile polish", "Interview readiness"],
    to: GOOGLE_FORM_URL,
    external: true,
    cta: "Talk to Us",
    btnClass: "btn btn-primary",
    alt: true,
  },
] as const;

export function Tracks() {
  const reduce = useReducedMotion();

  return (
    <section
      className={`section ${styles.tracks}`}
      aria-labelledby="tracks-heading"
    >
      <div className={styles.bgLayer} aria-hidden>
        <img
          src="/brand/sections/tracks-bg.jpg"
          alt=""
          className={styles.bgImage}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className={styles.overlay} aria-hidden />
      <div className={styles.edgeTop} aria-hidden />
      <div className={styles.edgeBottom} aria-hidden />

      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.head}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease }}
        >
          <p className={styles.eyebrow}>Focus</p>
          <h2 id="tracks-heading" className="section-title">
            Choose your path
          </h2>
          <div className="gold-rule" />
          <p className="section-lead">
            Two clear tracks — one mission. Find the route that fits you.
          </p>
        </motion.div>

        <div className={styles.trackGrid}>
          {tracks.map((track, i) => (
            <motion.div
              key={track.title}
              className={`${styles.trackCard} ${track.alt ? styles.trackAlt : ""}`}
              initial={reduce ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65, delay: i * 0.1, ease }}
            >
              <div className={styles.cardDepth} aria-hidden />
              <p className={styles.trackLabel}>Focus</p>
              <h3>{track.title}</h3>
              <p className={styles.trackText}>{track.text}</p>
              <ul className={styles.points}>
                {track.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {track.external ? (
                <a
                  href={track.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={track.btnClass}
                >
                  {track.cta}
                </a>
              ) : (
                <Link to={track.to} className={track.btnClass}>
                  {track.cta}
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
