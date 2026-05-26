# PLAN.md — Plán doručení projektu „The Early Bowl"

**Verze:** 1.0
**Datum sestavení:** 2026-05-24
**Předmět:** Závěrečný projekt z informatiky („Můj online business")
**Zadání:** viz [ZADANI.md](../ZADANI.md)

---

## 0. Stav, termíny a kontext

| Položka | Hodnota |
|---|---|
| Aktuální datum | **2026-05-24** |
| **Termín odevzdání** | **7 dní → do 2026-05-31** (web + dokumentace) |
| Prezentace ve třídě | následně dle rozvrhu školy |
| Lokalita podniku | **Náměstí Republiky 159/10, Opava** |
| Hosting | **GitHub Pages** (free) |
| Kontakty na webu | **fiktivní** (tel. `+420 777 000 111`, `info@theearlybowl.cz`) |

> **Harmonogram je napjatý (7 dní).** Práce na vizuálních assetech (Fáze B) a webu (Fáze C) běží paralelně; dokumentace (Fáze D) se píše průběžně, ne až na konci.

---

## 1. Deliverables — co se odevzdává

Z [ZADANI.md](../ZADANI.md) vyplývají tyto výstupy:

| # | Deliverable | Forma | Bodové ohodnocení |
|---|---|---|---|
| D1 | **Funkční web** (5+ podstránek) | URL na hostingu | 25 (funkčnost) + 15 (estetika) = 40 b |
| D2 | **Projektová dokumentace** (10 stran) | PDF | 30 (obsah) + 20 (typografie) = 50 b |
| D3 | **Prezentace** ve třídě (3–5 min) + **prototyp jednoho výrobku** | Mluvený projev + fyzické jídlo | 10 b |
| **Celkem** | | | **100 b** |

---

## 2. Odchylky od ZADANI — co děláme jinak a proč

ZADANI explicitně dovoluje volbu nástrojů; níže shrnujeme všechna místa, kde se odchylujeme od příkladů uvedených v zadání, a důvod proč.

| Oblast | ZADANI navrhuje | Náš přístup | Odůvodnění |
|---|---|---|---|
| **CMS / web nástroj** | Webnode / Shoptet / WordPress / Google Sites / HTML | **Statický web v HTML/CSS/JS, generovaný s pomocí AI (Claude), deploy na GitHub Pages, funguje i bez buildu (file://)** | Plná kontrola nad designem a brandem; zdarma; demonstruje pokročilejší práci s AI nástroji |
| **Obrázky jídel** | „vlastní nebo vlastnoručně vygenerované fotografie" + DESIGN.md zmiňuje Inkscape | **AI-generovaná bitmapová grafika** (Recraft / Midjourney / DALL-E / Stable Diffusion) konzistentní se stylem loga | Rychlejší, výsledek vizuálně silnější, splňuje literu zadání („vygenerované"). Konzistenci zajistí společný prompt-template (viz DESIGN.md §7) |
| **Propagační video** | „vlastní nebo vygenerované z fotografií + AI audio komentář" | **[HeyGen Hyperframes](https://github.com/heygen-com/hyperframes)** — napíšeme HTML, framework vyrenderuje video. **Bez mluveného komentáře** — sdělení nese on-screen text, audio max. royalty-free hudební podkres | HTML→video workflow je nativně vhodný pro AI agenty a umožňuje použít stejný brand stylesheet jako web → 100% vizuální konzistence. Vědomě se vzdáváme voiceoveru (ZADANI ho navrhuje, ale nevyžaduje) — text na obrazovce je čitelnější a méně rušivý |
| **Slide deck prezentace** | (ZADANI nespecifikuje nástroj) | **[Marp](https://marp.app/)** — slidy psané v Markdownu, export do PDF/HTML | Verzovatelné v gitu, konzistentní s brand CSS tématem, rychlé |
| **E-shop / košík** | „v případě e-shopu funkční košík" | **Děláme prezentační web, ne e-shop** — objednávky telefonicky pomocí ID položek (S1, M1...) | Zadání dovoluje „web/e-shop". Online objednávky jsou na roadmapě jako Fáze 2 (viz [PRD.md](../specs/PRD.md) §15) |
| **Prototyp produktu** | Příklad: šperk, svícen, sýr | **Reálně připravený Yogurt Bowl** (S1) přinesený do třídy | Restaurace = jídlo. Yogurt Bowl je vizuálně reprezentativní (matchuje logo) a jednoduchý na přípravu |
| **Forma dokumentace** | „textový editor, PDF, typografická pravidla" | **Markdown (obsah) → HTML + tisková CSS (`@page`) → PDF přes headless Chromium** (Playwright `page.pdf()`); volitelně Pandoc na MD→HTML | Bez nového toolchainu (Typst zamítnut, viz D-15) — znovupoužije brand CSS, plná typografická kontrola (čísla stránek, okraje, vdovy/sirotci, dělení slov `lang="cs"`) |

> Žádná odchylka nesnižuje žádné z hodnotících kritérií v ZADANI §4.

---

## 3. Roadmapa — fáze a milníky

Časování v T+dnech od dnešního startu. Předpokládá efektivní práci s AI nástroji.

### Fáze A — Setup a brand foundation (T+0 až T+2)

| Krok | Výstup | Závisí na |
|---|---|---|
| A1 | Finalizace značky: paleta, typografie, logo varianty (z [DESIGN.md](../specs/DESIGN.md)) | — |
| A2 | **Favicon** (32×32, 16×16, apple-touch-icon) — výřez z loga | A1 |
| A3 | **Master prompt** pro AI generování ilustrací jídel (viz DESIGN.md §7) | A1 |
| A4 | Repo + GitHub Pages (generická doména `ameliesam.github.io/the-early-bowl/`) | — |

### Fáze B — Vizuální assety (T+2 až T+4)

| Krok | Výstup | Závisí na |
|---|---|---|
| B1 | **11 ilustrací jídel** (N1–N3, S1–S2, M1–M4, P1) ve stylu loga, transparent PNG, ~1024×1024 | A3 |
| B2 | **Hero ilustrace** pro homepage (brand bowl + ranní atmosféra) | A3 |
| B3 | **Background patterns** / dekorativní prvky (volitelně) | A3 |
| B4 | **Open Graph image** (1200×630) pro sociální sítě | A1, B2 |
| B5 | **Propagační video** (~30 s) — HTML scény v [Hyperframes](https://github.com/heygen-com/hyperframes) renderované do videa, **bez voiceoveru** (on-screen text + volitelný hudební podkres) | B1, B2, C1 (sdílí brand CSS) |

### Fáze C — Web (T+3 až T+7)

Probíhá paralelně s Fází B (web se staví na placeholderech, assety se postupně dosazují).

| Krok | Výstup | Závisí na |
|---|---|---|
| C1 | Projekt skeleton (HTML/CSS/JS, design tokens jako CSS custom properties z DESIGN.md) | A1 |
| C1b | **Menu data layer** — `js/menu.js` + `js/vendor/yaml-mini.js` čtou inline YAML (zrcadlí `web/data/menu.yaml`) a renderují karty. **Bez JSON, bez buildu** (D-18, upravuje D-16) | A1 |
| C2 | **Homepage** (`index.html`) — hero, value props, featured menu, roadmap, IG CTA, footer | C1, B2 |
| C3 | **Menu** (`menu.html`) — vykreslení z `menu.yaml` (kategorie, karty s ID, ceny, **dietní ikony**) + **video placeholder** (S1) | C1, C1b, B1 |
| C4 | **O nás** (`o-nas.html`) — příběh, mise, hodnoty | C1 |
| C5 | **Kontakt** (`kontakt.html`) — adresa (Náměstí Republiky 159/10), telefon, e-mail, mapa. **Bez formuláře** | C1 |
| C6 | **Obchodní podmínky / Privacy** (`podminky.html`) — pokrývá ZADANI „Obchodní podmínky" | C1 |
| C7 | **stylesheet.html** — living style guide (showcase všech komponent z DESIGN.md) | C1 |
| C7b | **Optimalizace obrázků** — zmenšit + WebP + lazy-load (PNG jsou velké) | B1, B2 |
| C8 | Mobilní responzivita + cross-browser test (Playwright) | C2–C7 |
| C9 | SEO úměrně (title/description/OG + jednoduché JSON-LD, sitemap, robots) | C2–C6 |
| C10 | Deploy na **GitHub Pages** (`.nojekyll`, Actions `upload-pages-artifact path: web`) + ověřit relativní cesty | C8, C9 |

> **5 podstránek splněno** (Úvod / Menu / O nás / Kontakt / Obchodní podmínky). ZADANI vyžaduje minimálně 5.

### Fáze D — Dokumentace (T+5 až T+9)

| Krok | Výstup | Závisí na |
|---|---|---|
| D-1 | **Teoretická část (3 strany)** | — |
| D-2 | **Praktická část (7 stran)** | Fáze B, C (potřebujeme screenshot, brand artefakty) |
| D-3 | Sazba: HTML + tisková CSS (`@page`, čísla stránek, `hyphens:auto`) → PDF přes headless Chromium; kontrola typografie (vdovy, sirotci, mezery, řez) | D-1, D-2 |
| D-4 | Korektura (2 osoby) | D-3 |

**Obsah teoretické části** (čerpá z PRD §6, §7, §10):

1. Webové technologie: HTML/CSS/JS, hosting, doména, CMS (proč ne CMS pro nás)
2. UX/UI základy: hierarchie, kontrast, mobile-first, accessibility
3. Bezpečnost & legislativa: HTTPS, CSP, GDPR, obchodní podmínky, AML/platby

**Obsah praktické části** (struktura podle ZADANI §2B):

1. **Příběh značky** (čerpá z [DESIGN.md](../specs/DESIGN.md) §1 + [zapis_konzultace.md](zapis_konzultace.md))
2. **Vizuální identita** — paleta, fonty, psychologie barev (proč jahodová červená = chuť, hnědá = řemeslo, smetanová = útulnost)
3. **Cenotvorba** — food cost vs. prodejní cena, marže (z [rozpocet_sablona.md](rozpocet_sablona.md))
4. **Cílová skupina** — persona studenti/sportovci (z [marketing_plan_sablona.md](marketing_plan_sablona.md) §1)
5. **Marketingový plán** — Instagram + lokální partnership (z [marketing_plan_sablona.md](marketing_plan_sablona.md))
6. **Reflexe tvorby** — co fungovalo, co ne, co příště jinak (vyplnit na konci)
7. **Screenshot úvodní stránky**
8. **Použité zdroje a nástroje** — AI nástroje (Claude, Codex/ChatGPT Images 2.0, HeyGen Hyperframes), GitHub Pages, Marp, Google Fonts (úplný přehled v [TECH-STACK.md](../specs/TECH-STACK.md))

### Fáze E — Prezentace (T+9 až T+10)

| Krok | Výstup |
|---|---|
| E1 | **Slide deck** v [Marp](https://marp.app/) (~6 slidů: úvod, problém, řešení, brand, web demo, výhled), brand CSS téma, export do PDF |
| E2 | Nákup surovin na Yogurt Bowl (jogurt, granola, banán, jahody, borůvky, med) |
| E3 | Příprava prezentace: 3-min mluvený scénář |
| E4 | Trial run prezentace |
| E5 | **D-day:** prezentace ve třídě + reálný Yogurt Bowl k ochutnání |

---

## 4. Rozdělení dle hodnotících kritérií

Pro každé kritérium z ZADANI §4 mapujeme, kde se „vyhrávají body":

### 4.1 Technická funkčnost (25 b)

- Všechny odkazy navigace fungují (C7)
- Kontakt: telefon (`tel:`) a e-mail (`mailto:`) clickable, mapa se načte (bez formuláře)
- Responzivita ověřena na 3+ breakpointech (C7)
- Lighthouse skóre ≥ 90 (C8, C9)
- HTTPS aktivní (C9)
- **Checklist v** [PRD.md](../specs/PRD.md) §11

### 4.2 Estetika a grafická úroveň (15 b)

- Konzistentní brand napříč webem, ilustracemi a propagačním videem (DESIGN.md)
- Vlastní logo + favicon (A2)
- Hand-drawn cartoon styl odlišující značku od konkurence (DESIGN.md §1)

### 4.3 Obsahová kvalita dokumentace (30 b)

- Konkrétní čísla v rozpočtu, ne obecné fráze (Fáze D-2 §3)
- Příběh značky s emoční hloubkou (DESIGN.md §1, [zapis_konzultace.md](zapis_konzultace.md))
- Marketing plan napojený na konkrétní persony

### 4.4 Typografie a formátování (20 b)

- Jednotné fonty (Baloo 2 headings, Quicksand body)
- Konzistentní nadpisová hierarchie (H1 jednou na stránku)
- Žádné vdovy a sirotky (kontrola v D-3)
- Konzistentní mezery, čísla stran, obsah, popisky obrázků

### 4.5 Prezentace (10 b)

- Dodržet 3–5 min limit (E3, E4)
- Vizuální opora (slide deck E1)
- Reálný prototyp (E2, E5) — Yogurt Bowl jako wow-faktor

---

## 5. Riziková analýza

| Riziko | Pravděpodobnost | Dopad | Mitigace |
|---|---|---|---|
| AI ilustrace nebudou stylově konzistentní | Střední | Vysoký | Master prompt v DESIGN.md §7, vždy reference image (logo), iterace |
| Rozbité relativní cesty na GitHub Pages (`/the-early-bowl/`) nebo file:// | Střední | Vysoký | Relativní cesty, ověřit Playwrightem na serveru i přes file:// |
| Velké PNG → pomalý web | Vysoká | Střední | Zmenšit + WebP + lazy-load (krok C7b) |
| Dokumentace přeteče 10 stran | Střední | Střední | Sázet průběžně, ne na konci; striktní obrázky max ⅓ stránky |
| Yogurt Bowl se zkazí cestou | Nízká | Střední | Suché ingredience zvlášť, smíchat na místě |
| Telefon/adresa „placeholder" působí amatérsky | Vysoká | Nízký | Použít jasně fiktivní ale realistické (např. „+420 777 000 111", „<info@theearlybowl.cz>") s poznámkou v prezentaci že web je prototyp |

---

## 6. Vyřešená rozhodnutí

| Otázka | Rozhodnutí |
|---|---|
| Termín odevzdání | **7 dní → 2026-05-31** |
| Hosting | **GitHub Pages** (free) |
| Doména | **generická GitHub** — `ameliesam.github.io/the-early-bowl/`, zdarma |
| Ceny nápojů | **N1 = 25 Kč, N2 = 55 Kč, N3 = 35 Kč** (viz [menu_sablona.md](menu_sablona.md)) |
| Lokalita | **Náměstí Republiky 159/10, Opava** (fiktivní provoz) |
| Telefon / email | **fiktivní** — `+420 777 000 111`, `info@theearlybowl.cz` |
| Propagační video | **HeyGen Hyperframes** (HTML → video) |
| Slide deck | **Marp** (Markdown → PDF) |

Žádné otevřené otázky neblokují start prací.

---

## 7. Reference

| Dokument | Účel |
|---|---|
| [ZADANI.md](../ZADANI.md) | Zdroj všech požadavků |
| [PRD.md](../specs/PRD.md) | Funkční a technická specifikace webu |
| [DESIGN.md](../specs/DESIGN.md) | Vizuální identita a design systém (single source of truth pro design) |
| [menu_sablona.md](menu_sablona.md) | Finální menu s ID, popisy, cenami |
| [marketing_plan_sablona.md](marketing_plan_sablona.md) | Vstup pro praktickou část dokumentace §5 |
| [rozpocet_sablona.md](rozpocet_sablona.md) | Vstup pro praktickou část dokumentace §3 |
| [zapis_konzultace.md](zapis_konzultace.md) | Originální brief — neměnit, slouží jako kotva |
