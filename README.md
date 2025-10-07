
# DaisyMo — Self‑Portrait Studio (HTML + Bootstrap + JS)

Bright, elegant, empowering micro‑site for a self‑portrait studio in Minnesota. Fast, responsive, accessible (ARIA), and GitHub Pages‑ready.

## Tech
- **HTML5** multi‑page
- **Bootstrap 5** (CDN)
- **Vanilla JS** (`assets/js/main.js`)
- **SEO** meta + Open Graph
- **Lazy images**, soft animations, lightbox via Bootstrap modal

## Pages
- `/index.html` — Hero, How It Works, About teaser, Testimonials
- `/about.html` — Mission + features
- `/booking.html` — Calendly embed + pricing + 72‑hour policy
- `/gallery.html` — Grid/masonry style with lightbox
- `/faq.html` — Common questions (accordion)
- `/contact.html` — Form + Minnesota map + socials
- `/404.html` — fallback

## Replace/Connect
- Calendly: edit the `data-url` in `booking.html` to your actual link.
- Instagram: add your embed to `gallery.html` or link out.
- Email/socials: update links in footer and contact page.

## Local Preview
Just open `index.html` in a browser (no build step). For best results, run a static server:
```bash
# Python 3
cd DaisyMo-basic
python -m http.server 8080
# visit http://localhost:8080
```

## Deploy to GitHub Pages
1. Create a new repo on GitHub, e.g. `daisymo-site`.
2. Push these files to the repo root (so `index.html` is at the root).
3. In GitHub: **Settings → Pages → Build and deployment → Source: Deploy from branch**.
4. Select branch (e.g., `main`) and folder `/ (root)`. Save.
5. Your site will be live at `https://<user>.github.io/<repo>/`.

> If using a `docs/` folder, move all files into `docs/` and set Pages to `docs/`.

## Performance Tips
- Replace demo SVGs with optimized images (WebP preferred).
- Compress large images to under ~200 KB each.
- Keep third‑party scripts minimal (Calendly only on booking page).
- Use concise alt text and keep color contrast accessible.

## License
MIT (for this scaffold). Replace images and content with your own.
