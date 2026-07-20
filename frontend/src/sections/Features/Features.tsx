import { motion, useReducedMotion } from "framer-motion";
import { MagneticCarousel } from "./MagneticCarousel";
import styles from "./Features.module.css";

export type FeatureItem = {
  title: string;
  text: string;
  image?: string;
};

const FEATURE_IMAGES = [
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=640&q=60",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=640&q=60",
  "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=640&q=60",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=640&q=60",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=640&q=60",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=640&q=60",
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
