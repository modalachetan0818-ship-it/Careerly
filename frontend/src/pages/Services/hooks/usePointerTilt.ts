import { useCallback, useRef, useState } from "react";
import {
  computeTilt,
  resetTilt,
  type TiltConfig,
  type TiltState,
  DEFAULT_TILT,
} from "../motion/tiltMath";

export function usePointerTilt(config: TiltConfig = DEFAULT_TILT, enabled = true) {
  const ref = useRef<HTMLElement | null>(null);
  const [tilt, setTilt] = useState<TiltState>(resetTilt());

  const onPointerMove = useCallback(
    (event: React.PointerEvent) => {
      if (!enabled || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setTilt(computeTilt(event.clientX, event.clientY, rect, config));
    },
    [config, enabled]
  );

  const onPointerLeave = useCallback(() => {
    setTilt(resetTilt());
  }, []);

  const onPointerEnter = useCallback(
    (event: React.PointerEvent) => {
      if (!enabled || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setTilt(computeTilt(event.clientX, event.clientY, rect, config));
    },
    [config, enabled]
  );

  return {
    ref,
    tilt,
    handlers: {
      onPointerMove,
      onPointerLeave,
      onPointerEnter,
    },
  };
}
