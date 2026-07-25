import { GOOGLE_FORM_URL } from "../../../constants/links";
import type { LegalHero, LegalSection } from "../../shared/LegalDocument";

export const TERMS_HERO: LegalHero = {
  titleId: "terms-hero-title",
  eyebrow: "Legal",
  title: "Careerly Terms & Conditions",
  lead: "The ground rules for using Careerly’s website and career-support services — written for candidates, visitors, and partners in Bengaluru and beyond.",
  primaryCta: { label: "Browse sections", href: "#quick-nav" },
  secondaryCta: { label: "Contact us", href: GOOGLE_FORM_URL },
};

export const TERMS_INTRO =
  "These Terms & Conditions govern your access to Careerly’s website and related career guidance and placement support. By using careerly.info or engaging our services, you agree to these terms. This page is standard website policy language and is not a substitute for personalised legal advice.";

export const TERMS_SECTIONS: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction & Acceptance",
    body: "These Terms apply to Careerly’s website and the career-support interactions we offer. If you do not accept these Terms, do not use the site or submit applications through our channels. Continued use after we publish updates means you accept the revised Terms.",
  },
  {
    id: "platform-terms",
    title: "Platform Terms",
    body: "You may use Careerly’s website for lawful, personal, or professional career purposes — browsing information, contacting us, and exploring opportunities. You agree not to misuse the site, attempt unauthorised access, disrupt services, or use automated scraping in a way that harms Careerly or other users.",
  },
  {
    id: "license-ip",
    title: "License & Intellectual Property",
    body: "All site content — including text, branding, logos, layout, and graphics — belongs to Careerly or its licensors. We grant you a limited, non-exclusive, non-transferable licence to view and use the site for personal career exploration. You may not copy, redistribute, or commercially exploit our content without prior written permission.",
  },
  {
    id: "user-content",
    title: "User Content",
    body: "When you send messages, resumes, or other materials, you confirm that the information is accurate to the best of your knowledge and that you have the right to share it. You grant Careerly permission to use that material solely to respond, evaluate candidacy, and provide related career support.",
  },
  {
    id: "hyperlinking",
    title: "Hyperlinking",
    body: "You may link to Careerly’s public pages in a fair and legal manner that does not damage our reputation or suggest endorsement without approval. We may request removal of links that are misleading, harmful, or inconsistent with these Terms.",
  },
  {
    id: "content-liability",
    title: "Content Liability",
    body: "We strive to keep information accurate, but website content may change and is provided for general guidance. Careerly is not liable for actions you take solely based on site content, nor for third-party sites linked from our pages.",
  },
  {
    id: "reservation-of-rights",
    title: "Reservation of Rights",
    body: "Careerly reserves all rights not expressly granted in these Terms, including the right to modify, suspend, or discontinue any part of the website or services, and to refuse or limit access where misuse is suspected.",
  },
  {
    id: "removal-of-links",
    title: "Removal of Links",
    body: "If you find a link on our site that is outdated or inappropriate, please notify us. We may remove or update links at our discretion and are not obligated to continuously monitor every external destination.",
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    body: "The website and related materials are provided on an “as is” and “as available” basis. Careerly does not guarantee uninterrupted access, error-free content, or that use of the site will result in employment, interviews, or specific career outcomes.",
  },
  {
    id: "services-recruitment",
    title: "Services & Recruitment Context",
    body: "Careerly offers career guidance and placement support for IT and Non-IT opportunities. We may introduce candidates to employers or share openings where suitable, but we do not control employer hiring decisions, compensation, or workplace conditions. Any engagement for paid advisory or placement support will be described separately when applicable.",
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use",
    body: "You agree not to submit false credentials, impersonate others, harass staff or partners, upload malware, spam our channels, or use Careerly’s platform for unlawful, discriminatory, or fraudulent purposes. Violations may result in restricted access and, where appropriate, reporting to authorities.",
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    body: "To the fullest extent permitted by law, Careerly and its team are not liable for indirect, incidental, or consequential losses arising from use of the website or career-support interactions — including lost opportunities, data loss, or reliance on third-party employers — except where liability cannot be excluded under applicable law.",
  },
  {
    id: "governing-law",
    title: "Governing Law",
    body: "These Terms are governed by the laws of India. Subject to mandatory consumer protections, courts in Bengaluru, Karnataka shall have exclusive jurisdiction over disputes arising from these Terms or use of Careerly’s website and services.",
  },
  {
    id: "policy-updates",
    title: "Policy Updates",
    body: "We may revise these Terms periodically. Material changes will be reflected on this page with an updated “Last Updated” date and version. It is your responsibility to review the Terms when you return to the site.",
  },
  {
    id: "contact-us",
    title: "Contact Us",
    body: [
      "Questions about these Terms? Reach Careerly at:",
      "No. 13, Saienclave Kothanur, Near GR Lavender Skalvi School Road, J P Nagar 8th Phase, Bangalore South — 560078",
      "Phone: +91 96864 48306 · Web: careerly.info · Or visit our Contact page.",
    ],
  },
];

export const TERMS_META = {
  lastUpdated: "January 2026",
  version: "v1.0",
} as const;
