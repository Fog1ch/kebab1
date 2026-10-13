# Validation report

Date: 2026-10-13. Runtime: Node 24.19.0, npm 11.9.0, Next.js 14.2.35.

## Executed

| Check | Result |
| --- | --- |
| Production compilation (`npm run build`) | Passed; content routes prerendered statically |
| TypeScript (`npm run typecheck` and Next.js build type checks) | Passed |
| Behavioral tests (`npm test`) | 12 passed |
| axe-core in jsdom | No violations in the tested menu and contact components; color-contrast rule excluded because jsdom has no layout engine |
| Generated HTML (`node scripts/check-built-pages.mjs`) | Six content routes passed: one H1, Polish language, main landmark, canonical URLs, descriptions, Restaurant JSON-LD, image assets and unique IDs |
| Internal links and anchors | Passed against generated HTML |
| Sitemap and robots | Passed; four indexable content routes in sitemap |
| Sampled text color pairs | Passed AA 4.5:1 threshold using WCAG relative luminance calculations |

Contrast: charcoal/yellow 10.97:1; muted text/off-white 5.71:1; form error text/input background 6.80:1; placeholder text/input background 4.82:1.

## Interaction coverage

- Category selection and the associated accessible tab panel.
- Keyboard navigation with Arrow keys, Home and End.
- Search across menu categories with Polish diacritics, empty-state recovery.
- Accordion keyboard activation and expanded/hidden accessibility states.
- Form errors, first-error focus, valid submission, honest demo status, editable mailto draft.
- Invalid whitespace-only name, email and phone values.
- Mobile dialog opening, background scroll lock, close button and closing on link selection.
- Deferred Google iframe creation after explicit activation.

## Verification limits

No supported browser-control capability was available in this environment. No browser preview, real viewport screenshots, screen-reader session, visual overflow audit or HTTP server smoke test was run. jsdom tests mock Next.js navigation/images and native dialog methods; they do not prove real-browser focus trapping, rendering, hydration or navigation. The production build proves compilation/prerendering, not end-to-end browser behavior.

Responsive CSS includes one/two/three-column menu layouts and adaptations for 320, 375, 768, 1024 and 1440 px. These breakpoints were reviewed in source, **not visually verified**. Before public launch, inspect those five widths, 200% zoom, landscape orientation, safe-area spacing and reduced-motion settings. Verify native dialog Escape/focus restoration and the reading order in VoiceOver or NVDA.

No form backend, payment flow, Vercel deployment, DNS change or live order was executed. Reviews, legal text and selected gallery images are explicitly marked demonstration content. Business details and current delivery offers require owner confirmation as documented in README.
