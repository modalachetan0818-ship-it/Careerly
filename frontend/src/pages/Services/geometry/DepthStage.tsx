import type { ReactNode, CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./DepthStage.module.css";
import { springSoft } from "../motion/springs";
import { hoverSafe } from "../motion/reducedMotion";

type Props = {
  children: ReactNode;
  className?: string;
  perspective?: number;
  style?: CSSProperties;
  float?: boolean;
};

export function DepthStage({
  children,
  className,
  perspective = 1400,
  style,
  float = false,
}: Props) {
  const reduce = useReducedMotion();

  return (
    <div
      className={`${styles.stage} ${className ?? ""}`}
      style={{ perspective: `${perspective}px`, ...style }}
    >
      <motion.div
        className={`${styles.inner} ${float ? styles.float : ""}`}
        style={{ transformStyle: "preserve-3d" }}
        animate={
          reduce || !float
            ? undefined
            : { y: [0, -6, 0], rotateX: [0, 1.2, 0], rotateY: [0, -1.5, 0] }
        }
        transition={
          reduce || !float
            ? undefined
            : { duration: 7.5, repeat: Infinity, ease: "easeInOut" }
        }
        whileHover={hoverSafe(reduce, { scale: 1.01, transition: springSoft })}
      >
        {children}
      </motion.div>
    </div>
  );
}
