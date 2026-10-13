import { describe, it, expect } from "vitest";
import { render, screen, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axe from "axe-core";
import MenuSection from "@/components/sections/MenuSection";
import ContactSection from "@/components/sections/ContactSection";
import Accordion from "@/components/ui/Accordion";
import Navbar from "@/components/layout/Navbar";
import MapPreview from "@/components/ui/MapPreview";
import { FAQ } from "@/data/faq";
import { validateContact } from "@/lib/contact";

describe("Menu browsing", () => {
  it("switches categories and exposes the associated tab panel to assistive technology", async () => {
    const u = userEvent.setup();
    render(<MenuSection />);
    expect(screen.getByRole("tab", { name: "Bestsellery" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    await u.click(screen.getByRole("tab", { name: "Pide" }));
    const panel = screen.getByRole("tabpanel", { name: "Pide" });
    expect(
      within(panel).getByRole("heading", { name: "Pide z kebabem" }),
    ).toBeInTheDocument();
    expect(
      within(panel).queryByRole("heading", { name: "Tortilla Mega" }),
    ).not.toBeInTheDocument();
    expect(
      within(panel).getByRole("link", { name: /Zamów Pide z kebabem/ }),
    ).toHaveAttribute("href", expect.stringContaining("glovoapp.com"));
  });
  it("supports keyboard arrows, Home and End without tabbing through every category", async () => {
    const u = userEvent.setup();
    render(<MenuSection />);
    screen.getByRole("tab", { name: "Bestsellery" }).focus();
    await u.keyboard("{ArrowRight}");
    expect(screen.getByRole("tab", { name: "Kebab" })).toHaveFocus();
    await u.keyboard("{End}");
    expect(screen.getByRole("tab", { name: "Napoje" })).toHaveFocus();
    await u.keyboard("{Home}");
    expect(screen.getByRole("tab", { name: "Bestsellery" })).toHaveFocus();
  });
  it("searches across categories, tolerates Polish diacritics, and recovers from empty results", async () => {
    const u = userEvent.setup();
    render(<MenuSection full />);
    const input = screen.getByRole("searchbox");
    await u.type(input, "SALATKA");
    expect(screen.getByRole("status")).toHaveTextContent("3");
    expect(
      screen.getByRole("heading", { name: "Sałatka z kebabem" }),
    ).toBeInTheDocument();
    await u.clear(input);
    await u.type(input, "zzzz");
    expect(
      screen.getByRole("heading", { name: "Nie znaleźliśmy tego dania." }),
    ).toBeInTheDocument();
    await u.click(screen.getByRole("button", { name: "Pokaż całe menu" }));
    expect(input).toHaveValue("");
    expect(
      screen.getByRole("heading", { name: "Pizza Diablo" }),
    ).toBeInTheDocument();
  });
  it("has valid tab names and relationships in the DOM accessibility audit", async () => {
    const { container } = render(
      <main>
        <MenuSection />
      </main>,
    );
    const result = await axe.run(container, {
      rules: { "color-contrast": { enabled: false } },
    });
    expect(result.violations).toEqual([]);
  });
});
describe("FAQ", () => {
  it("opens and closes answers with keyboard and exposes expanded state", async () => {
    const u = userEvent.setup();
    render(<Accordion items={FAQ} />);
    const second = screen.getByRole("button", { name: /Ile kosztuje dostawa/ });
    second.focus();
    await u.keyboard("{Enter}");
    expect(second).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByRole("region", { name: /Ile kosztuje dostawa/ }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("region", { name: /Co mogę zamówić/ }),
    ).not.toBeInTheDocument();
    await u.keyboard(" ");
    expect(second).toHaveAttribute("aria-expanded", "false");
  });
});
describe("Contact form", () => {
  it("rejects incomplete input, focuses the first error and never reports a sent message", async () => {
    const u = userEvent.setup();
    render(<ContactSection />);
    await u.click(screen.getByRole("button", { name: /Wyślij wiadomość/ }));
    await waitFor(() => expect(screen.getByLabelText(/Imię/)).toHaveFocus());
    expect(screen.getByLabelText(/Telefon/)).toHaveAttribute(
      "aria-invalid",
      "true",
    );
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });
  it("validates data, announces demo completion and prepares a user-controlled email", async () => {
    const u = userEvent.setup();
    render(<ContactSection />);
    await u.type(screen.getByLabelText(/Imię/), "Jan");
    await u.type(screen.getByLabelText(/Telefon/), "+48 730 200 765");
    await u.type(screen.getByLabelText(/^E-mail/), "jan@example.com");
    await u.type(screen.getByLabelText(/Wiadomość/), "Pytanie o skład dania.");
    await u.click(screen.getByRole("button", { name: /Wyślij wiadomość/ }));
    expect(screen.getByRole("status")).toHaveTextContent(
      "wiadomość nie została wysłana",
    );
    const href = screen
      .getByRole("link", { name: "Otwórz wiadomość w programie pocztowym" })
      .getAttribute("href")!;
    expect(decodeURIComponent(href)).toContain("Pytanie o skład dania.\n\nJan");
    await u.type(screen.getByLabelText(/Wiadomość/), " Zmiana.");
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });
  it("rejects whitespace-only names, malformed emails and phone punctuation without digits", () => {
    const errors = validateContact({
      name: "  ",
      email: "jan@",
      phone: "-------",
      message: "  short ",
    });
    expect(Object.keys(errors)).toHaveLength(4);
  });
  it("has associated labels and no DOM accessibility violations", async () => {
    const { container } = render(
      <main>
        <ContactSection />
      </main>,
    );
    const result = await axe.run(container, {
      rules: { "color-contrast": { enabled: false } },
    });
    expect(result.violations).toEqual([]);
  });
});
describe("Mobile navigation and maps", () => {
  it("opens a modal, locks background scrolling, then closes on a navigation choice", async () => {
    const u = userEvent.setup();
    render(<Navbar />);
    await u.click(screen.getByRole("button", { name: "Otwórz menu" }));
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("open");
    expect(document.body.style.overflow).toBe("hidden");
    await u.click(within(dialog).getByRole("link", { name: /O nas/ }));
    expect(dialog).not.toHaveAttribute("open");
    expect(document.body.style.overflow).toBe("");
  });
  it("closes via the explicit close control", async () => {
    const u = userEvent.setup();
    render(<Navbar />);
    await u.click(screen.getByRole("button", { name: "Otwórz menu" }));
    await u.click(screen.getByRole("button", { name: "Zamknij menu" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
  it("does not embed Google until the visitor chooses to load the map", async () => {
    const u = userEvent.setup();
    const { container } = render(<MapPreview />);
    expect(container.querySelector("iframe")).toBeNull();
    await u.click(screen.getByRole("button", { name: "Wczytaj mapę Google" }));
    expect(screen.getByTitle(/Mapa: Polat Antalya/)).toHaveAttribute(
      "src",
      expect.stringContaining("google.com/maps"),
    );
  });
});
