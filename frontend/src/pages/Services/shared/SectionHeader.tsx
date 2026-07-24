import { motion, useReducedMotion } from "framer-motion";
import chrome from "./sectionChrome.module.css";
import { springSoft } from "../motion/springs";
import { headlineIn, leadIn, ruleDraw, pickEntrance } from "../motion/variants";

type Props = {
  eyebrow?: string;
  title: string;
  lead?: string;
  wide?: boolean;
  ink?: boolean;
  id?: string;
};

export function SectionHeader({ eyebrow, title, lead, wide, ink, id }: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.header
      className={`${chrome.head} ${wide ? chrome.headWide : ""}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={pickEntrance(reduce, {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
      })}
    >
      {eyebrow ? (
        <motion.p className={chrome.eyebrow} variants={pickEntrance(reduce, leadIn)}>
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h2
        id={id}
        className="section-title"
        style={ink ? { color: "var(--cream)" } : undefined}
        variants={pickEntrance(reduce, headlineIn)}
        transition={springSoft}
      >
        {title}
      </motion.h2>
      <motion.div className={chrome.rule} variants={pickEntrance(reduce, ruleDraw)} />
      {lead ? (
        <motion.p className={chrome.lead} variants={pickEntrance(reduce, leadIn)}>
          {lead}
        </motion.p>
      ) : null}
    </motion.header>
  );
}
