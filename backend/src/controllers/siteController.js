import { homeContent, companyInfo } from "../data/siteContent.js";

export function getHomeContent(_req, res) {
  res.json({ ok: true, data: homeContent });
}

export function getCompanyInfo(_req, res) {
  res.json({ ok: true, data: companyInfo });
}
