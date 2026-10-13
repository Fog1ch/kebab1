"use client";
import { useId, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Instagram,
  Facebook,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import MapPreview from "@/components/ui/MapPreview";
import { BUSINESS } from "@/lib/constants";
import { validateContact, type ContactValues } from "@/lib/contact";
export default function ContactSection() {
  const id = useId();
  const [values, setValues] = useState<ContactValues>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactValues, string>>
  >({});
  const [success, setSuccess] = useState(false);
  const fields = [
    {
      key: "name",
      label: "Imię",
      type: "text",
      autoComplete: "given-name",
      placeholder: "Jak masz na imię?",
    },
    {
      key: "phone",
      label: "Telefon",
      type: "tel",
      autoComplete: "tel",
      placeholder: "Twój numer telefonu",
    },
    {
      key: "email",
      label: "E-mail",
      type: "email",
      autoComplete: "email",
      placeholder: "twoj@email.pl",
    },
    {
      key: "message",
      label: "Wiadomość",
      type: "text",
      autoComplete: "off",
      placeholder: "W czym możemy pomóc?",
    },
  ] as const;
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = validateContact(values);
    setErrors(next);
    if (Object.keys(next).length) {
      setSuccess(false);
      requestAnimationFrame(() =>
        document.getElementById(`${id}-${Object.keys(next)[0]}`)?.focus(),
      );
      return;
    }
    setSuccess(true);
  }
  return (
    <SectionWrapper id="kontakt" className="contact-section">
      <div className="two-column">
        <div>
          <p className="eyebrow">POROZMAWIAJMY</p>
          <h2>
            Masz pytanie?
            <br />
            <em>Jesteśmy blisko.</em>
          </h2>
          <p className="section-lead">
            O składniki, odbiór czy większe zamówienie. Napisz lub zadzwoń.
          </p>
          <form noValidate onSubmit={submit} aria-describedby={`${id}-notice`}>
            <p id={`${id}-notice`} className="form-notice">
              Formularz demonstracyjny — nie wysyła wiadomości. Aby się
              skontaktować, zadzwoń lub wyślij e-mail.
            </p>
            <div className="form-grid">
              {fields.map((field) => (
                <div
                  className={`form-field ${field.key === "email" || field.key === "message" ? "full-width" : ""}`}
                  key={field.key}
                >
                  <label htmlFor={`${id}-${field.key}`}>
                    {field.label} <span aria-hidden="true">*</span>
                  </label>
                  {field.key === "message" ? (
                    <textarea
                      id={`${id}-${field.key}`}
                      required
                      minLength={10}
                      maxLength={3000}
                      rows={4}
                      value={values[field.key]}
                      placeholder={field.placeholder}
                      aria-invalid={!!errors[field.key]}
                      aria-describedby={
                        errors[field.key]
                          ? `${id}-${field.key}-error`
                          : undefined
                      }
                      onChange={(e) => {
                        setSuccess(false);
                        setValues({ ...values, [field.key]: e.target.value });
                      }}
                    />
                  ) : (
                    <input
                      id={`${id}-${field.key}`}
                      required
                      type={field.type}
                      autoComplete={field.autoComplete}
                      maxLength={field.key === "name" ? 100 : 254}
                      value={values[field.key]}
                      placeholder={field.placeholder}
                      aria-invalid={!!errors[field.key]}
                      aria-describedby={
                        errors[field.key]
                          ? `${id}-${field.key}-error`
                          : undefined
                      }
                      onChange={(e) => {
                        setSuccess(false);
                        setValues({ ...values, [field.key]: e.target.value });
                      }}
                    />
                  )}
                  {errors[field.key] && (
                    <span
                      className="field-error"
                      id={`${id}-${field.key}-error`}
                    >
                      {errors[field.key]}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <Button type="submit" variant="secondary">
              Wyślij wiadomość <ArrowUpRight size={19} />
            </Button>
            {success && (
              <div className="form-success" role="status">
                <CheckCircle2 size={20} />
                <div>
                  Dane są poprawne. To demonstracja — wiadomość nie została
                  wysłana.
                  <a
                    href={`mailto:${BUSINESS.email}?subject=${encodeURIComponent("Wiadomość ze strony Polat Antalya")}&body=${encodeURIComponent(`${values.message}\n\n${values.name}\nTel.: ${values.phone}\nE-mail: ${values.email}`)}`}
                  >
                    Otwórz wiadomość w programie pocztowym
                  </a>
                </div>
              </div>
            )}
          </form>
        </div>
        <div className="contact-details">
          <h3>Wpadnij. Zadzwoń. Smakuj.</h3>
          <a className="contact-line" href={BUSINESS.phoneHref}>
            <Phone />
            <span>
              <small>Zadzwoń do nas</small>
              <strong>{BUSINESS.phone}</strong>
            </span>
          </a>
          <a className="contact-line" href={`mailto:${BUSINESS.email}`}>
            <Mail />
            <span>
              <small>Napisz do nas</small>
              {BUSINESS.email}
            </span>
          </a>
          <a className="contact-line" href={BUSINESS.maps}>
            <MapPin />
            <span>
              <small>Znajdziesz nas tutaj</small>
              {BUSINESS.address}
            </span>
          </a>
          <div className="social-links">
            {BUSINESS.instagram && (
              <a href={BUSINESS.instagram}>
                <Instagram size={18} />
                Instagram
              </a>
            )}
            {BUSINESS.facebook && (
              <a href={BUSINESS.facebook}>
                <Facebook size={18} />
                Facebook
              </a>
            )}
            {!BUSINESS.instagram && !BUSINESS.facebook && (
              <p className="small">
                Oficjalne profile społecznościowe: linki wkrótce.
              </p>
            )}
          </div>
          <MapPreview />
        </div>
      </div>
    </SectionWrapper>
  );
}
