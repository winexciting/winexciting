import React, { useState } from "react";

/* ============================================================
   WINEXCITING — winexciting.com · "Endless Passion"
   CONTENUTI: modificare solo gli array SITE / TOURS / REGIONI / VIDEOS.
   Le immagini sono in /public/images.
   ============================================================ */

const IMG = {
  chianti: "/images/chianti.jpg",
  etna: "/images/etna.jpg",
  franciacorta: "/images/franciacorta.jpg",
  langhe: "/images/langhe.jpg",
};

const SITE = {
  brand: "Winexciting",
  claim: "Endless Passion.",
  sottoClaim:
    "Racconti, tour enogastronomici e video dalle regioni vitivinicole del mondo. Si parte dall'Italia.",
  instagram: "https://instagram.com/winexciting",
  youtube: "https://youtube.com/@winexciting",
};

const TOURS = [
  {
    id: 1,
    titolo: "Langhe: Barolo e nocciole",
    regione: "Piemonte",
    durata: "2 giorni",
    descrizione:
      "Tra La Morra e Serralunga d'Alba: tre cantine storiche, una verticale di Barolo e una merenda sinoira con vista sui vigneti patrimonio UNESCO.",
    img: "langhe",
  },
  {
    id: 2,
    titolo: "Etna: vini di fuoco",
    regione: "Sicilia",
    durata: "3 giorni",
    descrizione:
      "I vigneti più alti d'Europa, alberelli centenari su terrazze di pietra lavica e i Nerello che stanno conquistando il mondo.",
    img: "etna",
  },
  {
    id: 3,
    titolo: "Franciacorta in bicicletta",
    regione: "Lombardia",
    durata: "1 giorno",
    descrizione:
      "Pedalata dolce tra Erbusco e il lago d'Iseo, con soste in due maison per capire il metodo classico italiano, calice alla mano.",
    img: "franciacorta",
  },
];

const REGIONI = [
  {
    nome: "Langhe",
    zona: "Piemonte",
    vitigni: "Nebbiolo · Barbera · Dolcetto",
    nota: "Colline UNESCO, tartufo bianco e i rossi più longevi d'Italia.",
    img: "langhe",
  },
  {
    nome: "Chianti Classico",
    zona: "Toscana",
    vitigni: "Sangiovese · Canaiolo",
    nota: "Il Gallo Nero, borghi medievali e cipressi: l'icona del vino italiano.",
    img: "chianti",
  },
  {
    nome: "Franciacorta",
    zona: "Lombardia",
    vitigni: "Chardonnay · Pinot Nero",
    nota: "Bollicine metodo classico a un'ora da Milano, tra lago e vigne.",
    img: "franciacorta",
  },
  {
    nome: "Etna",
    zona: "Sicilia",
    vitigni: "Nerello Mascalese · Carricante",
    nota: "Viticoltura eroica sul vulcano attivo più alto d'Europa.",
    img: "etna",
  },
];

const VIDEOS = [
  {
    id: 1,
    titolo: "Vendemmia all'alba nelle Langhe",
    regione: "Piemonte",
    youtubeId: "", // inserisci l'ID del video YouTube (es. "dQw4w9WgXcQ")
    cover: "langhe",
  },
  {
    id: 2,
    titolo: "Le terrazze dell'Etna",
    regione: "Sicilia",
    youtubeId: "",
    cover: "etna",
  },
];

/* ===== DESIGN TOKENS (dal logo Instagram) ===== */
const C = {
  carbone: "#1D211C",
  carbone2: "#262B24",
  verde: "#4E9B4A",
  lime: "#A6D42F",
  crema: "#F2F1EA",
  grigio: "#9BA396",
  ink: "#20241F",
};

const GRAD = `linear-gradient(92deg, ${C.verde} 0%, ${C.lime} 100%)`;

/* Nuovo logo: sigillo "Grappolo pendente", vettoriale e scalabile */
function LogoSeal({ size = 46, withText = true }) {
  const uid = `lg-${size}`;
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} aria-label="Logo Winexciting">
      <defs>
        <linearGradient id={uid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2E7D46" />
          <stop offset="1" stopColor="#B4D934" />
        </linearGradient>
      </defs>
      <circle
        cx="100" cy="100" r="86" fill="none" stroke={`url(#${uid})`} strokeWidth="6"
        strokeDasharray="500 40" strokeDashoffset="-368" strokeLinecap="round"
      />
      <path d="M100 14 Q98 24 100 32" stroke={`url(#${uid})`} strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M100 20 Q112 18 114 26 Q115 33 108 32" stroke={`url(#${uid})`} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M99 26 Q84 18 78 28 Q88 38 99 30 Z" fill={`url(#${uid})`} />
      <g fill={`url(#${uid})`}>
        <circle cx="90" cy="42" r="6" /><circle cx="102" cy="43" r="6" />
        <circle cx="84" cy="53" r="6" /><circle cx="96" cy="54" r="6" /><circle cx="108" cy="53" r="6" />
        <circle cx="90" cy="64" r="6" /><circle cx="102" cy="65" r="6" />
        <circle cx="96" cy="75" r="6" />
      </g>
      {withText && (
        <>
          <text x="100" y="118" textAnchor="middle" fontFamily="'Work Sans', sans-serif" fontWeight="800" fontSize="24" fill="#F2F1EA">
            Winexciting
          </text>
          <text x="100" y="148" textAnchor="middle" fontFamily="'Caveat', cursive" fontSize="25" fill={`url(#${uid})`}>
            Endless passion
          </text>
        </>
      )}
    </svg>
  );
}

function SectionTitle({ eyebrow, title, light }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <div
        style={{
          fontSize: 12,
          letterSpacing: "0.24em",
          textTransform: "uppercase",
          fontWeight: 600,
          background: GRAD,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
          marginBottom: 12,
        }}
      >
        {eyebrow}
      </div>
      <h2
        style={{
          fontFamily: "'Fraunces', serif",
          fontWeight: 500,
          fontSize: "clamp(28px, 4vw, 44px)",
          lineHeight: 1.1,
          color: light ? C.crema : C.carbone,
          margin: 0,
        }}
      >
        {title}
      </h2>
    </div>
  );
}

export default function WinexcitingHome() {
  const [email, setEmail] = useState("");
  const [inviato, setInviato] = useState(false);

  const nav = ["Tour", "Video", "Regioni", "Il progetto", "Contatti"];

  return (
    <div
      style={{
        fontFamily: "'Work Sans', sans-serif",
        background: C.crema,
        color: C.ink,
        minHeight: "100vh",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Work+Sans:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        a { text-decoration: none; }
        .nav-link { color: ${C.crema}; font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; cursor: pointer; opacity: 0.8; transition: opacity .2s, color .2s; }
        .nav-link:hover { opacity: 1; color: ${C.lime}; }
        .tour-card { background: #fff; overflow: hidden; transition: transform .25s ease, box-shadow .25s ease; cursor: pointer; border-radius: 6px; }
        .tour-card:hover { transform: translateY(-5px); box-shadow: 0 18px 44px rgba(29,33,28,0.18); }
        .tour-card:hover .tour-img { transform: scale(1.05); }
        .tour-img { transition: transform .4s ease; }
        .region-card { position: relative; overflow: hidden; border-radius: 6px; cursor: pointer; }
        .region-card .region-img { transition: transform .5s ease; }
        .region-card:hover .region-img { transform: scale(1.06); }
        .btn-lime { background: ${GRAD}; color: ${C.carbone}; border: none; padding: 15px 32px; font-family: 'Work Sans', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; cursor: pointer; border-radius: 4px; transition: filter .2s, transform .15s; }
        .btn-lime:hover { filter: brightness(1.08); transform: translateY(-1px); }
        .btn-ghost { background: transparent; color: ${C.crema}; border: 1px solid rgba(242,241,234,0.4); padding: 14px 30px; font-size: 13px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; cursor: pointer; border-radius: 4px; transition: all .2s; }
        .btn-ghost:hover { border-color: ${C.lime}; color: ${C.lime}; }
        @media (prefers-reduced-motion: reduce) {
          .tour-card, .tour-img, .region-img { transition: none !important; transform: none !important; }
        }
      `}</style>

      {/* ===== HEADER ===== */}
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
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <LogoSeal size={48} withText={false} />
          <div
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
          </div>
        </div>
        <nav style={{ display: "flex", gap: 26 }}>
          {nav.map((v) => (
            <a key={v} className="nav-link" href={`#${v.toLowerCase().replace(/ /g, "-")}`}>
              {v}
            </a>
          ))}
        </nav>
      </header>

      {/* ===== HERO ===== */}
      <section
        style={{
          background: C.carbone,
          color: C.crema,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* foto Langhe come sfondo, scurita */}
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
            background: `linear-gradient(180deg, rgba(29,33,28,0.3) 0%, rgba(29,33,28,0.85) 85%)`,
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
            <span
              style={{
                background: GRAD,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
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
            {SITE.sottoClaim}
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#tour">
              <button className="btn-lime">Scopri i tour</button>
            </a>
            <a href="#video">
              <button className="btn-ghost">Guarda i video</button>
            </a>
          </div>
        </div>
      </section>

      {/* ===== TOUR ===== */}
      <section id="tour" style={{ padding: "clamp(60px, 8vw, 100px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionTitle eyebrow="Tour enogastronomici" title="Esperienze tra le vigne" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 28,
            }}
          >
            {TOURS.map((t) => (
              <article key={t.id} className="tour-card">
                <div style={{ height: 210, overflow: "hidden" }}>
                  <img
                    className="tour-img"
                    src={IMG[t.img]}
                    alt={t.titolo}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <div style={{ padding: 24 }}>
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
                    {t.regione} · {t.durata}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontWeight: 500,
                      fontSize: 24,
                      margin: "0 0 12px",
                      color: C.carbone,
                    }}
                  >
                    {t.titolo}
                  </h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, fontWeight: 300, margin: "0 0 20px" }}>
                    {t.descrizione}
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
                    }}
                  >
                    Scopri di più →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VIDEO ===== */}
      <section
        id="video"
        style={{
          background: C.carbone,
          padding: "clamp(60px, 8vw, 100px) clamp(20px, 5vw, 64px)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionTitle eyebrow="Video delle vigne" title="Il racconto, dal filare al calice" light />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 28,
            }}
          >
            {VIDEOS.map((v) => (
              <div key={v.id}>
                {v.youtubeId ? (
                  <div
                    style={{
                      position: "relative",
                      paddingBottom: "56.25%",
                      height: 0,
                      borderRadius: 6,
                      overflow: "hidden",
                    }}
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${v.youtubeId}`}
                      title={v.titolo}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        border: 0,
                      }}
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div
                    style={{
                      position: "relative",
                      borderRadius: 6,
                      overflow: "hidden",
                      height: 240,
                    }}
                  >
                    <img
                      src={IMG[v.cover]}
                      alt={v.titolo}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "brightness(0.65)" }}
                    />
                    {/* pulsante play */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          width: 66,
                          height: 66,
                          borderRadius: "50%",
                          background: GRAD,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={{
                            width: 0,
                            height: 0,
                            borderTop: "12px solid transparent",
                            borderBottom: "12px solid transparent",
                            borderLeft: `20px solid ${C.carbone}`,
                            marginLeft: 5,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div style={{ paddingTop: 14 }}>
                  <div
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: C.lime,
                      fontWeight: 700,
                      marginBottom: 6,
                    }}
                  >
                    {v.regione}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontWeight: 500,
                      fontSize: 20,
                      margin: 0,
                      color: C.crema,
                    }}
                  >
                    {v.titolo}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REGIONI ===== */}
      <section id="regioni" style={{ padding: "clamp(60px, 8vw, 100px) clamp(20px, 5vw, 64px)" }}>
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
              <article key={r.nome} className="region-card" style={{ height: 340 }}>
                <img
                  className="region-img"
                  src={IMG[r.img]}
                  alt={r.nome}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(29,33,28,0) 30%, rgba(29,33,28,0.92) 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: 22,
                    color: C.crema,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontWeight: 500,
                      fontSize: 26,
                      margin: "0 0 2px",
                    }}
                  >
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
                    {r.vitigni}
                  </div>
                  <p style={{ fontSize: 13, lineHeight: 1.5, fontWeight: 300, margin: 0, opacity: 0.85 }}>
                    {r.nota}
                  </p>
                </div>
              </article>
            ))}
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
          <a href={SITE.instagram} target="_blank" rel="noreferrer">
            <button className="btn-ghost">Seguici su Instagram</button>
          </a>
        </div>
      </section>

      {/* ===== CONTATTI + NEWSLETTER ===== */}
      <footer id="contatti" style={{ padding: "clamp(60px, 8vw, 90px) clamp(20px, 5vw, 64px) 40px" }}>
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
          <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.6, margin: "0 0 28px" }}>
            Una newsletter senza spam: nuovi tour, video e regioni da scoprire, direttamente nella
            tua casella.
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
              <button
                className="btn-lime"
                onClick={() => email.includes("@") && setInviato(true)}
              >
                Iscriviti
              </button>
            </div>
          )}
          <div
            style={{
              marginTop: 64,
              paddingTop: 24,
              borderTop: `1px solid #DEDDD4`,
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
              <a href={SITE.instagram} style={{ color: C.verde, fontWeight: 600 }}>Instagram</a>
              {"  ·  "}
              <a href={SITE.youtube} style={{ color: C.verde, fontWeight: 600 }}>YouTube</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
