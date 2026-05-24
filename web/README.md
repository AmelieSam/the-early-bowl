# web/ — zdrojový kód webu The Early Bowl

Statický web (HTML/CSS/JS, bez build kroku). Deployuje se přímo tato složka na
**Cloudflare Pages**. Specifikace: [PRD.md](../specs/PRD.md) · design: [DESIGN.md](../specs/DESIGN.md).

## Struktura

```
web/
├── index.html        # Úvod / homepage
├── menu.html         # Menu + alergeny
├── o-nas.html        # Příběh značky
├── kontakt.html      # Kontakt + formulář (Formspree)
├── podminky.html     # Obchodní podmínky & GDPR
├── stylesheet.html   # Living style guide (noindex)
├── css/              # tokens → reset → base → components → pages
├── js/               # nav.js, copy-id.js, form.js
├── images/           # menu/ ilustrace, hero, og, logo (TODO doplnit)
├── _headers          # bezpečnostní hlavičky (Cloudflare)
├── _redirects        # pretty URL přesměrování
├── wrangler.toml     # Cloudflare Pages konfigurace
├── robots.txt
└── sitemap.xml
```

## Lokální vývoj

```bash
# jakýkoli statický server, např.:
npx serve web
#   nebo
python3 -m http.server -d web 8080
```

## Deploy (Cloudflare Pages)

```bash
npx wrangler pages deploy web
```
Nebo propojit GitHub repo v Cloudflare dashboardu a nastavit **build output
directory = `web`** (žádný build command).

## ⚠️ Co ještě chybí (binární assety — TODO)

Vygenerovat podle hotových promptů v [../docs/prompts/](../docs/prompts/README.md) (ChatGPT Images 2.0):

- [ ] `favicon.ico` + `apple-touch-icon.png` (prompt `favicon.md`)
- [ ] `images/logo.png` / `images/logo-horizontal.png` (prompt `logo-varianty.md`)
- [ ] `images/hero.png` (prompt `hero.md`)
- [ ] `images/og.png` (prompt `og-image.md`)
- [ ] `images/menu/*.png` — 10 ilustrací jídel (N1–N3, S1–S2, M1–M4, P1)
- [ ] `images/404.png` (prompt `404.md`)
- [ ] `images/icons/diet-*.png` — 4 dietní ikony

## Pořadí naplňování (viz ../PLAN.md Fáze C)

1. `css/tokens.css` je hotový (design tokeny). Doplnit `pages.css` při tvorbě stránek.
2. Naplnit obsah stránek dle wireframů v PRD §9 a textů v PRD §11.
3. Vygenerovat a vložit obrázky.
4. Doplnit Formspree `action` v `kontakt.html`.
5. Otestovat (Lighthouse, a11y, Playwright) a deploynout.
