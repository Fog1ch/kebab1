import { writeFileSync, mkdirSync } from "node:fs";
import nextEnv from "@next/env";
nextEnv.loadEnvConfig(process.cwd());
const url = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://polatantalya.pl"
).replace(/\/$/, "");
const escape = (s) =>
  s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll('"', "&quot;");
new URL(url);
mkdirSync("public", { recursive: true });
writeFileSync(
  "public/sitemap.xml",
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
    ["/", "/menu", "/o-nas", "/dostawa"]
      .map((p) => `<url><loc>${escape(url + p)}</loc></url>`)
      .join("") +
    "</urlset>\n",
);
writeFileSync(
  "public/robots.txt",
  `User-agent: *\nAllow: /\nSitemap: ${url}/sitemap.xml\n`,
);
