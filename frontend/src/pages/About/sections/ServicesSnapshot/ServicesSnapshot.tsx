import type { ServiceSnap } from "../../data";
import { SERVICES_SNAPSHOT } from "../../data";
import { Reveal } from "../../shared/Reveal";
import { SectionHeader } from "../../shared/SectionHeader";
import chrome from "../../shared/sectionChrome.module.css";
import styles from "./ServicesSnapshot.module.css";

function ServiceIcon({ type }: { type: ServiceSnap["icon"] }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (type) {
    case "it":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="12" rx="1.5" />
          <path d="M8 20h8M12 16v4" />
        </svg>
      );
    case "nonit":
      return (
        <svg {...common}>
          <path d="M3 20V9l9-5 9 5v11" />
          <path d="M9 20v-6h6v6" />
        </svg>
      );
    case "guidance":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l2.5 2.5" />
        </svg>
      );
    case "campus":
      return (
        <svg {...common}>
          <path d="M12 3l9 5-9 5-9-5 9-5z" />
          <path d="M5 10.5V17c0 1.5 3.5 3 7 3s7-1.5 7-3v-6.5" />
        </svg>
      );
  }
}

export function ServicesSnapshot() {
  return (
    <section
      className={chrome.shell}
      aria-labelledby="services-snapshot-title"
    >
      <div
        className={chrome.bgPlate}
        style={{ backgroundImage: 'url("/about/about-values-bg.png")' }}
        aria-hidden
      />
      <div className={chrome.scrim} aria-hidden />

      <div className="container">
        <Reveal>
          <SectionHeader
            id="services-snapshot-title"
            title={SERVICES_SNAPSHOT.title}
            lead={SERVICES_SNAPSHOT.lead}
            align="center"
          />
        </Reveal>

        <ul className={styles.grid}>
          {SERVICES_SNAPSHOT.items.map((item, i) => (
            <Reveal
              key={item.id}
              as="li"
              delay={0.05 + i * 0.05}
              className={styles.card}
            >
              <span className={styles.iconWrap}>
                <ServiceIcon type={item.icon} />
              </span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardLine}>{item.line}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
