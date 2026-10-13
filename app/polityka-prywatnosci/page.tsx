import PageIntro from "@/components/ui/PageIntro";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { BUSINESS } from "@/lib/constants";
export const metadata = {
  title: "Polityka prywatności",
  robots: { index: false, follow: true },
  alternates: { canonical: "/polityka-prywatnosci" },
};
export default function Privacy() {
  return (
    <>
      <PageIntro
        eyebrow="Informacje"
        title="Polityka"
        accent="prywatności."
        description="Informacja o działaniu wersji demonstracyjnej strony."
      />
      <SectionWrapper className="legal-copy">
        <h2>Wersja demonstracyjna</h2>
        <p>
          To projekt strony. Przed publicznym uruchomieniem właściciel musi
          uzupełnić pełne dane administratora, podstawy i okresy przetwarzania
          oraz informacje dotyczące dostawców hostingu i praw użytkownika. Ten
          tekst nie jest kompletną polityką produkcyjną.
        </p>
        <h2>Formularz</h2>
        <p>
          Formularz sprawdza dane wyłącznie w przeglądarce. Nie przesyła ich na
          serwer i nie zapisuje w lokalnej pamięci. Opcjonalny link e-mail
          otwiera program pocztowy z przygotowaną wiadomością; użytkownik sam
          decyduje o wysłaniu.
        </p>
        <h2>Usługi zewnętrzne</h2>
        <p>
          Linki Glovo, Google i profile społecznościowe prowadzą do odrębnych
          usług. Mapa Google wczytuje się dopiero po naciśnięciu przycisku.
          Wtedy Google otrzymuje połączenie z Twojej przeglądarki. Serwis nie
          zawiera własnych narzędzi analitycznych ani reklamowych.
        </p>
        <h2>Kontakt</h2>
        <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
      </SectionWrapper>
    </>
  );
}
