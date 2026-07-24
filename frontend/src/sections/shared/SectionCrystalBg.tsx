import styles from "./SectionCrystalBg.module.css";

type Props = {
  /** Lower opacity plate for sections that already have strong media (hero FX). */
  subtle?: boolean;
};

/** Cream / soft-gold crystalline faceted background plate + light readability scrim. */
export function SectionCrystalBg({ subtle = false }: Props) {
  return (
    <>
      <div
        className={subtle ? styles.bgPlateSubtle : styles.bgPlate}
        aria-hidden
      />
      <div
        className={subtle ? styles.scrimSubtle : styles.scrim}
        aria-hidden
      />
    </>
  );
}
