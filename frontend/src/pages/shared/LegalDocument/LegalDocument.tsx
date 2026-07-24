import { CinematicPageHero } from "../../../components/CinematicPageHero";
import styles from "./LegalDocument.module.css";

export type LegalSection = {
  id: string;
  title: string;
  body: string | string[];
};

export type LegalHero = {
  titleId: string;
  eyebrow: string;
  title: string;
  lead: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export type LegalDocumentProps = {
  hero: LegalHero;
  intro: string;
  sections: LegalSection[];
  lastUpdated: string;
  version?: string;
};

function SectionBody({ body }: { body: string | string[] }) {
  const paragraphs = Array.isArray(body) ? body : [body];
  return (
    <div className={styles.sectionBody}>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function LegalDocument({
  hero,
  intro,
  sections,
  lastUpdated,
  version = "v1.0",
}: LegalDocumentProps) {
  return (
    <div className={styles.pageRoot}>
      <CinematicPageHero
        titleId={hero.titleId}
        eyebrow={hero.eyebrow}
        title={hero.title}
        lead={hero.lead}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
      />

      <div className={`section ${styles.body}`}>
        <div className={styles.shell}>
          <header className={styles.intro}>
            <p className={styles.introText}>{intro}</p>
          </header>

          <div className={styles.layout}>
            <nav
              id="quick-nav"
              className={styles.navCard}
              aria-label="Quick navigation"
            >
              <h2 className={styles.navTitle}>Quick Navigation</h2>
              <p className={styles.navHint}>Jump to a section</p>
              <ul className={styles.navList}>
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      type="button"
                      className={styles.navLink}
                      onClick={() => scrollToSection(section.id)}
                    >
                      <span>{section.title}</span>
                      <span className={styles.navChevron} aria-hidden />
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.content}>
              {sections.map((section) => (
                <article
                  key={section.id}
                  id={section.id}
                  className={styles.section}
                >
                  <h2 className={styles.sectionTitle}>{section.title}</h2>
                  <SectionBody body={section.body} />
                </article>
              ))}

              <div className={styles.meta}>
                <p className={styles.lastUpdated}>
                  Last Updated: {lastUpdated}
                </p>
                <span className={styles.version}>{version}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
