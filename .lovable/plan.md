# Fatima Baig Portfolio

## Goal
Replace the starter screen with a polished, responsive one-page portfolio for Fatima Baig. Preserve only details verified from the current published portfolio, and mark missing certificate or resume details as editable placeholders.

## Experience
- Build a dark editorial visual system: ink-black surfaces, warm ivory text, restrained copper accents, fine rules, oversized serif display type, and crisp sans-serif body text.
- Add a sticky navigation bar with section links, a compact mobile menu, and a clear availability indicator.
- Create a strong opening view with Fatima’s name, software engineering focus, concise introduction, primary project link, resume action, and portrait from the existing portfolio when reusable.
- Structure the page into About, Education, Skills, Projects, Certifications, Resume, and Contact sections with strong visual hierarchy and subtle scroll/entrance motion.
- Present all six verified projects as detailed editorial cards, preserving the existing descriptions and labels without embellishing factual claims.
- Use the verified education, email, LinkedIn, and GitHub details from the current portfolio.
- For certifications and any unavailable downloadable resume file, show clearly editable content rather than inventing names, dates, issuers, or document links.

## Responsive and interaction details
- Use responsive grids and compact mobile typography so navigation, headings, project cards, and contact details remain readable without clipping.
- Respect reduced-motion preferences and provide visible keyboard focus states.
- Keep all interactions static-friendly: section navigation, external social links, email link, and resume handling only; no accounts, storage, or external APIs.

## Technical details
- Keep the existing TanStack Start structure and implement the portfolio at `/`.
- Define all palette, typography, shadow, and motion values as semantic tokens in the global stylesheet.
- Add page-specific title, description, Open Graph metadata, and Twitter card metadata.
- Replace the starter README with concise local development, production build, and GitHub Pages guidance, noting that TanStack Start output may require static export or an alternative static-host configuration for Pages.
- Record the static single-page architecture decision in `AGENTS.md`.
- Verify the resulting page in desktop and mobile browser sizes and check the preview build diagnostics.

## Assumptions
- The six current projects, three education entries, current bio, and contact profiles are approved source content.
- Certifications are not currently published, so this section will use explicit editable placeholders.
- If no downloadable resume file is available from the reference, the resume area will be complete visually but its download control will clearly state that a PDF needs to be added.
