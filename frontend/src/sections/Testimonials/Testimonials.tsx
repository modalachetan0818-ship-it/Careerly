import { useMemo, useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  InteractiveBook,
  BookPageImage,
  BookPersonPage,
  BookIntroPage,
  type BookPage,
} from "../../components/InteractiveBook/InteractiveBook";
import styles from "./Testimonials.module.css";

export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
};

type Props = {
  items: TestimonialItem[];
};

const ease = [0.22, 1, 0.36, 1] as const;

const STORY_IMAGES = [
  "/brand/sections/story-person-1.jpg",
  "/brand/sections/story-person-2.jpg",
  "/brand/sections/story-person-3.jpg",
] as const;

function useBookSize() {
  const [size, setSize] = useState({ width: 320, height: 460 });

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 480) setSize({ width: 220, height: 320 });
      else if (w < 720) setSize({ width: 260, height: 380 });
      else if (w < 980) setSize({ width: 300, height: 430 });
      else setSize({ width: 340, height: 480 });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return size;
}

export function Testimonials({ items }: Props) {
  const reduce = useReducedMotion();
  const bookSize = useBookSize();

  const pages = useMemo((): BookPage[] => {
    if (items.length === 0) return [];

    /*
      Face mapping (open spread):
      - Front face of a leaf → right page (people info)
      - Back face of a flipped leaf → left page (image)

      Offset pairing so each flip shows image | matching person:
      leaf 0 front = intro; leaf 0 back = story[0] image
      leaf 1 front = story[0] person; leaf 1 back = story[1] image
      …
    */
    const result: BookPage[] = [
      {
        pageNumber: 1,
        content: (
          <BookIntroPage text="Real people who found clarity and momentum with Careerly." />
        ),
        backContent: (
          <BookPageImage
            src={STORY_IMAGES[0]}
            alt={`${items[0].name} career story`}
          />
        ),
      },
    ];

    items.forEach((item, i) => {
      const nextImage = STORY_IMAGES[(i + 1) % STORY_IMAGES.length];
      const isLast = i === items.length - 1;

      result.push({
        pageNumber: i + 2,
        content: (
          <BookPersonPage
            quote={item.quote}
            name={item.name}
            role={item.role}
          />
        ),
        backContent: isLast ? undefined : (
          <BookPageImage
            src={nextImage}
            alt={`${items[i + 1]?.name ?? "Career"} story`}
          />
        ),
      });
    });

    return result;
  }, [items]);

  return (
    <section
      className={`section ${styles.testimonialsSection}`}
      aria-labelledby="stories-heading"
    >
      <div className={styles.bgLayer} aria-hidden>
        <img
          src="/brand/sections/stories-bg.jpg"
          alt=""
          className={styles.bgImage}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className={styles.overlay} aria-hidden />
      <div className={styles.edgeTop} aria-hidden />
      <div className={styles.edgeBottom} aria-hidden />

      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.head}
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6, ease }}
        >
          <p className={styles.eyebrow}>Stories</p>
          <h2 id="stories-heading" className="section-title">
            Stories from our community
          </h2>
          <div className="gold-rule" />
          <p className="section-lead">
            Open the book — images on the left, voices on the right.
          </p>
        </motion.div>

        <motion.div
          className={styles.bookStage}
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease, delay: 0.08 }}
        >
          <InteractiveBook
            coverImage="/brand/sections/stories-bg.jpg"
            bookTitle="Stories from our community"
            bookAuthor="Careerly"
            pages={pages}
            width={bookSize.width}
            height={bookSize.height}
          />
        </motion.div>
      </div>
    </section>
  );
}
