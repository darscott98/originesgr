// Plain data module (no "use client") so both the server page and the client
// explorer can import the real values — a client module would only hand the
// server a reference, not the data.
//
// Source of truth: "Website materials" document — Innogest Capital II / IPGEST
// portfolio held under Origine VC Funds. Company names are proper nouns and live
// here; each `key` maps to the translated description + stake under the
// `portfolio.companies` message namespace.

export const medtech = [
  { key: "betaglue", name: "BetaGlue Technologies" },
  { key: "cvlab", name: "CVLab" },
  { key: "empatica", name: "Empatica" },
  { key: "greenbone", name: "GreenBone Ortho" },
  { key: "picardia", name: "Pi-Cardia" },
  { key: "anaconda", name: "Anaconda Biomed" },
  { key: "newronika", name: "Newronika" },
  { key: "angiodroid", name: "Angiodroid" },
];

export const digital = [
  { key: "thron", name: "THRON" },
  { key: "sardexpay", name: "SardexPay" },
  { key: "mioassicuratore", name: "MioAssicuratore" },
  { key: "soulkitchen", name: "Soulkitchen" },
];

export const tabs = [
  { id: "medtech", items: medtech },
  { id: "digital", items: digital },
];

// Origine Growth PE — Private Equity book. Company names + logo files are proper
// nouns and live here; each `key` maps to the translated description + status
// under the `portfolio.companies` message namespace. Logo files belong in
// /public/images/ (see `logos[].src`); a text fallback shows until they exist.
export const privateEquity = [
  {
    key: "martini",
    name: "F.lli Martini S.p.A. | BF International",
    logos: [
      { src: "/images/bf-international-logo.png", alt: "BF International" },
      { src: "/images/gruppo-martini-logo.png", alt: "Gruppo Martini" },
    ],
  },
];

export const portfolioTotals = {
  total: medtech.length + digital.length + privateEquity.length,
  pe: privateEquity.length,
  vc: medtech.length + digital.length,
  areas: tabs.length,
};
