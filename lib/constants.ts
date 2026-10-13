export const BUSINESS = {
  name: "Polat Antalya Kebab & Pizza",
  owner: "Ercan Polat",
  phone: "730 200 765",
  phoneHref: "tel:+48730200765",
  address: "ul. 1 Maja 31B/III, Oława, 55-200",
  street: "ul. 1 Maja 31B/III",
  city: "Oława",
  postcode: "55-200",
  email: "ercan1990.polat@gmail.com",
  hours: [
    { days: "Poniedziałek – sobota", short: "Pon–sob", time: "10:00–20:30" },
    { days: "Niedziela", short: "Niedz", time: "13:30–20:30" },
  ],
  glovo:
    "https://glovoapp.com/pl/pl/olawa/stores/polat-antalya-kebab-pizza-ola",
  maps: "https://www.google.com/maps/search/?api=1&query=Polat+Antalya+Kebab+Pizza+1+Maja+31B+O%C5%82awa",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=1+Maja+31B+O%C5%82awa",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
  reviewUrl:
    process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL ||
    "https://www.google.com/maps/search/?api=1&query=Polat+Antalya+Kebab+Pizza+O%C5%82awa",
};
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://polatantalya.pl"
).replace(/\/$/, "");
export const NAV_LINKS = [
  { href: "/menu", label: "Menu" },
  { href: "/o-nas", label: "O nas" },
  { href: "/dostawa", label: "Dostawa" },
  { href: "/#kontakt", label: "Kontakt" },
];
// Conflicting historical values from the supplied brief; deliberately not advertised as current offers.
export const UNVERIFIED_BRIEF = {
  heroDeliveryFeePLN: 5,
  deliveryFeePLN: 1.99,
  eta: "8–60 min",
  freeDeliveryThresholdPLN: 40,
  recommendationPercent: 86,
};
