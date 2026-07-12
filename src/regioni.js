import React from "react";

/* ===== DESIGN TOKENS ===== */
export const C = {
  carbone: "#1D211C",
  carbone2: "#262B24",
  verde: "#2E7D46",
  lime: "#B4D934",
  bordeaux: "#7A1F2B",
  crema: "#F2F1EA",
  cremaScuro: "#E9E7DC",
  grigio: "#9BA396",
  ink: "#20241F",
};

export const GRAD = `linear-gradient(92deg, ${C.verde} 0%, ${C.lime} 100%)`;

export const IMG = {
  chianti: "/images/chianti.jpg",
  etna: "/images/etna.jpg",
  franciacorta: "/images/franciacorta.jpg",
  langhe: "/images/langhe.jpg",
  valpolicella: "/images/valpolicella.jpg",
  bolgheri: "/images/bolgheri.jpg",
};

/* Immagine con fallback elegante se il file non esiste ancora */
export function SmartImage({ img, alt, style }) {
  const [err, setErr] = React.useState(false);
  if (err || !IMG[img]) {
    return (
      <div
        style={{
          background: `linear-gradient(150deg, ${C.carbone2}, ${C.carbone})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          ...style,
        }}
      >
        <span
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: 28,
            background: GRAD,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {alt}
        </span>
      </div>
    );
  }
  return (
    <img
      src={IMG[img]}
      alt={alt}
      onError={() => setErr(true)}
      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", ...style }}
    />
  );
}

/* Logo: sigillo "Grappolo pendente" */
export function LogoSeal({ size = 46, withText = true }) {
  const uid = `lg-${size}-${withText ? "t" : "n"}`;
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

export function SectionTitle({ eyebrow, title, light }) {
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

/* Hero interna riutilizzabile per le pagine */
export function PageHero({ eyebrow, title, sub, img }) {
  return (
    <section style={{ background: C.carbone, color: C.crema, position: "relative", overflow: "hidden" }}>
      {img && (
        <div style={{ position: "absolute", inset: 0, opacity: 0.45 }}>
          <SmartImage img={img} alt={title} />
        </div>
      )}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(29,33,28,0.2) 0%, rgba(29,33,28,0.82) 90%)",
        }}
      />
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "clamp(60px, 8vw, 100px) clamp(20px, 5vw, 64px)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {eyebrow && (
          <div
            style={{
              fontSize: 12,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: C.lime,
              marginBottom: 14,
            }}
          >
            {eyebrow}
          </div>
        )}
        <h1
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 500,
            fontSize: "clamp(38px, 6.5vw, 72px)",
            lineHeight: 1.05,
            margin: 0,
          }}
        >
          {title}
        </h1>
        {sub && (
          <p style={{ fontSize: "clamp(15px, 2vw, 19px)", fontWeight: 300, maxWidth: 620, margin: "20px 0 0", opacity: 0.92, lineHeight: 1.6 }}>
            {sub}
          </p>
        )}
      </div>
    </section>
  );
}

/* Stili globali condivisi */
export function GlobalStyle() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Work+Sans:wght@300;400;500;600;700;800&family=Caveat:wght@500&display=swap');
      * { box-sizing: border-box; }
      body { margin: 0; }
      a { text-decoration: none; color: inherit; }
      .nav-link { color: ${C.crema}; font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; cursor: pointer; opacity: 0.8; transition: opacity .2s, color .2s; }
      .nav-link:hover, .nav-link.active { opacity: 1; color: ${C.lime}; }
      .tour-card { background: #fff; overflow: hidden; transition: transform .25s ease, box-shadow .25s ease; cursor: pointer; border-radius: 6px; display: flex; flex-direction: column; height: 100%; }
      .tour-card:hover { transform: translateY(-5px); box-shadow: 0 18px 44px rgba(29,33,28,0.18); }
      .tour-card:hover .tour-img { transform: scale(1.05); }
      .tour-img { transition: transform .4s ease; }
      .tour-body { padding: 24px; display: flex; flex-direction: column; flex: 1; }
      .region-card { position: relative; overflow: hidden; border-radius: 6px; cursor: pointer; display: block; }
      .region-card .region-img { transition: transform .5s ease; }
      .region-card:hover .region-img { transform: scale(1.06); }
      .btn-lime { background: ${C.bordeaux}; color: ${C.crema}; border: none; padding: 15px 32px; font-family: 'Work Sans', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; cursor: pointer; border-radius: 4px; transition: filter .2s, transform .15s; display: inline-block; }
      .btn-lime:hover { filter: brightness(1.25); transform: translateY(-1px); }
      .link-accent { color: ${C.bordeaux}; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 700; margin-top: auto; }
      .btn-ghost { background: transparent; color: ${C.crema}; border: 1px solid rgba(242,241,234,0.4); padding: 14px 30px; font-size: 13px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; cursor: pointer; border-radius: 4px; transition: all .2s; display: inline-block; font-family: 'Work Sans', sans-serif; }
      .btn-ghost:hover { border-color: ${C.lime}; color: ${C.lime}; }
      .btn-ghost.dark { color: ${C.carbone}; border-color: ${C.carbone}; }
      .btn-ghost.dark:hover { border-color: ${C.verde}; color: ${C.verde}; }
      .chip { display: inline-block; padding: 7px 14px; border: 1px solid ${C.verde}; border-radius: 999px; font-size: 13px; font-weight: 600; color: ${C.verde}; margin: 0 8px 8px 0; }
      .cantina-row { background: #fff; border-radius: 6px; padding: 20px 24px; display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap; transition: box-shadow .2s; }
      .cantina-row:hover { box-shadow: 0 8px 24px rgba(29,33,28,0.1); }
      @media (prefers-reduced-motion: reduce) {
        .tour-card, .tour-img, .region-img { transition: none !important; transform: none !important; }
      }
    `}</style>
  );
}
