import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "header" | "article" | "li";
};

const components = {
  div: motion.div,
  header: motion.header,
  article: motion.article,
  li: motion.li,
} as const;

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const Comp = components[as];

  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: reduce ? 0 : delay, ease }}
    >
      {children}
    </Comp>
  );
}
