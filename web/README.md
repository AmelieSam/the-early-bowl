# web/ — zdrojový kód webu The Early Bowl

Statický web (HTML/CSS/JS, **bez build kroku** — funguje i otevřením `index.html`).
Hostuje se na **GitHub Pages**. Specifikace: [PRD.md](../specs/PRD.md) · design: [DESIGN.md](../specs/DESIGN.md).

> **Cesty jsou relativní** (`css/…`, `images/…`, `menu.html`) — web běží na GitHub Pages pod podcestou `/the-early-bowl/` i přes `file://`. Nikdy nepoužívat root-absolutní `/css/…`.

## Struktura

```
web/
├── index.html        # Úvod / homepage
├── menu.html         # Menu (z menu.yaml) + video placeholder
├── o-nas.html        # Příběh značky
├── kontakt.html      # Kontakt (adresa, tel, e-mail, mapa) — bez formuláře
├── podminky.html     # Obchodní podmínky & GDPR
├── 404.html          # Stránka nenalezeno
├── stylesheet.html   # Living style guide (noindex)
├── .nojekyll         # vypne Jekyll na GitHub Pages
├── css/              # tokens → reset → base → components → pages
├── js/               # nav.js, copy-id.js (+ menu.js, vendor/yaml-mini.js — doplní vývoj)
├── data/             # menu.yaml — ZDROJ PRAVDY pro menu (čte se přímo, bez JSON)
├── images/           # menu/ ilustrace, hero, og, 404, logo, icons/ (✅ vygenerováno)
├── robots.txt
└── sitemap.xml
```

## Lokální vývoj / náhled

```bash
# stačí otevřít web/index.html v prohlížeči, nebo statický server:
python3 -m http.server -d web 8080
#   nebo
npx serve web
```

## Deploy (GitHub Pages)

Publikuje se obsah složky `web/` (žádný build). Doporučeně přes GitHub Actions:
`actions/upload-pages-artifact` s `path: web` → `actions/deploy-pages`.
URL: `https://ameliesam.github.io/the-early-bowl/`.

> GitHub Pages neumí custom HTTP hlavičky (CSP/X-Frame-Options) ani `_redirects` — viz [PRD.md](../specs/PRD.md) §7.6.

## Stav assetů

✅ Obrázky vygenerované (Codex / ChatGPT Images 2.0) v `images/`.
⏳ **Před nasazením optimalizovat** — PNG jsou velké (hero ~1,4 MB), zmenšit + WebP + lazy-load (PRD §7.4).
⏳ Video přípravy S1 — zatím **placeholder** (bílý obdélník na stránce Menu), doplní se přes HeyGen Hyperframes.

## Pořadí vývoje (viz ../docs/PLAN.md Fáze C)

1. Skeleton + design tokeny hotové; doplnit `pages.css` při tvorbě stránek.
2. **Menu data layer**: inline YAML blok (zrcadlí `data/menu.yaml`) + `js/vendor/yaml-mini.js` + `js/menu.js` → render karet a dietních ikon.
3. Naplnit obsah stránek dle wireframů PRD §9 a textů PRD §11; dosadit obrázky.
4. Optimalizovat obrázky; ověřit Playwrightem (file:// i server); deploy na GitHub Pages.
