# DESIGN.md — Vizuální identita a design systém „The Early Bowl"

**Status:** Single source of truth pro veškerá designová rozhodnutí.
**Kotva:** Logo `../assets/Theearlybowlmiska.png` — všechny barvy, kontury a styl ilustrací z něj přímo vychází.
**Živá implementace:** [`web/stylesheet.html`](../web/stylesheet.html) — všechny tokeny a komponenty z tohoto dokumentu jako funkční HTML/CSS ukázka. Tokeny jsou v [`web/css/tokens.css`](../web/css/tokens.css).

---

## 1. Filozofie značky

The Early Bowl kombinuje energii čerstvého rána s pohodlím a radostí ze skvělého jídla. Na rozdíl od tradičních minimalistických kaváren sází na **unikátní, ručně-kreslenou estetiku**.

* **Hravý a přívětivý:** přístupný pro široké spektrum zákazníků, od studentů po rodiny.
* **Cartoon / Clipart charakter:** jasné linky a přívětivé tvary, které evokují domácí pohodu a řemeslnou péči.
* **Optimistický a energický:** teplé barvy a zaoblené tvary podporují chuť k jídlu.
* **Důvěryhodný:** lehce nedokonalá kontura signalizuje „lidský", nikoli korporátní brand.

---

## 2. Logo

Oficiální logo (`../assets/Theearlybowlmiska.png`) je vlajkový vizuální prvek.

* **Konstrukce:** keramická miska s jogurtem/kaší, čerstvé ovoce (jahody, borůvky, plátky banánu), granola a medový přeliv. Všechny objekty obtažené silnější, jemně nepravidelnou hnědou konturou.
* **Typografie v logu:** „THE EARLY BOWL" je vyvedeno ručně kresleným bezpatkovým písmem s oblými hranami, zasazeným do těla misky.
* **Styling:** plné barevné plochy s bílými reflexy a měkkými stíny → 2.5D cartoon efekt. **Žádné** gradienty, žádné fotorealistické textury.

### 2.1 Použití loga
* **Minimální velikost:** 80 px na šířku (web), 25 mm (tisk).
* **Ochranná zóna:** kolem loga minimálně tolik prázdného místa, kolik je výška písmene „T".
* **Pozadí:** primárně smetanové (`#FAF6EE`); na fotografiích vždy v ochranné světlé plošce.
* **Co NEDĚLAT:** nedeformovat poměry, nevkládat do barevných rámečků, neměnit barvy kontury, nepoužívat na pozadí jahodové červené (mizí kontrast).

### 2.2 Favicon
Vyříznutá horní část misky (ovoce + granola) bez textu, 32×32 px PNG/SVG + 16×16 px varianta + 180×180 px apple-touch-icon. Pozadí transparentní nebo smetanové.

---

## 3. Barevná paleta

Barvy vychází z tónů snídaňových ingrediencí a teplého ranního světla. **Vyhněte se neonovým, sterilním a studeným odstínům.**

### Základní (Brand Core)
| Název | HEX | RGB | Role |
|---|---|---|---|
| **Smetanová (Cream)** | `#FAF6EE` | 250, 246, 238 | Hlavní pozadí. Nahrazuje sterilní bílou. |
| **Čokoládová kontura (Outline Brown)** | `#7A5843` | 122, 88, 67 | Texty, kontury ilustrací, ikony, borders. |

### Akcenty (Accent)
| Název | HEX | RGB | Role |
|---|---|---|---|
| **Jahodová červená (Strawberry Red)** | `#E3413B` | 227, 65, 59 | Primární CTA tlačítka, zvýraznění akcí. |
| **Borůvková modrá (Blueberry Blue)** | `#4B679B` | 75, 103, 155 | Odkazy, sekundární akce, podkategorie. |
| **Medová žlutá (Honey Yellow)** | `#F3C46B` | 243, 196, 107 | Podbarvení důležitých informací, badge „nové", ikony výhod. |

### Podpůrné (Supporting)
| Název | HEX | RGB | Role |
|---|---|---|---|
| **Listově zelená (Leaf Green)** | `#7FA86B` | 127, 168, 107 | Sekundární akcent pro „healthy" badge (vegan/bio/bez lepku). |
| **Tmavá hnědá (Deep Cocoa)** | `#4A3528` | 74, 53, 40 | Heading text na smetanovém pozadí, tmavá varianta loga. |
| **Krémový stín (Cream Shadow)** | `#EFE6D2` | 239, 230, 210 | Hover stavy, jemné rozdělení sekcí. |
| **Mléčná (Milk)** | `#FFFCF6` | 255, 252, 246 | Karty na smetanovém pozadí, „elevated" povrchy. |
| **Chyba (Error)** | `#C8392E` | 200, 57, 46 | Tmavší varianta jahodové pro validační chyby. |
| **Success (Sage)** | `#5F8F4D` | 95, 143, 77 | Validační potvrzení („zpráva odeslána"). |

### 3.1 Kontrastní matrice (WCAG 2.1 AA)
| Pozadí ↓ / Popředí → | Outline Brown | Deep Cocoa | Strawberry Red | Blueberry Blue |
|---|---|---|---|---|
| Cream `#FAF6EE` | ✅ 6.8 : 1 | ✅ 10.4 : 1 | ✅ 4.7 : 1 | ✅ 6.2 : 1 |
| Milk `#FFFCF6` | ✅ 7.1 : 1 | ✅ 10.9 : 1 | ✅ 4.9 : 1 | ✅ 6.5 : 1 |
| Strawberry Red `#E3413B` | ⚠️ 1.5 : 1 — NE | ✅ 5.2 : 1 (jen white text) | — | — |

**Pravidlo:** Pro CTA tlačítka v jahodové barvě používat **bílý text** (`#FFFFFF`, kontrast 5.0 : 1).

---

## 4. Typografie

### 4.1 Fonty
* **Nadpisy (H1–H4):** **Baloo 2** (Google Fonts) — oblý, tučný, hravý font v souladu s ručně kresleným písmem v logu. Alternativy: Nunito (800), Baloo Bhaijaan 2.
* **Body text:** **Quicksand** (Google Fonts) — čistý, geometrický, mírně zaoblený. Alternativa: Nunito Sans.

> **⚠️ Čeština — důležité (ověřeno Playwrightem 24. 5. 2026):**
> Původně byla pro nadpisy zvolena **Fredoka**, ale vizuální test odhalil, že **Fredoka nemá vlastní glyfy pro české háčky** (`ě č ř š ž ň ť ď`) — prohlížeč je dotahoval ze systémového fallbacku, takže háček byl tenký a stylově nesedící k tučnému fontu. **Fredoka proto zamítnuta** (rozhodnutí D-13 v [DENIK.md](../docs/DENIK.md)).
>
> **Baloo 2** renderuje kompletní českou diakritiku správně a konzistentně (ověřeno `document.fonts.check(font, "ě")` → `true` + screenshotem).
>
> **Pravidla pro robustnost:**
> 1. **Vždy vizuálně otestovat** nový font na řetězci `ě š č ř ž ň ť ď á í é ý ú ů ó` — deklarovaný `unicode-range latin-ext` na Google Fonts **nezaručuje**, že font ty glyfy reálně obsahuje (Google servíruje stejný range pro všechny fonty).
> 2. Import **nesmí** používat parametr `&text=` (subsetting) — ořezal by latin-ext.
> 3. Fallbacky ve `font-family` musí být také česky-schopné (`system-ui`, `sans-serif`).

**Import (head):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700&family=Quicksand:wght@400;500;600&display=swap" rel="stylesheet">
```

### 4.2 Type scale
Mobile-first; desktop hodnoty v závorce.

| Prvek | Font | Velikost (mob → desk) | Váha | Line-height | Barva |
|---|---|---|---|---|---|
| H1 (hero) | Baloo 2 | 36 → 56 px | 700 | 1.15 | Deep Cocoa |
| H2 (sekce) | Baloo 2 | 28 → 40 px | 600 | 1.25 | Outline Brown |
| H3 (podsekce) | Baloo 2 | 22 → 28 px | 600 | 1.3 | Outline Brown |
| H4 (karta) | Baloo 2 | 18 → 20 px | 600 | 1.4 | Outline Brown |
| Body | Quicksand | 16 → 17 px | 400 | 1.6 | Outline Brown |
| Small / caption | Quicksand | 14 px | 400 | 1.5 | Deep Cocoa @ 70% |
| Tlačítko | Baloo 2 | 16 px | 600 | 1 | bílá (na Strawberry) |
| Menu item ID | Baloo 2 | 14 px | 600 | 1 | Cream na Outline Brown badge |
| Cena | Baloo 2 | 20 → 22 px | 700 | 1 | Strawberry Red |

**Pravidlo:** žádné fonty kromě Baloo 2 a Quicksand. Žádné kurzívy (porušuje hravý styl).

---

## 5. Spacing & Layout

### 5.1 Spacing scale (8 px baseline)
```
--space-xs:  4px
--space-sm:  8px
--space-md: 16px
--space-lg: 24px
--space-xl: 32px
--space-2xl: 48px
--space-3xl: 64px
--space-4xl: 96px
```

### 5.2 Breakpointy (mobile-first)
| Zařízení | Min. šířka | CSS |
|---|---|---|
| Mobile | 0 | (default) |
| Tablet | 768 px | `@media (min-width: 768px)` |
| Desktop | 1024 px | `@media (min-width: 1024px)` |
| Wide | 1440 px | `@media (min-width: 1440px)` |

### 5.3 Kontejner
| Breakpoint | Max šířka | Padding |
|---|---|---|
| Mobile | 100 % | 16 px |
| Tablet | 720 px | 24 px |
| Desktop | 1100 px | 32 px |

### 5.4 Border radius
* `--radius-sm: 8px` — input, badge
* `--radius-md: 16px` — karty, tlačítka (zaoblené, kopírují měkkost loga)
* `--radius-lg: 24px` — sekce / containers
* `--radius-pill: 999px` — chips, dietní badges

---

## 6. Komponenty

### 6.1 Tlačítko (Button)
```
Padding: 14px 24px
Border-radius: var(--radius-md)
Font: Baloo 2 16px / 600
Border: 2px solid var(--outline-brown)
Transition: transform 0.15s ease, box-shadow 0.15s ease
Box-shadow: 3px 3px 0 var(--outline-brown)   /* offset, ne blur */
```

**Primary (CTA):**
* `background: var(--strawberry)` / `color: #FFF`
* Hover: `transform: translate(1px, 1px); box-shadow: 2px 2px 0 var(--outline-brown);` (efekt stisknutí)
* Active: `transform: translate(3px, 3px); box-shadow: 0 0 0 var(--outline-brown);`

**Secondary:**
* `background: var(--cream)` / `color: var(--outline-brown)`
* Stejný hover/active efekt.

**Ghost (link-like):**
* `background: transparent` / `color: var(--blueberry)` / `border: none` / `text-decoration: underline 2px dashed`

### 6.2 Menu item card
```
Background: var(--milk)
Border: 2px solid var(--outline-brown)
Border-radius: var(--radius-lg)
Padding: 20px
Box-shadow: 4px 4px 0 var(--outline-brown)
Display: flex; gap: 16px;
```
* Levá strana: ilustrace jídla 120×120 px (kruh nebo zaoblený čtverec).
* Pravá strana: ID badge → název → krátký popis → cena + dietní ikony.
* Hover: lift efekt — `transform: translate(-2px, -2px); box-shadow: 6px 6px 0 var(--outline-brown);`

### 6.3 ID badge
```
Background: var(--outline-brown)
Color: var(--cream)
Padding: 4px 10px
Border-radius: var(--radius-pill)
Font: Baloo 2 14px / 600
Letter-spacing: 0.05em
```
Příklad: `[ S1 ]`, `[ M2 ]`, `[ N3 ]`

### 6.4 Input field
```
Background: var(--milk)
Border: 2px solid var(--outline-brown)
Border-radius: var(--radius-md)
Padding: 12px 16px
Font: Quicksand 16px / 400
Color: var(--outline-brown)
Placeholder: var(--deep-cocoa) at 50%
Focus: outline: 3px solid var(--honey); outline-offset: 2px;
Invalid: border-color: var(--error); background: #FCEEEE;
```

### 6.5 Dietní badge
Malé kulaté chips, kolorované podle významu:
| Badge | Pozadí | Text | Ikona |
|---|---|---|---|
| Vegan | Leaf Green | white | 🌱 (nebo SVG list) |
| Bez lepku | Honey Yellow | Outline Brown | 🌾 (nebo SVG klas s křížkem) |
| Bez laktózy | Cream Shadow | Outline Brown | 🥛 (s křížkem) |
| Vysoký obsah proteinu | Strawberry Red | white | 💪 (nebo SVG sval) |

---

## 7. Ilustrace — AI generování

Veškerá doprovodná grafika (jídla, hero, dekorace) je generována **AI** (cílový nástroj: **ChatGPT Images 2.0**). Cílem je vizuál konzistentní s logem.

> 📁 **Hotové copy-paste prompty** pro každý obrázek jsou v [`../docs/prompts/`](../docs/prompts/README.md) — jeden soubor na obrázek (10 jídel, hero, OG, 404, pattern, favicon, logo, 4 dietní ikony). Sekce §7.1–§7.4 níže jsou referenční „zdroj pravdy" stylu, ze kterého ty prompty vychází.

### 7.1 Master style prompt (základ pro každé generování)
```
Hand-drawn cartoon clipart illustration in the style of a cozy breakfast café logo,
soft cream background (#FAF6EE), warm brown ink outline (~3px, slightly irregular,
hand-drawn feel, color #7A5843), flat color fill with no gradients, soft offset shadows,
small white highlight dots for shine, 2.5D cartoon style, friendly and playful mood,
muted warm color palette: strawberry red (#E3413B), blueberry blue (#4B679B),
honey yellow (#F3C46B), leaf green (#7FA86B). No text, no logos, no photorealism,
no glossy 3D render. Centered composition, transparent or cream background.
```

### 7.2 Negative prompt (pro Stable Diffusion / nástroje s podporou)
```
photorealistic, photograph, 3D render, glossy, neon colors, dark mood,
sterile, minimalist line art, watercolor, sketch, anime, manga, text, watermark,
gradient background, harsh shadows
```

### 7.3 Prompty per jídlo (menu)
Šablona: `{master style prompt} + {dish-specific subject}`

| ID | Subject prompt |
|---|---|
| **N1** Voda s citronem | `a tall clear glass of cold water with two lemon slices floating, ice cubes, fresh mint leaf on top, condensation droplets` |
| **N2** Fresh pomerančový džus | `a short curvy glass full of fresh orange juice, a half orange and orange slice as garnish, a striped paper straw` |
| **N3** Čaj | `a ceramic cup of warm herbal tea with steam wisps, a tea bag string hanging over the rim, a small saucer underneath, honey drizzle nearby` |
| **S1** Yogurt Bowl | `a cream ceramic bowl identical to the brand logo bowl, filled with creamy yogurt, topped with sliced strawberries, blueberries, banana slices, granola clusters, drizzle of honey` |
| **S2** Teplá kaše | `a cream ceramic bowl with warm porridge (oats or rice), a swirl of maple syrup on top, a few berries and chopped nuts, steam wisps rising` |
| **M1** Avokádový toast s lososem | `two slices of dark rustic toast topped with mashed avocado, smoked salmon ribbons, microgreens, a lemon wedge on the side, on a small wooden board` |
| **M2** Vajíčka s toastem | `a sunny-side-up egg next to a slice of buttered toast with chives, a small bowl of cherry tomato salad on the side, on a ceramic plate` |
| **M3** Vajíčka s avokádem a slaninou | `scrambled eggs, two strips of crispy bacon, half a sliced avocado, a piece of toast, on a ceramic plate, fresh herbs garnish` |
| **M4** Toast Caprese | `an open-faced toast with mozzarella slices, ripe tomato rounds, basil leaves, drizzle of olive oil and pesto, on a wooden board` |
| **P1** Denní polévka | `a cream ceramic bowl of warm hearty soup (vegetable, orange-colored), a sprig of parsley on top, slice of crusty bread beside, steam wisps` |

### 7.4 Doplňková grafika (web a sítě)

| Asset | Prompt-specific subject |
|---|---|
| **Hero ilustrace (homepage)** | `a cheerful morning breakfast scene: the brand bowl in center surrounded by a steaming tea cup, fresh orange juice glass, scattered berries and granola, a small sun rising in background, hand-drawn cartoon style matching the logo, horizontal composition for web hero (1600x900)` |
| **OG / share image** | `the brand cream bowl with fruits in center, large hand-drawn text space on the right side, cream background, simple, eye-catching, social media share format (1200x630)` |
| **404 page** | `a cracked empty bowl with crumbs spilling out, small sad face, hand-drawn cartoon style, sympathetic mood` |
| **Background pattern** | `seamless tile pattern of small scattered breakfast items (strawberries, blueberries, oat clusters, leaves), very light opacity, cream background, hand-drawn cartoon style` |

### 7.5 Pravidla iterace
1. Vždy začínej generováním s referenčním obrázkem loga (image-to-image / style reference).
2. Generuj 4–6 variant, vyber tu nejblíže stylu loga.
3. Pokud žádná nesedí: uprav konkrétní subject prompt, **nikdy neměň master style prompt** — to by rozbilo konzistenci napříč sadou.
4. Před exportem srovnej tloušťku kontury a sytost barev v Photopea / Photoshopu, pokud to nástroj nezvládl.

### 7.6 Export
* **Formát:** PNG s transparentním pozadím (nebo smetanovým, pokud transparent neumí), 1024×1024 px master.
* **Web optimalizace:** WebP fallback PNG, ~240×240 px finální zobrazení, lazy-load.
* **Pojmenování:** `n1-water.png`, `s1-yogurt-bowl.png`, ...

---

## 8. Ikony

* **Sada:** kombinace **emoji** (pro jednoduchost, brand-konzistentní zaoblené tvary, např. 🌱 ⏰ 📍 💪) a **custom SVG** v hnědé kontuře pro UI prvky (šipky, menu hamburger, copy, telefon).
* **Custom SVG ikony:** 24×24 px viewBox, `stroke: var(--outline-brown)`, `stroke-width: 2.5`, `stroke-linecap: round`, `stroke-linejoin: round`, žádné fill (line-icon styl).
* **Zdroj:** ručně kreslit v Figma / [Lucide icons](https://lucide.dev/) jako základ, upravit stroke-width na 2.5 pro brand-konzistenci.

---

## 9. Animace a interakce

* **Tempo:** vše rychlé (150–250 ms), žádné dramatické přechody.
* **Easing:** `ease-out` pro vstupy, `ease-in` pro odchody.
* **Hover efekt tlačítek:** „press-down" efekt (translate + zkrácení offset shadow) — viz §6.1.
* **Scroll reveal:** velmi jemný fade-up (`opacity 0 → 1`, `translateY 12px → 0`, 300 ms), jen u sekcí, ne u každé karty.
* **Žádné parallax, žádné scroll-jacking, žádné auto-play video.**

---

## 10. Aplikace brandu

### 10.1 Web
* Pozadí: smetanové (`#FAF6EE`).
* Karty: mléčné (`#FFFCF6`) na smetanovém — jemný kontrast „elevated povrch".
* CTA: vždy jahodová červená s offset shadow (§6.1).
* Hero ilustrace nahoře, scroll plyne lineárně dolů (žádné komplikované gridy).

### 10.2 Sociální sítě (Instagram, Facebook)
* **Šablony postů:** fotografie reálných jídel kombinované s vektorovými „nálepkami" (sluníčka, šipky, textové bubliny ručně kreslené).
* **Profilová fotka:** ořez loga (jen miska s ovocem) na kruhu.
* **Story highlights:** kruhové ikony ve stejném hnědo-kontur stylu, jednotné kategorie (Menu, Akce, Recepty, O nás).
* **Rámování příspěvků:** smetanový rámeček (~40 px) s hnědým ohraničením kolem fotky / grafiky.

### 10.3 Tisk (menu, vizitky, letáky)
* Pozadí vždy smetanové, **nikdy bílé**.
* Stejné fonty, stejná paleta.
* Tištěné menu: A5 brožura, smetanový papír 120 g/m², ilustrace jídel po stranách.
* Vizitka: 85×55 mm, logo nahoře, kontakt v body fontu, zaoblené rohy.

---

## 11. Tone of voice (souvisí s identitou)

* Tykání („Koukni na menu", „Zastav se").
* Krátké věty, jednoduchá čeština, **žádný corporate speak**.
* Občasné laskavé emoji (💚 🥣 ☀️) — ne přemíra.
* Sebevědomý, ale ne arogantní. Hravý, ale ne dětinský.

> Detailní copywriting & ukázkové texty jsou v [PRD.md](PRD.md) §11.

---

## 12. Checklist konzistence brandu

Při finální revizi webu, dokumentace i propagace:

- [ ] Všechny barvy přesně z palety §3 (žádné improvizace)
- [ ] Pouze Baloo 2 + Quicksand fonty
- [ ] Všechny ilustrace mají hnědou konturu `#7A5843`, podobnou tloušťku
- [ ] Žádné fotografie jídel (jen AI ilustrace v brand stylu)
- [ ] CTA jsou jahodově červené s offset shadow
- [ ] Smetanové pozadí, ne sterilní bílá
- [ ] Tykání v copy, krátké věty
- [ ] Favicon a OG image existují a sedí stylem
