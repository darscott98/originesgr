"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function TeamMember({ member }) {
  const t = useTranslations("team");
  const [open, setOpen] = useState(false);

  // Members without a bio (e.g. the Assistant) are static — no toggle.
  if (!member.bio) {
    return (
      <div className="member">
        <div className="pic">
          <div className="ini">{member.ini}</div>
        </div>
        <div className="info">
          <h4>{member.name}</h4>
          <span className="role">{member.role}</span>
        </div>
      </div>
    );
  }

  const toggle = () => setOpen((v) => !v);

  return (
    <div
      className={`member expandable${open ? " open" : ""}`}
      role="button"
      tabIndex={0}
      aria-expanded={open}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
    >
      <div className="pic">
        <div className="ini">{member.ini}</div>
      </div>
      <div className="info">
        <button
          type="button"
          className="member-toggle"
          aria-label={open ? t("toggleHide") : t("toggleShow")}
          aria-expanded={open}
          onClick={(e) => {
            e.stopPropagation();
            toggle();
          }}
        >
          <span />
          <span />
        </button>
        <h4>{member.name}</h4>
        <span className="role">{member.role}</span>
        <p className="bio">{member.bio}</p>
      </div>
    </div>
  );
}
