import Link from "next/link";
export default function PageIntro({
  eyebrow,
  title,
  accent,
  description,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
}) {
  return (
    <header className="page-intro">
      <div className="container">
        <div className="breadcrumbs">
          <Link href="/">Strona główna</Link>
          <span>/</span>
          <span>{eyebrow}</span>
        </div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>
          {title} <em>{accent}</em>
        </h1>
        <p>{description}</p>
      </div>
    </header>
  );
}
