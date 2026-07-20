import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { JobCard } from "../../components/JobCard";
import {
  jobs,
  type ExperienceLevel,
  type JobCategory,
} from "../../data/jobs";
import styles from "./Jobs.module.css";

export function Jobs() {
  const reduce = useReducedMotion();
  const [params, setParams] = useSearchParams();
  const initialCategory = (params.get("category") as JobCategory | "All") || "All";
  const [category, setCategory] = useState<JobCategory | "All">(
    initialCategory === "IT" || initialCategory === "Non-IT"
      ? initialCategory
      : "All",
  );
  const [experience, setExperience] = useState<ExperienceLevel | "All">("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return jobs.filter((job) => {
      if (category !== "All" && job.category !== category) return false;
      if (experience !== "All" && job.experience !== experience) return false;
      if (!q) return true;
      const haystack = [job.title, job.company, ...job.skills]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [category, experience, query]);

  const updateCategory = (value: JobCategory | "All") => {
    setCategory(value);
    const next = new URLSearchParams(params);
    if (value === "All") next.delete("category");
    else next.set("category", value);
    setParams(next, { replace: true });
  };

  return (
    <section className={`section ${styles.page}`}>
      <div className="container">
        <motion.header
          className={styles.header}
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h1 className="section-title">Find your next role</h1>
            <div className="gold-rule" />
            <p className="section-lead">
              Browse IT and Non-IT openings for students, freshers, and
              experienced professionals.
            </p>
          </div>
        </motion.header>

        <motion.div
          className={styles.filters}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <input
            className={styles.search}
            type="search"
            placeholder="Search by title, skill, or company…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search jobs"
          />

          <div className={styles.chips} role="group" aria-label="Category">
            {(["All", "IT", "Non-IT"] as const).map((item) => (
              <button
                key={item}
                type="button"
                className={`${styles.chip} ${category === item ? styles.chipActive : ""}`}
                onClick={() => updateCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className={styles.chips} role="group" aria-label="Experience">
            {(["All", "Fresher", "Experienced"] as const).map((item) => (
              <button
                key={item}
                type="button"
                className={`${styles.chip} ${experience === item ? styles.chipActive : ""}`}
                onClick={() => setExperience(item)}
              >
                {item === "All" ? "All levels" : item}
              </button>
            ))}
          </div>
        </motion.div>

        <p className={styles.count}>
          Showing <strong>{filtered.length}</strong> role
          {filtered.length === 1 ? "" : "s"}
        </p>

        {filtered.length === 0 ? (
          <div className={styles.empty}>
            <h2>No matches</h2>
            <p>Try another keyword or clear the filters.</p>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => {
                setQuery("");
                updateCategory("All");
                setExperience("All");
              }}
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className={styles.grid}>
            {filtered.map((job, i) => (
              <JobCard key={job.id} job={job} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
