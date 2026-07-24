import { useCallback, useState } from "react";

export type Focus3DState = {
  focusedId: string | null;
  hoveredId: string | null;
};

export function useFocusRing3D(initialId: string | null = null) {
  const [state, setState] = useState<Focus3DState>({
    focusedId: initialId,
    hoveredId: null,
  });

  const setFocused = useCallback((id: string | null) => {
    setState((prev) => ({ ...prev, focusedId: id }));
  }, []);

  const setHovered = useCallback((id: string | null) => {
    setState((prev) => ({ ...prev, hoveredId: id }));
  }, []);

  const isActive = useCallback(
    (id: string) => state.focusedId === id || state.hoveredId === id,
    [state.focusedId, state.hoveredId]
  );

  const isPrimary = useCallback(
    (id: string) => state.focusedId === id,
    [state.focusedId]
  );

  return {
    ...state,
    setFocused,
    setHovered,
    isActive,
    isPrimary,
  };
}
