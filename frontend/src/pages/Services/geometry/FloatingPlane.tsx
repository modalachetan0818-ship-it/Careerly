import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./FloatingPlane.module.css";

type Props = {
  children?: ReactNode;
  className?: string;
  amp?: number;
  duration?: number;
  delay?: number;
  rotateX?: number;
  rotateY?: number;
};

export function FloatingPlane({
  children,
  className,
  amp = 8,
  duration = 5.5,
  delay = 0,
  rotateX = 0,
  rotateY = 0,
}: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`${styles.plane} ${className ?? ""}`}
      style={{ transformStyle: "preserve-3d" }}
      animate={
        reduce
          ? { rotateX, rotateY }
          : {
              y: [0, -amp, 0],
              rotateX: [rotateX, rotateX + 2, rotateX],
              rotateY: [rotateY, rotateY - 2.5, rotateY],
            }
      }
      transition={
        reduce
          ? { duration: 0 }
          : { duration, delay, repeat: Infinity, ease: "easeInOut" }
      }
    >
      {children}
    </motion.div>
  );
}
