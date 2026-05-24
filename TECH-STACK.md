# TECH-STACK.md — Použité technologie a nástroje

Kompletní přehled nástrojů a technologií projektu **The Early Bowl**. Slouží zároveň jako podklad pro sekci „Použité zdroje a nástroje" v projektové dokumentaci ([ZADANI.md](ZADANI.md) §2B) a jako reference, proč byl každý nástroj zvolen.

> Rozhodnutí o klíčových nástrojích jsou logována v [DENIK.md](DENIK.md) (Decision log `D-NN`).

---

## 1. Web — frontend

| Technologie | Účel | Proč | Cena |
|---|---|---|---|
| **HTML5** | Struktura stránek (sémantický markup) | Standard, plná kontrola, nulová závislost | zdarma |
| **CSS3** (custom properties, Flexbox, Grid) | Vzhled, design tokens, responzivita | Design tokens z [DESIGN.md](DESIGN.md) jako CSS proměnné | zdarma |
| **Vanilla JavaScript (ES6+)** | Interaktivita (mobilní menu, copy-to-clipboard, validace formuláře) | 5 statických stránek nepotřebuje framework → Lighthouse 100 | zdarma |

> **Žádný framework** (React/Vue/…) — vědomé rozhodnutí kvůli jednoduchosti a výkonu. Viz [DENIK.md](DENIK.md) D-03.

---

## 2. Typografie

| Nástroj | Účel | Poznámka |
|---|---|---|
| **Baloo 2** (Google Fonts) | Nadpisy (H1–H4, tlačítka, ceny, ID badge) | Zaoblený hravý font, **správná česká diakritika** (ověřeno Playwrightem). Viz D-13 |
| **Quicksand** (Google Fonts) | Běžný text | Čistý geometrický font, latin-ext OK |

> **Pozor:** původní **Fredoka** byla zamítnuta — nemá vlastní glyfy českých háčků (`ě č ř š ž`). Detail v [DESIGN.md](DESIGN.md) §4.1.

---

## 3. AI nástroje

| Nástroj | Účel | Stav |
|---|---|---|
| **Claude (Claude Code, Opus 4.7)** | Generování HTML/CSS/JS, review a harmonizace dokumentace, tvorba plánu | ✅ hlavní vývojový nástroj |
| **Recraft** / Midjourney / DALL-E 3 / Stable Diffusion XL | Generování bitmapových ilustrací jídel a grafiky v brand stylu | ✅ dle prompt templates v [DESIGN.md](DESIGN.md) §7. Viz D-02 |
| **HeyGen Hyperframes** | Propagační video — HTML scény renderované do videa | ✅ sdílí brand CSS s webem. Viz D-10, D-14 |

### Nástroje z rané fáze (nahrazeny)
| Nástroj | Použití | Proč nahrazen |
|---|---|---|
| **NotebookLM** | Zpracování briefu / kontextu (18.–23.5.) | Užitečné pro sumarizaci, ne pro tvorbu webu |
| **Google Stitch** | Pokus o generování návrhu webu (23.5.) | ❌ Nekvalitní vstup = nekvalitní výstup; viz [DENIK.md](DENIK.md) |
| **Gemini (free), GitHub Copilot (free)** | Pokus o generování | ❌ Free-tier nedostatečný pro kvalitní práci |

---

## 4. Hosting a infrastruktura

| Nástroj | Účel | Cena |
|---|---|---|
| **Cloudflare Pages** | Hosting statického webu, automatický deploy z gitu, HTTPS, globální CDN | zdarma (free tier). Viz D-05 |
| `_headers` | Security headers (CSP, X-Frame-Options, …) | — |
| `_redirects` | Přesměrování (404 apod.) | — |
| `wrangler.toml` | Konfigurace Cloudflare Pages projektu | — |
| **Cloudflare Web Analytics** | Návštěvnost bez cookies a bez fingerprinting | zdarma |
| **Doména** | generická `*.pages.dev` (např. `the-early-bowl.pages.dev`) | zdarma |

> Bez Google Analytics → **bez cookie lišty** (GDPR friendly). Viz [PRD.md](PRD.md) §7.7.

---

## 5. Formuláře a integrace

| Nástroj | Účel | Cena |
|---|---|---|
| **Formspree** (nebo Web3Forms) | Odeslání kontaktního formuláře bez vlastního backendu | zdarma (50 zpráv/měsíc) |
| **Google Maps embed** | Mapa lokace na stránce Kontakt | zdarma (iframe) |

---

## 6. Dokumentace a prezentace

| Nástroj | Účel | Výstup |
|---|---|---|
| **Markdown** | Psaní obsahu projektové dokumentace (PRD, DESIGN, PLAN, …) | `.md` v gitu |
| **HTML + tisková CSS** (`@page`) → **headless Chromium** (Playwright `page.pdf()`) | Sazba dokumentace do PDF s brand stylem | PDF (10 stran). Viz D-15. Volitelně Pandoc na MD→HTML |
| **Marp** | Slide deck pro prezentaci ve třídě (Markdown → PDF) | PDF (~6 slidů). Viz D-11 |

> **Typst zamítnut** (D-15) — pro PDF stačí HTML + tisková CSS rendrovaná Chromiem; znovupoužije brand CSS a nepřidává nový toolchain.

---

## 7. Vývojové prostředí a QA

| Nástroj | Účel |
|---|---|
| **VS Code** | Editor (adoptováno 23.5.) |
| **Git + GitHub** | Verzování a vzdálený repozitář |
| **Playwright** (chromium) | **Vizuální QA** — render stránky + screenshot pro ověření fontů/layoutu (např. ověření české diakritiky). Viz D-13 |
| **Lighthouse** | Audit performance, accessibility, SEO (cíl ≥ 90/95) |
| **WAVE / axe DevTools** | Kontrola přístupnosti (WCAG 2.1 AA) |
| **W3C Validator** | Validace HTML |

---

## 8. Souhrn nákladů

| Kategorie | Náklad |
|---|---|
| Hosting (Cloudflare Pages) | **0 Kč** |
| Fonty (Google Fonts) | **0 Kč** |
| Formulář (Formspree free) | **0 Kč** |
| Mapy (Google Maps embed) | **0 Kč** |
| Analytics (Cloudflare) | **0 Kč** |
| Doména (generická `*.pages.dev`) | **0 Kč** |
| AI nástroje (generování) | dle zvoleného plánu / kreditů |
| **Web infrastruktura celkem** | **0 Kč** |

> Celá web-infrastruktura běží zdarma (generická `*.pages.dev` doména). Vlastní doména je volitelná až do budoucna (~400 Kč/rok). Detailní rozpočet podniku v [rozpocet_sablona.md](rozpocet_sablona.md).

---

## Reference

| Dokument | Obsah |
|---|---|
| [PRD.md](PRD.md) | Funkční a technická specifikace (§7 detailní tech řešení) |
| [DESIGN.md](DESIGN.md) | Vizuální identita, fonty, AI prompty |
| [PLAN.md](PLAN.md) | Harmonogram a odchylky od ZADANI |
| [DENIK.md](DENIK.md) | Decision log — proč byl který nástroj zvolen |
