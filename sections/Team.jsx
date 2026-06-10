import { getTranslations } from "next-intl/server";
import TeamMember from "@/components/TeamMember";

// Names, initials and roles are proper nouns / already in English, so they live
// here as the single source of truth. Bios are translated and looked up by key.
const management = [
  { ini: "RS", name: "Roberto Sambuco", role: "CEO" },
  { ini: "MC", name: "Marialiliana Conte", role: "CFO" },
  { ini: "MU", name: "Maria José Ullauri", role: "Executive Assistant" },
];

const peTeam = [
  { ini: "RS", name: "Roberto Sambuco", role: "Senior Partner", bioKey: "sambuco" },
  { ini: "DC", name: "Dario Cenci", role: "Senior Partner", bioKey: "cenci" },
  { ini: "MM", name: "Micki Mineo", role: "Investment Manager", bioKey: "mineo" },
  { ini: "ET", name: "Edoardo Tamburelli", role: "Investment Associate", bioKey: "tamburelli" },
];

const operatingPartners = [
  { ini: "FV", name: "Federico Vecchioni", role: "AgriFood B2B & Technology" },
  { ini: "DP", name: "Dario Pardi", role: "Technology & Digital Transformation" },
];

const seniorAdvisors = [
  { ini: "PG", name: "Paolo Gallo", role: "Senior Advisor" },
  { ini: "GF", name: "Giorgio Furlani", role: "Senior Advisor" },
  { ini: "RS", name: "Roberto Sergio", role: "Senior Advisor" },
];

const vcTeam = [
  { ini: "LC", name: "Lorenzo Castelli", role: "Venture Capital" },
  { ini: "MV", name: "Marco Venturelli", role: "Venture Capital" },
];

export default async function Team() {
  const t = await getTranslations("team");
  const withBio = (member) => ({ ...member, bio: t(`bios.${member.bioKey}`) });
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
            <TeamMember key={`mg-${member.name}`} member={member} />
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
          <h3>{t("groupOperating")}</h3>
          <div className="ln" />
        </div>
        <div className="team-grid">
          {operatingPartners.map((member) => (
            <TeamMember key={`op-${member.name}`} member={member} />
          ))}
        </div>

        <div className="team-sub">
          <h3>{t("groupAdvisors")}</h3>
          <div className="ln" />
        </div>
        <div className="team-grid">
          {seniorAdvisors.map((member) => (
            <TeamMember key={`sa-${member.name}`} member={member} />
          ))}
        </div>

        <div className="team-sub">
          <h3>{t("groupVc")}</h3>
          <div className="ln" />
        </div>
        <div className="team-grid">
          {vcTeam.map((member) => (
            <TeamMember key={`vc-${member.name}`} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
