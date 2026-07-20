import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Carousel3D.module.css";

export type Carousel3DSlide = {
  id?: string | number;
  title: string;
  text: string;
  image: string;
};

type Props = {
  slides: Carousel3DSlide[];
  className?: string;
  width?: number;
  showNavigation?: boolean;
  showCounter?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
};

const ROTATIONS = [4, -2, -9, 7];

export function Carousel3D({
  slides,
  className,
  width = 460,
  showNavigation = true,
  showCounter = true,
  autoPlay = false,
  autoPlayInterval = 3000,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const rotations = useMemo(() => ROTATIONS, []);
  const total = slides.length;
  const activeItem = slides[activeIndex];

  useEffect(() => {
    if (!autoPlay || total <= 1) return;
    const id = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % total);
    }, autoPlayInterval);
    return () => window.clearInterval(id);
  }, [autoPlay, autoPlayInterval, total]);

  const handleNext = () => {
    if (activeIndex < total - 1) {
      setDirection(1);
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setDirection(-1);
      setActiveIndex(activeIndex - 1);
    }
  };

  if (!slides || total === 0) return null;

  return (
    <div className={`${styles.wrapper} ${className ?? ""}`}>
      <div
        className={styles.grid}
        style={{ perspective: "1400px", maxWidth: `${width}px` }}
      >
        {showCounter && (
          <div className={styles.counter}>
            {activeIndex + 1} / {total}
          </div>
        )}

        <div className={styles.stage}>
          <AnimatePresence custom={direction}>
            {slides.map((item, index) => {
              const isActive = index === activeIndex;
              const offset = index - activeIndex;
              return (
                <motion.div
                  key={item.id ?? index}
                  className={styles.card}
                  initial={{
                    x: offset * 15,
                    y: Math.abs(offset) * 6,
                    z: -150 * Math.abs(offset),
                    scale: 0.85 - Math.abs(offset) * 0.04,
                    rotateZ: rotations[index % 4],
                    opacity: isActive ? 1 : 0.5,
                    zIndex: 10 - Math.abs(offset),
                  }}
                  animate={
                    isActive
                      ? {
                          x: [offset * 15, direction === 1 ? -200 : 200, 0],
                          y: [Math.abs(offset) * 6, 0, 0],
                          z: [-200, 150, 250],
                          scale: [0.85, 1.05, 1],
                          rotateZ: [rotations[index % 4], -5, 0],
                          opacity: 1,
                          zIndex: 100,
                        }
                      : {
                          x: offset * 15,
                          y: Math.abs(offset) * 6,
                          z: -150 * Math.abs(offset),
                          rotateZ: rotations[index % 4],
                          scale: 0.85 - Math.abs(offset) * 0.04,
                          opacity: 0.55,
                          zIndex: 10 - Math.abs(offset),
                        }
                  }
                  exit={{
                    x: direction === 1 ? -250 : 250,
                    z: -260,
                    scale: 0.75,
                    rotateZ: direction === 1 ? -10 : 10,
                    opacity: 0,
                  }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.cardImg}
                    draggable={false}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <div className={styles.copy}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id ?? activeIndex}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.35 }}
            >
              <h3 className={styles.title}>{activeItem.title}</h3>
              <p className={styles.description}>{activeItem.text}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {showNavigation && total > 1 && (
          <div className={styles.nav}>
            <button
              type="button"
              className={styles.navButton}
              disabled={activeIndex === 0}
              onClick={handlePrev}
              aria-label="Previous card"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                aria-hidden
                focusable="false"
              >
                <path
                  d="M19 12H5M5 12l7 7M5 12l7-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              className={styles.navButton}
              disabled={activeIndex === total - 1}
              onClick={handleNext}
              aria-label="Next card"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                aria-hidden
                focusable="false"
              >
                <path
                  d="M5 12h14M19 12l-7 7M19 12l-7-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
