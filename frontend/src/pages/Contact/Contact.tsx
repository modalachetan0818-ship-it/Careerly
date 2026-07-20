import { useState, type FormEvent } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { submitContact } from "../../api/client";
import styles from "./Contact.module.css";

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface Errors {
  [key: string]: string;
}

const empty: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export function Contact() {
  const reduce = useReducedMotion();
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = (): boolean => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email";
    if (form.phone && !/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, "")))
      next.phone = "Enter a valid 10-digit mobile number";
    if (!form.message.trim()) next.message = "Please include a short message";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError("");
    try {
      await submitContact(form);
      setSent(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Could not send message",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className={`section ${styles.page}`}>
      <div className="container">
        <motion.header
          className={styles.header}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="section-title">Contact Careerly</h1>
          <div className="gold-rule" />
          <p className="section-lead">
            Reach the team for career help, partnership inquiries, or a visit to
            our Bengaluru office.
          </p>
        </motion.header>

        <div className={styles.layout}>
          <aside className={styles.info}>
            <div className={styles.infoBlock}>
              <h2>Visit</h2>
              <p>
                No. 13, Saienclave Kothanur, Near GR Lavender Skalvi School
                Road, J P Nagar 8th Phase, Bangalore South — 560078
              </p>
            </div>
            <div className={styles.infoBlock}>
              <h2>Call</h2>
              <p>
                <a href="tel:+919686448306">+91 96864 48306</a>
              </p>
            </div>
            <div className={styles.infoBlock}>
              <h2>Online</h2>
              <p>
                <a
                  href="https://careerly.info"
                  target="_blank"
                  rel="noreferrer"
                >
                  careerly.info
                </a>
              </p>
            </div>
            <div className={styles.mapWrap}>
              <iframe
                title="Careerly office map"
                src="https://maps.google.com/maps?q=JP%20Nagar%208th%20Phase%20Bangalore&t=&z=14&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>

          <div className={styles.formPanel}>
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="ok"
                  className={styles.success}
                  initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className={styles.check} aria-hidden>
                    ✓
                  </div>
                  <h2>Message sent</h2>
                  <p>
                    Thanks{form.name ? `, ${form.name.split(" ")[0]}` : ""}. We
                    will get back to you shortly at {form.email}.
                  </p>
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={() => {
                      setForm(empty);
                      setSent(false);
                    }}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  className={styles.form}
                  onSubmit={onSubmit}
                  noValidate
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="form-grid two">
                    <div className="field">
                      <label htmlFor="c-name">Name</label>
                      <input
                        id="c-name"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        autoComplete="name"
                      />
                      {errors.name && (
                        <span className="field-error">{errors.name}</span>
                      )}
                    </div>
                    <div className="field">
                      <label htmlFor="c-email">Email</label>
                      <input
                        id="c-email"
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        autoComplete="email"
                      />
                      {errors.email && (
                        <span className="field-error">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  <div className="form-grid two">
                    <div className="field">
                      <label htmlFor="c-phone">Phone (optional)</label>
                      <input
                        id="c-phone"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        autoComplete="tel"
                      />
                      {errors.phone && (
                        <span className="field-error">{errors.phone}</span>
                      )}
                    </div>
                    <div className="field">
                      <label htmlFor="c-subject">Subject</label>
                      <input
                        id="c-subject"
                        value={form.subject}
                        onChange={(e) =>
                          setForm({ ...form, subject: e.target.value })
                        }
                        placeholder="e.g. Career help, Partnership"
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="c-message">Message</label>
                    <textarea
                      id="c-message"
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="How can we help?"
                    />
                    {errors.message && (
                      <span className="field-error">{errors.message}</span>
                    )}
                  </div>

                  {submitError && (
                    <p className="field-error" role="alert">
                      {submitError}
                    </p>
                  )}

                  <button
                    type="submit"
                    className={`btn btn-gold ${styles.submit}`}
                    disabled={submitting}
                  >
                    {submitting ? "Sending…" : "Send message"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
