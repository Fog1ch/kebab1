import { Leaf, Flame, Bike, ArrowUpRight } from "lucide-react";
import PageIntro from "@/components/ui/PageIntro";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Gallery from "@/components/ui/Gallery";
import Button from "@/components/ui/Button";
import { pageMetadata } from "@/lib/metadata";
import { BUSINESS } from "@/lib/constants";
export const metadata = pageMetadata(
  "O nas",
  "Poznaj Polat Antalya: tureckie korzenie, kebab, pizza i pide w sercu Oławy.",
  "/o-nas",
);
export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="O nas"
        title="Tureckie korzenie."
        accent="Lokalny apetyt."
        description="Polat Antalya Kebab & Pizza — miejsce spotkań przy dobrym jedzeniu."
      />
      <SectionWrapper>
        <div className="about-intro">
          <div>
            <p className="eyebrow">POLAT ANTALYA · OŁAWA</p>
            <h2>
              Historia, którą
              <br />
              <em>piszemy przy stole.</em>
            </h2>
          </div>
          <div>
            <p>
              Za Polat Antalya stoi Ercan Polat. Tureckie korzenie restauracji
              są obecne w jej menu: w kebabie, drożdżowym pide i lahmacunie.
              Obok nich znajdziesz pizzę i ulubione dodatki.
            </p>
            <p>
              Naszym miejscem jest Oława, przy ul. 1 Maja 31B/III. Możesz wpaść,
              odebrać jedzenie lub skorzystać z dostawy przez Glovo.
            </p>
            <p>
              Warto spróbować pide z kebabem — tureckiego placka z mięsem, serem
              i cebulą — albo Gemüse Kebab z warzywami i fetą.
            </p>
            <Button href="/menu" variant="secondary">
              Poznaj nasze dania <ArrowUpRight size={18} />
            </Button>
          </div>
        </div>
        <Gallery expanded />
      </SectionWrapper>
      <SectionWrapper className="philosophy">
        <p className="eyebrow">NASZA FILOZOFIA</p>
        <h2>
          Prosto. Smacznie. <em>Po naszemu.</em>
        </h2>
        <div className="pillar-grid">
          {[
            {
              icon: Leaf,
              title: "Świeże składniki",
              text: "Warzywa, aromatyczne dodatki i właściwe proporcje. Zapytaj nas o skład wybranego dania i alergeny.",
            },
            {
              icon: Flame,
              title: "Tradycyjne receptury",
              text: "Tureckie inspiracje w kebabie, pide i lahmacunie. Wybierz klasykę albo odkryj coś nowego.",
            },
            {
              icon: Bike,
              title: "Szybka dostawa",
              text: "Wygodne zamawianie przez Glovo. Aktualny czas dostawy poznasz po podaniu adresu.",
            },
          ].map((p) => (
            <article key={p.title}>
              <p.icon size={32} />
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div className="visit-banner">
          <div>
            <p className="eyebrow">ZAPRASZAMY DO STOŁU</p>
            <h2>
              Wpadnij na <em>coś dobrego.</em>
            </h2>
            <p>{BUSINESS.address}</p>
          </div>
          <Button href={BUSINESS.directions}>
            Jak dojechać <ArrowUpRight size={18} />
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
