import { ArrowUpRight } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
export default function StickyOrder() {
  return (
    <div className="sticky-order">
      <a className="btn btn-primary" href={BUSINESS.glovo}>
        Zamów online <ArrowUpRight size={19} aria-hidden="true" />
      </a>
    </div>
  );
}
