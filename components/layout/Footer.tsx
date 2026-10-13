import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Logo />
            <p>
              Tureckie smaki w sercu Oławy.
              <br />
              Kebab, pizza i coś więcej.
            </p>
            <a className="footer-glovo" href={BUSINESS.glovo}>
              Zamów przez Glovo <ArrowUpRight size={16} />
            </a>
          </div>
          <div>
            <h2>Na skróty</h2>
            {NAV_LINKS.map((l) => (
              <Link href={l.href} key={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
          <div>
            <h2>Wpadnij do nas</h2>
            <p>
              {BUSINESS.street}
              <br />
              {BUSINESS.postcode} {BUSINESS.city}
            </p>
            <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>
            <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
          </div>
          <div>
            <h2>Godziny otwarcia</h2>
            {BUSINESS.hours.map((h) => (
              <p key={h.short}>
                {h.short}
                <br />
                <strong>{h.time}</strong>
              </p>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Polat Antalya Kebab & Pizza</p>
          <div>
            <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
            <Link href="/regulamin">Regulamin</Link>
          </div>
          <span>Z Oławy. Z apetytem.</span>
        </div>
      </div>
    </footer>
  );
}
