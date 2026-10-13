"use client";
import { useEffect, useState } from "react";
import { Pizza } from "lucide-react";
export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 700);
    return () => clearTimeout(t);
  }, []);
  return visible ? (
    <div className="loading-chip" role="status">
      <Pizza size={20} aria-hidden="true" />
      <span>
        <strong>POLAT ANTALYA</strong> Ładowanie…
      </span>
    </div>
  ) : null;
}
