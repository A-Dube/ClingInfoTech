# Cling Info Tech – Homepage Redesign (Next.js)

The original Cling logo is used in the nav and footer (`public/images/logo-light.png` is a reversed version
with white lettering for dark backgrounds; `logo.png` is the untouched original).

## Palettes
There are five flat palettes: Classic Red, Ocean Blue, Forest Green, Violet and Paper (light).
The switcher (bottom of the screen) sets `data-palette` on the page wrapper. Each palette is a block of
CSS variables at the top of `app/globals.css`. To add one, copy a block, rename it, and add an entry to
`palettes` in `lib/content.js`.

## Structure
- `app/page.js` – assembles the page and holds the palette state (saved in localStorage)
- `components/` – Navbar, Hero, Stats, About, Services, TechFocus, Clients, Team, Testimonials, Contact, Footer, PaletteSwitcher
- `lib/content.js` – all text, links, client logos, video URLs
- `public/images/` – hero and team photos

## Notes
- Videos and client logos load from the company's own servers.
- The contact form opens the visitor's email app (no backend). 
