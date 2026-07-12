import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { C, GRAD, SmartImage, SectionTitle, PageHero } from "../ui.jsx";
import { REGIONI, PAESI } from "../data/regioni.js";

/* ============================================================
   /regioni — Indice mondiale dei paesi
   ============================================================ */
export function RegioniIndex() {
  return (
    <>
      <PageHero
        eyebrow="Regioni del vino"
        title="Il mondo, un vigneto alla volta"
        sub="Ogni paese ha le sue colline, i suoi vitigni e le sue storie. Si parte dall'Italia: le altre destinazioni arrivano presto."
      />
      <section style={{ padding: "clamp(50px, 7vw, 90px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {PAESI.map((p) =>
              p.attivo ? (
                <Link
                  key={p.slug}
                  to={`/regioni/${p.slug}`}
                  className="tour-card"
                  style={{ padding: 28 }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: C.verde,
                      fontWeight: 700,
                      marginBottom: 10,
                    }}
                  >
                    Online
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontWeight: 500,
                      fontSize: 28,
                      margin: "0 0 10px",
                      color: C.carbone,
                    }}
                  >
                    {p.nome}
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, fontWeight: 300, margin: "0 0 18px", color: C.ink }}>
                    {p.descr}
                  </p>
                  <span
                    style={{
                      fontSize: 13,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      background: GRAD,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      marginTop: "auto",
                    }}
                  >
                    Esplora →
                  </span>
                </Link>
              ) : (
                <div
                  key={p.slug}
                  style={{
                    background: C.cremaScuro,
                    borderRadius: 6,
                    padding: 28,
                    opacity: 0.75,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: C.grigio,
                      fontWeight: 700,
                      marginBottom: 10,
                    }}
                  >
                    In arrivo
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontWeight: 500,
                      fontSize: 28,
                      margin: "0 0 10px",
                      color: C.carbone,
                    }}
                  >
                    {p.nome}
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, fontWeight: 300, margin: 0, color: C.ink }}>
                    {p.descr}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}

/* ============================================================
   /regioni/italia — Le regioni italiane
   ============================================================ */
export function PaeseItalia() {
  return (
    <>
      <PageHero
        eyebrow="Italia"
        title="L'Italia, una regione alla volta"
        sub="Sei territori online, ognuno con i suoi vitigni, le sue denominazioni, un tour consigliato e le cantine da visitare."
        img="langhe"
      />
      <section style={{ padding: "clamp(50px, 7vw, 90px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 24,
            }}
          >
            {REGIONI.map((r) => (
              <Link key={r.slug} to={`/regioni/italia/${r.slug}`} className="region-card" style={{ height: 360 }}>
                <div style={{ position: "absolute", inset: 0 }} className="region-img">
                  <SmartImage img={r.img} alt={r.nome} />
                </div>
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, rgba(29,33,28,0) 30%, rgba(29,33,28,0.92) 100%)",
                  }}
                />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 22, color: C.crema }}>
                  <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, fontSize: 26, margin: "0 0 2px" }}>
                    {r.nome}
                  </h3>
                  <div
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: C.lime,
                      fontWeight: 700,
                      marginBottom: 10,
                    }}
                  >
                    {r.zona}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 6, opacity: 0.95 }}>
                    {r.vitigni.slice(0, 3).join(" · ")}
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 300, opacity: 0.8 }}>
                    {r.cantine.length} cantine · {r.tour.durata}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ============================================================
   /regioni/italia/:slug — Dettaglio regione
   ============================================================ */
export function RegioneDetail() {
  const { slug } = useParams();
  const r = REGIONI.find((x) => x.slug === slug);
  if (!r) return <Navigate to="/regioni/italia" replace />;

  return (
    <>
      <PageHero eyebrow={`Italia · ${r.zona}`} title={r.nome} sub={r.intro[0]} img={r.img} />

      {/* Vitigni e denominazioni */}
      <section style={{ padding: "clamp(50px, 7vw, 80px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          {r.intro.slice(1).map((p, i) => (
            <p key={i} style={{ fontSize: 17, lineHeight: 1.75, fontWeight: 300, margin: "0 0 24px", color: C.ink }}>
              {p}
            </p>
          ))}
          <div style={{ marginTop: 32 }}>
            <div
              style={{
                fontSize: 12,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                fontWeight: 600,
                color: C.verde,
                marginBottom: 14,
              }}
            >
              Vitigni principali
            </div>
            <div>
              {r.vitigni.map((v) => (
                <span key={v} className="chip">{v}</span>
              ))}
            </div>
          </div>
          <div style={{ marginTop: 28 }}>
            <div
              style={{
                fontSize: 12,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                fontWeight: 600,
                color: C.verde,
                marginBottom: 14,
              }}
            >
              Denominazioni
            </div>
            <div>
              {r.denominazioni.map((d) => (
                <span key={d} className="chip">{d}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tour consigliato */}
      <section style={{ background: C.carbone, padding: "clamp(50px, 7vw, 90px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <SectionTitle eyebrow={`Tour consigliato · ${r.tour.durata}`} title={r.tour.titolo} light />
          <p style={{ fontSize: 16, lineHeight: 1.7, fontWeight: 300, color: C.crema, opacity: 0.9, margin: "0 0 32px" }}>
            {r.tour.descrizione}
          </p>
          <ol style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {r.tour.tappe.map((t, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  gap: 18,
                  alignItems: "baseline",
                  padding: "16px 0",
                  borderBottom: i < r.tour.tappe.length - 1 ? "1px solid rgba(242,241,234,0.12)" : "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: 22,
                    background: GRAD,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    minWidth: 32,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontSize: 15, lineHeight: 1.6, fontWeight: 300, color: C.crema, opacity: 0.92 }}>
                  {t}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Cantine */}
      <section style={{ padding: "clamp(50px, 7vw, 90px) clamp(20px, 5vw, 64px)", background: C.cremaScuro }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <SectionTitle eyebrow="Da visitare" title={`Le cantine — ${r.nome}`} />
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {r.cantine.map((c) => (
              <div key={c.nome} className="cantina-row">
                <div style={{ flex: "1 1 260px" }}>
                  <div style={{ fontFamily: "'Fraunces', serif", fontSize: 19, fontWeight: 500, color: C.carbone }}>
                    {c.nome}
                  </div>
                  <div style={{ fontSize: 13, color: C.grigio, fontWeight: 600, margin: "3px 0 6px" }}>
                    {c.comune}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 300, color: C.ink }}>{c.visite}</div>
                </div>
                <a
                  href={`https://${c.sito}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: 12,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    color: C.verde,
                    whiteSpace: "nowrap",
                  }}
                >
                  Sito web →
                </a>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40, textAlign: "center" }}>
            <Link to="/regioni/italia" className="btn-ghost dark">← Tutte le regioni d'Italia</Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ============================================================
   /tour — Indice dei tour
   ============================================================ */
export function TourIndex() {
  return (
    <>
      <PageHero
        eyebrow="Tour enogastronomici"
        title="Esperienze tra le vigne"
        sub="Itinerari di uno, due o tre giorni nelle regioni del vino: cantine, borghi, tavole e panorami. Ogni tour è legato alla sua regione."
        img="chianti"
      />
      <section style={{ padding: "clamp(50px, 7vw, 90px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: 28,
            }}
          >
            {REGIONI.map((r) => (
              <Link key={r.slug} to={`/regioni/italia/${r.slug}`} style={{ display: "block" }}>
                <article className="tour-card">
                  <div style={{ height: 200, overflow: "hidden" }}>
                    <div className="tour-img" style={{ width: "100%", height: "100%" }}>
                      <SmartImage img={r.img} alt={r.tour.titolo} />
                    </div>
                  </div>
                  <div className="tour-body">
                    <div
                      style={{
                        fontSize: 11,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: C.verde,
                        marginBottom: 10,
                        fontWeight: 700,
                      }}
                    >
                      {r.zona} · {r.tour.durata}
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Fraunces', serif",
                        fontWeight: 500,
                        fontSize: 23,
                        margin: "0 0 12px",
                        color: C.carbone,
                      }}
                    >
                      {r.tour.titolo}
                    </h3>
                    <p style={{ fontSize: 15, lineHeight: 1.6, fontWeight: 300, margin: "0 0 20px", color: C.ink }}>
                      {r.tour.descrizione}
                    </p>
                    <span
                      style={{
                        fontSize: 13,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        fontWeight: 700,
                        background: GRAD,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        marginTop: "auto",
                      }}
                    >
                      Vai alla regione →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
