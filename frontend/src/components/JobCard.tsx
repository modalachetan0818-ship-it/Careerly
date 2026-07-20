import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Job } from "../data/jobs";
import { formatPostedDate } from "../data/jobs";
import styles from "./JobCard.module.css";

interface Props {
  job: Job;
  index?: number;
}

export function JobCard({ job, index = 0 }: Props) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -6 }}
    >
      <div className={styles.top}>
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
      </div>

      <h3 className={styles.title}>
        <Link to={`/jobs/${job.id}`}>{job.title}</Link>
      </h3>
      <p className={styles.company}>{job.company}</p>

      <ul className={styles.meta}>
        <li>{job.location}</li>
        <li>{job.type}</li>
        <li>{job.salary}</li>
      </ul>

      <div className={styles.skills}>
        {job.skills.slice(0, 3).map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>

      <div className={styles.footer}>
        <span className={styles.posted}>
          Posted {formatPostedDate(job.posted)}
        </span>
        <Link to={`/jobs/${job.id}`} className={styles.link}>
          View role →
        </Link>
      </div>
    </motion.article>
  );
}
