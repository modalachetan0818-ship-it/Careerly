import type { Variants } from "framer-motion";

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const fadeDown = {
  hidden: {
    opacity: 0,
    y: -28,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const fadeLeft = {
  hidden: {
    opacity: 0,
    y: 16,
    x: -32,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const fadeRight = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 32,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const scaleIn = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 0.92,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const scaleOut = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 0.92,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const tiltIn = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 12,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const tiltOut = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 12,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const depthIn = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 12,
    rotateY: 0,
    z: -40,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const depthOut = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 12,
    rotateY: 0,
    z: -40,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const rotateYIn = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: -14,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const rotateXIn = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 12,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const flareIn = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const settleIn = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const riseSoft = {
  hidden: {
    opacity: 0,
    y: 28,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const dropSoft = {
  hidden: {
    opacity: 0,
    y: -28,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const slideDeck = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const cardStack = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const orbitEnter = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: -14,
    z: -40,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const orbitExit = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: -14,
    z: -40,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const panelReveal = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: -14,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const panelHide = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: -14,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const chipPop = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 0.92,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const chipRest = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 0.92,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const headlineIn = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const leadIn = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const ruleDraw = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const ctaRise = {
  hidden: {
    opacity: 0,
    y: 28,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const facetFloat = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 12,
    rotateY: 0,
    z: -40,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const facetSettle = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 12,
    rotateY: 0,
    z: -40,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const stepArrive = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 12,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const stepDepart = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 12,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const checkpointIn = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const checkpointOut = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const pillarRise = {
  hidden: {
    opacity: 0,
    y: 28,
    x: 0,
    scale: 1,
    rotateX: 12,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const pillarSink = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 12,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const audienceFocus = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const audienceBlur = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const diveEnter = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: -14,
    z: -40,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const diveLeave = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: -14,
    z: -40,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const stripSweep = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const stripRest = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const heroBrand = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const heroTitle = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const heroLead = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const heroCta = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const gridItem = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const gridItemHover = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const clarityBlock = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const clarityActions = {
  hidden: {
    opacity: 0,
    y: 16,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
} as const;

export const staggerContainer1 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.05,
    },
  },
} as const;

export const staggerContainer2 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.07,
    },
  },
} as const;

export const staggerContainer3 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.09,
    },
  },
} as const;

export const staggerContainer4 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.11,
    },
  },
} as const;

export const staggerContainer5 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.13,
    },
  },
} as const;

export const staggerContainer6 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.15,
    },
  },
} as const;

export const staggerContainer7 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.10,
      delayChildren: 0.17,
    },
  },
} as const;

export const staggerContainer8 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.19,
    },
  },
} as const;

export const staggerContainer9 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.21,
    },
  },
} as const;

export const staggerContainer10 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.23,
    },
  },
} as const;

export const staggerContainer11 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.25,
    },
  },
} as const;

export const staggerContainer12 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.27,
    },
  },
} as const;

export const staggerContainer13 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.29,
    },
  },
} as const;

export const staggerContainer14 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.17,
      delayChildren: 0.31,
    },
  },
} as const;

export const staggerContainer15 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.33,
    },
  },
} as const;

export const staggerContainer16 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.19,
      delayChildren: 0.35,
    },
  },
} as const;

export const staggerContainer17 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.20,
      delayChildren: 0.37,
    },
  },
} as const;

export const staggerContainer18 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.21,
      delayChildren: 0.39,
    },
  },
} as const;

export const staggerContainer19 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.41,
    },
  },
} as const;

export const staggerContainer20 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.23,
      delayChildren: 0.43,
    },
  },
} as const;

export const staggerContainer21 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.24,
      delayChildren: 0.45,
    },
  },
} as const;

export const staggerContainer22 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.47,
    },
  },
} as const;

export const staggerContainer23 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.26,
      delayChildren: 0.49,
    },
  },
} as const;

export const staggerContainer24 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.27,
      delayChildren: 0.51,
    },
  },
} as const;

export const pose3d_1 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: -4.800000000000001, rotateY: -6, z: 20, scale: 1.02 },
  focus: { rotateX: -6.6000000000000005, rotateY: -8.25, z: 32, scale: 1.035 },
  active: { rotateX: -3, rotateY: -3.75, z: 40, scale: 1.04 },
} as const;

export const pose3d_2 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: -2, rotateY: -1.6, z: 26, scale: 1.02 },
  focus: { rotateX: -2.75, rotateY: -2.2, z: 38, scale: 1.035 },
  active: { rotateX: -1.25, rotateY: -1, z: 46, scale: 1.04 },
} as const;

export const pose3d_3 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: 0.8, rotateY: 2.8000000000000003, z: 32, scale: 1.02 },
  focus: { rotateX: 1.1, rotateY: 3.8500000000000005, z: 44, scale: 1.035 },
  active: { rotateX: 0.5, rotateY: 1.75, z: 52, scale: 1.04 },
} as const;

export const pose3d_4 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: 3.6, rotateY: -4.800000000000001, z: 38, scale: 1.02 },
  focus: { rotateX: 4.95, rotateY: -6.6000000000000005, z: 50, scale: 1.035 },
  active: { rotateX: 2.25, rotateY: -3, z: 58, scale: 1.04 },
} as const;

export const pose3d_5 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: -3.2, rotateY: -0.4, z: 44, scale: 1.02 },
  focus: { rotateX: -4.4, rotateY: -0.55, z: 56, scale: 1.035 },
  active: { rotateX: -2, rotateY: -0.25, z: 64, scale: 1.04 },
} as const;

export const pose3d_6 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: -0.4, rotateY: 4, z: 50, scale: 1.02 },
  focus: { rotateX: -0.55, rotateY: 5.5, z: 62, scale: 1.035 },
  active: { rotateX: -0.25, rotateY: 2.5, z: 70, scale: 1.04 },
} as const;

export const pose3d_7 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: 2.4000000000000004, rotateY: -3.6, z: 56, scale: 1.02 },
  focus: { rotateX: 3.3000000000000003, rotateY: -4.95, z: 68, scale: 1.035 },
  active: { rotateX: 1.5, rotateY: -2.25, z: 76, scale: 1.04 },
} as const;

export const pose3d_8 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: -4.4, rotateY: 0.8, z: 62, scale: 1.02 },
  focus: { rotateX: -6.050000000000001, rotateY: 1.1, z: 74, scale: 1.035 },
  active: { rotateX: -2.75, rotateY: 0.5, z: 82, scale: 1.04 },
} as const;

export const pose3d_9 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: -1.6, rotateY: 5.2, z: 68, scale: 1.02 },
  focus: { rotateX: -2.2, rotateY: 7.15, z: 80, scale: 1.035 },
  active: { rotateX: -1, rotateY: 3.25, z: 88, scale: 1.04 },
} as const;

export const pose3d_10 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: 1.2000000000000002, rotateY: -2.4000000000000004, z: 74, scale: 1.02 },
  focus: { rotateX: 1.6500000000000001, rotateY: -3.3000000000000003, z: 86, scale: 1.035 },
  active: { rotateX: 0.75, rotateY: -1.5, z: 94, scale: 1.04 },
} as const;

export const pose3d_11 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: 4, rotateY: 2, z: 80, scale: 1.02 },
  focus: { rotateX: 5.5, rotateY: 2.75, z: 92, scale: 1.035 },
  active: { rotateX: 2.5, rotateY: 1.25, z: 100, scale: 1.04 },
} as const;

export const pose3d_12 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: -2.8000000000000003, rotateY: -5.6000000000000005, z: 86, scale: 1.02 },
  focus: { rotateX: -3.8500000000000005, rotateY: -7.700000000000001, z: 98, scale: 1.035 },
  active: { rotateX: -1.75, rotateY: -3.5, z: 106, scale: 1.04 },
} as const;

export const pose3d_13 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: 0, rotateY: -1.2000000000000002, z: 20, scale: 1.02 },
  focus: { rotateX: 0, rotateY: -1.6500000000000001, z: 32, scale: 1.035 },
  active: { rotateX: 0, rotateY: -0.75, z: 40, scale: 1.04 },
} as const;

export const pose3d_14 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: 2.8000000000000003, rotateY: 3.2, z: 26, scale: 1.02 },
  focus: { rotateX: 3.8500000000000005, rotateY: 4.4, z: 38, scale: 1.035 },
  active: { rotateX: 1.75, rotateY: 2, z: 46, scale: 1.04 },
} as const;

export const pose3d_15 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: -4, rotateY: -4.4, z: 32, scale: 1.02 },
  focus: { rotateX: -5.5, rotateY: -6.050000000000001, z: 44, scale: 1.035 },
  active: { rotateX: -2.5, rotateY: -2.75, z: 52, scale: 1.04 },
} as const;

export const pose3d_16 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: -1.2000000000000002, rotateY: 0, z: 38, scale: 1.02 },
  focus: { rotateX: -1.6500000000000001, rotateY: 0, z: 50, scale: 1.035 },
  active: { rotateX: -0.75, rotateY: 0, z: 58, scale: 1.04 },
} as const;

export const pose3d_17 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: 1.6, rotateY: 4.4, z: 44, scale: 1.02 },
  focus: { rotateX: 2.2, rotateY: 6.050000000000001, z: 56, scale: 1.035 },
  active: { rotateX: 1, rotateY: 2.75, z: 64, scale: 1.04 },
} as const;

export const pose3d_18 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: 4.4, rotateY: -3.2, z: 50, scale: 1.02 },
  focus: { rotateX: 6.050000000000001, rotateY: -4.4, z: 62, scale: 1.035 },
  active: { rotateX: 2.75, rotateY: -2, z: 70, scale: 1.04 },
} as const;

export const pose3d_19 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: -2.4000000000000004, rotateY: 1.2000000000000002, z: 56, scale: 1.02 },
  focus: { rotateX: -3.3000000000000003, rotateY: 1.6500000000000001, z: 68, scale: 1.035 },
  active: { rotateX: -1.5, rotateY: 0.75, z: 76, scale: 1.04 },
} as const;

export const pose3d_20 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: 0.4, rotateY: 5.6000000000000005, z: 62, scale: 1.02 },
  focus: { rotateX: 0.55, rotateY: 7.700000000000001, z: 74, scale: 1.035 },
  active: { rotateX: 0.25, rotateY: 3.5, z: 82, scale: 1.04 },
} as const;

export const pose3d_21 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: 3.2, rotateY: -2, z: 68, scale: 1.02 },
  focus: { rotateX: 4.4, rotateY: -2.75, z: 80, scale: 1.035 },
  active: { rotateX: 2, rotateY: -1.25, z: 88, scale: 1.04 },
} as const;

export const pose3d_22 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: -3.6, rotateY: 2.4000000000000004, z: 74, scale: 1.02 },
  focus: { rotateX: -4.95, rotateY: 3.3000000000000003, z: 86, scale: 1.035 },
  active: { rotateX: -2.25, rotateY: 1.5, z: 94, scale: 1.04 },
} as const;

export const pose3d_23 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: -0.8, rotateY: -5.2, z: 80, scale: 1.02 },
  focus: { rotateX: -1.1, rotateY: -7.15, z: 92, scale: 1.035 },
  active: { rotateX: -0.5, rotateY: -3.25, z: 100, scale: 1.04 },
} as const;

export const pose3d_24 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: 2, rotateY: -0.8, z: 86, scale: 1.02 },
  focus: { rotateX: 2.75, rotateY: -1.1, z: 98, scale: 1.035 },
  active: { rotateX: 1.25, rotateY: -0.5, z: 106, scale: 1.04 },
} as const;

export const pose3d_25 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: -4.800000000000001, rotateY: 3.6, z: 20, scale: 1.02 },
  focus: { rotateX: -6.6000000000000005, rotateY: 4.95, z: 32, scale: 1.035 },
  active: { rotateX: -3, rotateY: 2.25, z: 40, scale: 1.04 },
} as const;

export const pose3d_26 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: -2, rotateY: -4, z: 26, scale: 1.02 },
  focus: { rotateX: -2.75, rotateY: -5.5, z: 38, scale: 1.035 },
  active: { rotateX: -1.25, rotateY: -2.5, z: 46, scale: 1.04 },
} as const;

export const pose3d_27 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: 0.8, rotateY: 0.4, z: 32, scale: 1.02 },
  focus: { rotateX: 1.1, rotateY: 0.55, z: 44, scale: 1.035 },
  active: { rotateX: 0.5, rotateY: 0.25, z: 52, scale: 1.04 },
} as const;

export const pose3d_28 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: 3.6, rotateY: 4.800000000000001, z: 38, scale: 1.02 },
  focus: { rotateX: 4.95, rotateY: 6.6000000000000005, z: 50, scale: 1.035 },
  active: { rotateX: 2.25, rotateY: 3, z: 58, scale: 1.04 },
} as const;

export const pose3d_29 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: -3.2, rotateY: -2.8000000000000003, z: 44, scale: 1.02 },
  focus: { rotateX: -4.4, rotateY: -3.8500000000000005, z: 56, scale: 1.035 },
  active: { rotateX: -2, rotateY: -1.75, z: 64, scale: 1.04 },
} as const;

export const pose3d_30 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: -0.4, rotateY: 1.6, z: 50, scale: 1.02 },
  focus: { rotateX: -0.55, rotateY: 2.2, z: 62, scale: 1.035 },
  active: { rotateX: -0.25, rotateY: 1, z: 70, scale: 1.04 },
} as const;

export const pose3d_31 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: 2.4000000000000004, rotateY: -6, z: 56, scale: 1.02 },
  focus: { rotateX: 3.3000000000000003, rotateY: -8.25, z: 68, scale: 1.035 },
  active: { rotateX: 1.5, rotateY: -3.75, z: 76, scale: 1.04 },
} as const;

export const pose3d_32 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: -4.4, rotateY: -1.6, z: 62, scale: 1.02 },
  focus: { rotateX: -6.050000000000001, rotateY: -2.2, z: 74, scale: 1.035 },
  active: { rotateX: -2.75, rotateY: -1, z: 82, scale: 1.04 },
} as const;

export const pose3d_33 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: -1.6, rotateY: 2.8000000000000003, z: 68, scale: 1.02 },
  focus: { rotateX: -2.2, rotateY: 3.8500000000000005, z: 80, scale: 1.035 },
  active: { rotateX: -1, rotateY: 1.75, z: 88, scale: 1.04 },
} as const;

export const pose3d_34 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: 1.2000000000000002, rotateY: -4.800000000000001, z: 74, scale: 1.02 },
  focus: { rotateX: 1.6500000000000001, rotateY: -6.6000000000000005, z: 86, scale: 1.035 },
  active: { rotateX: 0.75, rotateY: -3, z: 94, scale: 1.04 },
} as const;

export const pose3d_35 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: 4, rotateY: -0.4, z: 80, scale: 1.02 },
  focus: { rotateX: 5.5, rotateY: -0.55, z: 92, scale: 1.035 },
  active: { rotateX: 2.5, rotateY: -0.25, z: 100, scale: 1.04 },
} as const;

export const pose3d_36 = {
  rest: { rotateX: 0, rotateY: 0, z: 0, scale: 1 },
  hover: { rotateX: -2.8000000000000003, rotateY: 4, z: 86, scale: 1.02 },
  focus: { rotateX: -3.8500000000000005, rotateY: 5.5, z: 98, scale: 1.035 },
  active: { rotateX: -1.75, rotateY: 2.5, z: 106, scale: 1.04 },
} as const;


export const reducedMotionFade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

export function pickEntrance(reduce: boolean | null, fancy: Variants): Variants {
  return reduce ? reducedMotionFade : fancy;
}
