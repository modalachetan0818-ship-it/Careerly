export type TiltState = {
  rotateX: number;
  rotateY: number;
  scale: number;
};

export type TiltConfig = {
  maxTilt: number;
  scale: number;
  invertX?: boolean;
  invertY?: boolean;
};

export const DEFAULT_TILT: TiltConfig = {
  maxTilt: 10,
  scale: 1.02,
  invertX: false,
  invertY: false,
};

export function computeTilt(
  clientX: number,
  clientY: number,
  rect: DOMRect,
  config: TiltConfig = DEFAULT_TILT
): TiltState {
  const px = (clientX - rect.left) / rect.width;
  const py = (clientY - rect.top) / rect.height;
  const midX = px - 0.5;
  const midY = py - 0.5;
  const rotateY = midX * config.maxTilt * (config.invertY ? -1 : 1);
  const rotateX = -midY * config.maxTilt * (config.invertX ? -1 : 1);
  return { rotateX, rotateY, scale: config.scale };
}

export function resetTilt(): TiltState {
  return { rotateX: 0, rotateY: 0, scale: 1 };
}

export function blendTilt(a: TiltState, b: TiltState, t: number): TiltState {
  return {
    rotateX: a.rotateX + (b.rotateX - a.rotateX) * t,
    rotateY: a.rotateY + (b.rotateY - a.rotateY) * t,
    scale: a.scale + (b.scale - a.scale) * t,
  };
}

export function clampTilt(state: TiltState, max: number): TiltState {
  return {
    rotateX: Math.max(-max, Math.min(max, state.rotateX)),
    rotateY: Math.max(-max, Math.min(max, state.rotateY)),
    scale: state.scale,
  };
}

export const TILT_PROFILE_1: TiltConfig = {
  maxTilt: 6,
  scale: 1.01,
  invertX: true,
  invertY: true,
};
export const TILT_PROFILE_2: TiltConfig = {
  maxTilt: 7,
  scale: 1.015,
  invertX: false,
  invertY: false,
};
export const TILT_PROFILE_3: TiltConfig = {
  maxTilt: 8,
  scale: 1.02,
  invertX: false,
  invertY: false,
};
export const TILT_PROFILE_4: TiltConfig = {
  maxTilt: 9,
  scale: 1.025,
  invertX: true,
  invertY: false,
};
export const TILT_PROFILE_5: TiltConfig = {
  maxTilt: 10,
  scale: 1.03,
  invertX: false,
  invertY: true,
};
export const TILT_PROFILE_6: TiltConfig = {
  maxTilt: 11,
  scale: 1.01,
  invertX: false,
  invertY: false,
};
export const TILT_PROFILE_7: TiltConfig = {
  maxTilt: 12,
  scale: 1.015,
  invertX: true,
  invertY: false,
};
export const TILT_PROFILE_8: TiltConfig = {
  maxTilt: 13,
  scale: 1.02,
  invertX: false,
  invertY: false,
};
export const TILT_PROFILE_9: TiltConfig = {
  maxTilt: 14,
  scale: 1.025,
  invertX: false,
  invertY: true,
};
export const TILT_PROFILE_10: TiltConfig = {
  maxTilt: 15,
  scale: 1.03,
  invertX: true,
  invertY: false,
};
export const TILT_PROFILE_11: TiltConfig = {
  maxTilt: 6,
  scale: 1.01,
  invertX: false,
  invertY: false,
};
export const TILT_PROFILE_12: TiltConfig = {
  maxTilt: 7,
  scale: 1.015,
  invertX: false,
  invertY: false,
};
export const TILT_PROFILE_13: TiltConfig = {
  maxTilt: 8,
  scale: 1.02,
  invertX: true,
  invertY: true,
};
export const TILT_PROFILE_14: TiltConfig = {
  maxTilt: 9,
  scale: 1.025,
  invertX: false,
  invertY: false,
};
export const TILT_PROFILE_15: TiltConfig = {
  maxTilt: 10,
  scale: 1.03,
  invertX: false,
  invertY: false,
};
export const TILT_PROFILE_16: TiltConfig = {
  maxTilt: 11,
  scale: 1.01,
  invertX: true,
  invertY: false,
};
export const TILT_PROFILE_17: TiltConfig = {
  maxTilt: 12,
  scale: 1.015,
  invertX: false,
  invertY: true,
};
export const TILT_PROFILE_18: TiltConfig = {
  maxTilt: 13,
  scale: 1.02,
  invertX: false,
  invertY: false,
};
export const TILT_PROFILE_19: TiltConfig = {
  maxTilt: 14,
  scale: 1.025,
  invertX: true,
  invertY: false,
};
export const TILT_PROFILE_20: TiltConfig = {
  maxTilt: 15,
  scale: 1.03,
  invertX: false,
  invertY: false,
};
export const TILT_PROFILE_21: TiltConfig = {
  maxTilt: 6,
  scale: 1.01,
  invertX: false,
  invertY: true,
};
export const TILT_PROFILE_22: TiltConfig = {
  maxTilt: 7,
  scale: 1.015,
  invertX: true,
  invertY: false,
};
export const TILT_PROFILE_23: TiltConfig = {
  maxTilt: 8,
  scale: 1.02,
  invertX: false,
  invertY: false,
};
export const TILT_PROFILE_24: TiltConfig = {
  maxTilt: 9,
  scale: 1.025,
  invertX: false,
  invertY: false,
};
export const TILT_PROFILE_25: TiltConfig = {
  maxTilt: 10,
  scale: 1.03,
  invertX: true,
  invertY: true,
};
export const TILT_PROFILE_26: TiltConfig = {
  maxTilt: 11,
  scale: 1.01,
  invertX: false,
  invertY: false,
};
export const TILT_PROFILE_27: TiltConfig = {
  maxTilt: 12,
  scale: 1.015,
  invertX: false,
  invertY: false,
};
export const TILT_PROFILE_28: TiltConfig = {
  maxTilt: 13,
  scale: 1.02,
  invertX: true,
  invertY: false,
};
export const TILT_PROFILE_29: TiltConfig = {
  maxTilt: 14,
  scale: 1.025,
  invertX: false,
  invertY: true,
};
export const TILT_PROFILE_30: TiltConfig = {
  maxTilt: 15,
  scale: 1.03,
  invertX: false,
  invertY: false,
};
export const TILT_PROFILE_31: TiltConfig = {
  maxTilt: 6,
  scale: 1.01,
  invertX: true,
  invertY: false,
};
export const TILT_PROFILE_32: TiltConfig = {
  maxTilt: 7,
  scale: 1.015,
  invertX: false,
  invertY: false,
};
export const TILT_PROFILE_33: TiltConfig = {
  maxTilt: 8,
  scale: 1.02,
  invertX: false,
  invertY: true,
};
export const TILT_PROFILE_34: TiltConfig = {
  maxTilt: 9,
  scale: 1.025,
  invertX: true,
  invertY: false,
};
export const TILT_PROFILE_35: TiltConfig = {
  maxTilt: 10,
  scale: 1.03,
  invertX: false,
  invertY: false,
};
export const TILT_PROFILE_36: TiltConfig = {
  maxTilt: 11,
  scale: 1.01,
  invertX: false,
  invertY: false,
};
export const TILT_PROFILE_37: TiltConfig = {
  maxTilt: 12,
  scale: 1.015,
  invertX: true,
  invertY: true,
};
export const TILT_PROFILE_38: TiltConfig = {
  maxTilt: 13,
  scale: 1.02,
  invertX: false,
  invertY: false,
};
export const TILT_PROFILE_39: TiltConfig = {
  maxTilt: 14,
  scale: 1.025,
  invertX: false,
  invertY: false,
};
export const TILT_PROFILE_40: TiltConfig = {
  maxTilt: 15,
  scale: 1.03,
  invertX: true,
  invertY: false,
};
export const TILT_PROFILE_41: TiltConfig = {
  maxTilt: 6,
  scale: 1.01,
  invertX: false,
  invertY: true,
};
export const TILT_PROFILE_42: TiltConfig = {
  maxTilt: 7,
  scale: 1.015,
  invertX: false,
  invertY: false,
};
export const TILT_PROFILE_43: TiltConfig = {
  maxTilt: 8,
  scale: 1.02,
  invertX: true,
  invertY: false,
};
export const TILT_PROFILE_44: TiltConfig = {
  maxTilt: 9,
  scale: 1.025,
  invertX: false,
  invertY: false,
};
export const TILT_PROFILE_45: TiltConfig = {
  maxTilt: 10,
  scale: 1.03,
  invertX: false,
  invertY: true,
};
export const TILT_PROFILE_46: TiltConfig = {
  maxTilt: 11,
  scale: 1.01,
  invertX: true,
  invertY: false,
};
export const TILT_PROFILE_47: TiltConfig = {
  maxTilt: 12,
  scale: 1.015,
  invertX: false,
  invertY: false,
};
export const TILT_PROFILE_48: TiltConfig = {
  maxTilt: 13,
  scale: 1.02,
  invertX: false,
  invertY: false,
};
