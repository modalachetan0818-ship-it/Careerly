import { Link } from "react-router-dom";
import { PRESENCE } from "../../data";
import { Reveal } from "../../shared/Reveal";
import { SectionHeader } from "../../shared/SectionHeader";
import chrome from "../../shared/sectionChrome.module.css";
import styles from "./PresenceContact.module.css";

export function PresenceContact() {
  return (
    <section
      className={chrome.shellSoft}
      aria-labelledby="presence-title"
    >
      <div
        className={chrome.bgPlate}
        style={{ backgroundImage: 'url("/about/about-presence-bg.png")' }}
        aria-hidden
      />
      <div className={chrome.scrim} aria-hidden />

      <div className="container">
        <Reveal>
          <SectionHeader
            id="presence-title"
            title={PRESENCE.title}
            lead={PRESENCE.lead}
            align="center"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className={styles.panel}>
            <dl className={styles.meta}>
              <div className={styles.row}>
                <dt>Address</dt>
                <dd>{PRESENCE.address}</dd>
              </div>
              <div className={styles.row}>
                <dt>Phone</dt>
                <dd>
                  <a href={PRESENCE.phoneHref}>{PRESENCE.phoneDisplay}</a>
                </dd>
              </div>
              <div className={styles.row}>
                <dt>Website</dt>
                <dd>
                  <a
                    href={PRESENCE.webHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {PRESENCE.webDisplay}
                  </a>
                </dd>
              </div>
            </dl>

            <div className={styles.cta}>
              <Link to={PRESENCE.cta.to} className="btn btn-gold">
                {PRESENCE.cta.label}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
