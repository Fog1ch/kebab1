import SectionWrapper from "@/components/ui/SectionWrapper";
import Accordion from "@/components/ui/Accordion";
import { FAQ } from "@/data/faq";
import { BUSINESS } from "@/lib/constants";
export default function FAQSection() {
  return (
    <SectionWrapper className="faq-section">
      <div className="faq-layout">
        <div>
          <p className="eyebrow">WARTO WIEDZIEĆ</p>
          <h2>
            Mały głód
            <br />
            <em>odpowiedzi?</em>
          </h2>
          <p>
            Nie znajdujesz odpowiedzi?
            <br />
            Po prostu do nas zadzwoń.
          </p>
          <a className="text-link" href={BUSINESS.phoneHref}>
            {BUSINESS.phone}
          </a>
        </div>
        <Accordion items={FAQ} />
      </div>
    </SectionWrapper>
  );
}
