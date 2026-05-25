# PRD — Webová prezentace „The Early Bowl"

**Verze:** 3.0 (harmonizovaná)
**Status:** Fáze 1 — MVP development
**Datum:** 2026-05-24

> **Vizuální identita:** Tento dokument **nedefinuje** barvy, fonty ani ilustrační styl. Single source of truth je [DESIGN.md](DESIGN.md). PRD určuje **co** se staví a **jak funguje**; DESIGN určuje **jak to vypadá**.
>
> **Plán a termíny:** viz [PLAN.md](../docs/PLAN.md).

---

## 1. Executive summary

**The Early Bowl** je smyšlená snídaňová restaurace zaměřená na zdravou výživu, situovaná v obchodním domě Stará Breda v Opavě. Web slouží jako primární digitální vizitka s důrazem na:

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
| Lokace | Obchodní dům Stará Breda, Opava (fiktivní adresa pro účely projektu) |
| Personál | 1 osoba na směnu (2–3 brigádníci v rotaci) |
| Menu | 11 položek (3 nápoje, 2 sladké, 4 slané, 1 oběd, 1 polévka) |

Detailní menu viz [menu_sablona.md](../docs/menu_sablona.md). Cenotvorba a marže viz [rozpocet_sablona.md](../docs/rozpocet_sablona.md).

---

## 5. Web — funkční specifikace

### 5.1 Site map (5 podstránek — splňuje ZADANI)

1. **Homepage** (`/`) — hero, value props, featured menu, roadmap, IG CTA, kontakt teaser.
2. **Menu** (`/menu`) — všechny položky s ID, popisem, cenou, dietními badges, allergen matrix.
3. **O nás** (`/o-nas`) — příběh značky, mise, hodnoty.
4. **Kontakt** (`/kontakt`) — adresa, telefon, email, mapa, kontaktní formulář.
5. **Obchodní podmínky & Privacy** (`/podminky`) — provozovatel, ochrana osobních údajů, podmínky.

### 5.2 Klíčové funkce

#### Objednávání (Fáze 1)

* Telefonické objednávky s referencí na ID (`„Dejte mi prosím dvakrát M1 a jeden N2."`).
* Tlačítko **„Kopírovat ID"** u každé položky → uloží `S1` do clipboardu (snadno se vloží do SMS).
* Telefon na webu jako `tel:` link (mobil → přímé vytočení).

#### Allergen matrix

Tabulka s checkboxy: řádky = jídla, sloupce = vlastnosti (bez lepku, bez laktózy, vegan, vegetariánské, obsahuje ryby/ořechy/vejce). Render na `/menu` pod kartami.

#### Kontaktní formulář

* Pole: jméno, email, zpráva.
* Backend: **[Formspree](https://formspree.io/)** (free tier 50 zpráv/měsíc) nebo **[Web3Forms](https://web3forms.com/)**.
* Bez Captcha (low spam risk); honeypot field jako antispam.
* Po odeslání: success message v souladu s tone of voice (viz §11).

#### Sdílení & sociální sítě

* Open Graph + Twitter Card meta tagy (sdílení na IG, FB).
* Odkaz na Instagram v footeru a v hero CTA „Sleduj nás".
* Žádný embed feed (omezení Instagram API; budeme přidávat manuálně až ve Fázi 2).

### 5.3 Co web NEMÁ (out of scope pro Fázi 1)

* Online platby ani košík
* Rezervace stolů (Fáze 2)
* Doručování (Fáze 3)
* Vícejazyčnost (jen čeština)
* Login/registrace
* Newsletter
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

---

## 7. Technické řešení

### 7.1 Stack

| Vrstva | Volba | Důvod |
|---|---|---|
| Frontend | **HTML5 + CSS3 + Vanilla JS** (žádný framework) | 5 statických stránek nepotřebuje React. Lighthouse score 100. |
| Build | **Vite** (pro hot reload v dev) nebo žádný build (jen `index.html`) | Volitelné — můžeme jít čistě bez buildu pro maximální jednoduchost. |
| AI codegen | **Claude** (přes Claude Code) | Generování HTML/CSS/JS s důsledným použitím design tokens. |
| Image gen | **Recraft / Midjourney / DALL-E 3** | Bitmapové ilustrace dle prompt templates v [DESIGN.md](DESIGN.md) §7. |
| Video (prezentace) | **[HeyGen Hyperframes](https://github.com/heygen-com/hyperframes)** (HTML → video) | Propagační video ~30 s, **bez mluveného komentáře** (sdělení nese on-screen text, audio max. royalty-free podkres). Píšeme HTML, hyperframes vyrenderuje video — workflow nativně vhodný pro AI agenty a konzistentní s naším brand stylesheetem. |
| Kontaktní formulář | **Formspree** nebo Web3Forms | Bez vlastního backendu, splňuje GDPR. |
| Hosting | **Cloudflare Pages** (free tier) | Git push → deploy, HTTPS automaticky, globální CDN. Konfigurace přes `_headers` a `_redirects` soubory + `wrangler.toml`. |
| Doména | **generická `*.pages.dev`** (např. `the-early-bowl.pages.dev`) | Zdarma a plně dostačuje pro prototyp; vlastní doména volitelně později. |
| Analytics | **Cloudflare Web Analytics** (cookie-less) nebo žádné | Bez Google Analytics → bez cookie baneru. |

### 7.2 Struktura projektu

```
web/                         # deploy root pro Cloudflare Pages (build output dir = web)
├── index.html              # Homepage
├── menu.html
├── o-nas.html
├── kontakt.html
├── podminky.html
├── stylesheet.html         # Living style guide (showcase design systému)
├── css/
│   ├── tokens.css          # CSS custom properties (z DESIGN.md)
│   ├── reset.css
│   ├── base.css            # typografie, body, links
│   ├── components.css      # button, card, badge, input
│   └── pages.css           # page-specific overrides
├── js/
│   ├── nav.js              # mobile menu toggle
│   ├── copy-id.js          # copy-to-clipboard
│   └── form.js             # client-side validace
├── images/
│   ├── menu/               # n1.png, s1.png, m1.png, p1.png, ...
│   ├── hero.png
│   ├── og.png
│   └── logo.svg
├── favicon.ico
├── apple-touch-icon.png
├── robots.txt
├── sitemap.xml
├── _headers                # Cloudflare Pages — security & cache headers
├── _redirects              # Cloudflare Pages — přesměrování (404, atd.)
├── wrangler.toml           # Cloudflare Pages konfigurace
└── README.md
```

> **stylesheet.html** je interní referenční stránka (není v navigaci ani v sitemap). Slouží jako živá ukázka všech design tokens a komponent z [DESIGN.md](DESIGN.md) — vývojář i hodnotitel na ní vidí celý vizuální systém na jednom místě.

### 7.3 Data — menu jako JSON

Centrální zdroj pravdy pro menu (umožní v budoucnu snadný admin panel nebo regenerace HTML):

```json
{
  "categories": [
    { "id": "drinks", "name": "Nápoje", "icon": "🥤" },
    { "id": "sweet",  "name": "Sladké snídaně", "icon": "🥣" },
    { "id": "savory", "name": "Slané snídaně", "icon": "🥪" },
    { "id": "lunch",  "name": "Obědové menu (od 10:00)", "icon": "🍲" }
  ],
  "items": [
    {
      "id": "S1",
      "category": "sweet",
      "name": "Yogurt Bowl",
      "description": "Smetanový jogurt, domácí granola, čerstvé sezónní ovoce a kapka medu.",
      "price": 90,
      "image": "/images/menu/s1-yogurt-bowl.png",
      "diet": ["vegetarian"],
      "allergens": ["dairy", "gluten", "nuts"]
    }
    // ...
  ]
}
```

V Fázi 1 stačí, když je JSON inlinovaný jako `<script type="application/json" id="menu-data">` v `menu.html` a vyrenderuje se vanilla JS šablonou.

### 7.4 Performance cíle

| Metrika | Cíl mobile | Cíl desktop |
|---|---|---|
| LCP (Largest Contentful Paint) | < 2.5 s | < 1.5 s |
| FCP (First Contentful Paint) | < 1.2 s | < 0.8 s |
| CLS (Cumulative Layout Shift) | < 0.1 | < 0.1 |
| TTI (Time to Interactive) | < 3 s | < 1.5 s |
| Lighthouse Performance | ≥ 90 | ≥ 95 |
| Page weight (homepage) | < 500 KB | < 500 KB |

**Optimalizace:**

* WebP/AVIF formát pro obrázky, PNG fallback.
* `loading="lazy"` na off-screen obrázcích.
* `font-display: swap` pro Google Fonts.
* Žádné JS frameworky.
* CSS a JS minifikace na deployi (Cloudflare Pages „Auto Minify" nebo build krok).

### 7.5 SEO

**On-page:**

* `<title>` a `<meta name="description">` na každé stránce, unikátní.
* Sémantické HTML (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`).
* `alt` text u všech obrázků (popisující jídlo).
* `lang="cs"` na `<html>`.

**Strukturovaná data (JSON-LD na homepage):**

```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "The Early Bowl",
  "image": "https://the-early-bowl.pages.dev/og.png",
  "description": "Zdravá snídaňová restaurace v Opavě, 6:00–13:30",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Opava",
    "addressCountry": "CZ"
  },
  "telephone": "+420 777 000 111",
  "url": "https://the-early-bowl.pages.dev/",
  "openingHours": "Mo-Su 06:00-13:30",
  "servesCuisine": ["Breakfast", "Healthy"],
  "priceRange": "$"
}
```

**Off-page:**

* Google Business Profile registrace (lokální SEO).
* Sitemap submitnut do Google Search Console.

### 7.6 Bezpečnost

* **HTTPS povinné** (Cloudflare automaticky, „Always Use HTTPS").
* **Security headers** v souboru `_headers` (Cloudflare Pages):

  ```
  /*
    X-Content-Type-Options: nosniff
    X-Frame-Options: SAMEORIGIN
    Referrer-Policy: strict-origin-when-cross-origin
    Permissions-Policy: camera=(), microphone=(), geolocation=()
    Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src fonts.gstatic.com; img-src 'self' data:; frame-src www.google.com; connect-src 'self' formspree.io
  ```

* Honeypot field v kontaktním formuláři.
* Formspree má vlastní spam filtr.

### 7.7 GDPR & privacy

* **Žádné cookies** (vlastní ani třetích stran).
* **Žádný tracking** (bez Google Analytics; Cloudflare Web Analytics je cookie-less a bez fingerprinting).
* **Třetí strany:**
  * Google Fonts (load přes CDN — DPA Google).
  * Google Maps iframe na `/kontakt` (DPA Google).
  * Formspree pro odesílání zpráv (jméno + email + zpráva → email majitele).
* **Privacy stránka** pokrývá: kdo provozuje, jaké data se sbírají (jen formulář), kdo zpracovává (Formspree), jak dlouho se uchovávají, práva subjektu (GDPR).

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
│  │ [kopír] │ │ [kopír] │ │ [kopír] │    │
│  └─────────┘ └─────────┘ └─────────┘    │
├─────────────────────────────────────────┤
│ Sladké snídaně 🥣                       │
│  [S1] [S2]                              │
├─────────────────────────────────────────┤
│ Slané snídaně 🥪                        │
│  [M1] [M2] [M3] [M4]                    │
├─────────────────────────────────────────┤
│ Obědové menu 🍲                         │
│  [P1]                                   │
├─────────────────────────────────────────┤
│ ALLERGEN MATRIX (tabulka)               │
├─────────────────────────────────────────┤
│ JAK OBJEDNAT (instrukce)                │
│  „Zavolej +420... a řekni nám ID."      │
├─────────────────────────────────────────┤
│ FOOTER                                  │
└─────────────────────────────────────────┘
```

### 9.3 Kontakt

```
┌─────────────────────────────────────────┐
│ HEADER                                  │
├─────────────────────────────────────────┤
│ H1: „Stav se za námi"                   │
│  📍 Adresa                               │
│  📞 Telefon (tel: link)                  │
│  ✉️ Email (mailto: link)                 │
│  ⏰ Provozní doba 6:00–13:30             │
├─────────────────────────────────────────┤
│ GOOGLE MAPS iframe (400×400)            │
├─────────────────────────────────────────┤
│ KONTAKTNÍ FORMULÁŘ                      │
│  [Jméno]                                │
│  [Email]                                │
│  [Zpráva]                               │
│  [Pošli zprávu]                         │
├─────────────────────────────────────────┤
│ FOOTER                                  │
└─────────────────────────────────────────┘
```

---

## 10. Testování & QA

### 10.1 Funkční scénáře

* Homepage: všechny linky vedou na správné stránky, CTA tlačítka fungují.
* Menu: všech 11 položek se zobrazí, „Kopírovat ID" funguje, filtry filtrují, allergen matrix se vykreslí.
* Kontakt: telefon je clickable, email je clickable, mapa se načte, formulář odešle a zobrazí success message.
* Navigace: aktivní stránka zvýrazněna, mobile menu se otevírá a zavírá.

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

- [ ] Všechny linky fungují (žádné `#` placeholdery)
* [ ] Všechny obrázky mají alt text
* [ ] Žádný typo (korektura 2 osobami)
* [ ] Všechny ceny v menu odpovídají [menu_sablona.md](../docs/menu_sablona.md)
* [ ] Telefon a email správné
* [ ] Favicon a apple-touch-icon nastaveny
* [ ] OG image se zobrazuje při sdílení (test např. v <https://opengraph.xyz/>)
* [ ] Sitemap.xml a robots.txt existují
* [ ] Privacy policy přístupná z footeru
* [ ] HTTPS aktivní, žádné mixed content warnings

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

**Allergen sekce:**
> „Máš alergii nebo dietu? Tady vidíš, co pro tebe máme."

**O nás (úryvek):**
> Náš Příběh
>
> Začalo to jednoduše. Hledali jsme místo, kde bychom si mohli dát rychlou, ale poctivou snídani plnou chuti a energie. Protože jsme ho nenašli, rozhodli jsme se ho vytvořit.
>
> The Early Bowl není jen kavárna nebo bistro. Je to ranní rituál. Věříme v suroviny, které dávají mysl, v barvy, které zlepší náladu, a v to, že dobré ráno opravdu dělá dobrý den. Přijďte si k nám pro tu svou misku optimismu.
>
> Jsme malý tým, který věří, že snídaně rozhoduje o tom, jaký bude celý den. Nemáme čas na složitosti — ani ty. Tak jsme vzali nejlepší ingredience, udělali z nich pár solidních jídel a otevřeli dveře v šest ráno. Tečka."

**Kontaktní formulář:**
> Pole: „Tvoje jméno", „Tvůj e-mail", „Co potřebuješ?"
> Tlačítko: „Pošli zprávu"
> Success: „Díky! Ozveme se ti do 24 hodin. 💚"

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

### Fáze 1 (Aktuální — MVP)

* Statický web (5 podstránek)
* Menu s ID + telefonické objednávky
* Brand identita, ilustrace, propagační video

### Fáze 2 (6–12 měsíců po launchi)

* Online předobjednávky (zákazník vyzvedne v krabičce)
* Rezervační systém na stoly
* Email notifikace (SendGrid)
* Jednoduchý admin panel pro úpravu menu (např. headless CMS — Sanity, Tina)

### Fáze 3 (12+ měsíců)

* Doručování (integrace s Wolt / Bolt Food / Foodora)
* Vlastní rozvozový systém pro okolí

### Dlouhodobá vize

* Letní prodejní vozíček v parku
* Rozšíření menu (sezónní speciály)
* Expanze na další lokalitu

---

## 13. Rizika

| Riziko | P | Dopad | Mitigace |
|---|---|---|---|
| AI ilustrace nejsou stylově konzistentní | M | V | Master prompt + reference image, viz [DESIGN.md](DESIGN.md) §7 |
| Formspree free tier vyčerpán | N | N | Mock submit v dev, ostré jen pro finální QA |
| Cloudflare Pages deploy fail těsně před termínem | N | V | Deploy průběžně, ne až na konci |
| Performance budget překročen | N | S | Lighthouse audit po každé větší změně |
| Cross-browser bug v Safari | S | S | Test na reálném zařízení, ne jen DevTools |

---

## 14. Definice „done"

Web je hotový, když:

**Funkčnost (25 b):**

* Všech 5 stránek se načte bez JS errorů
* Všechny interaktivní prvky fungují (nav, copy ID, formulář)
* Kontaktní formulář odešle email a zobrazí success
* HTTPS aktivní, doména funguje

**Design (15 b):**

* Implementace 1:1 odpovídá [DESIGN.md](DESIGN.md)
* Logo a favicon nasazeny
* Všech 11 ilustrací jídel + hero + OG image hotové

**Performance & SEO:**

* Lighthouse ≥ 90 mobile, ≥ 95 desktop
* Meta tagy + JSON-LD + sitemap + robots
* Validní HTML (W3C validator)

**Accessibility:**

* Lighthouse a11y ≥ 95
* Klávesnicová navigace funguje
* Kontrasty splňují WCAG AA

**Obsah:**

* Žádný typo (2 korektoři)
* Všechny ceny správné a konzistentní
* Privacy policy publikována

---

## 15. Reference

| Dokument | Účel |
|---|---|
| [ZADANI.md](../ZADANI.md) | Zdroj všech školních požadavků |
| [PLAN.md](../docs/PLAN.md) | Harmonogram a deliverables |
| [DESIGN.md](DESIGN.md) | **Single source of truth pro design** |
| [menu_sablona.md](../docs/menu_sablona.md) | Finální menu (ID, popisy, ceny) |
| [marketing_plan_sablona.md](../docs/marketing_plan_sablona.md) | Marketing strategie (vstup pro dokumentaci) |
| [rozpocet_sablona.md](../docs/rozpocet_sablona.md) | Rozpočet a cenotvorba (vstup pro dokumentaci) |
| [zapis_konzultace.md](../docs/zapis_konzultace.md) | Originální brief — zachovat beze změn |
