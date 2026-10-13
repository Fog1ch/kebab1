import Image from "next/image";
const images = [
  {
    src: "/images/gemuse.jpg",
    alt: "Gemüse Kebab z warzywami",
    label: "Gemüse Kebab",
  },
  {
    src: "/images/pide.jpg",
    alt: "Turecki placek pide",
    label: "Tureckie pide",
  },
  {
    src: "/images/interior.svg",
    alt: "Ilustracyjny placeholder zdjęcia wnętrza restauracji",
    label: "Wnętrze · miejsce na zdjęcie",
  },
  {
    src: "/images/team.svg",
    alt: "Ilustracyjny placeholder zdjęcia zespołu",
    label: "Zespół · miejsce na zdjęcie",
  },
  { src: "/images/tortilla.jpg", alt: "Tortilla Mega", label: "Tortilla Mega" },
  { src: "/images/pizza.jpg", alt: "Pizza Kebab z menu", label: "Pizza Kebab" },
  {
    src: "/images/ingredients.svg",
    alt: "Ilustracyjny placeholder zdjęcia składników",
    label: "Składniki · miejsce na zdjęcie",
  },
  {
    src: "/images/kitchen.svg",
    alt: "Ilustracyjny placeholder zdjęcia kuchni",
    label: "Kuchnia · miejsce na zdjęcie",
  },
];
export default function Gallery({ expanded = false }: { expanded?: boolean }) {
  return (
    <div className={`gallery ${expanded ? "gallery-expanded" : ""}`}>
      {images.slice(0, expanded ? 8 : 4).map((item, i) => (
        <figure key={item.src}>
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width:600px) 50vw, 25vw"
          />
          <figcaption>
            <span>0{i + 1}</span>
            {item.label}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
