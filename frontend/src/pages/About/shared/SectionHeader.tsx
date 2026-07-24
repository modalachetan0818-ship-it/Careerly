import chrome from "./sectionChrome.module.css";

type SectionHeaderProps = {
  id: string;
  title: string;
  lead?: string;
  eyebrow?: string;
  align?: "start" | "center";
};

export function SectionHeader({
  id,
  title,
  lead,
  eyebrow,
  align = "start",
}: SectionHeaderProps) {
  return (
    <header
      className={`${chrome.head} ${align === "center" ? chrome.headCenter : ""}`}
    >
      {eyebrow ? <p className={chrome.eyebrow}>{eyebrow}</p> : null}
      <h2 id={id} className="section-title">
        {title}
      </h2>
      <div className={chrome.rule} aria-hidden />
      {lead ? <p className={chrome.lead}>{lead}</p> : null}
    </header>
  );
}
