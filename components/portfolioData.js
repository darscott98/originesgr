// Plain data module (no "use client") so both the server page and the client
// explorer can import the real values — a client module would only hand the
// server a reference, not the data.

export const tech = [
  {
    name: "Digitouch / Social Platform",
    desc: "Content management, social media and community management platform for corporate customers.",
    status: "Ceduta a Digitouch S.p.A. — 2015",
  },
  {
    name: "Silicon Biosystems",
    desc: "Soluzioni nel campo delle tecnologie lab-on-a-chip, per test di biologia cellulare miniaturizzati in ambito oncologico e di analisi prenatale.",
    status: "Ceduta a Menarini — 2013",
  },
  {
    name: "E-Security Intelligence",
    desc: "Società attiva nel mercato dell'e-security; prodotto principale per investigazioni informatiche e raccolta di intelligence per forze dell'ordine e agenzie di sicurezza.",
  },
  {
    name: "SingularID",
    desc: "Piattaforma micro/nanotecnologica che previene la contraffazione e la diversione di prodotti nel mercato grigio in numerosi settori.",
  },
  {
    name: "Mobango",
    desc: "Community online dedicata alla condivisione gratuita di contenuti generati dagli utenti per dispositivi mobili.",
    status: "Ceduta a operatore indiano",
  },
  {
    name: "Beintoo",
    desc: "Piattaforma di engagement online-to-offline per brand e retailer, basata su tecnologie cross-device all'avanguardia.",
  },
  {
    name: "DietToGo",
    desc: "Consegna di pasti dietetici gourmet, orientata al raggiungimento concreto degli obiettivi di dimagrimento dei clienti.",
  },
  {
    name: "MBooster",
    desc: "Holding che aggrega PMI con potenziale di crescita nei nuovi mercati digitali e startup con progetti innovativi e scalabili.",
  },
  {
    name: "Jatropha BioOil",
    desc: "Tecnologia che separa le tossine dai frutti di Jatropha, ottenendo olio commestibile, farina proteica per mangimi e principi bioattivi.",
  },
  {
    name: "40South Energy",
    desc: "Sistema di conversione dell'energia da onde e maree, un'innovazione tecnologica dirompente nel settore dell'energia marina.",
  },
  {
    name: "THRON",
    desc: "Piattaforma di content communication intelligente in tempo reale per controllare, distribuire e misurare i contenuti su tutti i canali digitali.",
  },
  {
    name: "Drexcode",
    desc: "Piattaforma online per il noleggio di abiti di lusso, con un catalogo di capi high-end delle ultime collezioni.",
  },
  {
    name: "Prestiamoci",
    desc: "Piattaforma di peer-to-peer lending che connette direttamente chi cerca un prestito a chi ha capitale da investire.",
  },
  {
    name: "MioAssicuratore",
    desc: "Broker assicurativo personale online, leader in Italia nei segmenti no-motor.",
  },
  {
    name: "Soul-K",
    desc: "Piattaforma per professionisti della ristorazione che consegna pasti pronti o semilavorati entro 24 ore.",
  },
  {
    name: "Digital Magics",
    desc: "Tra i principali incubatori italiani per startup innovative e scaleup digitali.",
  },
  {
    name: "SardexPay",
    desc: "Sistema di credito e pagamento complementare basato su unità di conto, progettato per generare liquidità aggiuntiva e risparmi negli scambi commerciali.",
  },
];

export const med = [
  {
    name: "IGEA",
    desc: "Approccio innovativo al trattamento dei tumori cutanei e sottocutanei tramite elettroporazione clinica ed elettrochemioterapia.",
  },
  {
    name: "Renovacor",
    desc: "Sviluppo di terapie geniche trasformative per le malattie cardiovascolari.",
  },
  {
    name: "Affera",
    desc: "Soluzioni innovative per il trattamento delle aritmie cardiache.",
  },
  {
    name: "EryDel",
    desc: "Piattaforma di drug delivery basata sull'uso degli eritrociti del paziente come veicolo per farmaci e altre molecole.",
  },
  {
    name: "AtriCath",
    desc: "Catetere di ablazione one-shot best-in-class per il trattamento della fibrillazione atriale.",
  },
  {
    name: "AngioDroid",
    desc: "Sistema di iniezione per angiografia a CO₂, capace di minimizzare il dolore del paziente e i rischi di iniezione.",
  },
  {
    name: "PiCardia",
    desc: "Dispositivo transcatetere low-profile per il trattamento della stenosi aortica.",
  },
];

export const tabs = [
  { id: "tech", label: "Technology", items: tech },
  { id: "med", label: "MedTech & Life Sciences", items: med },
];

export const portfolioTotals = {
  total: tech.length + med.length,
  areas: tabs.length,
};
