import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./About.module.css";

export function About() {
  const reduce = useReducedMotion();

  return (
    <section className={`section ${styles.page}`}>
      <div className="container">
        <motion.header
          className={styles.header}
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="section-title">About Careerly</h1>
          <div className="gold-rule" />
          <p className={styles.mission}>
            Your Career. Our Mission. Success Together.
          </p>
        </motion.header>

        <div className={styles.grid}>
          <article className={styles.card}>
            <h2>Who we are</h2>
            <p>
              Careerly is a Bengaluru-based career partner connecting students
              and experienced professionals with IT and Non-IT opportunities.
              We believe great careers start with the right guidance, the right
              match, and a team that stays with you.
            </p>
          </article>
          <article className={styles.card}>
            <h2>What drives us</h2>
            <p>
              Learn. Grow. Achieve. Succeed. Those four words shape how we
              counsel candidates, shortlist openings, and work with hiring
              partners — so every placement feels intentional, not accidental.
            </p>
          </article>
          <article className={`${styles.card} ${styles.wide}`}>
            <h2>Our presence</h2>
            <p>
              We operate from J P Nagar 8th Phase, Bangalore South — close to
              the talent and companies we serve. Visit us, call{" "}
              <a href="tel:+919686448306">9686448306</a>, or explore openings
              online at{" "}
              <a href="https://careerly.info" target="_blank" rel="noreferrer">
                careerly.info
              </a>
              .
            </p>
            <p className={styles.address}>
              No. 13, Saienclave Kothanur, Near GR Lavender Skalvi School Road,
              J P Nagar 8th Phase, Bangalore South — 560078.
            </p>
            <Link to="/contact" className="btn btn-gold">
              Contact the team
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
