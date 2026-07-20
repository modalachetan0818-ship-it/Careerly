import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./Clients.module.css";

type Client = { name: string; src: string };

const CLIENTS: Client[] = [
  { name: "Google", src: "/brand/clients/google.svg" },
  { name: "Microsoft", src: "/brand/clients/microsoft.svg" },
  { name: "Amazon", src: "/brand/clients/amazon.svg" },
  { name: "Apple", src: "/brand/clients/apple.svg" },
  { name: "IBM", src: "/brand/clients/ibm.svg" },
  { name: "Oracle", src: "/brand/clients/oracle.svg" },
  { name: "Accenture", src: "/brand/clients/accenture.svg" },
  { name: "TCS", src: "/brand/clients/tcs.svg" },
  { name: "Infosys", src: "/brand/clients/infosys.svg" },
  { name: "Wipro", src: "/brand/clients/wipro.svg" },
  { name: "HCLTech", src: "/brand/clients/hcltech.svg" },
  { name: "Cognizant", src: "/brand/clients/cognizant.svg" },
  { name: "Deloitte", src: "/brand/clients/deloitte.svg" },
  { name: "JPMorgan Chase", src: "/brand/clients/jpmorgan.svg" },
  { name: "HDFC Bank", src: "/brand/clients/hdfc.svg" },
  { name: "Flipkart", src: "/brand/clients/flipkart.svg" },
  { name: "Swiggy", src: "/brand/clients/swiggy.svg" },
  { name: "Zoho", src: "/brand/clients/zoho.svg" },
  { name: "NVIDIA", src: "/brand/clients/nvidia.svg" },
  { name: "Salesforce", src: "/brand/clients/salesforce.svg" },
];

const GAP = 24; // keep in sync with .track gap
const AUTO_MS = 2600;

export function Clients() {
  const reduce = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  // Duplicated list lets the stepper loop seamlessly in both directions.
  const loopList = [...CLIENTS, ...CLIENTS];

  const step = (dir: 1 | -1, smooth = false) => {
    const el = viewportRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(`.${styles.card}`);
    const amount = (card?.offsetWidth ?? 200) + GAP;
    const half = el.scrollWidth / 2;
    // Normalise into the first copy so the jump is invisible.
    if (el.scrollLeft >= half) el.scrollLeft -= half;
    else if (el.scrollLeft < 0) el.scrollLeft += half;
    el.scrollBy({ left: dir * amount, behavior: smooth ? "smooth" : "auto" });
  };

  useEffect(() => {
    if (reduce) return;
    const el = viewportRef.current;
    if (!el) return;

    let active = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting;
      },
      { threshold: 0.15 },
    );
    io.observe(el);

    const id = window.setInterval(() => {
      if (!pausedRef.current && active) step(1);
    }, AUTO_MS);

    return () => {
      window.clearInterval(id);
      io.disconnect();
    };
  }, [reduce]);

  return (
    <section className={`section ${styles.clients}`} aria-label="Our Careerly clients">
      <div className={styles.bgWash} aria-hidden>
        <img
          src="/brand/sections/cta-bg.jpg"
          alt=""
          className={styles.bgImage}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className={styles.overlay} aria-hidden />
      <div className="container">
        <motion.div
          className={styles.head}
          initial={reduce ? false : { opacity: 0, y: 28, rotateX: 8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className={styles.title}>Our Careerly Clients</h2>
          <span className={styles.rule} />
          <p className={styles.lead}>
            We partner with industry leaders and innovative startups across various
            sectors
          </p>
        </motion.div>

        <div className={styles.carousel}>
          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowLeft}`}
            onClick={() => step(-1, true)}
            aria-label="Previous clients"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
              <path
                d="M15 5l-7 7 7 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            className={styles.viewport}
            ref={viewportRef}
            onMouseEnter={() => (pausedRef.current = true)}
            onMouseLeave={() => (pausedRef.current = false)}
          >
            <div className={styles.track}>
              {loopList.map((c, i) => (
                <div className={styles.card} key={`${c.name}-${i}`}>
                  <img
                    className={styles.logo}
                    src={c.src}
                    alt={c.name}
                    loading={i < 6 ? "eager" : "lazy"}
                    decoding="async"
                    width={220}
                    height={50}
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowRight}`}
            onClick={() => step(1, true)}
            aria-label="Next clients"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
              <path
                d="M9 5l7 7-7 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
