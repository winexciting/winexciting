import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation, Navigate } from "react-router-dom";
import { C, GRAD, LogoSeal, GlobalStyle } from "./ui.jsx";
import Home from "./pages/Home.jsx";
import { RegioniIndex, PaeseItalia, RegioneDetail, TourIndex } from "./pages/Regioni.jsx";

/* Riporta in cima (o all'ancora) a ogni cambio pagina */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function Header() {
  const nav = [
    { to: "/regioni", label: "Regioni" },
    { to: "/tour", label: "Tour" },
    { to: "/#il-progetto", label: "Il progetto", anchor: true },
    { to: "/#contatti", label: "Contatti", anchor: true },
  ];
  return (
    <header
      style={{
        background: C.carbone,
        padding: "0 clamp(20px, 5vw, 64px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 80,
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid rgba(166,212,47,0.15)",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <LogoSeal size={48} withText={false} />
        <span
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: 23,
            fontWeight: 500,
            background: GRAD,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Winexciting
        </span>
      </Link>
      <nav style={{ display: "flex", gap: 26, flexWrap: "wrap" }}>
        {nav.map((v) =>
          v.anchor ? (
            <a key={v.label} className="nav-link" href={v.to}>
              {v.label}
            </a>
          ) : (
            <NavLink key={v.label} className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} to={v.to}>
              {v.label}
            </NavLink>
          )
        )}
      </nav>
    </header>
  );
}

function Footer() {
  const [email, setEmail] = useState("");
  const [inviato, setInviato] = useState(false);

  return (
    <footer id="contatti" style={{ padding: "clamp(60px, 8vw, 90px) clamp(20px, 5vw, 64px) 40px", background: C.crema }}>
      <div style={{ maxWidth: 620, margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 500,
            fontSize: "clamp(26px, 3.5vw, 36px)",
            color: C.carbone,
            margin: "0 0 14px",
          }}
        >
          Resta in contatto
        </h2>
        <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.6, margin: "0 0 28px", color: C.ink }}>
          Una newsletter senza spam: nuovi tour, video e regioni da scoprire, direttamente nella tua casella.
        </p>
        {inviato ? (
          <div
            style={{
              padding: "16px 24px",
              background: GRAD,
              color: C.carbone,
              fontSize: 14,
              fontWeight: 600,
              display: "inline-block",
              borderRadius: 4,
            }}
          >
            Iscrizione registrata. Benvenuto a bordo!
          </div>
        ) : (
          <div style={{ display: "flex", gap: 10, maxWidth: 470, margin: "0 auto", flexWrap: "wrap", justifyContent: "center" }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="la-tua-email@esempio.it"
              aria-label="Indirizzo email per la newsletter"
              style={{
                flex: "1 1 240px",
                padding: "14px 18px",
                border: `1px solid ${C.carbone}`,
                background: "#fff",
                fontSize: 15,
                fontFamily: "'Work Sans', sans-serif",
                outline: "none",
                borderRadius: 4,
              }}
            />
            <button className="btn-lime" onClick={() => email.includes("@") && setInviato(true)}>
              Iscriviti
            </button>
          </div>
        )}
        <div
          style={{
            marginTop: 64,
            paddingTop: 24,
            borderTop: "1px solid #DEDDD4",
            fontSize: 12,
            letterSpacing: "0.08em",
            color: C.grigio,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span>© {new Date().getFullYear()} Winexciting · Endless Passion · winexciting.com</span>
          <span>
            <a href="https://instagram.com/winexciting" style={{ color: C.verde, fontWeight: 600 }}>Instagram</a>
            {"  ·  "}
            <a href="https://youtube.com/@winexciting" style={{ color: C.verde, fontWeight: 600 }}>YouTube</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScrollManager />
      <div style={{ fontFamily: "'Work Sans', sans-serif", background: C.crema, color: C.ink, minHeight: "100vh" }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/regioni" element={<RegioniIndex />} />
          <Route path="/regioni/italia" element={<PaeseItalia />} />
          <Route path="/regioni/italia/:slug" element={<RegioneDetail />} />
          <Route path="/tour" element={<TourIndex />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
