"use client";
import { useId, useState } from "react";
import { ArrowUpRight, Search, X } from "lucide-react";
import { CATEGORIES, MENU, type Category } from "@/data/menu";
import { normalizeSearch } from "@/lib/utils";
import { BUSINESS } from "@/lib/constants";
import MenuItemCard from "@/components/ui/MenuItemCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
const homeCategories: Category[] = CATEGORIES.filter((c) => c !== "Sałatki");
export default function MenuSection({ full = false }: { full?: boolean }) {
  const [category, setCategory] = useState<Category>("Bestsellery");
  const [query, setQuery] = useState("");
  const id = useId();
  const matches = MENU.filter((item) =>
    normalizeSearch(item.name).includes(normalizeSearch(query)),
  );
  const filtered = (cat: Category) =>
    matches.filter((i) =>
      cat === "Bestsellery" ? i.badge === "Bestseller" : i.category === cat,
    );
  return (
    <SectionWrapper
      id="menu"
      className={full ? "full-menu" : "menu-section"}
      aria-labelledby={`${id}-heading`}
    >
      {!full && (
        <div className="section-heading">
          <div>
            <p className="eyebrow">DOBRY SMAK ZACZYNA SIĘ TUTAJ</p>
            <h2 id={`${id}-heading`}>
              Na co masz <em>ochotę?</em>
            </h2>
          </div>
          <Button href="/menu" variant="outline">
            Całe menu <ArrowUpRight size={18} />
          </Button>
        </div>
      )}
      {full && (
        <>
          <h2 className="sr-only" id={`${id}-heading`}>
            Wyszukaj danie w menu
          </h2>
          <div className="menu-search">
            <Search aria-hidden="true" />
            <label htmlFor={`${id}-search`} className="sr-only">
              Szukaj dania po nazwie
            </label>
            <input
              id={`${id}-search`}
              type="search"
              placeholder="Na co masz ochotę? Wpisz nazwę dania…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button
                className="icon-button"
                aria-label="Wyczyść wyszukiwanie"
                onClick={() => setQuery("")}
              >
                <X />
              </button>
            )}
          </div>
          <p className="search-count" role="status">
            Znaleziono dań: {matches.length}
          </p>
          <nav className="category-jumps" aria-label="Kategorie menu">
            {CATEGORIES.filter((c) => filtered(c).length > 0).map((c) => (
              <a key={c} href={`#category-${CATEGORIES.indexOf(c)}`}>
                {c}
              </a>
            ))}
          </nav>
        </>
      )}
      {!full && (
        <div className="menu-tabs" role="tablist" aria-label="Kategorie menu">
          {homeCategories.map((cat, i) => (
            <button
              key={cat}
              role="tab"
              id={`${id}-tab-${i}`}
              aria-selected={category === cat}
              aria-controls={`${id}-panel`}
              tabIndex={category === cat ? 0 : -1}
              onClick={() => setCategory(cat)}
              onKeyDown={(e) => {
                let index = i;
                if (e.key === "ArrowRight")
                  index = (i + 1) % homeCategories.length;
                else if (e.key === "ArrowLeft")
                  index =
                    (i - 1 + homeCategories.length) % homeCategories.length;
                else if (e.key === "Home") index = 0;
                else if (e.key === "End") index = homeCategories.length - 1;
                else return;
                e.preventDefault();
                setCategory(homeCategories[index]);
                document.getElementById(`${id}-tab-${index}`)?.focus();
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      )}
      {full ? (
        matches.length ? (
          CATEGORIES.map(
            (cat, i) =>
              filtered(cat).length > 0 && (
                <section
                  className="menu-category"
                  id={`category-${i}`}
                  key={cat}
                  aria-labelledby={`category-heading-${i}`}
                >
                  <div className="category-heading">
                    <h2 id={`category-heading-${i}`}>{cat}</h2>
                    <span>{filtered(cat).length} propozycji</span>
                  </div>
                  <div className="menu-grid">
                    {filtered(cat).map((item) => (
                      <MenuItemCard item={item} key={item.id} />
                    ))}
                  </div>
                </section>
              ),
          )
        ) : (
          <div className="empty-state">
            <Search size={40} />
            <h2>Nie znaleźliśmy tego dania.</h2>
            <p>Spróbuj innej nazwy, np. „kebab” lub „pide”.</p>
            <Button variant="secondary" onClick={() => setQuery("")}>
              Pokaż całe menu
            </Button>
          </div>
        )
      ) : (
        <div
          id={`${id}-panel`}
          role="tabpanel"
          aria-labelledby={`${id}-tab-${homeCategories.indexOf(category)}`}
          tabIndex={0}
        >
          <div className="menu-grid">
            {filtered(category)
              .slice(0, 6)
              .map((item) => (
                <MenuItemCard item={item} key={item.id} />
              ))}
          </div>
        </div>
      )}
      <div className="menu-footnote">
        <span>
          Ceny w PLN. Skład, alergeny i dostępność potwierdź przed zamówieniem.
        </span>
        <a href={BUSINESS.glovo}>
          Aktualne menu w Glovo <ArrowUpRight size={15} />
        </a>
      </div>
    </SectionWrapper>
  );
}
