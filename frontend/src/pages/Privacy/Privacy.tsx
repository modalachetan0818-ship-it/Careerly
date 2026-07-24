import { LegalDocument } from "../shared/LegalDocument";
import {
  PRIVACY_HERO,
  PRIVACY_INTRO,
  PRIVACY_META,
  PRIVACY_SECTIONS,
} from "./data";

export function Privacy() {
  return (
    <LegalDocument
      hero={PRIVACY_HERO}
      intro={PRIVACY_INTRO}
      sections={PRIVACY_SECTIONS}
      lastUpdated={PRIVACY_META.lastUpdated}
      version={PRIVACY_META.version}
    />
  );
}
