import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import LoadingScreen from "@/components/ui/LoadingScreen";
import { BUSINESS, SITE_URL } from "@/lib/constants";
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});
const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-playfair",
});
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: BUSINESS.name + " – tureckie smaki w Oławie",
    template: "%s – " + BUSINESS.name,
  },
  description:
    "Kebab, pizza i tureckie pide w Oławie. Poznaj menu Polat Antalya, odwiedź nas przy ul. 1 Maja 31B/III lub zamów przez Glovo.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: BUSINESS.name,
    url: SITE_URL,
    title: BUSINESS.name,
    description: "Autentyczna turecka kuchnia w Oławie. Kebab, pizza i pide.",
    images: [
      {
        url: "/images/og-cover.png",
        width: 1200,
        height: 630,
        alt: BUSINESS.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: BUSINESS.name,
    description: "Tureckie smaki w sercu Oławy.",
    images: ["/images/og-cover.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1A1A1A",
};
const schema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: BUSINESS.name,
  url: SITE_URL,
  telephone: "+48730200765",
  email: BUSINESS.email,
  priceRange: "zł",
  servesCuisine: ["Turkish", "Pizza", "Kebab"],
  menu: SITE_URL + "/menu",
  image: SITE_URL + "/images/gemuse.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.street,
    addressLocality: BUSINESS.city,
    postalCode: BUSINESS.postcode,
    addressCountry: "PL",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "20:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "13:30",
      closes: "20:30",
    },
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Przejdź do treści
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <LoadingScreen />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
