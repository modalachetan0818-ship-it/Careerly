import type { Transition } from "framer-motion";

/** Soft gold-era spring for section entrances */
export const springSoft: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 22,
  mass: 0.9,
};

export const springSnappy: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 28,
  mass: 0.7,
};

export const springTilt: Transition = {
  type: "spring",
  stiffness: 180,
  damping: 18,
  mass: 0.55,
};

export const springDeep: Transition = {
  type: "spring",
  stiffness: 90,
  damping: 20,
  mass: 1.1,
};

export const springBounceLite: Transition = {
  type: "spring",
  stiffness: 320,
  damping: 24,
  mass: 0.45,
};

export const tweenElegant: Transition = {
  type: "tween",
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
};

export const tweenSlowReveal: Transition = {
  type: "tween",
  duration: 0.85,
  ease: [0.16, 1, 0.3, 1],
};

export const tweenFocus: Transition = {
  type: "tween",
  duration: 0.35,
  ease: [0.33, 1, 0.68, 1],
};

export const SPRING_PRESETS = {
  soft: springSoft,
  snappy: springSnappy,
  tilt: springTilt,
  deep: springDeep,
  bounce: springBounceLite,
  elegant: tweenElegant,
  slow: tweenSlowReveal,
  focus: tweenFocus,
} as const;

export type SpringPresetName = keyof typeof SPRING_PRESETS;

export function getSpring(name: SpringPresetName): Transition {
  return SPRING_PRESETS[name];
}

export const STAGGER = {
  tight: 0.04,
  normal: 0.07,
  relaxed: 0.11,
  dramatic: 0.16,
} as const;

export const VIEWPORT = {
  once: true,
  amount: 0.25,
  margin: "-60px 0px -40px 0px",
} as const;

export const VIEWPORT_EARLY = {
  once: true,
  amount: 0.15,
  margin: "-100px 0px -20px 0px",
} as const;

export const VIEWPORT_LATE = {
  once: true,
  amount: 0.4,
  margin: "-20px 0px -80px 0px",
} as const;
