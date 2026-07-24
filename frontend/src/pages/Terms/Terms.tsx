import { LegalDocument } from "../shared/LegalDocument";
import {
  TERMS_HERO,
  TERMS_INTRO,
  TERMS_META,
  TERMS_SECTIONS,
} from "./data";

export function Terms() {
  return (
    <LegalDocument
      hero={TERMS_HERO}
      intro={TERMS_INTRO}
      sections={TERMS_SECTIONS}
      lastUpdated={TERMS_META.lastUpdated}
      version={TERMS_META.version}
    />
  );
}
