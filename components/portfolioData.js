// Plain data module (no "use client") so both the server page and the client
// explorer can import the real values — a client module would only hand the
// server a reference, not the data.
//
// Source of truth: "Website materials" document — Innogest Capital II / IPGEST
// portfolio held under Origine VC Funds. Each entry uses the document's own
// company name, description, investment date and stake. No invented detail.

export const medtech = [
  {
    name: "BetaGlue Technologies",
    desc: "Società medtech che sviluppa un trattamento radioterapico loco-regionale per tumori solidi non resecabili. La sua tecnologia proprietaria consiste in un composto iniettato tramite un dispositivo medico dedicato che consente la radioterapia intratumorale mediante microsfere di Ittrio-90.",
    status: "Q3 2016 · Partecipazione 15,5%",
  },
  {
    name: "CVLab",
    desc: "Venture builder focalizzato sull'innovazione cardiovascolare, nato dalla collaborazione tra Innogest, imprenditori seriali e investitori specializzati nel settore cardiovascolare. Oggi CVLab include quattro progetti: Recross, Dyverto, Kapto e Fideliomed.",
    status: "Q4 2016 · Partecipazione 43,2%",
  },
  {
    name: "Empatica",
    desc: "Società spin-off del MIT che sviluppa dispositivi indossabili di qualità medicale e software basato sull'AI per il monitoraggio remoto dei pazienti, a supporto del rilevamento e della gestione di condizioni neurologiche come l'epilessia e altre malattie croniche.",
    status: "Q4 2016 · Partecipazione 14,3%",
  },
  {
    name: "GreenBone Ortho",
    desc: "Società biomedica italiana che sviluppa soluzioni innovative per la rigenerazione ossea, con materiali avanzati bio-ispirati per sostituti ossei derivati da strutture naturali, progettati per supportare e accelerare la guarigione di difetti ossei complessi.",
    status: "Q2 2017 · Partecipazione 10,8%",
  },
  {
    name: "Pi-Cardia",
    desc: "Società israeliana di dispositivi medici focalizzata su soluzioni catetere-based per il trattamento delle malattie valvolari cardiache strutturali. Le sue tecnologie ShortCut™ e Leaflex™ sono progettate per le procedure cardiache minimamente invasive, in particolare per i pazienti sottoposti a TAVR.",
    status: "Q3 2015 · Partecipazione 2,2%",
  },
  {
    name: "Anaconda Biomed",
    desc: "Società spagnola di dispositivi medici specializzata in soluzioni avanzate per il trattamento dell'ictus ischemico acuto. Fondata a Barcellona nel 2015, sviluppa tecnologie di trombectomia meccanica di nuova generazione; la sua innovazione di punta è l'ANA Funnel Catheter.",
    status: "Q3 2016 · Partecipazione 21,9%",
  },
  {
    name: "Newronika",
    desc: "Società medtech italiana con sede a Milano che sviluppa sistemi avanzati di neurostimolazione per disturbi neurologici, in particolare il morbo di Parkinson, con tecnologie di stimolazione cerebrale profonda adattiva (aDBS) attraverso la piattaforma AlphaDBS.",
    status: "Q4 2015 · Partecipazione 26,49%",
  },
  {
    name: "Angiodroid",
    desc: "Società italiana di dispositivi medici che sviluppa sistemi iniettori automatizzati di CO₂ per procedure di imaging vascolare, impiegando l'anidride carbonica come agente di contrasto alternativo allo iodio, in particolare per pazienti con insufficienza renale o allergie al mezzo di contrasto.",
    status: "Q2 2015 · Partecipazione 6,8%",
  },
];

export const digital = [
  {
    name: "THRON",
    desc: "Società tecnologica italiana specializzata in soluzioni di Digital Asset Management (DAM) e customer engagement. La sua piattaforma basata sull'AI consente alle aziende di centralizzare, organizzare e distribuire asset digitali in modo efficiente su più canali.",
    status: "Q2 2014 · Partecipazione 11,9%",
  },
  {
    name: "SardexPay",
    desc: "Società fintech italiana che fornisce soluzioni di pagamento digitale e credito mutuale per supportare le imprese locali e le economie regionali. Originata dal circuito Sardex in Sardegna, consente alle PMI di scambiare beni e servizi attraverso sistemi di valuta complementare.",
    status: "Q2 2016 · Partecipazione 12,9%",
  },
  {
    name: "MioAssicuratore",
    desc: "Piattaforma e broker assicurativo focalizzato su molteplici verticali — auto, nautica, salute e animali domestici — che aiuta i clienti a trovare, confrontare, acquistare e gestire polizze in modo più rapido e semplice. La società è incubata da H-Farm e Pi Campus.",
    status: "Q3 2018 · Partecipazione 25,4%",
  },
  {
    name: "Soulkitchen",
    desc: "Società italiana di food-tech con sede a Milano che sviluppa ingredienti semi-lavorati e soluzioni alimentari pronte all'uso per ristoranti e retail, ottimizzando la produzione alimentare attraverso processi industrializzati e data-driven.",
    status: "Q1 2018 · Partecipazione 18,3%",
  },
];

export const tabs = [
  { id: "medtech", label: "MedTech & Life Sciences", items: medtech },
  { id: "digital", label: "Digital", items: digital },
];

export const portfolioTotals = {
  total: medtech.length + digital.length,
  areas: tabs.length,
};
