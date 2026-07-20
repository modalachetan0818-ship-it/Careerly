import { Link, useParams } from "react-router-dom";
import { getJobById, formatPostedDate } from "../../data/jobs";
import styles from "./JobDetail.module.css";

export function JobDetail() {
  const { id } = useParams();
  const job = id ? getJobById(id) : undefined;

  if (!job) {
    return (
      <section className={`section ${styles.page}`}>
        <div className={`container ${styles.missing}`}>
          <h1>Role not found</h1>
          <p>This opening may have closed or the link is incorrect.</p>
          <Link to="/jobs" className="btn btn-primary">
            Back to jobs
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className={`section ${styles.page}`}>
      <div className="container">
        <Link to="/jobs" className={styles.back}>
          ← All jobs
        </Link>

        <div className={styles.layout}>
          <article className={styles.main}>
            <div className={styles.badges}>
              <span
                className={`badge ${job.category === "IT" ? "badge-it" : "badge-nonit"}`}
              >
                {job.category}
              </span>
              <span
                className={`badge ${job.experience === "Fresher" ? "badge-fresh" : "badge-exp"}`}
              >
                {job.experience}
              </span>
              <span className="badge badge-nonit">{job.type}</span>
            </div>

            <h1 className={styles.title}>{job.title}</h1>
            <p className={styles.company}>
              {job.company} · {job.location}
            </p>
            <p className={styles.meta}>
              {job.salary} · Posted {formatPostedDate(job.posted)}
            </p>

            <div className="gold-rule" />

            <h2>About the role</h2>
            <p className={styles.body}>{job.description}</p>

            <h2>Responsibilities</h2>
            <ul className={styles.list}>
              {job.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>Eligibility</h2>
            <ul className={styles.list}>
              {job.eligibility.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>Skills</h2>
            <div className={styles.skills}>
              {job.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>

          <aside className={styles.side}>
            <div className={styles.panel}>
              <h3>Ready to apply?</h3>
              <p>
                Submit your details and resume. Careerly will review and
                connect you with the hiring team.
              </p>
              <Link
                to={`/apply?job=${encodeURIComponent(job.id)}`}
                className="btn btn-gold"
              >
                Apply for this role
              </Link>
              <Link to="/contact" className={`btn btn-ghost ${styles.sideGhost}`}>
                Ask a question
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
