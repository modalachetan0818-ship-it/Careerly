import {
  AboutHero,
  AtAGlance,
  InfoCards,
  WhyChoose,
  ServicesSnapshot,
  TrustStrip,
  PresenceContact,
} from "./sections";
import styles from "./About.module.css";

/** Careerly About — cinematic hero + body sections. */
export function About() {
  return (
    <div className={styles.page}>
      <AboutHero />
      <AtAGlance />
      <InfoCards />
      <WhyChoose />
      <ServicesSnapshot />
      <TrustStrip />
      <PresenceContact />
    </div>
  );
}
