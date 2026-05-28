# PRD — Webová prezentace „The Early Bowl"

**Verze:** 4.0 (předvývojová — upřesnění MVP před tvorbou webu)
**Status:** Fáze 1 — připraveno k vývoji webu
**Datum:** 2026-05-25

> **Vizuální identita:** Tento dokument **nedefinuje** barvy, fonty ani ilustrační styl. Single source of truth je [DESIGN.md](DESIGN.md). PRD určuje **co** se staví a **jak funguje**; DESIGN určuje **jak to vypadá**.
>
> **Plán a termíny:** viz [PLAN.md](../dokumentace/PLAN.md).

---

## 1. Executive summary

**The Early Bowl** je smyšlená snídaňová restaurace zaměřená na zdravou výživu, na adrese Náměstí Republiky 159/10 v Opavě. Web slouží jako primární digitální vizitka s důrazem na:

* přehledné menu s unikátními ID položek pro snadné telefonické objednání,
* unikátní hand-drawn brand vzhled (viz [DESIGN.md](DESIGN.md)),
* mobilní first design (cílová skupina = studenti, mobile-heavy),
* připravenost na rozšíření (online předobjednávky, rezervace, doručování — Fáze 2+).

Web je **prezentační, ne e-shop**. Online platby ani košík nejsou v Fázi 1 součástí.

---

## 2. Obchodní cíle

1. Zvýšit povědomí o restauraci mezi cílovou skupinou.
2. Zjednodušit telefonické objednávání (jasné ID položek).
3. Komunikovat hodnotu: zdravá, rychlá, dostupná snídaně.
4. Budovat brand prostřednictvím konzistentní vizuální identity.
5. Připravit technickou základnu pro Fázi 2.

---

## 3. Cílová skupina

### Primární segmenty

| Segment | Charakteristika |
|---|---|
| Vysokoškoláci | Studenti Slezské univerzity, 19–26 let, mobilní first, citliví na cenu |
| Středoškoláci | Žáci místních SŠ, 15–19 let, Instagram-heavy |
| Sportovci | Návštěvníci přilehlého fitness centra, po tréninku, hledají protein |
| Ranní pracovníci | 25–40 let, ranní směny, hledají rychlé a zdravé snídaně |

### Value proposition
>
> „Rychlá, zdravá a dostupná snídaně 6:00–13:30. Před školou, po tréninku, místo nicotného croissantu na cestě do práce."

---

## 4. Produkt — restaurace

| Parametr | Hodnota |
|---|---|
| Provozní doba | Pondělí–Neděle, **6:00–13:30** |
| Kapacita | 15 míst (12 u stolů + 3 u baru) |
| Lokace | Náměstí Republiky 159/10, Opava (fiktivní provoz pro účely projektu) |
| Personál | 1 osoba na směnu (2–3 brigádníci v rotaci) |
| Menu | 10 položek (3 nápoje, 2 sladké, 4 slané, 1 obědová polévka) |

Detailní menu viz [menu_sablona.md](../dokumentace/menu_sablona.md). Cenotvorba a marže viz [rozpocet_sablona.md](../dokumentace/rozpocet_sablona.md).

---

## 5. Web — funkční specifikace

### 5.1 Site map (5 podstránek — splňuje ZADANI)

1. **Homepage** (`index.html`) — hero, value props, featured menu, roadmap, IG CTA, kontakt teaser.
2. **Menu** (`menu.html`) — položky s ID, popisem, cenou a **dietními ikonami**; níže **placeholder pro budoucí video** přípravy S1 (viz §5.2).
3. **O nás** (`o-nas.html`) — příběh značky, mise, hodnoty.
4. **Kontakt** (`kontakt.html`) — adresa, telefon, e-mail, mapa. **Bez kontaktního formuláře.**
5. **Obchodní podmínky & Privacy** (`podminky.html`) — provozovatel, ochrana osobních údajů, podmínky.

### 5.2 Klíčové funkce

#### Objednávání (Fáze 1)

* Telefonické objednávky s referencí na ID (`„Dejte mi prosím dvakrát M1 a jeden N2."`).
* Tlačítko **„Kopírovat ID"** u každé položky → uloží `S1` do clipboardu (snadno se vloží do SMS).
* Telefon na webu jako `tel:` link (mobil → přímé vytočení).

#### Dietní ikony u položek

* U každé položky se zobrazí **ikony diet**, pro které je vhodná (bez lepku, bez laktózy, vegan, vegetariánské) — zdroj: `diet_suitable` v [`menu.yaml`](../docs/data/menu.yaml), ikony `docs/images/icons/diet-*.png`.
* **Žádná souhrnná allergen tabulka na webu.** Kompletní matice diet/alergenů zůstává jen jako interní dokument [menu-matrix.md](../dokumentace/menu-matrix.md).

#### Video (placeholder pro Fázi B)

* Na stránce Menu (níže, pod položkami) je **placeholder — bílý obdélník** v poměru videa, rezervovaný pro budoucí krátké **animované video přípravy Yogurt Bowl (S1)**, pohled shora, ve stylu ostatních ilustrací.
* Video se **zatím negeneruje**; přidá se později přes **HeyGen Hyperframes**. Placeholder drží layout, ať se po doplnění videa nic neposune.

#### Sociální sítě

* **Jen proklik na Instagram** (ikona/odkaz v hlavičce nebo patičce a v hero CTA).
* Žádný embed feed, žádný Facebook, žádné Twitter/X karty.

### 5.3 Co web NEMÁ (out of scope pro Fázi 1)

* **Kontaktní formulář** (objednává se telefonicky; e-mail jako `mailto:` odkaz stačí)
* **Souhrnná allergen tabulka** na webu (jen dietní ikony u položek)
* E-mailové notifikace, online platby ani košík
* Rezervace stolů (Fáze 2), doručování (Fáze 3)
* Vícejazyčnost (jen čeština), login/registrace, newsletter
* Cookie banner (nepoužíváme tracking → neexistuje povinnost)

---

## 6. Vizuální design

> Kompletně popsáno v **[DESIGN.md](DESIGN.md)** — paleta, typografie, spacing, komponenty, ilustrace, ikony, tone of voice.
>
> PRD na DESIGN.md odkazuje a **nereplikuje** jeho obsah. Při konfliktu vyhrává DESIGN.md.

### 6.1 Klíčová pravidla pro implementaci

* Design tokens (barvy, spacing, fonty) implementovat jako **CSS custom properties** v `:root`.
* Implementace musí přesně reflektovat hodnoty z DESIGN.md §3 (barvy), §4 (typo), §5 (spacing), §6 (komponenty).
* Žádné inline style overrides, žádné magic numbers — vše přes proměnné.
* **Relativní cesty u všech assetů a odkazů** (`./css/…`, `images/…`, `o-nas.html`), **nikdy root-absolutní `/css/…`**. Důvod: web musí fungovat jak po otevření `index.html` (file://), tak na GitHub Pages pod podcestou `/the-early-bowl/`.

---

## 7. Technické řešení

### 7.1 Stack

| Vrstva | Volba | Důvod |
|---|---|---|
| Frontend | **HTML5 + CSS3 + Vanilla JS** (žádný framework) | Statické stránky nepotřebují React. |
| Build | **Žádný** — web funguje otevřením `index.html` | Bez build pipeline; deployují se přímo statické soubory z `docs/`. |
| AI codegen | **Claude** (přes Claude Code) | Generování HTML/CSS/JS s důsledným použitím design tokens. |
| Grafika | **✅ hotovo** — vygenerováno **Codexem** (ChatGPT Images 2.0) dle promptů v [`dokumentace/prompts/`](../dokumentace/prompts/) | Bitmapy ve stylu loga, uloženo v `docs/images/` (10 jídel, hero, OG, 404, logo, ikony, favicon). |
| Video | **[HeyGen Hyperframes](https://github.com/heygen-com/hyperframes)** — **zatím jen placeholder** | Animované video přípravy S1 se doplní později; teď bílý obdélník na stránce Menu (§5.2). Bez voiceoveru. |
| Hosting | **GitHub Pages** (free) | Statický hosting přímo z repozitáře, HTTPS automaticky. **Neumí custom HTTP hlavičky ani `_redirects`** (viz §7.6). |
| Doména | **generická GitHub** — `https://ameliesam.github.io/the-early-bowl/` | Zdarma. Web běží na **podcestě `/the-early-bowl/`** → nutné **relativní cesty** k assetům (viz §6.1). |
| Analytics | **Žádné** | Školní prototyp; bez trackingu → bez cookie lišty. |

### 7.2 Struktura projektu

```
docs/                         # deploy root pro GitHub Pages (publikuje se obsah této složky)
├── index.html              # Homepage
├── menu.html
├── o-nas.html
├── kontakt.html
├── podminky.html
├── 404.html
├── stylesheet.html         # Living style guide (showcase design systému)
├── .nojekyll               # vypne Jekyll processing na GitHub Pages
├── css/
│   ├── tokens.css          # CSS custom properties (z DESIGN.md)
│   ├── reset.css
│   ├── base.css            # typografie, body, links
│   ├── components.css      # button, card, badge, diet-icon
│   └── pages.css           # page-specific styly (hero, menu grid, …)
├── js/
│   ├── nav.js              # mobile menu toggle
│   ├── copy-id.js          # copy-to-clipboard ID položky
│   ├── menu.js             # render menu z menu.yaml
│   └── vendor/
│       └── yaml-mini.js    # malý YAML parser (bez závislostí, ~pár KB)
├── data/
│   └── menu.yaml           # ZDROJ PRAVDY pro menu (viz §7.3)
├── images/                 # ✅ vygenerováno (Codex): menu/, hero.png, og.png,
│   │                       #    404.png, logo.png, logo-horizontal.png,
│   ├── menu/               #    bg-pattern.png, icon-source.png
│   └── icons/              #    diet-vegan/bez-lepku/bez-laktozy/protein.png
├── favicon.ico
├── apple-touch-icon.png
├── robots.txt
├── sitemap.xml
└── README.md
```

> **stylesheet.html** je interní referenční stránka (není v navigaci ani v sitemap). Slouží jako živá ukázka všech design tokens a komponent z [DESIGN.md](DESIGN.md).
>
> **Deploy:** v GitHub Settings → Pages je source nastaven na `main` branch, folder `/docs` — GitHub Pages publikuje obsah složky přímo, **bez build kroku a bez GitHub Actions**. Soubor `.nojekyll` v `docs/` vypíná Jekyll, takže se servírují přesně ty soubory, které commituješ.

### 7.3 Data — menu z YAML (bez JSON, bez buildu)

**Zdroj pravdy = [`docs/data/menu.yaml`](../docs/data/menu.yaml)** (číselníky diet/alergenů, kategorie, 10 položek s cenami a příznaky). Menu na webu se renderuje z těchto dat — **žádné položky natvrdo v HTML**, při změně menu se needituje kód stránky. **Žádný `menu.json` se nevytváří** (rozhodnutí D-16 upraveno → D-18).

**Jak to čte web bez buildu a i přes `file://`:**

* Data jsou na stránce vložená jako **inline blok** `<script type="text/yaml" id="menu-data">…</script>`, jehož obsah **zrcadlí `docs/data/menu.yaml`** (kanonický editovatelný zdroj).
* `js/vendor/yaml-mini.js` (malý parser bez závislostí) ho naparsuje, `js/menu.js` vykreslí karty a dietní ikony.
* Důvod inline místo `fetch('data/menu.yaml')`: `fetch` se na `file://` v Chrome blokuje, a my chceme, aby web fungoval i pouhým otevřením `index.html`.

> **Synchronizace:** `docs/data/menu.yaml` je zdroj, inline blok je jeho kopie. Při ~10 zřídka měněných položkách stačí ruční sync (volitelně jednoduchý `cp`/node snippet — **ne build krok**). Tatáž data plní i „featured" položky na homepage.

Kompletní matice diet/alergenů zůstává jen jako interní dokument [menu-matrix.md](../dokumentace/menu-matrix.md) (na web nejde — jen ikony u položek, §5.2).

### 7.4 Performance cíle (realistické pro školní projekt)

| Metrika | Cíl mobile | Cíl desktop |
|---|---|---|
| LCP (Largest Contentful Paint) | < 3.0 s | < 2.0 s |
| CLS (Cumulative Layout Shift) | < 0.1 | < 0.1 |
| Lighthouse Performance | ≥ 85 | ≥ 90 |
| Hmotnost stránky (po optimalizaci obrázků) | < 1.2 MB | < 1.2 MB |

> ⚠️ **Vygenerované PNG jsou velké** (hero ~1,4 MB, položky 0,5–1 MB). **Před nasazením je nutné zmenšit** na zobrazované rozměry (jídla ~480 px, hero ~1280 px) a převést na **WebP** (PNG fallback). Bez toho jsou cíle nereálné.

**Optimalizace:**

* Zmenšit + komprimovat obrázky, WebP s PNG fallbackem (`<picture>`).
* `loading="lazy"` + `width`/`height` na off-screen obrázcích (drží CLS).
* `font-display: swap` pro Google Fonts, `preconnect`.
* Žádné JS frameworky; skripty `defer`.

### 7.5 SEO (úměrně školnímu projektu — neřešit nad rámec)

**Základní on-page (stačí):**

* Unikátní `<title>` a `<meta name="description">` na každé stránce.
* Sémantické HTML (`<header>`, `<nav>`, `<main>`, `<footer>`).
* `alt` text u všech obrázků, `lang="cs"` na `<html>`.
* Open Graph tagy (title, description, image, url) — kvůli náhledu při sdílení odkazu. **Žádné Twitter/X karty.**
* `robots.txt` + `sitemap.xml` (existují).

**Strukturovaná data (jedno jednoduché JSON-LD na homepage):**

```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "The Early Bowl",
  "image": "https://ameliesam.github.io/the-early-bowl/images/og.png",
  "description": "Zdravá snídaňová restaurace v Opavě, 6:00–13:30",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Náměstí Republiky 159/10",
    "addressLocality": "Opava",
    "postalCode": "746 01",
    "addressCountry": "CZ"
  },
  "telephone": "+420 777 000 111",
  "url": "https://ameliesam.github.io/the-early-bowl/",
  "openingHours": "Mo-Su 06:00-13:30",
  "servesCuisine": ["Breakfast", "Healthy"],
  "priceRange": "$"
}
```

> Žádné Google Business Profile / Search Console — pro fiktivní školní web zbytečné.

### 7.6 Bezpečnost

* **HTTPS** automaticky (GitHub Pages, `*.github.io`).
* **Custom HTTP security headers nejsou na GitHub Pages možné** (nelze nastavit `_headers` jako u Cloudflare). Pro školní statický web bez formuláře a bez uživatelských dat je to akceptovatelné.
* Volitelně lze přidat **CSP přes `<meta http-equiv="Content-Security-Policy">`** v `<head>` (omezenější než HTTP hlavička, ale lepší než nic).
* Web nezpracovává žádný uživatelský vstup (žádný formulář) → minimální útočná plocha.

### 7.7 GDPR & privacy

* **Žádné cookies, žádný tracking, žádné analytics.**
* **Žádný formulář** → web nesbírá žádné osobní údaje.
* **Třetí strany:**
  * Google Fonts (load přes CDN).
  * Google Maps iframe na stránce Kontakt.
* **Privacy stránka** pokrývá: kdo provozuje, že se nesbírají žádné osobní údaje (web bez formuláře a bez trackingu), zmínka o vloženém Google Maps a Google Fonts.

---

## 8. Accessibility (WCAG 2.1 AA)

| Požadavek | Implementace |
|---|---|
| Kontrast textu | Min. 4.5 : 1 (viz [DESIGN.md](DESIGN.md) §3.1) |
| Kontrast tlačítek | Min. 3 : 1 |
| Klávesnice | Všechny interaktivní prvky dostupné `Tab` / `Enter` / `Space` |
| Focus state | Viditelný outline (`outline: 3px solid var(--honey)`) — viz DESIGN.md §6.4 |
| Skip link | „Přeskočit na hlavní obsah" na začátku každé stránky |
| Sémantické HTML | `<button>` ne `<div onclick>`; landmarks `<nav>`, `<main>` |
| ARIA | `aria-label` na ikonových tlačítkách, `aria-current="page"` v navigaci |
| Alt text | Popisující obsah obrázku (ne „obrázek jídla") |
| Heading hierarchie | Jedna `<h1>` na stránku, postupné `<h2>`, `<h3>` bez přeskakování |

---

## 9. Wireframy (low-fi struktura)

### 9.1 Homepage

```
┌─────────────────────────────────────────┐
│ HEADER (logo | nav | IG ikona)          │
├─────────────────────────────────────────┤
│ HERO                                    │
│  H1: „Zdravá snídaně. Každý den."       │
│  Tagline: „6:00–13:30 v OD..."          │
│  [Mrkni na menu] [Sleduj IG]            │
│  → hero ilustrace (brand bowl + ráno)   │
├─────────────────────────────────────────┤
│ VALUE PROPS (3× ikona + krátký text)    │
│  ⏰ Rychlé    🌱 Zdravé    📍 Dostupné   │
├─────────────────────────────────────────┤
│ FEATURED MENU (4 karty)                 │
│  [S1] [M1] [M3] [N2]                    │
│  [Celé menu →]                          │
├─────────────────────────────────────────┤
│ ROADMAP (timeline)                      │
│  Fáze 1 → Fáze 2 → Fáze 3 → Vize        │
├─────────────────────────────────────────┤
│ IG CTA (banner)                         │
│  „Co se dnes vaří? Mrkni na IG"         │
├─────────────────────────────────────────┤
│ FOOTER (kontakt mini, copyright, links) │
└─────────────────────────────────────────┘
```

### 9.2 Menu

```
┌─────────────────────────────────────────┐
│ HEADER                                  │
├─────────────────────────────────────────┤
│ H1: „Naše menu"                         │
│ Filtr: [vše] [vegan] [bez lepku] ...    │
├─────────────────────────────────────────┤
│ Nápoje 🥤                                │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐    │
│  │ [N1]    │ │ [N2]    │ │ [N3]    │    │
│  │ obrázek │ │ obrázek │ │ obrázek │    │
│  │ Voda... │ │ Fresh...│ │ Čaj     │    │
│  │ 25 Kč   │ │ 55 Kč   │ │ 35 Kč   │    │
│  │🌱 [kopír]│ │🌱 [kopír]│ │🌱 [kopír]│   │  ← dietní ikony + Kopírovat ID
│  └─────────┘ └─────────┘ └─────────┘    │
├─────────────────────────────────────────┤
│ Sladké 🥣  [S1] [S2]                     │
│ Slané 🥪   [M1] [M2] [M3] [M4]           │
│ Obědy 🍲   [P1]                          │
├─────────────────────────────────────────┤
│ JAK OBJEDNAT  „Zavolej +420… a řekni ID."│
├─────────────────────────────────────────┤
│ VIDEO (placeholder — bílý obdélník)     │
│  budoucí animace přípravy S1 (shora)    │
├─────────────────────────────────────────┤
│ FOOTER                                  │
└─────────────────────────────────────────┘
```

*(Bez souhrnné allergen tabulky — vhodnost pro diety je jen jako ikony u karet.)*

### 9.3 Kontakt

```
┌─────────────────────────────────────────┐
│ HEADER                                  │
├─────────────────────────────────────────┤
│ H1: „Stav se za námi"                   │
│  📍 Náměstí Republiky 159/10, Opava      │
│  📞 Telefon (tel: link)                  │
│  ✉️ E-mail (mailto: link)                │
│  ⏰ Provozní doba 6:00–13:30             │
│  📷 Instagram (proklik)                  │
├─────────────────────────────────────────┤
│ GOOGLE MAPS iframe                      │
├─────────────────────────────────────────┤
│ FOOTER                                  │
└─────────────────────────────────────────┘
```

*(Bez kontaktního formuláře — objednává se telefonicky, e-mail je `mailto:` odkaz.)*

---

## 10. Testování & QA

> **Nástroj pro vývoj a zpětnou vazbu: [Playwright](https://playwright.dev/)** (chromium) — průběžně renderovat stránky, dělat screenshoty a ověřovat layout/diakritiku/konzistenci během vývoje (ne až na konci).

### 10.1 Funkční scénáře

* Homepage: všechny odkazy vedou na správné stránky, CTA fungují, IG proklik vede na Instagram.
* Menu: všech **10 položek** se vykreslí z `menu.yaml`, u položek jsou správné dietní ikony, „Kopírovat ID" funguje, video placeholder drží místo.
* Kontakt: telefon (`tel:`) a e-mail (`mailto:`) jsou clickable, mapa se načte. (Žádný formulář.)
* Navigace: aktivní stránka zvýrazněná, mobilní menu se otevírá/zavírá.
* **Cesty:** web funguje jak otevřením `index.html` (file://), tak na GitHub Pages pod `/the-early-bowl/` (relativní cesty).

### 10.2 Cross-browser & device

| Browser | Test |
|---|---|
| Chrome (latest) | ✓ |
| Firefox (latest) | ✓ |
| Safari (latest, mac + iOS) | ✓ |
| Edge (latest) | ✓ |
| Chrome Mobile (Android) | ✓ |

**Device:**

* iPhone (Safari, 375 px)
* Android (Chrome, 412 px)
* iPad (Safari, 768 px)
* Desktop (1440 px, 1920 px)

### 10.3 Performance

* Lighthouse audit (mobil) ≥ 90 ve všech kategoriích.
* PageSpeed Insights real-user metrics.

### 10.4 Accessibility

* Lighthouse Accessibility ≥ 95.
* Manuální test klávesnice (`Tab` projde celý web logicky).
* WAVE nebo axe DevTools — 0 errors.

### 10.5 Manuální checklist před deploy

* [ ] Všechny odkazy fungují (žádné `#` placeholdery), **cesty relativní**
* [ ] Web funguje otevřením `index.html` (file://) i na GitHub Pages (`/the-early-bowl/`)
* [ ] Všechny obrázky mají alt text a jsou optimalizované (WebP, zmenšené)
* [ ] Menu (10 položek + ceny + dietní ikony) odpovídá [`menu.yaml`](../docs/data/menu.yaml)
* [ ] Žádný typo (korektura 2 osobami)
* [ ] Telefon, e-mail a adresa správné
* [ ] Favicon a apple-touch-icon nastaveny
* [ ] OG image se zobrazuje při sdílení
* [ ] Sitemap.xml a robots.txt existují
* [ ] Privacy stránka přístupná z footeru
* [ ] Video placeholder na stránce Menu drží layout
* [ ] HTTPS aktivní, žádné mixed-content warnings

---

## 11. Copy & tone of voice

### 11.1 Pravidla

* Tykání („Stav se", „Mrkni").
* Krátké věty, jasné sdělení.
* Žádný corporate speak.
* Občasné emoji (💚 🥣 ☀️), ne přemíra.
* Důraz na zdraví, rychlost, dostupnost.

### 11.2 Klíčové texty

**Hero (homepage):**
> H1: „Zdravá snídaně. Každý den."
> Tagline: „Svěží, chutné a dostupné — přesně tak, jak chceš ráno."
> CTA primary: „Mrkni na menu"
> CTA secondary: „Sleduj nás na Instagramu"

**Value props (homepage):**
> ⏰ **Rychlé** — Zavolej, vyzvedni. Hotovo za pár minut.
> 🌱 **Zdravé** — Bez zbytečného cukru. Jen kvalita.
> 📍 **Dostupné** — V Opavě, otevřeno od 6 ráno.

**Menu intro:**
> „Tady je celé menu. Vyber si, zavolej a řekni nám ID jídla. Žádné komplikace."

**Dietní ikony (u položek):**
> Malé ikony u jídla říkají, pro koho je vhodné — bez lepku, bez laktózy, veganské, vegetariánské.

**O nás (úryvek):**
> Náš Příběh
>
> Začalo to jednoduše. Hledali jsme místo, kde bychom si mohli dát rychlou, ale poctivou snídani plnou chuti a energie. Protože jsme ho nenašli, rozhodli jsme se ho vytvořit.
>
> The Early Bowl není jen kavárna nebo bistro. Je to ranní rituál. Věříme v suroviny, které dávají mysl, v barvy, které zlepší náladu, a v to, že dobré ráno opravdu dělá dobrý den. Přijďte si k nám pro tu svou misku optimismu.
>
> Jsme malý tým, který věří, že snídaně rozhoduje o tom, jaký bude celý den. Nemáme čas na složitosti — ani ty. Tak jsme vzali nejlepší ingredience, udělali z nich pár solidních jídel a otevřeli dveře v šest ráno. Tečka."

**Kontakt (bez formuláře):**
> „Máš dotaz? Zavolej nám na +420 777 000 111 nebo napiš na info@theearlybowl.cz. Nebo se prostě stav — Náměstí Republiky 159/10, Opava."

**404 stránka:**
> „Ouha. Tahle stránka neexistuje — asi jsme ji snědli k snídani. [Zpátky na úvod]"

### 11.3 Příklady popisků jídel
>
> **S1 — Yogurt Bowl**
> Smetanový jogurt, domácí granola, čerstvé sezónní ovoce, kapka medu. Dokonalý start do dne.

> **M1 — Avokádový toast s lososem**
> Křupavý toast, krémové avokádo, uzený losos a špetka čerstvé zeleniny. Proteinová bomba.

> **P1 — Denní polévka**
> Každý den jiná. Zeptej se v baru, co dnes vaříme.

---

## 12. Roadmap

Stručná, zákazník-facing časová osa (zobrazí se i na webu jako „kam směřujeme"):

* **Teď** — Snídaně a obědové polévky na místě, objednávka telefonem.
* **Brzy** — Online předobjednávky (vyzvedneš si připravené) a rezervace stolu.
* **Pak** — Rozvoz k tobě.
* **Sen** — Letní pojízdný vozíček s miskami v parku. 🌳

> Implementační detaily (systémy, integrace) sem nepatří — roadmap je o příběhu a vizi pro zákazníka.

---

## 13. Rizika

| Riziko | P | Dopad | Mitigace |
|---|---|---|---|
| **Rozbité cesty na GitHub Pages** (podcesta `/the-early-bowl/`) nebo při file:// | S | V | Důsledně **relativní cesty** (§6.1); ověřit Playwrightem na serveru i přes file:// |
| **Velké PNG → pomalý web** (hero 1,4 MB, jídla ~0,5–1 MB) | V | S | Zmenšit + WebP + lazy-load před nasazením (§7.4) |
| **GitHub Pages neumí security hlavičky/CSP** | jistota | N | Akceptováno (statický web bez formuláře); volitelně meta-CSP |
| Inline menu YAML se rozejde s `menu.yaml` | N | N | Drobný ruční/`cp` sync, ověřit při QA; jen 10 položek |
| AI ilustrace nejsou stylově konzistentní | — | — | ✅ vyřešeno — sada hotová a ověřená (DENIK 14. iterace) |
| Cross-browser bug (hlavně Safari) | S | S | Test na reálném zařízení + Playwright |

---

## 14. Definice „done"

Web je hotový, když:

**Funkčnost:**

* Všech 5 stránek (+ 404) se načte bez JS errorů
* Interaktivní prvky fungují: navigace (vč. mobilní), „Kopírovat ID", IG proklik
* Menu se vykreslí z `menu.yaml` (10 položek, ceny, dietní ikony)
* Web funguje **otevřením `index.html` (file://) i na GitHub Pages** (relativní cesty)
* HTTPS aktivní

**Design:**

* Implementace 1:1 odpovídá [DESIGN.md](DESIGN.md), Baloo 2 + Quicksand
* Logo a favicon nasazeny
* ✅ Grafika hotová — 10 ilustrací jídel + hero + OG + ikony (Codex), **optimalizovaná** (WebP, zmenšená)
* Video placeholder na stránce Menu drží layout

**Performance & SEO (realisticky):**

* Lighthouse Performance ≥ 85 mobile / ≥ 90 desktop
* Title/description/OG + jednoduché JSON-LD + sitemap + robots
* Validní HTML (W3C validator)

**Accessibility:**

* Lighthouse a11y ≥ 95, klávesnicová navigace, kontrasty WCAG AA

**Obsah:**

* Žádný typo (2 korektoři), ceny a adresa správné
* Privacy stránka publikovaná (web bez formuláře/trackingu)

---

## 15. Reference

| Dokument | Účel |
|---|---|
| [ZADANI.md](../ZADANI.md) | Zdroj všech školních požadavků |
| [PLAN.md](../dokumentace/PLAN.md) | Harmonogram a deliverables |
| [DESIGN.md](DESIGN.md) | **Single source of truth pro design** |
| [menu_sablona.md](../dokumentace/menu_sablona.md) | Finální menu (ID, popisy, ceny) |
| [marketing_plan_sablona.md](../dokumentace/marketing_plan_sablona.md) | Marketing strategie (vstup pro dokumentaci) |
| [rozpocet_sablona.md](../dokumentace/rozpocet_sablona.md) | Rozpočet a cenotvorba (vstup pro dokumentaci) |
| [zapis_konzultace.md](../dokumentace/zapis_konzultace.md) | Originální brief — zachovat beze změn |
