import { WHY_CHOOSE } from "../../data";
import { Reveal } from "../../shared/Reveal";
import { SectionHeader } from "../../shared/SectionHeader";
import styles from "./WhyChoose.module.css";

export function WhyChoose() {
  return (
    <section className={styles.section} aria-labelledby="why-choose-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            id="why-choose-title"
            title={WHY_CHOOSE.title}
            lead={WHY_CHOOSE.lead}
            align="center"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <article className={styles.card}>
            <ul className={styles.list}>
              {WHY_CHOOSE.points.map((point) => (
                <li key={point.id} className={styles.item}>
                  <h3 className={styles.itemTitle}>{point.title}</h3>
                  <p className={styles.itemDetail}>{point.detail}</p>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
