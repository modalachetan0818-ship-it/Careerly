import { useRef } from "react";
import { useScroll, useTransform, type MotionValue } from "framer-motion";

export type SectionScrollBundle = {
  ref: React.RefObject<HTMLElement | null>;
  scrollYProgress: MotionValue<number>;
  y: MotionValue<number>;
  opacity: MotionValue<number>;
  rotateX: MotionValue<number>;
  scale: MotionValue<number>;
};

export function useSectionScroll(options?: {
  yRange?: [number, number];
  opacityRange?: [number, number, number];
  rotateRange?: [number, number];
  scaleRange?: [number, number];
}): SectionScrollBundle {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], options?.yRange ?? [40, -40]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.85, 1],
    options?.opacityRange
      ? [options.opacityRange[0], 1, options.opacityRange[1], options.opacityRange[2]]
      : [0.35, 1, 1, 0.45]
  );
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    options?.rotateRange
      ? [options.rotateRange[0], 0, options.rotateRange[1]]
      : [8, 0, -4]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    options?.scaleRange
      ? [options.scaleRange[0], 1, options.scaleRange[1]]
      : [0.97, 1, 0.99]
  );

  return { ref, scrollYProgress, y, opacity, rotateX, scale };
}
