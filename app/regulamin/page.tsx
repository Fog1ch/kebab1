import PageIntro from "@/components/ui/PageIntro";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { BUSINESS } from "@/lib/constants";
export const metadata = {
  title: "Regulamin",
  robots: { index: false, follow: true },
  alternates: { canonical: "/regulamin" },
};
export default function Terms() {
  return (
    <>
      <PageIntro
        eyebrow="Informacje"
        title="Zasady"
        accent="korzystania."
        description="Informacje o wersji demonstracyjnej i zamawianiu przez Glovo."
      />
      <SectionWrapper className="legal-copy">
        <h2>Charakter strony</h2>
        <p>
          Strona przedstawia menu i dane kontaktowe. Nie prowadzi sprzedaży, nie
          przyjmuje płatności ani zamówień. Formularz kontaktowy jest
          demonstracyjny.
        </p>
        <h2>Zamówienia</h2>
        <p>
          Zamówienia online są składane w Glovo zgodnie z warunkami tej usługi.
          Ceny, dostępność dań, czas dostawy i opłaty należy potwierdzić przed
          zakupem. W sprawie odbioru osobistego skontaktuj się z restauracją.
        </p>
        <h2>Skład i alergeny</h2>
        <p>
          Opisy menu są skrócone. Przed zamówieniem zapytaj restaurację o
          składniki i alergeny. Zdjęcia przedstawiają wybrane pozycje; oznaczone
          ilustracje w galerii są placeholderami.
        </p>
        <h2>Przed publicznym uruchomieniem</h2>
        <p>
          Właściciel powinien zatwierdzić dane firmy, treści oraz właściwe
          zasady świadczenia usług. Ten tekst opisuje demonstrację i wymaga
          uzupełnienia dla docelowego serwisu.
        </p>
        <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>
      </SectionWrapper>
    </>
  );
}
