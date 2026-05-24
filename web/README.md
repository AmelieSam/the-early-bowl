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

Tyto soubory nelze vygenerovat textově; doplnit dle [DESIGN.md](../specs/DESIGN.md) §7:

- [ ] `favicon.ico` + `apple-touch-icon.png` (výřez loga, DESIGN.md §2.2)
- [ ] `images/logo.svg`
- [ ] `images/hero.png` (hero ilustrace)
- [ ] `images/og.png` (1200×630 share image)
- [ ] `images/menu/*.png` — 11 ilustrací jídel (N1–N3, S1–S2, M1–M4, P1)
- [ ] `404.html` (DESIGN.md §7.4)

## Pořadí naplňování (viz ../PLAN.md Fáze C)

1. `css/tokens.css` je hotový (design tokeny). Doplnit `pages.css` při tvorbě stránek.
2. Naplnit obsah stránek dle wireframů v PRD §9 a textů v PRD §11.
3. Vygenerovat a vložit obrázky.
4. Doplnit Formspree `action` v `kontakt.html`.
5. Otestovat (Lighthouse, a11y, Playwright) a deploynout.
