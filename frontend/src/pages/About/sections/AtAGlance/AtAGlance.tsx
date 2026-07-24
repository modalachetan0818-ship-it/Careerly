import { AT_A_GLANCE } from "../../data";
import { Reveal } from "../../shared/Reveal";
import styles from "./AtAGlance.module.css";

export function AtAGlance() {
  return (
    <section className={styles.section} aria-labelledby="at-a-glance-title">
      <div className={`container ${styles.inner}`}>
        <Reveal>
          <h2 id="at-a-glance-title" className={styles.title}>
            {AT_A_GLANCE.title}
          </h2>
          <div className={styles.rule} aria-hidden />
          <p className={styles.body}>{AT_A_GLANCE.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
