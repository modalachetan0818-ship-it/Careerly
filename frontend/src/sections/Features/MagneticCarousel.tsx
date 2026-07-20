import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
} from "react";
import { useReducedMotion } from "framer-motion";
import styles from "./MagneticCarousel.module.css";

export type CarouselImage = {
  src: string;
  title?: string;
  text?: string;
};

type TransitionConfig = {
  type?: string;
  duration?: number;
  ease?: string | number[];
};

type Props = {
  images: CarouselImage[];
  collapsedHeight?: number;
  hoverHeight?: number;
  openHeight?: number;
  gap?: number;
  influence?: number;
  blur?: number;
  hoverBoost?: number;
  transition?: TransitionConfig;
};

const EASE_PRESETS: Record<string, string> = {
  linear: "linear",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
};

function parseTransition(t?: TransitionConfig) {
  const dur = Math.max(0.05, t?.duration ?? 0.3);
  let ease = "cubic-bezier(0.44, 0, 0.56, 1)";
  if (Array.isArray(t?.ease) && t.ease.length === 4) {
    ease = `cubic-bezier(${t.ease.join(", ")})`;
  } else if (typeof t?.ease === "string" && EASE_PRESETS[t.ease]) {
    ease = EASE_PRESETS[t.ease];
  } else if (t?.type === "spring") {
    ease = "cubic-bezier(0.34, 1.56, 0.64, 1)";
  }
  return { dur, ease };
}

export function MagneticCarousel({
  images,
  collapsedHeight = 380,
  hoverHeight = 440,
  openHeight = 460,
  gap = 12,
  influence = 220,
  blur = 0,
  hoverBoost = 2.4,
  transition = { type: "tween", duration: 0.32, ease: "easeInOut" },
}: Props) {
  const reduce = useReducedMotion();
  const items = images.length > 0 ? images : [];
  const count = items.length;

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerW, setContainerW] = useState(0);
  const [factors, setFactors] = useState<number[]>(() => items.map(() => 0));
  const [open, setOpen] = useState<number | null>(null);
  const [closing, setClosing] = useState(false);

  const targetRef = useRef<number[]>(items.map(() => 0));
  const curRef = useRef<number[]>(items.map(() => 0));
  const loopRef = useRef(0);
  const moveRafRef = useRef(0);
  const closeTimer = useRef(0);

  const { dur, ease } = parseTransition(transition);

  const measure = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    setContainerW(el.clientWidth);
  }, []);

  useEffect(() => {
    measure();
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [measure]);

  useEffect(() => {
    targetRef.current = items.map(() => 0);
    curRef.current = items.map(() => 0);
    setFactors(items.map(() => 0));
  }, [count]);

  useEffect(
    () => () => {
      cancelAnimationFrame(loopRef.current);
      cancelAnimationFrame(moveRafRef.current);
      clearTimeout(closeTimer.current);
    },
    [],
  );

  const startLoop = () => {
    if (reduce || loopRef.current) return;
    const step = () => {
      const tgt = targetRef.current;
      const cur = curRef.current;
      let moving = false;
      for (let i = 0; i < cur.length; i++) {
        const d = (tgt[i] ?? 0) - cur[i];
        if (Math.abs(d) > 0.001) {
          cur[i] += d * 0.22;
          moving = true;
        } else {
          cur[i] = tgt[i] ?? 0;
        }
      }
      setFactors([...cur]);
      loopRef.current = moving ? requestAnimationFrame(step) : 0;
    };
    loopRef.current = requestAnimationFrame(step);
  };

  const availableWidth = Math.max(0, containerW - Math.max(0, count - 1) * gap);
  const baseWidth = count > 0 ? availableWidth / count : 0;

  const setTargetFromCursor = (clientX: number) => {
    const el = containerRef.current;
    if (!el || reduce || availableWidth <= 0) return;
    const rect = el.getBoundingClientRect();
    const cx = clientX - rect.left;
    const startX = 0;
    targetRef.current = items.map((_, i) => {
      const center = startX + i * (baseWidth + gap) + baseWidth / 2;
      const dist = Math.abs(cx - center);
      const f = Math.max(0, 1 - dist / influence);
      return f * f * (3 - 2 * f);
    });
    startLoop();
  };

  const onMove = (e: MouseEvent) => {
    if (open !== null || reduce) return;
    const x = e.clientX;
    if (moveRafRef.current) return;
    moveRafRef.current = requestAnimationFrame(() => {
      moveRafRef.current = 0;
      setTargetFromCursor(x);
    });
  };

  const onLeave = () => {
    if (open !== null) return;
    targetRef.current = items.map(() => 0);
    startLoop();
  };

  const close = () => {
    targetRef.current = items.map(() => 0);
    curRef.current = items.map(() => 0);
    setFactors(items.map(() => 0));
    setClosing(true);
    clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setClosing(false), dur * 1000);
    setOpen(null);
  };

  const widths = (() => {
    if (count === 0 || availableWidth <= 0) return items.map(() => 0);

    if (open !== null) {
      const openShare = Math.min(availableWidth * 0.58, availableWidth - (count - 1) * 56);
      const rest = Math.max(0, availableWidth - openShare);
      const side = count > 1 ? rest / (count - 1) : 0;
      return items.map((_, i) => (i === open ? openShare : side));
    }

    const weights = factors.map((f) => 1 + f * hoverBoost);
    const sum = weights.reduce((a, b) => a + b, 0) || 1;
    return weights.map((w) => (availableWidth * w) / sum);
  })();

  const sizeFor = (i: number) => {
    const width = widths[i] ?? baseWidth;
    if (open !== null) {
      return {
        width,
        height: i === open ? openHeight : collapsedHeight * 0.92,
      };
    }
    const f = factors[i] ?? 0;
    return {
      width,
      height: collapsedHeight + (hoverHeight - collapsedHeight) * f,
    };
  };

  const openEase = `width ${dur}s ${ease}, height ${dur}s ${ease}, filter ${dur}s ${ease}, opacity ${dur}s ${ease}`;
  const barTransition = open !== null || closing ? openEase : "none";

  return (
    <div
      ref={containerRef}
      className={styles.carousel}
      style={{ gap } as CSSProperties}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div
        className={styles.backdrop}
        style={{ pointerEvents: open !== null ? "auto" : "none" }}
        onClick={close}
        aria-hidden
      />
      {items.map((img, i) => {
        const { width, height } = sizeFor(i);
        const f = factors[i] ?? 0;
        const blurred = open !== null && i !== open;
        const isOpen = open === i;
        const showDetails = isOpen || f > 0.28 || width > 150;
        const wideLabel = isOpen || width > 130;

        return (
          <button
            key={`${img.title ?? i}-${i}`}
            type="button"
            className={[
              styles.bar,
              isOpen ? styles.barOpen : "",
              wideLabel ? styles.barWide : "",
              showDetails ? styles.barActive : "",
            ]
              .filter(Boolean)
              .join(" ")}
            aria-expanded={isOpen}
            aria-label={img.title ?? `Feature ${i + 1}`}
            onClick={(e) => {
              e.stopPropagation();
              if (open === i) close();
              else setOpen(i);
            }}
            style={{
              width,
              height,
              transition: barTransition,
              zIndex: isOpen ? 3 : 2,
              filter: blur > 0 && blurred ? `blur(${blur}px)` : "none",
              opacity: blurred ? 0.45 : 1,
              backgroundImage: `url(${img.src})`,
            }}
          >
            <span className={styles.shade} aria-hidden />
            <span className={styles.meta}>
              <span className={styles.index}>0{i + 1}</span>
              {img.title && <span className={styles.title}>{img.title}</span>}
              {img.text && (
                <span
                  className={styles.text}
                  style={{
                    opacity: isOpen || f > 0.45 ? 1 : 0,
                    maxHeight: isOpen || f > 0.45 ? "8rem" : 0,
                  }}
                >
                  {img.text}
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}
