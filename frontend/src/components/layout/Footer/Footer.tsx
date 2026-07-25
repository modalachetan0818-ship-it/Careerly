import { Link } from "react-router-dom";
import SocialFlipButton from "../../SocialFlipButton/SocialFlipButton";
import { GOOGLE_FORM_URL } from "../../../constants/links";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <div className={styles.brandRow}>
            <img
              src="/brand/logo-mark.png"
              alt="Careerly"
              className={styles.logoImg}
              width={36}
              height={36}
            />
            <span className={styles.name}>CAREERLY</span>
          </div>
          <p className={styles.tagline}>
            Empowering Careers. Building Tomorrows.
          </p>
          <p className={styles.mission}>
            IT and Non-IT opportunities for students and experienced
            professionals — your career, our mission, success together.
          </p>
          <div className={styles.social}>
            <SocialFlipButton />
          </div>
        </div>

        <div>
          <h3 className={styles.heading}>Explore</h3>
          <ul className={styles.links}>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={styles.heading}>Legal</h3>
          <ul className={styles.links}>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms &amp; Conditions</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={styles.heading}>Contact</h3>
          <ul className={styles.contact}>
            <li>
              <a href="tel:+919686448306">+91 96864 48306</a>
            </li>
            <li>
              <a
                href="https://careerly.info"
                target="_blank"
                rel="noreferrer"
              >
                careerly.info
              </a>
            </li>
            <li>
              No. 13, Saienclave Kothanur, Near GR Lavender Skalvi School
              Road, J P Nagar 8th Phase, Bangalore South — 560078
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p>© {new Date().getFullYear()} Careerly. All rights reserved.</p>
          <p className={styles.pillars}>Learn · Grow · Achieve · Succeed</p>
        </div>
      </div>
    </footer>
  );
}
