import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* ============================================================
   Mappa Winexciting (Leaflet + OpenStreetMap)
   - markers: [{ coord: [lat, lng], label, to?, attivo? }]
     · to     → percorso interno da aprire al click (es. "/regioni/italia/etna")
     · attivo → false = marker grigio "in arrivo" (default true)
   - center / zoom: vista finale
   - flyFrom: { center, zoom } → vista iniziale da cui la mappa
     "vola" verso center/zoom (l'effetto movimento)
   ============================================================ */
export default function Mappa({ markers = [], center, zoom, flyFrom, height = 440 }) {
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const map = L.map(ref.current, { scrollWheelZoom: false });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    if (flyFrom) {
      map.setView(flyFrom.center, flyFrom.zoom);
      const t = setTimeout(() => map.flyTo(center, zoom, { duration: 2.4 }), 700);
      map.once("unload", () => clearTimeout(t));
    } else {
      map.setView(center, zoom);
    }

    markers.forEach((m) => {
      const attivo = m.attivo !== false;
      const icon = L.divIcon({
        className: "",
        html: `<div style="width:18px;height:18px;border-radius:50%;background:${
          attivo ? "linear-gradient(135deg,#2E7D46,#B4D934)" : "#9BA396"
        };border:3px solid #F2F1EA;box-shadow:0 2px 8px rgba(29,33,28,0.45);cursor:${
          m.to ? "pointer" : "default"
        };"></div>`,
        iconSize: [18, 18],
        iconAnchor: [9, 9],
      });
      const mk = L.marker(m.coord, { icon }).addTo(map);
      mk.bindTooltip(m.label, { direction: "top", offset: [0, -10] });
      if (m.to) mk.on("click", () => navigate(m.to));
    });

    return () => map.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={ref}
      style={{
        height,
        borderRadius: 6,
        overflow: "hidden",
        position: "relative",
        zIndex: 0, // resta sotto l'header sticky
      }}
    />
  );
}
