import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export default function SectionWrapper({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <section className={cn("section", className)} {...props}>
      <div className="container">{children}</div>
    </section>
  );
}
