# DoorBangers design notes

## Direction

Reading this as a recruiting website for relationship-minded salespeople, with bold editorial typography and a friendly neighborhood illustration. Native HTML + compiled Tailwind, an aesthetic implementation rather than a packaged component system.

Taste guidance: https://github.com/Leonxlnx/taste-skill/blob/main/skills/taste-skill/SKILL.md (read September 20, 2026). User instruction overrides the skill's React/Next.js defaults.

DESIGN_VARIANCE: 6. Asymmetric hero, varied compositions, restrained framing.
MOTION_INTENSITY: 3. Short hero entrance and button feedback, no scrolling effects, with reduced-motion support.
VISUAL_DENSITY: 4. Readable content with complete, always-visible biographies.

## Existing site audit

The previous versions are index2.html and team2.html. At task start the former index.html and team.html were deleted in the working tree. Preserve alternate versions and create new entry pages. Keep homepage/team routes, navigation labels (The work / The people), section anchors, wordmark treatment, direct conversational voice, and orange brand accent.

Existing visual language: Barlow Condensed, Arial, warm paper, black ink, bright orange, newspaper rules. Dependencies: browser Tailwind CDN and external Google Fonts. Retire placeholder photography, fictional portraits, numbered labels, decorative tally marks, and runtime CDN dependencies. No functioning application endpoint, legal copy, or analytics existed. Preserve benefit amounts and eligibility language from the new brief.

## Implementation

Self-hosted Barlow Condensed and DM Sans. One orange accent with theme-aware contrast. Three-pixel corners on framed surfaces and buttons. Sitewide light/dark mode follows system preference. Native details elements provide keyboard-accessible mobile navigation. Biographies display in full without interaction or JavaScript. Full biographies and quotes are preserved; their length takes priority over Taste's generic short-quote limit. The text-led leadership page does not invent missing portraits.

## Asset provenance

assets/porch-illustration.png was generated using the built-in imagegen tool. It is a conceptual illustration, not a photograph of actual employees or customers. The final prompt is in docs/porch-image-prompt.txt. Existing portraits are retained unchanged but not used in this version.

## Application destination

No recruiting address or application URL was supplied. CTAs navigate to the role description and leadership page. No mock submission flow, invented address, or success message is used.
