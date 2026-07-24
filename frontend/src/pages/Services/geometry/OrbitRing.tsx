import { motion, useReducedMotion } from "framer-motion";
import styles from "./OrbitRing.module.css";

type Props = {
  className?: string;
  size?: number;
  duration?: number;
  reverse?: boolean;
};

export function OrbitRing({
  className,
  size = 280,
  duration = 28,
  reverse = false,
}: Props) {
  const reduce = useReducedMotion();

  return (
    <div
      className={`${styles.wrap} ${className ?? ""}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <motion.div
        className={styles.ring}
        animate={reduce ? undefined : { rotate: reverse ? -360 : 360 }}
        transition={
          reduce
            ? undefined
            : { duration, repeat: Infinity, ease: "linear" }
        }
      >
        {Array.from({ length: 8 }, (_, i) => (
          <span
            key={i}
            className={styles.node}
            style={{
              ["--a" as string]: `${i * 45}deg`,
              ["--d" as string]: `${size * 0.42}px`,
            }}
          />
        ))}
      </motion.div>
      <div className={styles.core} />
      <div className={styles.halo} />
    </div>
  );
}
