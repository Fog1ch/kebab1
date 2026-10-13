import MenuSection from "@/components/sections/MenuSection";
import PageIntro from "@/components/ui/PageIntro";
import StickyOrder from "@/components/ui/StickyOrder";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Menu",
  "Zobacz pełne menu tureckiej kuchni w Oławie.",
  "/menu",
);
export default function MenuPage() {
  return (
    <div className="has-sticky-order">
      <PageIntro
        eyebrow="Nasze menu"
        title="Wybierz swój"
        accent="ulubiony smak."
        description="Od pierwszego kęsa kebaba po ostatni kawałek pizzy. Co dziś podamy?"
      />
      <MenuSection full />
      <StickyOrder />
    </div>
  );
}
