import { useMemo, useState, type FormEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { getJobById, jobs } from "../../data/jobs";
import styles from "./Apply.module.css";

interface FormState {
  name: string;
  email: string;
  phone: string;
  level: "Student / Fresher" | "Experienced" | "";
  jobId: string;
  resumeName: string;
  message: string;
}

interface Errors {
  [key: string]: string;
}

const empty: FormState = {
  name: "",
  email: "",
  phone: "",
  level: "",
  jobId: "",
  resumeName: "",
  message: "",
};

export function Apply() {
  const [params] = useSearchParams();
  const prefillJob = params.get("job") || "";
  const [form, setForm] = useState<FormState>({
    ...empty,
    jobId: getJobById(prefillJob) ? prefillJob : "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const selectedJob = useMemo(
    () => (form.jobId ? getJobById(form.jobId) : undefined),
    [form.jobId],
  );

  const validate = (): boolean => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email";
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, "")))
      next.phone = "Enter a valid 10-digit Indian mobile number";
    if (!form.level) next.level = "Select your experience level";
    if (!form.jobId) next.jobId = "Select a role";
    if (!form.resumeName) next.resume = "Attach your resume (PDF/DOC)";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className={`section ${styles.page}`}>
        <div className="container">
          <AnimatePresence>
            <motion.div
              className={styles.success}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45 }}
            >
              <div className={styles.check} aria-hidden>
                ✓
              </div>
              <h1>Application received</h1>
              <p>
                Thank you{form.name ? `, ${form.name.split(" ")[0]}` : ""}. We
                have received your application
                {selectedJob ? ` for ${selectedJob.title}` : ""}. Our team will
                contact you on {form.phone || "your phone"} soon.
              </p>
              <div className={styles.successActions}>
                <Link to="/jobs" className="btn btn-gold">
                  Browse more jobs
                </Link>
                <Link to="/" className="btn btn-ghost">
                  Back home
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    );
  }

  return (
    <section className={`section ${styles.page}`}>
      <div className="container">
        <header className={styles.header}>
          <h1 className="section-title">Apply with Careerly</h1>
          <div className="gold-rule" />
          <p className="section-lead">
            Tell us about yourself. Attach your resume and we will help place
            you in the right IT or Non-IT role.
          </p>
        </header>

        <form className={styles.form} onSubmit={onSubmit} noValidate>
          <div className="form-grid two">
            <div className="field">
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                autoComplete="name"
              />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                autoComplete="email"
              />
              {errors.email && (
                <span className="field-error">{errors.email}</span>
              )}
            </div>
          </div>

          <div className="form-grid two">
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                inputMode="numeric"
                placeholder="10-digit mobile"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                autoComplete="tel"
              />
              {errors.phone && (
                <span className="field-error">{errors.phone}</span>
              )}
            </div>
            <div className="field">
              <label htmlFor="level">I am a</label>
              <select
                id="level"
                value={form.level}
                onChange={(e) =>
                  setForm({
                    ...form,
                    level: e.target.value as FormState["level"],
                  })
                }
              >
                <option value="">Select…</option>
                <option value="Student / Fresher">Student / Fresher</option>
                <option value="Experienced">Experienced professional</option>
              </select>
              {errors.level && (
                <span className="field-error">{errors.level}</span>
              )}
            </div>
          </div>

          <div className="field">
            <label htmlFor="job">Role applying for</label>
            <select
              id="job"
              value={form.jobId}
              onChange={(e) => setForm({ ...form, jobId: e.target.value })}
            >
              <option value="">Select a job…</option>
              {jobs.map((job) => (
                <option key={job.id} value={job.id}>
                  {job.title} ({job.category})
                </option>
              ))}
            </select>
            {errors.jobId && (
              <span className="field-error">{errors.jobId}</span>
            )}
          </div>

          <div className="field">
            <label htmlFor="resume">Resume</label>
            <input
              id="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) =>
                setForm({
                  ...form,
                  resumeName: e.target.files?.[0]?.name || "",
                })
              }
            />
            {form.resumeName && (
              <span className={styles.fileOk}>Selected: {form.resumeName}</span>
            )}
            {errors.resume && (
              <span className="field-error">{errors.resume}</span>
            )}
          </div>

          <div className="field">
            <label htmlFor="message">Message (optional)</label>
            <textarea
              id="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Share notice period, preferred location, or anything else…"
            />
          </div>

          <button type="submit" className={`btn btn-gold ${styles.submit}`}>
            Submit application
          </button>
        </form>
      </div>
    </section>
  );
}
