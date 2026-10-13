import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
type Shared = {
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};
type Props = Shared &
  (
    | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
    | ({ href?: never } & ButtonHTMLAttributes<HTMLButtonElement>)
  );
export default function Button(props: Props) {
  const { variant = "primary", className, ...rest } = props;
  const classes = cn("btn", `btn-${variant}`, className);
  if ("href" in rest && rest.href)
    return (
      <Link
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
        href={rest.href}
        className={classes}
      />
    );
  return (
    <button
      type="button"
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      className={classes}
    />
  );
}
