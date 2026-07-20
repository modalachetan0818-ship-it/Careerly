import { motion, useReducedMotion } from "framer-motion";
import styles from "./Stats.module.css";

export type StatItem = { value: string; label: string };

type Props = {
  items: StatItem[];
};

export function Stats({ items }: Props) {
  const reduce = useReducedMotion();

  return (
    <section className={styles.statsSection}>
      <div className={`container ${styles.statsGrid}`}>
        {items.map((stat, i) => (
          <motion.div
            key={stat.label}
            className={styles.stat}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.08, duration: 0.45 }}
          >
            <p className={styles.statValue}>{stat.value}</p>
            <p className={styles.statLabel}>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
