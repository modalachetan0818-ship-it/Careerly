import type { MotionProps, Transition } from "framer-motion";

export const INSTANT: Transition = { duration: 0 };

export function motionSafe(
  reduce: boolean | null,
  props: MotionProps
): MotionProps {
  if (!reduce) return props;
  const { animate, initial, exit, whileHover, whileTap, whileFocus, whileInView, ...rest } = props;
  return {
    ...rest,
    initial: false,
    animate: typeof animate === "object" && animate !== null
      ? { opacity: 1, x: 0, y: 0, scale: 1, rotateX: 0, rotateY: 0, z: 0 }
      : animate,
    whileHover: undefined,
    whileTap: undefined,
    whileFocus: undefined,
    transition: INSTANT,
  };
}

export function hoverSafe<T>(reduce: boolean | null, value: T): T | undefined {
  return reduce ? undefined : value;
}

export function transitionSafe(
  reduce: boolean | null,
  transition: Transition
): Transition {
  return reduce ? INSTANT : transition;
}

export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
