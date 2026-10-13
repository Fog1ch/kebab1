import Link from "next/link";
import { Flame } from "lucide-react";
export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Polat Antalya — strona główna">
      <span className="logo-mark">
        <Flame size={27} aria-hidden="true" />
      </span>
      <span>
        POLAT ANTALYA<small>KEBAB & PIZZA · OŁAWA</small>
      </span>
    </Link>
  );
}
