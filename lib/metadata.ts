import type { Metadata } from "next";
import { SITE_URL, BUSINESS } from "./constants";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} – ${BUSINESS.name}`,
      description,
      url: SITE_URL + path,
      images: [
        {
          url: "/images/og-cover.png",
          width: 1200,
          height: 630,
          alt: BUSINESS.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-cover.png"],
    },
  };
}
