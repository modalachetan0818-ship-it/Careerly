import { useState } from "react";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaDiscord,
} from "react-icons/fa";
import styles from "./SocialFlipButton.module.css";

export interface SocialItem {
  letter: string;
  icon: ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
}

interface SocialFlipButtonProps {
  items?: SocialItem[];
  className?: string;
}

const defaultItems: SocialItem[] = [
  { letter: "C", icon: <FaGithub />, label: "Github", href: "#" },
  { letter: "O", icon: <FaTwitter />, label: "Twitter", href: "#" },
  { letter: "N", icon: <FaLinkedin />, label: "LinkedIn", href: "#" },
  { letter: "T", icon: <FaInstagram />, label: "Instagram", href: "#" },
  { letter: "A", icon: <FaFacebook />, label: "Facebook", href: "#" },
  { letter: "C", icon: <FaEnvelope />, label: "Email", href: "#" },
  { letter: "T", icon: <FaDiscord />, label: "Discord", href: "#" },
];

function SocialFlipNode({
  item,
  index,
  isHovered,
  tooltipIndex,
  setTooltipIndex,
}: {
  item: SocialItem;
  index: number;
  isHovered: boolean;
  tooltipIndex: number | null;
  setTooltipIndex: (val: number | null) => void;
}) {
  const commonProps = {
    className: styles.node,
    onMouseEnter: () => setTooltipIndex(index),
    onMouseLeave: () => setTooltipIndex(null),
  };

  const inner = (
    <>
      <AnimatePresence>
        {isHovered && tooltipIndex === index && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8, x: "-50%" }}
            animate={{ opacity: 1, y: -50, scale: 1, x: "-50%" }}
            exit={{ opacity: 0, y: 10, scale: 0.8, x: "-50%" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={styles.tooltip}
          >
            {item.label}
            <span className={styles.tooltipArrow} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className={styles.flipper}
        initial={false}
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 120,
          damping: 15,
          delay: index * 0.08,
        }}
      >
        <div className={`${styles.face} ${styles.front}`}>{item.letter}</div>
        <div className={`${styles.face} ${styles.back}`}>{item.icon}</div>
      </motion.div>
    </>
  );

  if (item.href) {
    return (
      <a {...commonProps} href={item.href} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <div {...commonProps} onClick={item.onClick} role="button" tabIndex={0}>
      {inner}
    </div>
  );
}

export default function SocialFlipButton({
  items = defaultItems,
  className,
}: SocialFlipButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipIndex, setTooltipIndex] = useState<number | null>(null);

  return (
    <div className={`${styles.wrap} ${className ?? ""}`}>
      <div
        className={styles.pill}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setTooltipIndex(null);
        }}
      >
        {items.map((item, index) => (
          <SocialFlipNode
            key={index}
            item={item}
            index={index}
            isHovered={isHovered}
            tooltipIndex={tooltipIndex}
            setTooltipIndex={setTooltipIndex}
          />
        ))}
      </div>
    </div>
  );
}
