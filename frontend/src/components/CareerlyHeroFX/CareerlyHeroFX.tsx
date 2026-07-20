import { useEffect, useRef } from "react";
import styles from "./CareerlyHeroFX.module.css";

/**
 * CareerlyHeroFX — lightweight gold particle field for the hero.
 * Pauses when off-screen and keeps particle count low for smooth FPS.
 */

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hueShift: number;
};

const GOLD_STOPS = [
  [201, 162, 39],
  [154, 122, 26],
  [110, 84, 12],
];

function mix(a: number[], b: number[], t: number) {
  return [
    Math.round(a[0] + (b[0] - a[0]) * t),
    Math.round(a[1] + (b[1] - a[1]) * t),
    Math.round(a[2] + (b[2] - a[2]) * t),
  ];
}

function goldColor(t: number, alpha: number) {
  const seg =
    t < 0.5
      ? mix(GOLD_STOPS[0], GOLD_STOPS[1], t * 2)
      : mix(GOLD_STOPS[1], GOLD_STOPS[2], (t - 0.5) * 2);
  return `rgba(${seg[0]}, ${seg[1]}, ${seg[2]}, ${alpha})`;
}

export function CareerlyHeroFX() {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    if (!root || !canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false, desynchronized: true });
    if (!ctx) return;

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    let width = 0;
    let height = 0;
    let visible = true;
    const particles: Particle[] = [];
    const RIBBONS = 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      // Cap DPR at 1 — hero FX is soft; higher DPR costs paint for little gain.
      const dpr = Math.min(window.devicePixelRatio || 1, 1);
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const targetCount = Math.min(36, Math.floor((width * height) / 28000));

    const spawn = (initial = false): Particle => {
      const maxLife = 220 + Math.random() * 280;
      return {
        x: Math.random() * width,
        y: initial ? Math.random() * height : height + Math.random() * 40,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -(0.25 + Math.random() * 0.9),
        life: initial ? Math.random() * maxLife : 0,
        maxLife,
        size: 0.7 + Math.random() * 2.2,
        hueShift: Math.random(),
      };
    };

    for (let i = 0; i < targetCount; i++) particles.push(spawn(true));

    const flowAngle = (x: number, y: number, t: number) => {
      const nx = x * 0.0016;
      const ny = y * 0.0016;
      return (
        Math.sin(nx + t * 0.00022) * 1.1 +
        Math.cos(ny - t * 0.00017) * 1.1 +
        Math.sin((nx + ny) * 1.7 + t * 0.0003)
      );
    };

    let start = performance.now();

    const drawRibbons = (t: number) => {
      for (let r = 0; r < RIBBONS; r++) {
        const phase = (r / RIBBONS) * Math.PI * 2;
        const baseY = height * (0.3 + 0.22 * r);
        const amp = height * 0.05 * (1 + r * 0.2);
        ctx.beginPath();
        for (let x = -20; x <= width + 20; x += 36) {
          const y =
            baseY +
            Math.sin(x * 0.004 + t * 0.0004 + phase) * amp +
            Math.sin(x * 0.011 - t * 0.0006 + phase) * amp * 0.4;
          if (x === -20) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        const grad = ctx.createLinearGradient(0, 0, width, 0);
        grad.addColorStop(0, goldColor(0.1, 0));
        grad.addColorStop(0.5, goldColor(0.45, 0.2 + r * 0.03));
        grad.addColorStop(1, goldColor(0.85, 0));
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.2 + r * 0.5;
        ctx.stroke();
      }
    };

    const renderStatic = () => {
      const g = ctx.createRadialGradient(
        width * 0.5,
        height * 0.42,
        0,
        width * 0.5,
        height * 0.42,
        Math.max(width, height) * 0.7,
      );
      g.addColorStop(0, "rgba(201, 162, 39, 0.14)");
      g.addColorStop(0.5, "rgba(232, 200, 74, 0.06)");
      g.addColorStop(1, "#ffffff");
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);
    };

    const frame = (now: number) => {
      if (!visible) {
        rafRef.current = 0;
        return;
      }
      const t = now - start;

      ctx.fillStyle = "rgba(255, 255, 255, 0.18)";
      ctx.fillRect(0, 0, width, height);

      drawRibbons(t);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const a = flowAngle(p.x, p.y, t);
        p.vx += Math.cos(a) * 0.012;
        p.vy += Math.sin(a) * 0.012 - 0.006;
        p.vx *= 0.96;
        p.vy = Math.max(p.vy, -1.6) * 0.985;
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        const lifeT = p.life / p.maxLife;
        const fade = Math.sin(Math.min(1, lifeT) * Math.PI);
        const alpha = 0.62 * fade;

        ctx.beginPath();
        ctx.fillStyle = goldColor(p.hueShift, alpha);
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (p.life >= p.maxLife || p.y < -30 || p.x < -30 || p.x > width + 30) {
          particles[i] = spawn(false);
        }
      }

      rafRef.current = requestAnimationFrame(frame);
    };

    const startLoop = () => {
      if (reduce || rafRef.current || !visible) return;
      start = performance.now();
      rafRef.current = requestAnimationFrame(frame);
    };

    const stopLoop = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    };

    let onResize: (() => void) | null = null;
    if (reduce) {
      renderStatic();
      onResize = () => {
        resize();
        renderStatic();
      };
    } else {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);
      startLoop();
      onResize = () => resize();
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) startLoop();
        else stopLoop();
      },
      { threshold: 0.05 },
    );
    io.observe(root);

    window.addEventListener("resize", onResize);
    return () => {
      stopLoop();
      io.disconnect();
      if (onResize) window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div ref={rootRef} className={styles.fx} aria-hidden>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.grain} />
    </div>
  );
}
