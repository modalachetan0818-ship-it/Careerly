import { motion, useReducedMotion } from "framer-motion";
import styles from "./GoldFacetField.module.css";
import { HERO_FACETS } from "../data/heroContent";
import { springSoft, STAGGER } from "../motion/springs";

type Props = {
  className?: string;
  density?: "sparse" | "normal" | "dense";
};

const EXTRA = Array.from({ length: 18 }, (_, i) => ({
  id: `xf-${i}`,
  label: "",
  x: ((i * 37) % 90) - 45,
  y: ((i * 53) % 80) - 40,
  z: 20 + (i % 8) * 10,
  rx: ((i * 13) % 24) - 12,
  ry: ((i * 17) % 28) - 14,
}));

export function GoldFacetField({ className, density = "normal" }: Props) {
  const reduce = useReducedMotion();
  const facets =
    density === "sparse"
      ? HERO_FACETS.slice(0, 4)
      : density === "dense"
        ? [...HERO_FACETS, ...EXTRA]
        : [...HERO_FACETS, ...EXTRA.slice(0, 8)];

  return (
    <div className={`${styles.field} ${className ?? ""}`} aria-hidden>
      {facets.map((facet, i) => (
        <motion.span
          key={facet.id}
          className={`${styles.facet} ${styles[`tone${(i % 4) + 1}`] ?? ""}`}
          style={{
            ["--fx" as string]: `${facet.x}%`,
            ["--fy" as string]: `${facet.y}%`,
            ["--fz" as string]: `${facet.z}px`,
            ["--frx" as string]: `${facet.rx}deg`,
            ["--fry" as string]: `${facet.ry}deg`,
          }}
          initial={reduce ? false : { opacity: 0, z: -20, scale: 0.8 }}
          animate={
            reduce
              ? { opacity: 0.55 }
              : {
                  opacity: [0.35, 0.7, 0.45],
                  y: [0, -6 - (i % 4), 0],
                  rotateX: [facet.rx * 0.3, facet.rx, facet.rx * 0.4],
                  rotateY: [facet.ry * 0.3, facet.ry, facet.ry * 0.35],
                }
          }
          transition={
            reduce
              ? { duration: 0 }
              : {
                  ...springSoft,
                  delay: i * STAGGER.tight,
                  opacity: { duration: 4 + (i % 5), repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 5 + (i % 4), repeat: Infinity, ease: "easeInOut" },
                  rotateX: { duration: 6 + (i % 3), repeat: Infinity, ease: "easeInOut" },
                  rotateY: { duration: 7 + (i % 4), repeat: Infinity, ease: "easeInOut" },
                }
          }
        >
          {facet.label ? <span className={styles.label}>{facet.label}</span> : null}
        </motion.span>
      ))}
      <div className={styles.glowA} />
      <div className={styles.glowB} />
      <div className={styles.mesh} />
    </div>
  );
}
