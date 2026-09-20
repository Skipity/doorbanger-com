# Validation

Checked locally on September 20, 2026 using headless Chrome and a Python static server.

- `npm run build`: passes; production CSS compiled with Tailwind 4.3.3.
- `node --check assets/site.js`: passes.
- `git diff --check`: passes.
- Both pages checked at widths 320, 390, 768, 1024, and 1440px: no horizontal overflow, broken images, invalid local section anchors, or browser errors.
- Axe automated accessibility checks at 390 and 1440px in light and dark themes: no violations after fixes.
- Mobile menu opens, closes with Escape, and returns focus to its summary.
- All three biography disclosures open correctly. Navigation and biographies also work with JavaScript disabled.
- Desktop, mobile, and dark-theme screenshots inspected visually.
- Final homepage Lighthouse scores: Performance 99, Accessibility 100, Best Practices 100, SEO 100. Lab LCP 2.1 seconds and CLS 0. These are local lab results, not production field measurements.

The generated source illustration is `assets/porch-illustration.png`; optimized WebP files at 640, 960, and 1536px provide responsive delivery. Image provenance and prompt are documented alongside this file.

No application endpoint was supplied, so there is no application submission flow to test. The website is built locally and has not been deployed to the live domain.
