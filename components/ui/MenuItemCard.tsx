import Image from "next/image";
import { ArrowUpRight, UtensilsCrossed } from "lucide-react";
import type { MenuItem } from "@/data/menu";
import { BUSINESS } from "@/lib/constants";
import { cn, formatPrice } from "@/lib/utils";
import Badge from "./Badge";
export default function MenuItemCard({
  item,
  className,
}: {
  item: MenuItem;
  className?: string;
}) {
  return (
    <article className={cn("menu-card card", className)}>
      <div className="dish-image">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width:767px) 100vw, (max-width:1023px) 50vw, 33vw"
          />
        ) : (
          <div className="dish-placeholder">
            <UtensilsCrossed size={44} aria-hidden="true" />
            <span>POLAT ANTALYA</span>
          </div>
        )}
        {item.badge && <Badge>{item.badge}</Badge>}
      </div>
      <div className="dish-content">
        <span className="dish-category">
          {item.category}
          {item.size && ` / ${item.size}`}
        </span>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className="dish-bottom">
          <strong>{formatPrice(item.price)}</strong>
          <a
            href={BUSINESS.glovo}
            className="round-link"
            aria-label={`Zamów ${item.name} przez Glovo`}
          >
            <ArrowUpRight size={22} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
