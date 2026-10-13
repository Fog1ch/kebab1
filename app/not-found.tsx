import Button from "@/components/ui/Button";
export default function NotFound() {
  return (
    <section className="container not-found">
      <p className="eyebrow">404 · NIE MA TEGO W MENU</p>
      <h1>
        Ta strona <em>zniknęła ze stołu.</em>
      </h1>
      <p>Ale coś dobrego na pewno się znajdzie.</p>
      <Button href="/menu">Przejdź do menu</Button>
    </section>
  );
}
