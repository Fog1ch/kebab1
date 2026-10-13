import { ArrowUpRight, Star } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { BUSINESS, UNVERIFIED_BRIEF } from "@/lib/constants";
const examples = [
  {
    name: "Gość 01",
    text: "Tutaj pojawi się autentyczna opinia o ulubionym daniu.",
  },
  {
    name: "Gość 02",
    text: "Miejsce na zweryfikowaną opinię o obsłudze i atmosferze.",
  },
  {
    name: "Gość 03",
    text: "Tutaj dodamy opinię klienta o zamówieniu z dostawą.",
  },
];
export default function Testimonials() {
  return (
    <SectionWrapper className="testimonials">
      <div className="section-heading">
        <div>
          <p className="eyebrow">PRZY NASZYM STOLE</p>
          <h2>
            Dobry smak.
            <br />
            <em>Twoja opinia.</em>
          </h2>
        </div>
        <Button href={BUSINESS.reviewUrl} variant="outline">
          Zostaw opinię <ArrowUpRight size={18} />
        </Button>
      </div>
      <div className="review-grid">
        {examples.map((r) => (
          <article className="review-card" key={r.name}>
            <span className="demo-label">
              Przykładowy układ — nie opinia klienta
            </span>
            <div className="stars" aria-label="Przykładowa ocena: 5 na 5">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  size={17}
                  fill="currentColor"
                  aria-hidden="true"
                />
              ))}
            </div>
            <p>{r.text}</p>
            <span>{r.name} · przykład</span>
          </article>
        ))}
      </div>
      <p className="small review-note">
        W materiale wyjściowym: {UNVERIFIED_BRIEF.recommendationPercent}%
        poleceń (dane niezweryfikowane).{" "}
        <a href={BUSINESS.glovo}>Sprawdź aktualne oceny w Glovo.</a>
      </p>
    </SectionWrapper>
  );
}
