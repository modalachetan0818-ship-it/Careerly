import {
  useState,
  useEffect,
  useCallback,
  type ReactNode,
  type MouseEvent,
  type CSSProperties,
} from "react";
import { motion, useReducedMotion } from "framer-motion";
import { IoChevronBack, IoChevronForward, IoRefresh } from "react-icons/io5";
import styles from "./InteractiveBook.module.css";

export type BookPage = {
  title?: string;
  content: ReactNode;
  backContent?: ReactNode;
  pageNumber: number;
};

export type InteractiveBookProps = {
  coverImage: string;
  bookTitle?: string;
  bookAuthor?: string;
  pages: BookPage[];
  className?: string;
  width?: number;
  height?: number;
};

const BOOK_OPEN_DURATION = 1.5;
const EASING: [number, number, number, number] = [0.25, 0, 0, 1];
const FLIP_EASING: [number, number, number, number] = [0.645, 0.045, 0.355, 1];

export function InteractiveBook({
  coverImage,
  bookTitle = "Book Title",
  bookAuthor = "Author Name",
  pages,
  className,
  width = 320,
  height = 460,
}: InteractiveBookProps) {
  const reduce = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [currentPageIndex, setCurrentPageIndex] = useState(-1);
  const [isHovering, setIsHovering] = useState(false);

  const openDuration = reduce ? 0.35 : BOOK_OPEN_DURATION;

  const handleOpenBook = useCallback(() => setIsOpen(true), []);

  const restartBook = useCallback((e?: MouseEvent) => {
    e?.stopPropagation();
    setCurrentPageIndex(-1);
  }, []);

  const closeToCover = useCallback((e?: MouseEvent) => {
    e?.stopPropagation();
    setIsOpen(false);
    setCurrentPageIndex(-1);
    setIsHovering(false);
  }, []);

  const nextPage = useCallback(
    (e?: MouseEvent) => {
      e?.stopPropagation();
      if (currentPageIndex >= pages.length - 1) {
        // Past last page / The End → restart at cover closed
        closeToCover();
        return;
      }
      setCurrentPageIndex((prev) => prev + 1);
    },
    [pages.length, currentPageIndex, closeToCover],
  );

  const prevPage = useCallback((e?: MouseEvent) => {
    e?.stopPropagation();
    setCurrentPageIndex((prev) => (prev >= 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextPage();
      if (e.key === "ArrowLeft") prevPage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, nextPage, prevPage]);

  const stageStyle: CSSProperties = {
    width: Math.min(width * 3.2, 1100),
    height: height + 88,
  };

  const bookSize: CSSProperties = { width, height };
  const atEnd = isOpen && currentPageIndex >= pages.length - 1;
  const canGoBack = isOpen && currentPageIndex >= 0;

  return (
    <div
      className={`${styles.stage}${className ? ` ${className}` : ""}`}
      style={stageStyle}
      role="region"
      aria-label={`${bookTitle} interactive book`}
    >
      {isOpen ? (
        <button
          type="button"
          className={`${styles.navArrow} ${styles.navArrowPrev}`}
          onClick={prevPage}
          disabled={!canGoBack}
          aria-label="Previous page"
        >
          <IoChevronBack size={22} aria-hidden />
        </button>
      ) : null}

      <motion.div
        className={styles.book}
        style={bookSize}
        initial={false}
        animate={{ x: isOpen ? width / 2 : 0 }}
        transition={{ duration: openDuration, ease: EASING }}
      >
        {/* Front cover */}
        <motion.div
          className={styles.cover}
          initial={false}
          animate={{
            rotateY: isOpen ? -180 : isHovering && !reduce ? -15 : 0,
            zIndex: isOpen ? 0 : 100,
          }}
          transition={{
            rotateY: { duration: openDuration, ease: EASING },
            zIndex: {
              delay: isOpen ? openDuration * 0.6 : openDuration * 0.4,
            },
          }}
          style={{ transformStyle: "preserve-3d" }}
          onClick={!isOpen ? handleOpenBook : undefined}
          onHoverStart={() => !isOpen && setIsHovering(true)}
          onHoverEnd={() => setIsHovering(false)}
          role={!isOpen ? "button" : undefined}
          tabIndex={!isOpen ? 0 : -1}
          onKeyDown={(e) => {
            if (!isOpen && (e.key === "Enter" || e.key === " ")) {
              e.preventDefault();
              handleOpenBook();
            }
          }}
          aria-label={!isOpen ? `Open ${bookTitle}` : undefined}
        >
          <div
            className={`${styles.face} ${styles.coverFront}${isHovering && !isOpen ? ` ${styles.coverZoom}` : ""}`}
            style={{ transform: "translateZ(0.5px)" }}
          >
            <div
              className={styles.coverImage}
              style={{ backgroundImage: `url(${coverImage})` }}
            />
            <div className={styles.coverScrim} />
            {!isOpen ? (
              <motion.span
                className={styles.openOverlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: reduce ? 0 : 0.6,
                  duration: reduce ? 0.2 : 0.7,
                }}
                aria-hidden
              >
                Click to Open
              </motion.span>
            ) : null}
            <div className={styles.coverMeta}>
              <h3 className={styles.coverTitle}>{bookTitle}</h3>
              <p className={styles.coverAuthor}>{bookAuthor}</p>
            </div>
            <div className={styles.spineHighlight} aria-hidden />
            <div className={styles.spineLine} aria-hidden />
          </div>

          <div
            className={`${styles.face} ${styles.pageFace} ${styles.coverInner}`}
            style={{ transform: "rotateY(180deg) translateZ(0.5px)" }}
            onClick={(e) => {
              e.stopPropagation();
              prevPage();
            }}
          >
            <div className={styles.innerCoverBody}>
              <h4 className={styles.innerTitle}>{bookTitle}</h4>
              <div className={styles.innerRule} aria-hidden />
              <p className={styles.innerLabel}>Interactive Edition</p>
            </div>
          </div>
        </motion.div>

        {/* Pages */}
        <div className={styles.pagesStack}>
          {pages.map((page, index) => {
            const isFlipped = index <= currentPageIndex;
            const isLastLeaf = index === pages.length - 1;
            return (
              <motion.div
                key={page.pageNumber}
                className={styles.leaf}
                style={{ transformStyle: "preserve-3d" }}
                initial={false}
                animate={{
                  rotateY: isFlipped ? -180 : 0,
                  zIndex: isFlipped ? index + 1 : pages.length - index,
                }}
                transition={{
                  duration: reduce ? 0.25 : 0.6,
                  ease: FLIP_EASING,
                }}
              >
                {/* Front = right page */}
                <div
                  className={`${styles.face} ${styles.pageFace} ${styles.leafFront}`}
                  style={{ transform: "translateZ(0.5px)" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    nextPage();
                  }}
                >
                  <div className={`${styles.pageNum} ${styles.pageNumRight}`}>
                    {page.pageNumber * 2 - 1}
                  </div>
                  <div className={styles.pageBody}>
                    {page.title ? (
                      <h4 className={styles.pageTitle}>{page.title}</h4>
                    ) : null}
                    {page.content}
                  </div>
                  <div className={styles.gutterLeft} aria-hidden />
                </div>

                {/* Back = left page */}
                <div
                  className={`${styles.face} ${styles.pageFace} ${styles.leafBack}${page.backContent ? ` ${styles.leafBackImage}` : ""}`}
                  style={{ transform: "rotateY(180deg) translateZ(0.5px)" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    // Last left blank (or end spread) → restart to cover
                    if (isLastLeaf && !page.backContent) {
                      closeToCover(e);
                      return;
                    }
                    prevPage();
                  }}
                >
                  <div className={styles.gutterRight} aria-hidden />
                  {!page.backContent ? (
                    <div className={`${styles.pageNum} ${styles.pageNumLeft}`}>
                      {page.pageNumber * 2}
                    </div>
                  ) : null}
                  <div
                    className={`${styles.pageBody}${page.backContent ? ` ${styles.pageBodyBleed}` : ""}`}
                  >
                    {page.backContent ? (
                      page.backContent
                    ) : (
                      <div className={styles.blankMark} aria-hidden>
                        <span>{page.pageNumber * 2}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}

          <div
            className={styles.backCover}
            style={{ transform: "translateZ(-1px)" }}
            onClick={closeToCover}
            role="button"
            tabIndex={atEnd ? 0 : -1}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                closeToCover();
              }
            }}
            aria-label="The End — return to cover"
          >
            <div className={styles.backCoverInner}>
              <p className={styles.theEnd}>The End</p>
              <button
                type="button"
                className={styles.readAgain}
                onClick={restartBook}
              >
                <IoRefresh size={14} aria-hidden />
                Read Again
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {isOpen ? (
        <button
          type="button"
          className={`${styles.navArrow} ${styles.navArrowNext}`}
          onClick={nextPage}
          aria-label="Next page"
        >
          <IoChevronForward size={22} aria-hidden />
        </button>
      ) : null}
    </div>
  );
}

/** Helper: full-bleed left-page people image for a story spread */
export function BookPageImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className={styles.pageImageWrap}>
      <img src={src} alt={alt} className={styles.pageImage} loading="lazy" />
    </div>
  );
}

/** Helper: right-page person story block */
export function BookPersonPage({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <div className={styles.personPage}>
      <p className={styles.personQuote}>“{quote}”</p>
      <footer className={styles.personMeta}>
        <strong className={styles.personName}>{name}</strong>
        <span className={styles.personRole}>{role}</span>
      </footer>
    </div>
  );
}

export function BookIntroPage({ text }: { text: string }) {
  return (
    <div className={styles.introPage}>
      <div className={styles.innerRule} aria-hidden />
      <p className={styles.introText}>{text}</p>
      <div className={styles.innerRule} aria-hidden />
    </div>
  );
}
