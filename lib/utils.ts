export function cn(...values: (string | false | undefined | null)[]) {
  return values.filter(Boolean).join(" ");
}
export const formatPrice = (value: number) =>
  new Intl.NumberFormat("pl-PL", { style: "currency", currency: "PLN" }).format(
    value,
  );
export function normalizeSearch(value: string) {
  return value
    .toLocaleLowerCase("pl-PL")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ł/g, "l")
    .trim();
}
