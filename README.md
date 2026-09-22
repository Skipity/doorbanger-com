# DoorBangers

A six-page static website with the original recruiting and team pages built from `Doorbangers Homepage.md` and `Doorbangers Leadership Bios.md`. Plain HTML, Tailwind CSS v4, and a small vanilla JavaScript enhancement for the mobile menu. No React, Next.js, or runtime framework.

## Preview

Open `index.html` directly, or run `npm run dev` and visit http://localhost:8000. Compiled CSS, fonts, and imagery are included; serving the site needs no npm installation or external CDN.

## Edit and build

```sh
npm ci
npm run build
```

Use `npm run watch` while editing HTML or `src/styles.css`. The build produces `assets/site.css`. Content is authored in HTML; the supplied markdown files remain the editorial source.

## Files

- `index.html`: recruiting story, benefits, and homeowner information.
- `team.html`: leadership quotes and complete, always-visible biographies.
- `approach.html`: culture, responsibility to homeowners, and the career we want reps to build.
- `why.html`: founder essay explaining the business thesis and what remains to be proved.
- `privacy.html` and `terms.html`: website privacy policy, request contacts, and terms.
- `src/styles.css`: Tailwind source, responsive components, and light/dark tokens.
- `assets/site.css`: compiled production stylesheet.
- `assets/site.js`: mobile menu dismissal, including Escape-key support.
- `assets/fonts/`: self-hosted Barlow Condensed and DM Sans, with licenses.
- `assets/porch-illustration.png`: original generated conceptual illustration.
- `docs/design.md`: Taste adaptation, source audit, and asset provenance.

The alternate `index2.html`, `team2.html`, original portrait assets, and supplied markdown files are preserved. Fictional leadership portraits are not presented as real people on the new website.

## Publishing

Upload `index.html`, `team.html`, `approach.html`, `why.html`, `privacy.html`, `terms.html`, `robots.txt`, `sitemap.xml`, and `assets/` to any static host. No Node server or client router is needed. Canonical and sharing URLs use https://doorbangers.com.

The site has no accounts, application form, analytics scripts, or browser storage. Hosting infrastructure receives request data, and visitors may send personal information through the listed email or telephone contacts. A real recruiting email or application URL is needed before adding a recruiting submission CTA. Benefit amounts and terms are reproduced from the supplied homepage brief.

## Editorial additions

Our Approach and Why DoorBangers develop the culture and business thesis from the founder brief. The original homepage and team content remain intact, with shared navigation expanded. New copy uses continuous, conversational prose and describes projected rep economics and expansion as goals to prove. The new pages use a responsive editorial layout with the existing fonts, colors, and light/dark themes.

Legal page scope and app-store requirements are documented in `docs/legal-scope.md`.
