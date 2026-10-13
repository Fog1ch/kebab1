import { ArrowUpRight, Bike, ShoppingBag } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import MapPreview from "@/components/ui/MapPreview";
import { BUSINESS } from "@/lib/constants";
export default function DeliveryInfo() {
  return (
    <SectionWrapper id="dostawa" className="delivery-section">
      <div className="two-column">
        <div>
          <p className="eyebrow">TY WYBIERASZ MIEJSCE</p>
          <h2>
            My zajmiemy się
            <br />
            <em>dobrym jedzeniem.</em>
          </h2>
          <p className="section-lead">
            Przerwa w pracy, wieczór z przyjaciółmi czy obiad w domu? Jesteśmy
            blisko.
          </p>
          <div className="delivery-option">
            <ShoppingBag aria-hidden="true" />
            <div>
              <h3>Samoobsługa i odbiór osobisty</h3>
              <p>Wpadnij na ul. 1 Maja 31B/III. Zadzwoń, aby ustalić odbiór.</p>
            </div>
          </div>
          <div className="delivery-option">
            <Bike aria-hidden="true" />
            <div>
              <h3>Dostawa pod Twoje drzwi</h3>
              <p>
                Zamów przez Glovo. Cenę, czas i zasięg dostawy zobaczysz po
                wpisaniu adresu.
              </p>
            </div>
          </div>
          <Button href={BUSINESS.glovo}>
            Zamów przez <span className="glovo-word">Glovo</span>
            <ArrowUpRight size={19} />
          </Button>
          <p className="small delivery-note">
            Promocje i darmowa dostawa zależą od aktualnej oferty Glovo.
          </p>
        </div>
        <MapPreview />
      </div>
    </SectionWrapper>
  );
}
