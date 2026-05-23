# PRD – Webová stránka restaurace "The Early Bowl"
**Verze:** 2.0 – Detailní technické specifikace  
**Datum:** Květen 2026  
**Status:** Fáze 1 – MVP Development  
**Cílová audience:** Frontend/Backend vývojáři, UI/UX designéři

---

## 1. EXECUTIVE SUMMARY

**The Early Bowl** je snídaňová restaurace/bistro zaměřené na zdravou výživu, umístěné v obchodním domě Stará Breda. Webová stránka bude sloužit jako primární digitální představitel podniku s důrazem na přehledné menu, jedinečný vizuální design a snadné objednávání.

**Klíčové přínosy webu:**
- Představení zdravé nabídky menu
- Usnadnění objednávání přes telefon pomocí identifikátorů položek
- Budování značky prostřednictvím unikátní grafické identity
- Integrace s marketingem (Instagram)
- Příprava na budoucí rozšíření (online objednávky, rezervace, doručování)

**Klíčové metriky Fáze 1:**
- Času na vývoj: max. 6 týdnů
- Page Load Time: <2.5s na mobilě, <1.5s na desktopu
- Mobile Traffic: 70%+
- SEO: Indexovatelnost pro místní vyhledávání

---

## 2. OBCHODNÍ CÍLE

1. **Zvýšit povědomí** o existenci restaurace mezi cílovou skupinou
2. **Zjednodušit objednávání** zákazníků (telefon, budoucí online)
3. **Komunikovat hodnotu** – zdravá, rychlá a dostupná strava
4. **Budovat značku** prostřednictvím konzistentního vizuálního stylu
5. **Připravit technickou infrastrukturu** pro budoucí expanzi služeb

---

## 3. CÍLOVÁ SKUPINA

### Primární segmenty:
- **Vysokoškoláci** – především studenti Slezské univerzity
- **Středoškoláci** – studenti místních středních škol v blízkosti
- **Sportovci** – návštěvníci přilehlého fitness centra
- **Pracovníci** – ráno cestující do práce nebo během přestávky

### Charakteristiky:
- Věk: 16–35 let
- Aktivní online (Instagram, web)
- Orientují se na zdravou výživu
- Oceňují rychlost a dostupnost
- Vyhledávají alternativy k tradičnímu stravování

### Value Proposition:
Rychlá, zdravá a dostupná snídaně nebo dopolední jídlo (6:00–13:30), ideální před školou, maturitou nebo po tréninku.

---

## 4. POPIS PRODUKTU

### 4.1 Nabídka Restaurace

#### Provozní doba:
- **6:00–13:30** (pracovní dny i víkendy)

#### Kapacita:
- 15 míst v celku (12 u stolečků + 3 místa na baru)

#### Menu (Fáze 1):

**Nápoje (bez kávy a proteinových nápojů):**
- N1: Voda s citronem
- N2: Fresh pomerančový džus
- N3: Čaj

**Sladké snídaně:**
- S1: Yogurt Bowl (jogurt, granola, ovoce, sirup)
- S2: Teplá kaše (rýžová nebo ovesná, sirup)

**Slané snídaně:**
- M1: Avokádový toast s uzeným lososem
- M2: Vajíčka s toastem
- M3: Vajíčka s avokádem a slaninou
- M4: Toast Caprese

**Obědové menu (od 10:00):**
- P1: Denní polévka (rotující nabídka)

**Cenotvorba:** Základní jídla 90 Kč, složitější položky (s lososem) 110 Kč.

---

## 5. WEBOVÁ STRÁNKA – FUNKČNÍ POŽADAVKY

### 5.1 Architektura Obsahu

#### Hlavní stránky:
1. **Landing Page / Homepage**
   - Krátký intro podniku a value proposition
   - Vizuální identita a přivítání
   - Přesměrování na klíčové sekcí

2. **Menu**
   - Přehledný seznam všech položek s:
     - Unikátním identifikátorem (S1, M1, N1 atd.)
     - Vektorovým obrázkem (clipart styl)
     - Názvem a krátkým popisem
     - Cenou
     - Označením alergenů/diety (bez lepku, bez laktózy, veganské, vegetariánské)
   - Kategorie: Nápoje, Sladké snídaně, Slané snídaně, Obědové menu

3. **O Nás**
   - Příběh značky
   - Missata a hodnoty (zdravá strava, dostupnost, lokalita)
   - Personální zajištění a filozofie servisu

4. **Kontakt a Informace**
   - Provozní doba (6:00–13:30)
   - Adresa (Obchodní dům Stará Breda)
   - Telefonní číslo pro objednávky
   - Email
   - Mapy (Google Maps embed)

5. **Roadmapa / Vize (Timeline)**
   - Vizuální prezentace fází vývoje:
     - *Fáze 1 (Aktuální):* Základní landing page s menu
     - *Fáze 2:* Online předobjednávky a rezervace
     - *Fáze 3:* Doručování jídel
     - *Budoucnost:* Letní prodejní vozíček
   - Cíl: Vybudování vztahu se zákazníky a vykazování vize

6. **Marketing / Sociální Sítě**
   - Přesměrování na Instagram
   - Možný embed nedávných příspěvků z Instagramu

### 5.2 Funkční Charakteristiky

#### Bezpečnost a Privacy:
- **Bez invasivních cookies** – web nebude používat Google Analytics
- **GDPR compliance** – žádná zbytečná sběr dat
- **Jednoduchá privacy policy** – vzhledem k minimálnímu sběru dat

#### Objednávání (Fáze 1):
- Možnost objednání telefonem s využitím unikátních identifikátorů
- Web obsahuje jasné instrukce pro objednávání
- Zatím bez online objednávkového systému (Fáze 2)

#### Optimalizace pro Mobile:
- Mobilní responzivní design (primární = mobil)
- Snadné kopírování identifikátorů položek pro SMS/telefonní objednávky

#### SEO a Discoverability:
- Základní on-page SEO pro místní vyhledávání
- Meta tagy, alt texty pro obrázky
- Schema markup pro restauraci (název, adresa, hodiny, menu)

---

## 6. DESIGN A VIZUÁLNÍ IDENTITA

### 6.1 Unique Selling Point – Vektorový Design

**Klíčová diferenciátor:** Všechna jídla budou vyobrazena **unikátními vektorovými obrázky v "clipart" / "cartoon" stylu** místo tradiční fotografie.

- **Nástroj:** Inkscape, exporty do SVG
- **Styl:** Moderní, hravý, čitelný design
- **Rozměry obrázků:** 240px × 240px (SVG, otimalizováno pro web)
- **Formát:** SVG (ideální pro web), PNG fallback (200x200px pro starší prohlížeče)

### 6.2 Barvová Paleta a Typografie

#### Barvová Paleta:
| Název | HEX | RGB | Použití |
|-------|-----|-----|---------|
| Primární Zelená | `#22C55E` | 34, 197, 94 | Hlavní akční prvky, hover states |
| Tmavá Zelená | `#16A34A` | 22, 163, 74 | Tmavý text, Secondary buttons |
| Světlá Zelená | `#DCFCE7` | 220, 252, 231 | Pozadí, Highlights |
| Oranžová (Akcent) | `#FB923C` | 251, 146, 60 | Call-to-action prvky |
| Žlutá (Akcent) | `#FBBF24` | 251, 191, 36 | Varování, Special items |
| Bílá | `#FFFFFF` | 255, 255, 255 | Background, Text kontrastů |
| Tmavá | `#1F2937` | 31, 41, 55 | Primary text |
| Šedá Light | `#F3F4F6` | 243, 244, 246 | Secondary backgrounds |
| Šedá Dark | `#6B7280` | 107, 114, 128 | Secondary text |
| Chyba (Červená) | `#EF4444` | 239, 68, 68 | Errors, alerts |
| Úspěch | `#10B981` | 16, 185, 129 | Success messages |

#### Typografie:

| Prvek | Font | Velikost | Váha | Line-Height | Použití |
|-------|------|----------|------|-------------|---------|
| H1 (Heading 1) | Poppins | 48px | 700 | 1.2 | Hlavní nadpisy (homepage hero) |
| H2 (Heading 2) | Poppins | 36px | 700 | 1.3 | Nadpisy sekcí |
| H3 (Heading 3) | Poppins | 28px | 600 | 1.4 | Podnadpisy |
| Body Text | Inter | 16px | 400 | 1.6 | Normální text, popis |
| Small Text | Inter | 14px | 400 | 1.5 | Poznámky, malý tisk |
| Button Text | Poppins | 16px | 600 | 1.5 | Tlačítka |
| Menu Item Title | Poppins | 18px | 600 | 1.4 | Názvy jídel |

**Font Import (Google Fonts):**
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700&display=swap" rel="stylesheet">
```

### 6.3 Spacing & Layout System

**Spacing Scale (8px baseline):**
```
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 32px
2xl: 48px
3xl: 64px
4xl: 96px
```

**Breakpoints (Mobile-first):**
| Device | Min Width | Max Width | CSS |
|--------|-----------|-----------|-----|
| Mobile | 320px | 767px | `@media (max-width: 767px)` |
| Tablet | 768px | 1023px | `@media (min-width: 768px)` |
| Desktop | 1024px | ∞ | `@media (min-width: 1024px)` |

**Container Width:**
- Mobile: 100% (padding: 16px)
- Tablet: 90% (max 720px)
- Desktop: 80% (max 1200px)

### 6.4 Komponenty – Detailní Specifikace

#### Button Component:
```
Padding: 12px 24px
Border Radius: 8px
Font: Poppins 16px / 600
Transition: all 0.3s ease

Primary Button:
  Background: #22C55E
  Color: #FFFFFF
  Hover: #16A34A (darken)
  Active: scale(0.98)

Secondary Button:
  Background: #F3F4F6
  Color: #1F2937
  Border: 2px solid #22C55E
  Hover: #DCFCE7
```

#### Card Component (Menu item):
```
Background: #FFFFFF
Border: 1px solid #E5E7EB
Border Radius: 12px
Padding: 16px
Box Shadow: 0 2px 8px rgba(0, 0, 0, 0.08)
Hover: Box Shadow 0 8px 16px rgba(34, 197, 94, 0.15)
Transition: all 0.3s ease
```

#### Input Fields:
```
Font: Inter 16px
Padding: 12px 16px
Border: 2px solid #E5E7EB
Border Radius: 8px
Focus: Border #22C55E
Invalid: Border #EF4444
Background: #FFFFFF
Placeholder Color: #9CA3AF
```

### 6.5 Ikony a Vizuální Prvky

- **Ikony:** Heroicons nebo custom SVG (24x24px)
- **Divider:** `border-top: 1px solid #E5E7EB`
- **Sshadows:**
  - Subtle: `0 1px 2px rgba(0, 0, 0, 0.05)`
  - Medium: `0 4px 6px rgba(0, 0, 0, 0.07)`
  - Large: `0 10px 25px rgba(0, 0, 0, 0.1)`

### 6.6 Konzistentnost Brand Identity

- Web a Instagram budou používat stejný vizuální jazyk
- Jednotná paleta barev, ikony, typografie
- Vektorové obrázky budou použity všude (web, sítě, print)
- Design System bude v CSS proměnných (CSS Variables) pro snadné udržování

---

## 7. TECHNICKÉ POŽADAVKY

### 7.1 Stack Technologií a Architektura

**Frontend:**
- **HTML5** – Semantic markup
- **CSS3** – Flexbox, CSS Grid, CSS Variables
- **JavaScript (ES6+)** – Vanilla JS nebo lightweight framework (min. 2KB gzipped)
- **Optional:** Alpine.js nebo HTMX pro interaktivitu
- **Build Tool:** Parcel.js nebo Vite (rychlý dev server)
- **Asset Optimization:** TinyPNG/ImageOptim pro obrázky

**Backend (Fáze 1):**
- Static Site (HTML/CSS/JS – žádný backend server nutný)
- Email notifikace: SendGrid API nebo Formspree pro kontakt

**Backend (Fáze 2+):**
- Node.js + Express nebo Python + Django
- PostgreSQL pro databázi
- Redis pro caching

**Hosting:**
- Netlify, Vercel, nebo GitHub Pages (free tier dostačující)
- HTTPS certifikát (zdarma přes Let's Encrypt)
- CDN: Built-in (Netlify/Vercel) nebo Cloudflare

**Dependencies (Minimální):**
```json
{
  "dependencies": {
    "modern-normalize": "^1.1.0",
    "smooth-scroll-behavior": "^0.0.1"
  },
  "devDependencies": {
    "parcel": "^2.8.0",
    "sass": "^1.54.0",
    "imagemin-cli": "^6.0.0"
  }
}
```

### 7.2 Projekt Struktura

```
the-early-bowl/
├── src/
│   ├── index.html              # Homepage
│   ├── menu.html               # Menu stránka
│   ├── about.html              # O nás
│   ├── contact.html            # Kontakt
│   ├── privacy-policy.html     # Právní dokumenty
│   ├── css/
│   │   ├── variables.css       # CSS proměnné (barvy, spacing)
│   │   ├── reset.css           # Normalizace
│   │   ├── base.css            # Globální styly
│   │   ├── components.css      # Button, Card, Input
│   │   ├── layout.css          # Grid, Flexbox
│   │   ├── pages.css           # Page-specific styly
│   │   └── responsive.css      # Media queries
│   ├── js/
│   │   ├── main.js             # Entry point
│   │   ├── navigation.js       # Menu toggle, scroll
│   │   ├── menu.js             # Menu interakce (filter, search)
│   │   ├── copy-to-clipboard.js  # Kopírování ID jídel
│   │   ├── contact.js          # Formulář validace
│   │   └── analytics.js        # Custom event tracking (bez cookies)
│   ├── images/
│   │   ├── menu-items/         # SVG obrázky jídel (240x240px)
│   │   ├── icons/              # UI ikony (24x24px)
│   │   └── bg/                 # Background obrázky
│   └── fonts/                  # Lokální copy Google Fonts (volitelné)
├── public/
│   └── favicon.ico
├── dist/                       # Build output
├── .htaccess                   # Server config (cache, redirects)
├── robots.txt                  # SEO
├── sitemap.xml                 # SEO
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

### 7.3 Wireframy a Page Structure

#### Homepage / Landing Page:
```
┌─────────────────────────────────────────┐
│  HEADER                                  │
│  Logo | Nav (Menu, O nás, Kontakt)      │
├─────────────────────────────────────────┤
│  HERO SECTION                           │
│  Titul: "Zdravá snídaně pro aktivní"   │
│  Tagline: "Svěží a dostupné 6:00-13:30" │
│  [Jdi na menu CTA Button]                │
│  Background: Vektorový obrázek          │
├─────────────────────────────────────────┤
│  VALUE PROPOSITION                      │
│  3x Ikona + Text (Rychlé, Zdravé, ...)  │
├─────────────────────────────────────────┤
│  FEATURED MENU ITEMS (3-4 položky)      │
│  Card Grid s obrázkem, ID, cenou        │
├─────────────────────────────────────────┤
│  ROADMAP / VIZE                         │
│  Timeline: Fáze 1, 2, 3                 │
├─────────────────────────────────────────┤
│  SOCIAL PROOF                           │
│  Instagram follow: "Sleduj nás"         │
├─────────────────────────────────────────┤
│  FOOTER                                  │
│  Kontakt, Adresa, © info                │
└─────────────────────────────────────────┘
```

#### Menu Page:
```
┌─────────────────────────────────────────┐
│  HEADER (stejný)                        │
├─────────────────────────────────────────┤
│  MENU HEADER                            │
│  Titul: "Naše menu"                     │
│  [Search box] [Filter: Diet options]    │
├─────────────────────────────────────────┤
│  NÁPOJE                                 │
│  Card | N1 | Voda s citronem | 30 Kč   │
│  Card | N2 | Fresh OJ         | 50 Kč   │
│  Card | N3 | Čaj              | 35 Kč   │
├─────────────────────────────────────────┤
│  SLADKÉ SNÍDANĚ                         │
│  [Similar card layout]                   │
├─────────────────────────────────────────┤
│  SLANÉ SNÍDANĚ                          │
│  [Similar card layout]                   │
├─────────────────────────────────────────┤
│  OBĚDOVÉ MENU                           │
│  [Similar card layout]                   │
├─────────────────────────────────────────┤
│  ALLERGEN MATRIX TABLE                  │
│  Tabulka: Jídlo x Alergen               │
├─────────────────────────────────────────┤
│  FOOTER                                  │
└─────────────────────────────────────────┘
```

#### Contact Page:
```
┌─────────────────────────────────────────┐
│  HEADER                                  │
├─────────────────────────────────────────┤
│  CONTACT SECTION                        │
│  Titul: "Kontaktuj nás"                 │
│  Adresa: Obchodní dům Stará Breda       │
│  Telefon: +420 XXX XXX XXX (clickable)  │
│  Email: info@earlybow.com (clickable)   │
│  Hodiny: 6:00–13:30                     │
├─────────────────────────────────────────┤
│  GOOGLE MAPS EMBED (400x400px)          │
├─────────────────────────────────────────┤
│  CONTACT FORM (bez cookies!)            │
│  Name | Email | Message [Submit]        │
│  Success message: "Děkujeme!"           │
├─────────────────────────────────────────┤
│  FOOTER                                  │
└─────────────────────────────────────────┘
```

### 7.4 API/Data Struktura (JSON)

#### Menu Data (menu-data.json):
```json
{
  "menuItems": [
    {
      "id": "N1",
      "category": "drinks",
      "name": "Voda s citronem",
      "description": "Čerstvá voda s citronem",
      "price": 30,
      "image": "/images/menu-items/n1-water.svg",
      "allergens": [],
      "diet": ["vegan"],
      "active": true
    },
    {
      "id": "M1",
      "category": "savory-breakfast",
      "name": "Avokádový toast s uzeným lososem",
      "description": "Pečivo, avokádo, uzený losos, zelenina, olivový olej",
      "price": 110,
      "image": "/images/menu-items/m1-avocado-toast.svg",
      "allergens": ["fish", "gluten"],
      "diet": ["pescatarian"],
      "active": true
    }
  ],
  "allergens": {
    "gluten": "Bez lepku",
    "dairy": "Bez laktózy",
    "nuts": "Bez oříšků",
    "fish": "Ryba"
  },
  "diets": {
    "vegetarian": "Vegetariánské",
    "vegan": "Veganské",
    "pescatarian": "S rybou",
    "glutenfree": "Bez lepku"
  }
}
```

### 7.5 Performance Optimalizace

**Cíle:**
- Page Load Time: <2.5s na mobilě, <1.5s na desktopu
- Lighthouse Score: min. 90
- Mobile-first design

**Optimalizace:**
1. **Image Optimization:**
   - SVG pro ilustrace (20-50KB)
   - PNG obrázky: max 100KB
   - WebP formát s fallback
   - Lazy loading pro off-screen obrázky

2. **CSS/JS Optimalizace:**
   - Minifikace CSS (prod: <20KB)
   - Vanilla JS (bez velkých knihoven)
   - Critical CSS inline (above-the-fold)
   - Defer non-critical JavaScript

3. **Caching Strategie:**
   - Service Worker: cache-first pro assets
   - Browser cache: 30 dní pro statické soubory
   - ETags pro verzi kontrolu

4. **Server Optimization:**
   - Gzip komprese (všechny texty)
   - Brotli komprese (pokud Netlify/Vercel)
   - HTTP/2 Push assets

### 7.6 SEO & Meta Tags

```html
<!-- Homepage -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>The Early Bowl – Zdravá snídaně v Ostravě | 6:00–13:30</title>
<meta name="description" content="Zdravá snídaňová restaurace v Obchodním domě Stará Breda. Svěží toast, bowl, vajíčka. Objednej online nebo zavolej.">
<meta name="keywords" content="snídaně, zdravá strava, fast food, Ostrava, Stará Breda, vegetariánské">
<meta name="author" content="The Early Bowl">
<link rel="canonical" href="https://www.theearlybow.cz/">

<!-- Open Graph (Instagram, Facebook Share) -->
<meta property="og:title" content="The Early Bowl – Zdravá snídaně">
<meta property="og:description" content="Zdravá snídaňová restaurace...">
<meta property="og:image" content="https://www.theearlybow.cz/og-image.png">
<meta property="og:url" content="https://www.theearlybow.cz/">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="The Early Bowl">
<meta name="twitter:description" content="Zdravá snídaně...">

<!-- JSON-LD Schema (Restaurant) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "The Early Bowl",
  "image": "https://www.theearlybow.cz/og-image.png",
  "description": "Zdravá snídaňová restaurace",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Obchodní dům Stará Breda",
    "addressLocality": "Ostrava",
    "postalCode": "XXXXX",
    "addressCountry": "CZ"
  },
  "telephone": "+420XXXXXXXXX",
  "url": "https://www.theearlybow.cz/",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "06:00",
    "closes": "13:30"
  },
  "menu": "https://www.theearlybow.cz/menu.html",
  "priceRange": "$$"
}
</script>
```

### 7.7 GDPR & Privacy Compliance

**Bez cookies, bez komplexního cookie banneru:**
- Bez Google Analytics (pouze custom event tracking bez cookies)
- Bez třetích stran trackerů
- Jednoduchá Privacy Policy (1-2 stránky)

**Privacy Policy bude obsahovat:**
- Kontaktní email provozovatele
- Informace o emailovém formuláři (Formspree)
- Informace o Google Maps embed
- Vysvětlení, že se nesbírá žádné identifikující info

### 7.8 Bezpečnost

- **HTTPS povinný** – všechny požadavky redirect na HTTPS
- **Content Security Policy (CSP):**
  ```
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline' fonts.googleapis.com;
  font-src fonts.gstatic.com;
  img-src 'self' data: maps.googleapis.com;
  frame-src maps.google.com;
  ```
- **X-Frame-Options:** `SAMEORIGIN`
- **X-Content-Type-Options:** `nosniff`
- **Formulář:** CSRF token pro email submity

### 7.9 Analytics (bez cookies)

**Custom event tracking (localStorage bez cookies):**
```javascript
// Trackování akcí bez cookies
const trackEvent = (action, label) => {
  const event = new Date().toISOString();
  fetch('/api/event', {
    method: 'POST',
    body: JSON.stringify({ action, label, timestamp: event })
  });
};

// Příklady:
trackEvent('menu_viewed', 'desktop');
trackEvent('item_copied', 'M1');
trackEvent('contact_clicked', 'phone');
```

**Dostupná data (bez cookies):**
- Počet kliknutí na "Objednat"
- Populární položky menu
- Device type (mobile vs desktop)
- Zdroj (direct, Instagram, search)

---

## 8. INTEGRACE A TŘETÍ STRANY

### 8.1 External Services

| Service | Purpose | Free Tier | Integration |
|---------|---------|-----------|-------------|
| Formspree | Email formulář | 50 zpráv/měsíc | embed form |
| Google Maps | Lokace | Embed zdarma | iframe + API |
| Netlify | Hosting | 100 GB/měsíc | Git push deploy |
| SendGrid | Email notifikace | 100 zpráv/den | SMTP/API |
| ImageOptim | Image compression | zdarma | CLI |

### 8.2 Social Media Integration

**Instagram:**
- Manual content posting (zatím)
- Link na webu (href="https://instagram.com/theearlybow_cz")
- Eventually: Embed recent posts via API

**Facebook:**
- Mirror content from Instagram
- Link na webu

### 8.3 Third-party Embeds

```html
<!-- Google Maps -->
<iframe src="https://maps.google.com/maps?q=Stará Breda Ostrava&output=embed" 
        width="100%" height="400" style="border:0;" 
        allowfullscreen="" loading="lazy">
</iframe>

<!-- Instagram Follow Button -->
<a href="https://instagram.com/theearlybow_cz" target="_blank">
  Sleduj nás na Instagramu
</a>
```

---

## 9. MARKETING & GO-TO-MARKET STRATEGIE

### 9.1 Primární Kanály

**Instagram** (hlavní komunikační kanál):
- Každou neděli: Zveřejnění fixního menu pro nadcházející týden
- Sezónní recepty a tipy na zdravou stravu
- Behind-the-scenes obsah (příprava jídel, tým)
- Přesměrování na web

**Web:**
- Landing page s jasnou navigací
- Přímý odkaz na Instagram

### 9.2 Offline Marketing

- **Partnerství s Gymem:** Umístění reklamy na obrazovky/tabule fitness centra
- **Letáková kampaň:** Distribuce letáků na místní střední a vysoké školy
- **Word-of-mouth:** Cílení na sousedící instituce

### 9.3 Lokální SEO

- Google Business Profile (GMB)
- Místní vyhledávání – „snídaně Stará Breda", „zdravá restaurace"

---

## 10. ACCESSIBILITY & BROWSER COMPATIBILITY

### 10.1 Accessibility (WCAG 2.1 AA)

**Color Contrast:**
- Minimální ratio 4.5:1 pro normální text
- Minimální ratio 3:1 pro tlačítka

**Keyboard Navigation:**
- Všechny prvky dostupné via Tab
- Focus state viditelný (outline nebo background)
- Skip link na homepage pro přeskočení navigace

**Screen Reader Support:**
- Semantic HTML (`<button>`, `<nav>`, `<main>`, `<footer>`)
- ARIA labels kde je potřeba: `aria-label`, `aria-describedby`
- Alt text na všechny obrázky
- Role attributes pro custom komponenty

**Příklady:**
```html
<!-- Bad -->
<div class="button" onclick="toggleMenu()">Menu</div>

<!-- Good -->
<button aria-label="Otevřít navigaci" onclick="toggleMenu()">
  <span aria-hidden="true">☰</span>
</button>

<!-- Menu Item Card -->
<div class="menu-card">
  <img src="m1.svg" alt="Avokádový toast s lososem">
  <h3>Avokádový toast s lososem</h3>
  <p>ID: M1</p>
  <button class="copy-btn" data-item="M1" aria-label="Kopírovat ID M1">
    Kopírovat ID
  </button>
</div>
```

### 10.2 Browser Support

| Browser | Verze | Support |
|---------|-------|---------|
| Chrome | 90+ | ✓ Full |
| Firefox | 88+ | ✓ Full |
| Safari | 14+ | ✓ Full |
| Edge | 90+ | ✓ Full |
| Mobile Safari (iOS) | 14+ | ✓ Full |
| Chrome Mobile | 90+ | ✓ Full |
| Samsung Internet | 14+ | ✓ Full |

**Fallbacks:**
- CSS Grid → Flexbox fallback
- SVG → PNG fallback pro starší browsers
- Modern JavaScript → Graceful degradation

---

## 11. TESTING & QUALITY ASSURANCE

### 11.1 Funkční Testování

**Test Scenarios – Homepage:**
1. ✓ Page načte bez erroru <2.5s
2. ✓ Všechny linky fungují (Menu, O nás, Kontakt)
3. ✓ CTA Button na "Jdi na menu" vede na menu.html
4. ✓ Hero sekcí se správně zobrazuje na mobile
5. ✓ Featured menu items se zobrazují správně

**Test Scenarios – Menu Page:**
1. ✓ Všechny menu itemy se načtou (11 položek)
2. ✓ Kliknutí na "Kopírovat ID" zkopíruje text do clipboard
3. ✓ Search box filtruje položky v reálném čase
4. ✓ Filter by allergens funguje
5. ✓ Allergen matrix se zobrazuje správně
6. ✓ Lazy loading obrázků funguje

**Test Scenarios – Contact Page:**
1. ✓ Kontaktní informace jsou viditelné
2. ✓ Telefonní číslo je clickable (tel:)
3. ✓ Email je clickable (mailto:)
4. ✓ Google Maps embed se načte
5. ✓ Formulář se submitne bez erroru

### 11.2 Performance Testing

**Nástroje:**
- Google PageSpeed Insights (cíl: >90 mobile, >95 desktop)
- GTmetrix (cíl: <1.5s load time)
- WebPageTest

**Metriky:**
- First Contentful Paint (FCP): <1.2s
- Largest Contentful Paint (LCP): <2.5s
- Cumulative Layout Shift (CLS): <0.1
- Time to Interactive (TTI): <3s

### 11.3 Browser/Device Testing

**Devices:**
- iPhone 12/13 (mobile)
- Samsung Galaxy S21 (mobile)
- iPad Pro (tablet)
- Desktop (1920x1080, 2560x1440)

**Tools:**
- Chrome DevTools (responsive design mode)
- BrowserStack (online testing)
- Real device testing

### 11.4 SEO Testing

- Google Search Console: submit sitemap
- Meta tags validace
- Schema markup validace (schema.org)
- Local SEO: Google Business Profile

### 11.5 Security Testing

- SSL/TLS validace (https)
- Content Security Policy (CSP) header check
- OWASP Top 10 check (CSRF, XSS, Injection)
- Dependency scan (npm audit)

### 11.6 Manual Checklist

```
FRONTEND:
☐ Všechny stránky otevřou bez JS erroru
☐ Všechny obrázky se načtou
☐ Formulář je validován (client-side)
☐ Mobilní verze je čitelná (font 16px+)
☐ Hover effects fungují na desktopu
☐ Focus states viditelné (Tab navigation)

DESIGN:
☐ Všechny barvy odpovídají specifikaci
☐ Typografie je konzistentní
☐ Spacing/padding je konzistentní
☐ Ikony jsou správné velikosti

CONTENT:
☐ Žádné typo ani chyby
☐ Všechny ceny jsou správné
☐ Všechny allergen informace jsou aktuální
☐ Kontaktní info jsou správné

SEO:
☐ Meta title a description jsou na všech stránkách
☐ Alt text na všech obrázcích
☐ Internal links fungují
☐ Sitemap.xml a robots.txt existují

PERFORMANCE:
☐ Page Load <2.5s na mobilě
☐ Lighthouse score >90
☐ Obrázky jsou optimalizované
☐ CSS/JS jsou minifikované
```

---

## 12. INSTALACE A SETUP

### 12.1 Development Environment

**Požadavky:**
- Node.js 16+ (npm 8+)
- Git
- Code editor (VS Code, Sublime)
- Chrome/Firefox developer tools

**Setup kroky:**
```bash
# Clone repo
git clone https://github.com/earlybow/the-early-bowl-web.git
cd the-early-bowl-web

# Install dependencies
npm install

# Start development server (hot reload)
npm run dev
# Opens: http://localhost:1234

# Build for production
npm run build
# Output: dist/ folder

# Optimize images
npm run optimize-images

# Lint & format
npm run lint
npm run format
```

### 12.2 Folder Setup Template

```
the-early-bowl/
├── package.json (with scripts)
├── .gitignore
├── .env.example
├── README.md
├── src/
│   ├── index.html
│   ├── menu.html
│   ├── about.html
│   ├── contact.html
│   ├── privacy-policy.html
│   ├── css/
│   │   ├── index.css (imports all)
│   │   └── (other files)
│   ├── js/
│   │   ├── index.js
│   │   └── (module files)
│   └── images/
│       ├── menu-items/
│       ├── icons/
│       └── bg/
└── public/
    ├── favicon.ico
    ├── robots.txt
    └── sitemap.xml
```

### 12.3 Environment Variables (.env)

```env
# .env (development)
VITE_API_URL=http://localhost:3000
VITE_GA_ID=disabled

# .env.production
VITE_API_URL=https://api.earlybow.com
VITE_GA_ID=
```

---

## 13. DEPLOYMENT

### 13.1 Netlify Deployment (Doporučeno)

1. Push kód na GitHub
2. Propojit GitHub repo s Netlify
3. Deploy settings:
   ```
   Build command: npm run build
   Publish directory: dist/
   ```
4. Automatic deploys na každý push

**netlify.toml config:**
```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "16"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "SAMEORIGIN"
    Strict-Transport-Security = "max-age=31536000"

[plugins]
  package = "@netlify/plugin-lighthouse"
```

### 13.2 Domain Setup

1. Koupit domain (e.g., theearlybow.cz)
2. Nastavit DNS records v Netlify
3. Automaticky se vygeneruje SSL certifikát

### 13.3 DNS Records (Example)

```
Type    | Name  | Value
--------|-------|--------
CNAME   | www   | your-site.netlify.app
CNAME   | @     | your-site.netlify.app
TXT     | @     | Netlify verification
```

---

## 14. MONITORING A MAINTENANCE

### 14.1 Uptime Monitoring

- Uptime Robot (zdarma): Check site every 5 minut
- Alert na email pokud site down

### 14.2 Performance Monitoring

- Google PageSpeed Insights: weekly check
- Lighthouse CI (automated na GitHub)

### 14.3 Maintenance Tasks

**Měsíčně:**
- Check npm updates: `npm outdated`
- Review analytics
- Check contact form submissions

**Čtvrtletně:**
- Security audit: `npm audit`
- SEO audit
- Link validation

**Ročně:**
- Full site review
- User feedback collection
- Plan pro Fázi 2

---

## 15. FÁZE VÝVOJE A TIMELINE

### Fáze 1: MVP (Current – Realizace)
**Cíl:** Základní landing page s menu

**Deliverables:**
- Landing page s úvodní sekcí
- Menu s vektorovými obrázky a identifikátory
- O nás + Kontakt
- Roadmapa/vize
- Instagram feed (manuální update)
- Mobilně optimalizovaný design
- Bez cookies, jednoduché privacy policy

**Doba:** 4–6 týdnů
**Technologie:** HTML/CSS + JavaScript (vanilla nebo lightweight framework)

### Fáze 2: Rozšíření Služeb (6–12 měsíců)
- Online rezervační systém
- Předobjednávkový systém (vyzvednutí v krabičce)
- Integrace emailových notifikací
- Admin panel pro správu menu

### Fáze 3: Doručování (12+ měsíců)
- Integraci s doručovacími službami
- Objednávkový systém pro domů

### Dlouhodobá Vize:
- Letní prodejní vozíček v parku
- Rozšíření menu
- Možné expanze na další lokality

---

## 16. SUCCESS METRICS

### Metriky Fáze 1 (Web):
1. **Web Traffic (Google Analytics alternative):** Cíl 200+ unikátních návštěv za měsíc
2. **Mobile Traffic:** Min. 70% z celkového trafficu
3. **Page Performance:** 
   - Lighthouse Score: >90 (mobile), >95 (desktop)
   - Load time: <2.5s (mobile), <1.5s (desktop)
4. **Engagement:** 
   - Click-through rate na "Objednat": >15%
   - Time on site: >2 min
   - Bounce rate: <50%
5. **Usability:** 
   - Copy-to-clipboard success: >80%
   - Form completion: >60%

### Metriky Obchodu (Custom Events):
1. **"menu_viewed"** – Počet shlédnutí menu (target: 150+/měsíc)
2. **"item_copied"** – ID položek zkopírované (target: 200+/měsíc)
3. **"contact_clicked"** – Kliknutí na kontakt (target: 50+/měsíc)
4. **Device Type Breakdown** – Mobile vs Desktop split

### Metriky Sociálních Sítí:
1. **Instagram Followers:** Cíl 100+ do 1 měsíce
2. **Engagement Rate:** >5% (likes + comments / followers)
3. **Website Traffic z Instagramu:** 30% z celkového

### Metriky Offline:
1. **Skutečný počet objednávek** (s odkazem na web či Instagram)
2. **Průměrný počet denních guestů** (target: 8–10 za den)
3. **Customer Feedback** (budoucí survey)

---

## 17. OBSAH A COPYWRITING

### 17.1 Copywriting Guidelines

**Tón Hlasu:**
- ✓ Přátelský a přístupný
- ✓ Orientován na mladé publikum (16–35 let)
- ✓ Zdůrazňuje zdraví, kvalitu a dostupnost
- ✓ Česky (s možností osobního tónu, bez angličtiny)
- ✓ Krátké věty, jasné sdělení

**Nepoužívat:**
- ✗ Corporate speak ("synergistické řešení")
- ✗ Příliš formální tón
- ✗ Složité slovo pro jednoduché pojmy

### 17.2 Klíčové Zprávy

**Homepage Hero:**
- "Zdravá snídaně pro aktivní lidi"
- "Svěží a dostupné jídlo 6:00–13:30"
- CTA: "Koukni na menu" nebo "Objednej si snídani"

**Menu:**
- "Připraven pro tebe. Bez komplikací."
- "Všechny ceny a ID ingrediencí níže"

**Contact:**
- "Máš otázku? Jsi na správném místě"
- "Zavolej, napiš nebo se zastaví"

**About:**
- "Jsme mladý tým, který miluje zdravou stravu"
- "Vytvářujeme snídani, která ti energii na den"

### 17.3 Menu Item Descriptions (příklady)

```
S1: Yogurt Bowl
"Smetanový jogurt, domácí granola, čerstvé ovoce a kapka sirupu. Dokonalý start do dne."

M1: Avokádový toast s uzeným lososem
"Křupavý toast s máslíčkem, creamy avokádo, uzený losos a svěží zelenina. Proteinová bomba."

P1: Denní polévka
"Každý den nová polévka. Zeptej se v baru, co máme dnes."
```

### 17.4 Button Labels & CTA

| Button | Label | Context |
|--------|-------|---------|
| Primary | "Jdi na menu" | Homepage hero |
| Secondary | "Objednej nyní" | Featured items |
| Tertiary | "Kopírovat ID" | Menu item |
| Link | "Sleduj nás na Instagramu" | Social section |
| Form | "Pošli zprávu" | Contact form |

---

## 18. OBSAHOVÁ STRUKTURA - KONKRÉTNÍ TEXTY

### 18.1 Homepage Copy

```
HERO:
"Zdravá snídaně. Každý den."
"Svěží, chutné a dostupné. Přesně tak, jak chceš."

VALUE PROPS:
🚀 Rychlé – Objednáš přes telefon, během minut máš hotovo
❤️ Zdravé – Bez zbytečného cukru, bez masla. Jen kvalita.
📍 Dostupné – V Obchodním domě Stará Breda, od 6:00 do 13:30

FEATURED MENU:
"Tady je preview – všechno se pak rozpitá na menu."

ROADMAP:
"Kde se chceme dostat?"
"Fáze 1: Jsme tady (Menu, objednávky)"
"Fáze 2: Budeme tady (Online objednávky, rezervace)"
"Fáze 3: Chceme sem (Doručování do domu)"

INSTAGRAM CTA:
"Chceš vidět, co se každý den vaří? Sleduj nás na Instagramu!"
```

### 18.2 Menu Page Copy

```
HEADER:
"Celé naše menu"
"Najdi si svou oblíbenou kombinaci"

CATEGORY HEADERS:
"Nápoje – Osvěž se"
"Sladké snídaně – Pro milovníky sladkého"
"Slané snídaně – Klasika se stylem"
"Obědy – Od 10:00"

ALLERGEN SECTION:
"Máš alergie? Tady vidíš, co pro tebe máme"
"Veganské, bez lepku, bez laktózy – vybral si?"
```

### 18.3 About Page Copy

```
ABOUT HEADER:
"O The Early Bowl"
"Snídaně s důvodem"

ABOUT CONTENT:
"Jsme skupina lidí, kterí věří, že snídaně je nejdůležitější jídlo dne.
Nemáme čas na složité recepty, stejně jako ty nemáš čas koukat.
Takže jsme si vzali nejlepší ingredience a udělali z toho něco, 
co chutná, dělá ti dobře a trvá pět minut."

OUR MISSION:
"Posílat tě do světa v plné síle – zdravě, energicky a spokojené."

OUR VALUES:
"🌿 Zdravá strava – Bez kompromisů"
"⏰ Čas – Vážíme si tvého času"
"🤝 Komunita – Chceme, aby si nás libi"
"📍 Lokálně – Máme radi Ostravu"
```

### 18.4 Contact Page Copy

```
CONTACT HEADER:
"Chceš si s nami povídat?"
"Napiš nám, zavolej nebo se zastaví"

ADDRESS:
"The Early Bowl
Obchodní dům Stará Breda
Ostrava, Česká Republika"

HOURS:
"Pondělí–Neděle: 6:00–13:30
(Přestávka: 10:00–11:00 – příprava obědu)"

FORM LABELS:
"Tvoje jméno" [placeholder]
"Tvůj email" [placeholder]
"Tvoje zpráva" [placeholder]
"Pošli nám zprávu" [button]

SUCCESS MESSAGE:
"Díky! Odpověděli jsme ti do 24 hodin. 💚"

INSTAGRAM PROMO:
"Nebo si nás napiš na Instagramu – tam jsme každý den"
```

---

## 19. OMEZENÍ A CONSTRAINTS

- **Kapacita:** Pouze 15 míst → omezuje řešení (žádné online doručování v Fázi 1)
- **Personál:** Jedna osoba na směnu → zjednodušený menu (6–10 fixních položek)
- **Nápoje:** Bez kávy a proteinových nápojů → nižší fixní náklady, méně konkurence s gymem
- **Rozpočet:** Školní projekt – minimální náklady (hosting zdarma, design open-source)
- **Čas:** Musí být hotov v určitém školním termínu
- **Technologie:** Žádné complex backend systémy v Fázi 1
- **GDPR:** Bez cookies → bez Google Analytics

---

## 20. RIZIKA A MITIGATION

| Riziko | Pravděpodobnost | Dopad | Mitigation |
|--------|-----------------|-------|-----------|
| Zpoždění v ilustracích | Střední | Vysoký | Early start na SVG, use templates |
| Technické problémy | Nízká | Vysoký | Thorough QA, staging environment |
| Low traffic | Střední | Střední | Social media push, local marketing |
| Browser incompatibility | Nízká | Střední | Cross-browser testing, fallbacks |
| Performance issues | Nízká | Vysoký | Performance budgets, optimization |
| Security vulnerability | Velmi nízká | Velmi vysoký | Security audit, OWASP checklist |

---

## 21. PŘÍJMANÍ KRITÉRIA (DEFINICE DONE)

Web bude považován za **úspěšný (hotový), pokud splní:**

### Funkcionalita:
- ✓ Všechny 5 stránek se načtou bez JavaScript erroru
- ✓ Všechny interaktivní prvky fungují (menu toggle, copy-to-clipboard, formulář)
- ✓ Všechny linky vedou na správné místa
- ✓ Kontaktní formulář je odesílán na email

### Design & UX:
- ✓ Konzistentní vektorový styl všech obrázků
- ✓ Čitelnost textu na všech zařízeních (16px+ body text)
- ✓ Mobile UX je intuitívní (thumb-friendly buttons)
- ✓ Žádný layout shift (CLS <0.1)

### Obsah:
- ✓ Kompletní menu (11 položek) s ID a cenami
- ✓ Allergen matrix vyplněná
- ✓ Všechny kontaktní informace správné
- ✓ Žádné typo, zkontrolováno 2 osobami

### Performance:
- ✓ Page Load <2.5s na mobilě
- ✓ Lighthouse Score >90 (mobile), >95 (desktop)
- ✓ Všechny obrázky optimalizované (<100KB)

### SEO & Compliance:
- ✓ Meta title a description na všech stránkách
- ✓ Alt text na všech obrázcích
- ✓ Schema markup (JSON-LD) na homepage
- ✓ Sitemap.xml a robots.txt existují
- ✓ Bez cookies, žádný tracking bez souhlasu
- ✓ Privacy policy vytvořena

### Accessibility:
- ✓ Keyboard navigation funguje (Tab, Enter, Escape)
- ✓ Color contrast ratio >4.5:1 na textu
- ✓ Focus states viditelné
- ✓ Semantic HTML (button, nav, main, footer)

### Deployment:
- ✓ Domain configured (theearlybow.cz nebo náhrada)
- ✓ HTTPS aktivní
- ✓ Netlify auto-deploy z GitHub configured
- ✓ Sitemap submitted do Google Search Console

---

## 22. APPENDIX

### A. Glossář a Pojmy

| Termín | Vysvětlení |
|--------|-----------|
| MVP | Minimum Viable Product – nejmenší funkční verze |
| CTA | Call-to-Action – tlačítko/odkaz na akci |
| SVG | Scalable Vector Graphics – vektorový formát |
| SEO | Search Engine Optimization – optimalizace pro vyhledavače |
| WCAG | Web Content Accessibility Guidelines |
| Lighthouse | Chrome DevTools tool pro analýzu kvality webu |
| Netlify | Hosting platform s continuous deployment |
| Formspree | Service pro email formuláře bez backendů |

### B. Užitečné Zdroje

**Designové nástroje:**
- [Figma](https://figma.com) – UI/UX design
- [Inkscape](https://inkscape.org) – Vektorová grafika (FREE)
- [Penpot](https://penpot.app) – Open-source Figma

**Vývojářské nástroje:**
- [VS Code](https://code.visualstudio.com) – Code editor
- [Prettier](https://prettier.io) – Code formatter
- [ESLint](https://eslint.org) – Code linter

**Optimalizace:**
- [TinyPNG](https://tinypng.com) – Image compression
- [Google PageSpeed](https://pagespeed.web.dev) – Performance insights

**Accessibility:**
- [WAVE](https://wave.webaim.org) – Accessibility checker
- [axe DevTools](https://www.deque.com/axe/devtools/) – Browser extension

**Testing:**
- [BrowserStack](https://www.browserstack.com) – Cross-browser testing
- [GTmetrix](https://gtmetrix.com) – Performance monitoring

### C. Referenční Projekty

**Inspirace design:**
- [Sweetgreen](https://sweetgreen.com) – Healthy fast-casual
- [Dig](https://www.digcafe.com) – Mediterranean bowls
- [Hulu](https://hulu.com) – Minimalist, clean design

### D. Git Repository Setup

```bash
# Initialize repo
git init
git remote add origin https://github.com/earlybow/the-early-bowl-web.git

# .gitignore template
node_modules/
dist/
.env
.DS_Store
*.log

# First commit
git add .
git commit -m "Initial commit: project structure"
git push -u origin main
```

### E. Pre-launch Checklist

- [ ] Domain registered & DNS configured
- [ ] Netlify account setup & GitHub integration
- [ ] All pages tested on mobile + desktop
- [ ] Lighthouse score >90 verified
- [ ] Contact form tested (email received)
- [ ] Maps embed tested
- [ ] Instagram account created & linked
- [ ] Privacy policy written & published
- [ ] Sitemap submitted to Google Search Console
- [ ] Favicon set
- [ ] robots.txt configured
- [ ] Security headers configured (CSP, X-Frame-Options, etc.)
- [ ] Email notifications setup (Formspree/SendGrid)
- [ ] Analytics events setup (custom tracking)
- [ ] Uptime monitoring setup (UptimeRobot)
- [ ] Backup strategy defined
- [ ] Launch date announced on Instagram

---

## PŘÍLOHY

- [Menu šablona](menu_sablona.md)
- [Marketing plán](marketing_plan_sablona.md)
- [Zápis z konzultace](zapis_konzultace.md)

---

**Aktualizace:** Květen 2026  
**Zodpovědná osoba:** Projektový tým The Early Bowl  
**Status:** ✓ Schváleno pro vývoj Fáze 1
