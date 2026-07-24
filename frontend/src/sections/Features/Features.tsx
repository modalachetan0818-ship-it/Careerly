import { motion, useReducedMotion } from "framer-motion";
import { MagneticCarousel } from "./MagneticCarousel";
import styles from "./Features.module.css";

export type FeatureItem = {
  title: string;
  text: string;
  image?: string;
};

const FEATURE_IMAGES = [
  "/home/grow/01-career-clarity.png",
  "/home/grow/02-skill-pathways.png",
  "/home/grow/03-resume-profile-polish.jpg",
  "/home/grow/04-interview-readiness.png",
  "/home/grow/05-mentor-support.png",
  "/home/grow/06-end-to-end-guidance.png",
];

type Props = {
  items: FeatureItem[];
};

export function Features({ items }: Props) {
  const reduce = useReducedMotion();

  const carouselItems = items.slice(0, 6).map((feature, i) => ({
    src: feature.image ?? FEATURE_IMAGES[i] ?? FEATURE_IMAGES[0],
    title: feature.title,
    text: feature.text,
  }));

  return (
    <section className={`section ${styles.featuresSection}`}>
      <div className={styles.featuresBg} aria-hidden>
        <span className={styles.featuresOrb} />
        <span className={styles.featuresOrbAlt} />
        <span className={styles.featuresMesh} />
      </div>
      <div className="container">
        <motion.div
          className={styles.sectionHead}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="section-title">How Careerly helps you grow</h2>
          <div className="gold-rule" />
          <p className="section-lead">
            Guidance and support designed around your goals — so you learn,
            grow, achieve, and succeed with confidence. Hover to magnify, click
            to expand.
          </p>
        </motion.div>

        <motion.div
          className={styles.carouselWrap}
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <MagneticCarousel
            images={carouselItems}
            collapsedHeight={380}
            hoverHeight={440}
            openHeight={460}
            gap={12}
            influence={240}
            hoverBoost={2.6}
            blur={0}
            transition={{ type: "tween", duration: 0.32, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
