"use client";
import { useState } from "react";
import { MapPin, ArrowUpRight } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
export default function MapPreview() {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="map-preview">
      {loaded ? (
        <iframe
          title="Mapa: Polat Antalya, ul. 1 Maja 31B, Oława"
          src="https://www.google.com/maps?q=Polat+Antalya+1+Maja+31B+Olawa&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="map-art">
          <span className="map-river" />
          <span className="map-street street-one" />
          <span className="map-street street-two" />
          <span className="map-street street-three" />
          <span className="map-label">OŁAWA</span>
          <span className="map-pin">
            <MapPin size={28} />
          </span>
          <div className="map-caption">
            <strong>Tu zaczyna się dobry smak.</strong>
            <span>ul. 1 Maja 31B/III</span>
          </div>
        </div>
      )}
      <div className="map-actions">
        <a href={BUSINESS.directions}>
          Jak dojechać <ArrowUpRight size={17} />
        </a>
        {!loaded && (
          <button onClick={() => setLoaded(true)}>Wczytaj mapę Google</button>
        )}
      </div>
      {!loaded && (
        <p className="map-disclosure">
          Wczytanie mapy łączy z Google. Schemat powyżej jest ilustracyjny.
        </p>
      )}
    </div>
  );
}
