import { ArrowUpRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import Gallery from "@/components/ui/Gallery";
import { BUSINESS } from "@/lib/constants";
export default function AboutSection() {
  return (
    <SectionWrapper id="o-nas" className="about-section">
      <div className="about-intro">
        <div>
          <p className="eyebrow">TURCJA W SERCU OŁAWY</p>
          <h2>
            Gościnność mamy
            <br />
            <em>w swoim menu.</em>
          </h2>
        </div>
        <div>
          <p>
            Polat Antalya to miejsce Ercana Polata, w którym spotykają się
            tureckie korzenie i apetyt na dobre jedzenie. Od kebaba po pide —
            zapraszamy do naszego stołu.
          </p>
          <Button href="/o-nas" variant="outline">
            Poznaj nas bliżej <ArrowUpRight size={18} />
          </Button>
        </div>
      </div>
      <Gallery />
      <div className="about-bottom">
        <div>
          <strong>Widzimy się przy 1 Maja.</strong>
          <p>{BUSINESS.street}, Oława</p>
          <a className="text-link" href={BUSINESS.directions}>
            Jak dojechać <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="hours-block">
          <h3>Godziny otwarcia</h3>
          {BUSINESS.hours.map((h) => (
            <p key={h.short}>
              <span>{h.short}</span>
              <strong>{h.time}</strong>
            </p>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
