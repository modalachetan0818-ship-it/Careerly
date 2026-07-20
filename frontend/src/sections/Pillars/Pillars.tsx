import { motion, useReducedMotion } from "framer-motion";
import { Carousel3D } from "../../components/Carousel3D/Carousel3D";
import styles from "./Pillars.module.css";

export type PillarItem = { title: string; text: string };

type Props = {
  items: PillarItem[];
};

const PILLAR_IMAGES = [
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=640&q=60",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=640&q=60",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=640&q=60",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=640&q=60",
];

export function Pillars({ items }: Props) {
  const reduce = useReducedMotion();

  const slides = items.map((pillar, i) => ({
    id: i,
    title: pillar.title,
    text: pillar.text,
    image: PILLAR_IMAGES[i % PILLAR_IMAGES.length],
  }));

  return (
    <section className={`section ${styles.pillarsSection}`}>
      <div className={styles.pillarsBg} aria-hidden>
        <span className={styles.pillarsGlow} />
      </div>
      <div className="container">
        <motion.div
          className={styles.sectionHead}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="section-title">How careers grow with us</h2>
          <div className="gold-rule" />
          <p className="section-lead">
            Four simple steps — from learning the craft to succeeding in the
            path you choose.
          </p>
        </motion.div>

        <motion.div
          className={styles.pillarCarousel}
          initial={reduce ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Carousel3D slides={slides} autoPlay={false} width={840} />
        </motion.div>
      </div>
    </section>
  );
}
