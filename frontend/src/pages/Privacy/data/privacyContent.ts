import { GOOGLE_FORM_URL } from "../../../constants/links";
import type { LegalHero, LegalSection } from "../../shared/LegalDocument";

export const PRIVACY_HERO: LegalHero = {
  titleId: "privacy-hero-title",
  eyebrow: "Legal",
  title: "Careerly Privacy Policy",
  lead: "How Careerly — your Bengaluru career partner — collects, uses, and protects information when you visit our site or seek IT & Non-IT career guidance.",
  primaryCta: { label: "Browse sections", href: "#quick-nav" },
  secondaryCta: { label: "Contact us", href: GOOGLE_FORM_URL },
};

export const PRIVACY_INTRO =
  "This Privacy Policy explains how Careerly handles personal information shared through careerly.info, our contact channels, and recruitment-related interactions. It is written as clear website policy language for candidates, visitors, and partners — not as formal legal advice.";

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    body: "Careerly (“we”, “us”, or “our”) operates career guidance and placement support for students and professionals across IT and Non-IT roles. By using our website or sharing information with us, you acknowledge this policy. If you do not agree, please discontinue use of our site and avoid submitting personal data.",
  },
  {
    id: "information-collected",
    title: "Information Collected",
    body: "We may collect details you provide — such as name, email, phone number, education, work history, resume content, and inquiry messages — when you contact us, apply for opportunities, or request guidance. We may also collect limited technical data such as browser type, device information, and approximate usage patterns through cookies or similar tools.",
  },
  {
    id: "how-we-use",
    title: "How We Use Information",
    body: "We use personal information to respond to inquiries, assess candidacy for suitable roles, coordinate interviews or employer introductions where appropriate, improve our website experience, and communicate career-related updates you have requested. We do not sell personal information.",
  },
  {
    id: "legal-basis",
    title: "Legal Basis",
    body: "Where applicable under Indian data-protection expectations, we process information based on your consent, our legitimate interest in operating a career-services platform, performance of requested support, or compliance with legal obligations. You may withdraw consent for optional processing as described below.",
  },
  {
    id: "cookies",
    title: "Cookies",
    body: "Our site may use cookies and similar technologies to remember preferences, understand traffic patterns, and keep the site reliable. Essential cookies support basic functionality; analytics or preference cookies, if used, help us improve content and navigation.",
  },
  {
    id: "data-sharing",
    title: "Data Sharing",
    body: "We may share candidate or contact information with employers, hiring partners, or service providers only as needed to deliver the career support you requested, or when required by law. Recipients are expected to handle information responsibly for the stated purpose.",
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    body: "Our website may link to external sites, job boards, or employer pages. Careerly is not responsible for the privacy practices of those third parties. We encourage you to review their policies before sharing personal information outside Careerly.",
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    body: "Careerly’s services are intended for adults and career-seeking students who can lawfully engage with employment opportunities. We do not knowingly collect personal information from children under 18 without appropriate consent. If you believe a minor’s data was submitted, contact us so we can review and remove it where required.",
  },
  {
    id: "data-retention",
    title: "Data Retention",
    body: "We retain personal information only as long as reasonably needed for career support, operational records, dispute handling, or legal compliance. Retention periods vary by purpose — for example, general inquiries may be kept for a shorter time than active recruitment files.",
  },
  {
    id: "your-rights",
    title: "Your Rights",
    body: "Subject to applicable law, you may request access to, correction of, or deletion of personal information we hold about you, or ask us to limit certain processing. To exercise these rights, contact Careerly using the details in the Contact Us section. We may need to verify your identity before acting on a request.",
  },
  {
    id: "storage-transfer",
    title: "Data Storage & Transfer",
    body: "Information is stored using systems and tools we use to run Careerly’s operations, which may include cloud or hosted services. Where data is processed outside your immediate location, we take reasonable steps to keep it protected and limited to authorised use.",
  },
  {
    id: "automated-decisions",
    title: "Automated Decision-Making",
    body: "Careerly does not rely solely on automated decision-making to determine employment outcomes. Screening or matching may use organised workflows and human review. Final hiring decisions remain with employers or Careerly advisors as applicable.",
  },
  {
    id: "withdrawal",
    title: "Withdrawal of Consent",
    body: "Where processing is based on consent, you may withdraw that consent at any time by contacting us. Withdrawal does not affect processing already completed lawfully, and may limit our ability to continue certain career-support services.",
  },
  {
    id: "breach-notification",
    title: "Data Breach Notification",
    body: "If we become aware of a security incident that affects personal information, we will take reasonable steps to contain the issue and notify affected individuals or authorities where required by applicable law, with information useful for protecting your interests.",
  },
  {
    id: "candidate-data",
    title: "Job Application & Candidate Data",
    body: "When you share a resume, profile, or application details, we may retain that information to evaluate fit for current or future opportunities you may be interested in, unless you ask us to remove it earlier (subject to legal retention needs). Candidate data is handled for recruitment and guidance purposes only.",
  },
  {
    id: "cookie-control",
    title: "Cookie Control",
    body: "Most browsers let you refuse or delete cookies through settings. Blocking some cookies may affect site features. If we introduce a cookie preference tool, you can use it to manage non-essential cookies where available.",
  },
  {
    id: "do-not-track",
    title: "Do Not Track",
    body: "Some browsers send “Do Not Track” signals. There is no uniform industry standard for responding to these signals. Careerly currently does not alter site behaviour solely based on DNT signals, but we limit tracking to what is reasonably needed to operate and improve the site.",
  },
  {
    id: "confidentiality-security",
    title: "Confidentiality & Security",
    body: "We apply reasonable administrative and technical safeguards to protect personal information against unauthorised access, loss, or misuse. No method of transmission or storage is completely secure; please use strong passwords and share sensitive documents only through trusted channels.",
  },
  {
    id: "social-media",
    title: "Social Media Use",
    body: "If you interact with Careerly on social platforms, content and data you share there are also subject to those platforms’ policies. Messages or comments sent via social media may be used to respond to your query and are not a substitute for secure formal applications where required.",
  },
  {
    id: "policy-updates",
    title: "Policy Updates",
    body: "We may update this Privacy Policy from time to time to reflect operational, legal, or technology changes. The “Last Updated” date and version badge on this page will change when updates are published. Continued use of the site after updates constitutes acceptance of the revised policy.",
  },
  {
    id: "contact-us",
    title: "Contact Us",
    body: [
      "For privacy questions or requests, contact Careerly:",
      "No. 13, Saienclave Kothanur, Near GR Lavender Skalvi School Road, J P Nagar 8th Phase, Bangalore South — 560078",
      "Phone: +91 96864 48306 · Web: careerly.info · Or use our Contact page.",
    ],
  },
];

export const PRIVACY_META = {
  lastUpdated: "January 2026",
  version: "v1.0",
} as const;
