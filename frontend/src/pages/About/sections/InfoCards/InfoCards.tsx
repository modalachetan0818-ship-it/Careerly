import { INFO_CARDS } from "../../data";
import { Reveal } from "../../shared/Reveal";
import { SectionHeader } from "../../shared/SectionHeader";
import chrome from "../../shared/sectionChrome.module.css";
import styles from "./InfoCards.module.css";

export function InfoCards() {
  return (
    <section
      className={chrome.shellSoft}
      aria-labelledby="info-cards-title"
    >
      <div
        className={chrome.bgPlate}
        style={{ backgroundImage: 'url("/about/about-story-bg.png")' }}
        aria-hidden
      />
      <div className={chrome.scrim} aria-hidden />

      <div className="container">
        <Reveal>
          <SectionHeader
            id="info-cards-title"
            title="Know Careerly"
            lead="Who we are and what we commit to every candidate and hiring partner."
            align="center"
          />
        </Reveal>

        <div className={styles.stack}>
          {INFO_CARDS.map((card, i) => (
            <Reveal key={card.id} delay={0.06 + i * 0.06}>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                {card.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className={styles.cardBody}>
                    {paragraph}
                  </p>
                ))}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
