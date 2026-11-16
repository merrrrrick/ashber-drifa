# Ashber & Drifa — Design System

## Surface
- Mode: Experience. The photographs and wedding memories are the product; the interface should recede.
- Purpose: A view-only digital wedding album for family and friends, organized into five chapters.
- Visual world: A contemporary heirloom album — the intimacy of a printed wedding book, the restraint of an archival photo journal, and the typographic confidence of a carefully typeset invitation. Do not imitate a generic wedding-template site.
- Audience: Guests and family browsing on phones, tablets and desktop screens. Make photographs immediate, readable and effortless to explore.

## Visual principles
1. Photography leads every important section. Never invent or substitute wedding photographs.
2. Keep the page quiet around the images: generous whitespace, restrained rules, flat surfaces and no decorative gradients, glass cards, floating badges or ornamental icon tiles.
3. Use asymmetry with a clear grid. Keep consistent outer edges and let one image or heading own each composition.
4. Do not place descriptive captions below gallery photographs. Chapter names may sit over their cover images as navigation labels.
5. Avoid repetitive card grids. Chapter covers use an intentional varied composition; gallery pages use a featured lead image or a different column rhythm where appropriate.
6. Preserve the five chapter routes, existing ImageKit paths and the single-wedding, view-only architecture.

## Tokens
- Paper: #F5F2EC
- Deep paper: #EAE5DC
- Ink: #292521
- Secondary text: #6F685F
- Wine accent: #713E43
- Fine divider: #DCD5CA
- Display: Cormorant Garamond
- Body: DM Sans
- Motion ease-out: cubic-bezier(0.23, 1, 0.32, 1)

## Type
- Cormorant Garamond for names, chapter titles and emotional editorial statements.
- DM Sans for navigation, utility labels and body copy.
- Display text is large and calm; body copy stays comfortably readable.
- Avoid excessive letter spacing and all-caps for long text.

## Motion
- Motion must support feedback, spatial continuity or a single first-visit moment.
- The hero content enters once. Chapter covers lift subtly and photographs zoom only inside their frame on fine-pointer hover.
- Lightbox entrance is brief and reversible; keyboard and touch interactions remain immediate.
- Use transform and opacity, short ease-out transitions, and a reduced-motion alternative.
- Never animate every gallery image as it scrolls or delay access to content.

## Layout and interaction
- Responsive at phone, tablet and desktop widths.
- Minimum comfortable touch targets around 44px.
- Visible keyboard focus, meaningful alt text, labelled navigation and a focus-contained lightbox.
- Gallery images preserve their natural proportions; only chapter-cover crops may use object-fit: cover.
- ImageKit is the image source. The public endpoint is NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT.
