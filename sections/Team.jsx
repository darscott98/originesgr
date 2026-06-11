import { getLocale, getTranslations } from "next-intl/server";
import TeamMember from "@/components/TeamMember";

// Names, initials and roles are proper nouns / already in English, so they live
// here as the single source of truth. Bios are translated and looked up by key.
const management = [
  { ini: "RS", name: "Roberto Sambuco", role: "CEO", bioKey: "sambuco", img: "/images/Roberto-Sambuco.png" },
  { ini: "MC", name: "Marialiliana Conte", role: "CFO", bioKey: "conte", img: "/images/Marialiliana-Conte.png" },
  // role is locale-aware: IT shows "Gestione dei fondi", EN "Fund Manager".
  { ini: "TS", name: "Teresa Sanseverino", role: { it: "Gestione dei fondi", en: "Fund Manager" }, img: "/images/Teresa-Sanseverino.png" },
  { ini: "MU", name: "Maria José Ullauri", role: "Executive Assistant" },
  { ini: "DA", name: "Daniel Arscott", role: "Chief Data Analyst", bioKey: "arscott", img: "/images/Daniel-Arscott.png" },
];

const peTeam = [
  { ini: "RS", name: "Roberto Sambuco", role: "Senior Partner", bioKey: "sambuco", img: "/images/Roberto-Sambuco.png" },
  { ini: "DC", name: "Dario Cenci", role: "Senior Partner", bioKey: "cenci", img: "/images/Dario-Cenci.png" },
  { ini: "MM", name: "Micki Mineo", role: "Investment Manager", bioKey: "mineo", img: "/images/Micki-Mineo.png" },
];

const seniorAdvisors = [
  { ini: "PG", name: "Paolo Gallo", role: "Senior Advisor" },
  { ini: "GF", name: "Giorgio Furlani", role: "Senior Advisor" },
  { ini: "RS", name: "Roberto Sergio", role: "Senior Advisor" },
];

const vcTeam = [
  { ini: "LC", name: "Lorenzo Castelli", role: "Venture Partner", bioKey: "castelli" },
  { ini: "MV", name: "Marco Venturelli", role: "Venture Partner", bioKey: "venturelli" },
  { ini: "CR", name: "Carlotta Riccio", role: "Venture Manager" },
];

export default async function Team() {
  const t = await getTranslations("team");
  const locale = await getLocale();
  // Resolve a locale-aware role ({it,en}) to a plain string; pass others through.
  const prep = (member) => ({
    ...member,
    role: typeof member.role === "string" ? member.role : member.role[locale],
  });
  // Attach a translated bio only when the member has one (some bios follow later).
  const withBio = (member) =>
    member.bioKey ? { ...prep(member), bio: t(`bios.${member.bioKey}`) } : prep(member);
  return (
    <section className="panel dark" id="team">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="reveal">{t("title")}</h2>
          <p className="reveal d1">{t("intro")}</p>
        </div>

        <div className="team-sub">
          <h3>{t("groupManagement")}</h3>
          <div className="ln" />
        </div>
        <div className="team-grid">
          {management.map((member) => (
            <TeamMember key={`mg-${member.name}`} member={withBio(member)} />
          ))}
        </div>

        <div className="team-sub">
          <h3>{t("groupPe")}</h3>
          <div className="ln" />
        </div>
        <div className="team-grid">
          {peTeam.map((member) => (
            <TeamMember key={`pe-${member.name}`} member={withBio(member)} />
          ))}
        </div>

        <div className="team-sub">
          <h3>{t("groupAdvisors")}</h3>
          <div className="ln" />
        </div>
        <div className="team-grid">
          {seniorAdvisors.map((member) => (
            <TeamMember key={`sa-${member.name}`} member={prep(member)} />
          ))}
        </div>

        <div className="team-sub">
          <h3>{t("groupVc")}</h3>
          <div className="ln" />
        </div>
        <div className="team-grid">
          {vcTeam.map((member) => (
            <TeamMember key={`vc-${member.name}`} member={withBio(member)} />
          ))}
        </div>
      </div>
    </section>
  );
}
