import Hero from "@/components/sections/Hero";
import MenuSection from "@/components/sections/MenuSection";
import DeliveryInfo from "@/components/sections/DeliveryInfo";
import AboutSection from "@/components/sections/AboutSection";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
export default function Home() {
  return (
    <>
      <Hero />
      <MenuSection />
      <DeliveryInfo />
      <AboutSection />
      <Testimonials />
      <FAQSection />
      <ContactSection />
    </>
  );
}
