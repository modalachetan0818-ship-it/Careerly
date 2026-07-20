import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./Services.module.css";

const services = [
  {
    title: "IT job matching",
    text: "Frontend, backend, QA, data, and internship roles curated for students and working professionals.",
  },
  {
    title: "Non-IT placements",
    text: "HR, sales, admin, counseling, and business roles across Bengaluru and hybrid setups.",
  },
  {
    title: "Career guidance",
    text: "Resume direction, interview readiness, and role fit conversations so you apply with clarity.",
  },
  {
    title: "Campus & fresher focus",
    text: "Pathways for final-year students and fresh graduates who want a confident first step.",
  },
  {
    title: "Experienced hiring",
    text: "Latent opportunities for professionals ready to level up into stronger IT or Non-IT roles.",
  },
  {
    title: "Partner with Careerly",
    text: "Companies can work with us offline to source talent quickly — we handle screening and outreach.",
  },
];

export function Services() {
  const reduce = useReducedMotion();

  return (
    <section className={`section ${styles.page}`}>
      <div className="container">
        <header className={styles.header}>
          <h1 className="section-title">Services</h1>
          <div className="gold-rule" />
          <p className="section-lead">
            How Careerly helps you learn, grow, achieve, and succeed — whether
            you are starting out or switching lanes.
          </p>
        </header>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              className={styles.card}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={reduce ? undefined : { y: -5 }}
            >
              <span className={styles.index}>0{i + 1}</span>
              <h2>{service.title}</h2>
              <p>{service.text}</p>
            </motion.article>
          ))}
        </div>

        <div className={styles.cta}>
          <h2>Need help choosing a path?</h2>
          <p>Talk to us — we will help you find clarity and next steps.</p>
          <div className={styles.actions}>
            <Link to="/contact" className="btn btn-gold">
              Talk to Careerly
            </Link>
            <Link to="/about" className="btn btn-ghost">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
