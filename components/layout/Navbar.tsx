"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X, ArrowUpRight } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    if (!open) return;
    const node = dialog.current;
    node?.showModal();
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      node?.close();
      document.body.style.overflow = original;
    };
  }, [open]);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <>
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="container nav-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Nawigacja główna">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button href={BUSINESS.phoneHref} className="nav-phone">
            <Phone size={16} aria-hidden="true" />
            {BUSINESS.phone}
          </Button>
          <button
            className="mobile-toggle icon-button"
            aria-label="Otwórz menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(true)}
          >
            <Menu aria-hidden="true" />
          </button>
        </div>
      </header>
      <dialog
        ref={dialog}
        id="mobile-navigation"
        className="mobile-dialog"
        aria-labelledby="mobile-title"
        onCancel={() => setOpen(false)}
        onClose={() => setOpen(false)}
      >
        <div className="mobile-top">
          <span id="mobile-title">POLAT ANTALYA</span>
          <button
            autoFocus
            className="icon-button"
            aria-label="Zamknij menu"
            onClick={() => setOpen(false)}
          >
            <X aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Nawigacja mobilna">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              <small>0{i + 1}</small>
              {link.label}
              <ArrowUpRight aria-hidden="true" />
            </Link>
          ))}
        </nav>
        <Button href={BUSINESS.phoneHref}>
          <Phone size={18} aria-hidden="true" />
          {BUSINESS.phone}
        </Button>
        <p>Autentyczny smak. Blisko Ciebie.</p>
      </dialog>
    </>
  );
}
