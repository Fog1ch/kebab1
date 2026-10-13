import Image from "next/image";
import { ArrowUpRight, ArrowDown, MapPin, Clock, Flame } from "lucide-react";
import Button from "@/components/ui/Button";
import { BUSINESS } from "@/lib/constants";
export default function Hero() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-texture" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy fade-up">
            <div className="eyebrow light">
              <span />
              TROCHĘ TURCJI. DUŻO SMAKU.
            </div>
            <h1 id="hero-title">
              <span>Polat Antalya</span>
              <em>Kebab & Pizza</em>
            </h1>
            <p className="hero-subtitle">
              Autentyczna turecka kuchnia w Oławie
            </p>
            <p className="hero-description">
              Soczysty kebab, pizza prosto z pieca i tureckie pide. Znajdź swój
              ulubiony smak — na miejscu lub u siebie.
            </p>
            <div className="hero-buttons">
              <Button href={BUSINESS.glovo}>
                Zamów online <ArrowUpRight size={19} aria-hidden="true" />
              </Button>
              <Button href="#menu" variant="outline">
                Zobacz menu <ArrowDown size={18} aria-hidden="true" />
              </Button>
            </div>
            <div className="hero-hours">
              <Clock size={16} aria-hidden="true" />
              <span>
                Pon–sob 10:00–20:30 <i /> Niedz 13:30–20:30
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-orbit" />
            <span className="hero-note">
              Dobry wybór.
              <br />
              <em>Dobry apetyt.</em>
            </span>
            <div className="hero-photo">
              <Image
                src="/images/gemuse.jpg"
                alt="Gemüse Kebab z mięsem, warzywami i fetą z menu Polat Antalya"
                fill
                priority
                sizes="(max-width:767px) 85vw, 50vw"
              />
            </div>
            <div className="hero-stamp">
              <Flame size={23} />
              <span>
                KEBAB
                <br />Z CHARAKTEREM
              </span>
            </div>
            <div className="hero-dish">
              <span>POZNAJ GEMÜSE KEBAB</span>
              <strong>Twój nowy ulubiony.</strong>
              <span className="hero-price">
                36,00 zł <ArrowUpRight size={20} />
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="info-strip">
        <div className="container">
          <span>
            <MapPin size={17} />
            {BUSINESS.street}, Oława
          </span>
          <span>
            <Flame size={17} />
            Kebab · Pizza · Pide
          </span>
          <a href={BUSINESS.glovo}>
            Dostawa przez Glovo <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </>
  );
}
