import React from "react";
import { Link } from "react-router-dom";
import { C, GRAD, IMG, SmartImage, SectionTitle, LogoSeal } from "../ui.jsx";
import { REGIONI } from "../data/regioni.js";

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section style={{ background: C.carbone, color: C.crema, position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${IMG.langhe})`,
            backgroundSize: "cover",
            backgroundPosition: "center 65%",
            opacity: 0.28,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(29,33,28,0.3) 0%, rgba(29,33,28,0.85) 85%)",
          }}
        />
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "clamp(80px, 12vw, 150px) clamp(20px, 5vw, 64px) clamp(70px, 9vw, 110px)",
            position: "relative",
            zIndex: 1,
          }}
        >
          <h1
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 500,
              fontSize: "clamp(48px, 9vw, 104px)",
              lineHeight: 1.0,
              margin: 0,
            }}
          >
            Endless{" "}
            <span style={{ background: GRAD, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Passion.
            </span>
          </h1>
          <p
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              fontWeight: 300,
              lineHeight: 1.65,
              maxWidth: 540,
              margin: "26px 0 40px",
              opacity: 0.92,
            }}
          >
            Racconti, tour enogastronomici e video dalle regioni vitivinicole del mondo. Si parte
            dall'Italia.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link to="/regioni" className="btn-lime">Esplora le regioni</Link>
            <Link to="/tour" className="btn-ghost">Scopri i tour</Link>
          </div>
        </div>
      </section>

      {/* ===== REGIONI ===== */}
      <section style={{ padding: "clamp(60px, 8vw, 100px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionTitle eyebrow="Regioni del vino" title="L'Italia, una regione alla volta" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 24,
            }}
          >
            {REGIONI.map((r) => (
              <Link key={r.slug} to={`/regioni/italia/${r.slug}`} className="region-card" style={{ height: 340 }}>
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
                  <p style={{ fontSize: 13, lineHeight: 1.5, fontWeight: 300, margin: 0, opacity: 0.85 }}>
                    {r.intro[0].split(":")[0]}.
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 36, textAlign: "center" }}>
            <Link to="/regioni" className="btn-ghost dark">Tutte le regioni del mondo</Link>
          </div>
        </div>
      </section>

      {/* ===== TOUR (anteprima) ===== */}
      <section style={{ background: C.cremaScuro, padding: "clamp(60px, 8vw, 100px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionTitle eyebrow="Tour enogastronomici" title="Esperienze tra le vigne" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 28,
            }}
          >
            {REGIONI.slice(0, 3).map((r) => (
              <Link key={r.slug} to={`/regioni/italia/${r.slug}`} style={{ display: "block" }}>
                <article className="tour-card">
                  <div style={{ height: 190, overflow: "hidden" }}>
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
                        fontSize: 22,
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
                      Scopri di più →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 36, textAlign: "center" }}>
            <Link to="/tour" className="btn-ghost dark">Tutti i tour</Link>
          </div>
        </div>
      </section>

      {/* ===== IL PROGETTO ===== */}
      <section
        id="il-progetto"
        style={{
          background: C.carbone,
          color: C.crema,
          padding: "clamp(60px, 8vw, 100px) clamp(20px, 5vw, 64px)",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <div style={{ marginBottom: 24 }}>
            <LogoSeal size={140} />
          </div>
          <SectionTitle eyebrow="Il progetto" title="Diffondere la passione, un calice alla volta" light />
          <p style={{ fontSize: 17, lineHeight: 1.75, fontWeight: 300, opacity: 0.9, margin: "0 0 32px" }}>
            Winexciting nasce dalla passione per il vino e per le persone che lo fanno. Niente
            tecnicismi da sommelier, niente punteggi: solo territori, storie e bottiglie che vale la
            pena conoscere. Si parte dall'Italia, si guarda al mondo.
          </p>
          <a href="https://instagram.com/winexciting" target="_blank" rel="noreferrer" className="btn-ghost">
            Seguici su Instagram
          </a>
        </div>
      </section>
    </>
  );
}
