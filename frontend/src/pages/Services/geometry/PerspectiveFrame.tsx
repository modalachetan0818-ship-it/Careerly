import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./PerspectiveFrame.module.css";
import { springDeep } from "../motion/springs";

type Props = {
  children: ReactNode;
  className?: string;
  rotateX?: number;
  rotateY?: number;
  translateZ?: number;
  accent?: "gold" | "cream" | "ink";
  /** When false, apply resting tilt only (no whileInView entrance). */
  entrance?: boolean;
};

export function PerspectiveFrame({
  children,
  className,
  rotateX = 6,
  rotateY = 8,
  translateZ = 24,
  accent = "gold",
  entrance = true,
}: Props) {
  const reduce = useReducedMotion();
  const restX = reduce ? 0 : rotateX;
  const restY = reduce ? 0 : rotateY;
  const restZ = reduce ? 0 : translateZ;

  if (!entrance || reduce) {
    return (
      <div
        className={`${styles.frame} ${styles[accent]} ${className ?? ""}`}
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${restX}deg) rotateY(${restY}deg) translateZ(${restZ}px)`,
        }}
      >
        <div className={styles.edgeTop} aria-hidden />
        <div className={styles.edgeSide} aria-hidden />
        <div className={styles.content}>{children}</div>
        <div className={styles.shadow} aria-hidden />
      </div>
    );
  }

  return (
    <motion.div
      className={`${styles.frame} ${styles[accent]} ${className ?? ""}`}
      style={{ transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, rotateX: restX + 6, rotateY: restY + 4, z: -20 }}
      whileInView={{ opacity: 1, rotateX: restX, rotateY: restY, z: restZ }}
      viewport={{ once: true, amount: 0.3 }}
      transition={springDeep}
    >
      <div className={styles.edgeTop} aria-hidden />
      <div className={styles.edgeSide} aria-hidden />
      <div className={styles.content}>{children}</div>
      <div className={styles.shadow} aria-hidden />
    </motion.div>
  );
}
