import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { GOOGLE_FORM_URL } from "../../../../constants/links";
import type { CareerlyService } from "../../data/servicesCatalog";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { springSnappy, STAGGER, VIEWPORT } from "../../motion/springs";
import { INSTANT } from "../../motion/reducedMotion";
import styles from "./ExpandableBentoGrid.module.css";

type ExpandableBentoGridProps = {
  services: CareerlyService[];
};

export function ExpandableBentoGrid({ services }: ExpandableBentoGridProps) {
  const [active, setActive] = useState<CareerlyService | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const id = useId();
  const reduce = useReducedMotion();

  useOutsideClick(panelRef, () => setActive(null));

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [active]);

  const lid = (part: string, title: string) =>
    reduce ? undefined : `${part}-${title}-${id}`;

  const fade = reduce
    ? { duration: 0.15 }
    : { type: "spring" as const, stiffness: 260, damping: 28 };

  const modal = (
    <AnimatePresence>
      {active ? (
        <>
          <motion.div
            key="bento-overlay"
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={reduce ? INSTANT : { duration: 0.2 }}
            onClick={() => setActive(null)}
            aria-hidden
          />
          <div className={styles.modalMount} role="presentation">
            <motion.div
              key={`panel-${active.id}`}
              layoutId={lid("card", active.title)}
              ref={panelRef}
              className={styles.modal}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`bento-title-${active.id}`}
              transition={fade}
            >
              <motion.button
                type="button"
                className={styles.closeBtn}
                aria-label="Close service details"
                onClick={() => setActive(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
              >
                <IoClose size={18} aria-hidden />
              </motion.button>

              <div className={styles.headerBand}>
                <span className={styles.headerIndex}>{active.index}</span>
              </div>

              <div className={styles.modalBody}>
                <div className={styles.modalHead}>
                  <div>
                    <motion.h3
                      layoutId={lid("title", active.title)}
                      id={`bento-title-${active.id}`}
                      className={styles.modalTitle}
                    >
                      {active.title}
                    </motion.h3>
                    <p className={styles.modalSummary}>{active.summary}</p>
                  </div>
                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cta}
                    onClick={() => setActive(null)}
                  >
                    Get in touch
                  </a>
                </div>

                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={reduce ? INSTANT : { delay: 0.08, duration: 0.25 }}
                >
                  <p className={styles.blockLabel}>Highlights</p>
                  <ul className={styles.chips} aria-label="Highlights">
                    {active.highlights.map((h) => (
                      <li key={h.id} className={styles.chip}>
                        {h.label}
                      </li>
                    ))}
                  </ul>
                  <p className={styles.chipDetail}>
                    {active.highlights.map((h) => h.detail).join(" · ")}
                  </p>
                </motion.div>

                <div>
                  <p className={styles.blockLabel}>Outcomes</p>
                  <ul className={styles.outcomes}>
                    {active.outcomes.map((o) => (
                      <li key={o.id} className={styles.outcome}>
                        <p className={styles.outcomeTitle}>{o.title}</p>
                        <p className={styles.outcomeText}>{o.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className={styles.blockLabel}>What you get</p>
                  <div className={styles.dive}>
                    {active.deepDive.map((block) => (
                      <div key={block.id} className={styles.diveBlock}>
                        <h4 className={styles.diveHeading}>{block.heading}</h4>
                        <p className={styles.diveBody}>{block.body}</p>
                        <ul className={styles.diveBullets}>
                          {block.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      ) : null}
    </AnimatePresence>
  );

  return (
    <>
      {createPortal(modal, document.body)}

      <ul className={styles.list}>
        {services.map((service, index) => {
          const isActive = active?.id === service.id;
          return (
            <motion.li
              key={service.id}
              layoutId={lid("card", service.title)}
              className={`${styles.card} ${styles[`accent_${service.accent}`] ?? ""}`}
              onClick={() => setActive(service)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActive(service);
                }
              }}
              role="button"
              tabIndex={isActive ? -1 : 0}
              aria-expanded={isActive}
              aria-hidden={isActive}
              aria-label={`${service.title} — open details`}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={isActive ? undefined : { opacity: 1, y: 0 }}
              animate={isActive ? { opacity: 0 } : undefined}
              viewport={VIEWPORT}
              transition={
                reduce
                  ? INSTANT
                  : { ...springSnappy, delay: index * STAGGER.normal }
              }
              whileHover={reduce || isActive ? undefined : { y: -3 }}
              whileTap={reduce || isActive ? undefined : { scale: 0.98 }}
              style={isActive ? { pointerEvents: "none" } : undefined}
            >
              <motion.h3
                layoutId={lid("title", service.title)}
                className={styles.cardTitle}
              >
                {service.title}
              </motion.h3>
            </motion.li>
          );
        })}
      </ul>
    </>
  );
}
