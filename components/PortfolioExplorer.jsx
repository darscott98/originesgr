"use client";

import { useState } from "react";
import { tabs } from "./portfolioData";

function Card({ item, index }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);

  return (
    <article
      className={`pf-card${open ? " open" : ""}`}
      tabIndex={0}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
    >
      <div className="pf-card-head">
        <span className="pf-idx">{String(index + 1).padStart(2, "0")}</span>
        <button
          type="button"
          className="pf-toggle"
          aria-label={open ? "Nascondi dettagli" : "Mostra dettagli"}
          aria-expanded={open}
          onClick={(e) => {
            e.stopPropagation();
            toggle();
          }}
        >
          <span />
          <span />
        </button>
      </div>
      <h3 className="pf-name">{item.name}</h3>
      <div className="pf-body">
        <p className="pf-desc">{item.desc}</p>
        {item.status && <span className="pf-status">{item.status}</span>}
      </div>
    </article>
  );
}

export default function PortfolioExplorer() {
  const [active, setActive] = useState("tech");

  return (
    <section className="pf-section">
      <div className="wrap">
        <div className="pf-tabs" role="tablist" aria-label="Aree del portafoglio">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className="pf-tab"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={active === tab.id}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActive(tab.id)}
            >
              {tab.label}
              <span className="ct">{tab.items.length}</span>
            </button>
          ))}
        </div>

        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`pf-panel${active === tab.id ? " active" : ""}`}
            id={`panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
          >
            <div className="pf-grid">
              {tab.items.map((item, i) => (
                <Card key={item.name} item={item} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
