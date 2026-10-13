export type ContactValues = {
  name: string;
  phone: string;
  email: string;
  message: string;
};
export function validateContact(values: ContactValues) {
  const errors: Partial<Record<keyof ContactValues, string>> = {};
  if (values.name.trim().length < 2)
    errors.name = "Podaj imię (co najmniej 2 znaki).";
  if (
    !/^[+\d\s()-]{7,22}$/.test(values.phone) ||
    values.phone.replace(/\D/g, "").length < 7
  )
    errors.phone = "Podaj poprawny numer telefonu.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "Podaj poprawny adres e-mail.";
  if (values.message.trim().length < 10)
    errors.message = "Wpisz wiadomość (co najmniej 10 znaków).";
  return errors;
}
