import { ArrowUpRight, UtensilsCrossed, ShoppingBag, Bike } from "lucide-react";
import PageIntro from "@/components/ui/PageIntro";
import SectionWrapper from "@/components/ui/SectionWrapper";
import DeliveryInfo from "@/components/sections/DeliveryInfo";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import { pageMetadata } from "@/lib/metadata";
import { BUSINESS, UNVERIFIED_BRIEF } from "@/lib/constants";
import { DELIVERY_FAQ } from "@/data/faq";
export const metadata = pageMetadata(
  "Dostawa",
  "Zamów Polat Antalya przez Glovo. Sprawdź zasady dostawy i odbioru osobistego w Oławie.",
  "/dostawa",
);
export default function DeliveryPage() {
  return (
    <>
      <PageIntro
        eyebrow="Dostawa i odbiór"
        title="Twój adres."
        accent="Nasz smak."
        description="Ulubione dania z Polat Antalya tam, gdzie masz ochotę je zjeść."
      />
      <SectionWrapper>
        <p className="eyebrow">TRZY KROKI DO DOBREGO JEDZENIA</p>
        <h2>
          Zamów przez <em>Glovo.</em>
        </h2>
        <div className="steps-grid">
          {[
            {
              icon: UtensilsCrossed,
              title: "Wybierz dania",
              text: "Przejrzyj menu. Wybierz kebab, pizzę, pide i dodatki.",
            },
            {
              icon: ShoppingBag,
              title: "Złóż zamówienie",
              text: "Otwórz Glovo, podaj adres, sprawdź opłaty i potwierdź płatność.",
            },
            {
              icon: Bike,
              title: "Odbierz kuriera",
              text: "Śledź status w Glovo i przygotuj się na dobry posiłek.",
            },
          ].map((s, i) => (
            <article key={s.title}>
              <span className="step-index">0{i + 1}</span>
              <s.icon size={32} />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
        <Button href={BUSINESS.glovo}>
          Otwórz Glovo <ArrowUpRight size={19} />
        </Button>
      </SectionWrapper>
      <DeliveryInfo />
      <SectionWrapper>
        <div className="faq-layout">
          <div>
            <p className="eyebrow">BEZ NIESPODZIANEK</p>
            <h2>
              Zanim <em>zamówisz.</em>
            </h2>
            <p>
              Zasięg w Oławie i okolicy zależy od dokładnego adresu. Koszyk w
              Glovo pokazuje aktualne warunki przed płatnością.
            </p>
            <div className="source-note">
              <strong>Informacje z materiału wyjściowego</strong>
              <p>
                Od 1,99 PLN, czas {UNVERIFIED_BRIEF.eta}, darmowa dostawa
                powyżej 40 zł; osobno podano dostawę od 5 zł. Te rozbieżne dane
                nie są potwierdzoną ofertą. Sprawdź aktualne warunki w Glovo.
              </p>
            </div>
          </div>
          <Accordion items={DELIVERY_FAQ} />
        </div>
      </SectionWrapper>
    </>
  );
}
