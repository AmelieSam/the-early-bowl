# 📓 DENIK.md — Laboratorní deník projektu „The Early Bowl"

> **Účel:** Chronologický záznam postupu práce na projektu — co jsme dělali, co jsme zkoušeli, **co nefungovalo** a proč, a jaká **rozhodnutí** jsme učinili. Slouží jako podklad pro reflexi tvorby v projektové dokumentaci (ZADANI §2B) a jako paměť projektu.
>
> **Jak deník vést:**
>
> * Každý pracovní krok = nový záznam v sekci [Chronologie](#chronologie), nejnovější nahoře.
> * Neúspěšné experimenty se **nezatajují** — jsou nejcennější částí deníku (učíme se z nich).
> * Každé zásadní rozhodnutí dostane ID `D-NN` a řádek v [Decision logu](#decision-log).
> * U záznamu uváděj **datum**, **co**, **výsledek/zjištění**, případně odkaz na dotčené soubory.

**Legenda:** ✅ úspěch · ❌ neúspěch / slepá ulička · 🔬 experiment · 💡 zjištění · 🧭 rozhodnutí (viz Decision log)

---

## Decision log

Explicitní záznam rozhodnutí. Formát: **co** / **proč** / **zvažované alternativy**.

| ID | Datum | Rozhodnutí | Proč | Zamítnuté alternativy |
|---|---|---|---|---|
| **D-01** | 24.5. | Kanonická vizuální identita = **DESIGN.md** (smetanová/hnědá, hand-drawn) | Sedí na existující logo; PRD měl konfliktní zelenou paletu | Zelená paleta z PRD; čistě nová identita |
| **D-02** | 24.5. | Obrázky jídel = **AI bitmapy** (Recraft/Midjourney/DALL-E) | Rychlejší a vizuálně silnější než ruční Inkscape; splňuje „vygenerované" ze zadání | Ruční Inkscape vektory; kombinace |
| **D-03** | 24.5. | Tech stack = **statický HTML/CSS/JS** generovaný AI | Plná kontrola nad brandem, max. performance, zdarma | Webnode/WordPress; Astro/Next.js |
| **D-04** | 24.5. | Prototyp pro prezentaci = **reálný Yogurt Bowl** | Restaurace = jídlo; vizuálně matchuje logo, snadná příprava | Jen AI foto; tištěné brand artefakty |
| **D-05** | 24.5. | Hosting = **Cloudflare Pages** | Zdarma, globální CDN, HTTPS, `_headers`/`_redirects` | Vercel (původní návrh PRD); Netlify; GitHub Pages |
| **D-06** | 24.5. | Termín odevzdání = **7 dní → 2026-05-31** | Pokyn zadavatele | — |
| **D-07** | 24.5. | Ceny nápojů = **N1 25 / N2 55 / N3 35 Kč** | Voda levná surovina, OJ čerstvě mačkaný (dražší), čaj střed | Voda zdarma |
| **D-08** | 24.5. | Lokalita = **OD Stará Breda, Opava** | Navazuje na MGO gymnázium v Opavě | Ostrava (chybně v 1. verzi PRD) |
| **D-09** | 24.5. | Kontakty na webu = **fiktivní** (`+420 777 000 111`, `info@theearlybowl.cz`) | Prototyp neexistujícího podniku | Reálné kontakty autora |
| **D-10** | 24.5. | Propagační video = **HeyGen Hyperframes** (HTML→video) | Sdílí brand CSS s webem → vizuální konzistence; vhodné pro AI agenty | Sora/Runway/Veo/Kling z fotek |
| **D-11** | 24.5. | Slide deck = **Marp** (Markdown→PDF) | Verzovatelné v gitu, brand CSS téma | PowerPoint, Canva, Google Slides |
| **D-12** | 24.5. | Cenotvorba: **dvouhladinový ceník 90/110 zachován**; M1/M3 jedou na food costu ~35 % jako anchor položky; porce lososa u M1 zmenšena 50→40 g | Jednoduchý ceník je hodnota značky; prémiové položky mají nejvyšší absolutní marži (72 Kč) | Třetí cenová hladina 120–130 Kč; vyřazení lososa |
| **D-13** | 24.5. | Font nadpisů **Fredoka → Baloo 2** (body zůstává Quicksand) | Fredoka nemá vlastní glyfy českých háčků (`ě č ř š ž`), padaly na systémový fallback; Baloo 2 je drží správně a zachovává hravý zaoblený charakter | Fredoka (zamítnuta); Nunito 800, Baloo Bhaijaan 2 (OK, ale méně „chunky") |
| **D-14** | 24.5. | Propagační video **bez voiceoveru** (on-screen text + volitelný hudební podkres) | Pokyn zadavatele; text na obrazovce je čitelnější a méně rušivý, odpadá ladění TTS | AI voiceover (ElevenLabs) — zamítnuto |
| **D-15** | 24.5. | Doména = **generická `*.pages.dev`** (zdarma); dokumentace **Markdown → HTML + tisková CSS → PDF přes Chromium**, **Typst zamítnut** | Pokyn zadavatele (doména); Typst je zbytečný nový toolchain — HTML+CSS znovupoužije brand styl a dá plnou typografickou kontrolu | Vlastní doména (~400 Kč/rok); Typst; čistý MD→PDF (slabá kontrola sazby) |
| **D-16** | 25.5. | Menu jako data = **`web/data/menu.yaml`** (zdroj pravdy) + plánovaný generátor → `menu.json` (web) a `menu-matrix.md` (docs) | Pohodlná editace s komentáři, jeden zdroj → web i matice nedriftují, menu se mění bez zásahu do kódu stránek | Čisté JSON bez buildu (bez komentářů, ruční matice); menu natvrdo v HTML |
| **D-17** | 25.5. | Hosting **Cloudflare Pages → GitHub Pages** (generická doména `ameliesam.github.io/the-early-bowl/`) | Pokyn zadavatele | Cloudflare (D-05, nahrazeno); vlastní doména. Dopad: GH Pages neumí custom HTTP hlavičky/`_redirects`, web běží na podcestě → **relativní cesty** |
| **D-18** | 25.5. | **Upřesnění MVP webu** (před vývojem): bez kontaktního formuláře, bez email notifikací, **bez allergen tabulky na webu** (jen dietní ikony u položek), sociální sítě jen **IG proklik**, menu čteno **přímo z `menu.yaml`** (inline blok + malý JS parser, **žádný JSON, žádný build**, funguje i přes `file://`), video jen **placeholder** (HeyGen později), realistické performance cíle, SEO úměrně | Pokyn zadavatele; jednoduchost, statický web bez backendu, splnitelné cíle | Generátor `menu.json` (z D-16 — zrušeno); formulář (Formspree); souhrnná matice na webu; Twitter/FB |
| **D-19** | 28.5. | Propagační video vygenerováno v **Google Gemini Veo** (text-to-video z promptu `dokumentace/prompts/video-yogurt-bowl.md`), nahrazuje HeyGen Hyperframes z D-10 | Dostupný nástroj, rychlý výsledek bez nutnosti HTML→video pipeline; jediný klip stačí pro IG/TikTok placeholder | HeyGen Hyperframes (D-10, nahrazeno); Sora/Runway/Kling |
| **D-20** | 28.5. | **Struktura repa upravena kvůli GH Pages**: `web/` → **`docs/`** (deploy root pro GH Pages source `main`/`/docs`), bývalé `docs/` → **`dokumentace/`** (projektová dokumentace, šablony, prompts, protokol). GH Pages publikuje přímo `/docs` bez Actions/buildu. | GitHub Pages servíruje `index.html` jen z rootu nebo `/docs`; přímý source je jednodušší než GH Actions workflow (D-17 byl bez konkrétního mechanismu) | Hosting přes GH Actions `upload-pages-artifact` z `web/` (více konfigurace); přesun webu do rootu (smíchal by meta soubory s webem) |

---

## Chronologie

### 28. 5. 2026 — Ucelené dokumenty cenotvorba & marketing-plan

**Provedeno (vstup zadavatele):**

* ✅ Vytvořen **[cenotvorba.md](cenotvorba.md)** — ucelený dokument pro praktickou část projektové dokumentace (ZADANI §2B „Cenotvorba"). 9 sekcí: filozofie ceníku, přehled menu, food cost per položka (vč. dekompozice M1), anchor strategie, výrobní cena per zákazník, break-even analýza (4 scénáře), financování startu, citlivostní analýza, shrnutí pro PDF. Vychází z `rozpocet_sablona.md` (zdroj čísel) a `menu_sablona.md`; vše je „kvalifikovaný odhad" kalibrovaný podle běžných sazeb 2026 (Opava).
* ✅ Vytvořen **[marketing-plan.md](marketing-plan.md)** — sourozenecký dokument k cenotvorbě. 10 sekcí: východiska, 3 detailní primární persony (Tereza/Michal/Jana) + sekundární long-tail, pozicionování vůči konkurenci (5 kategorií), vizuální identita jako marketing, online kanály (IG primárně, web/FB/TikTok), offline (gym, letáky, WOM, PR), lokální SEO + GBP, marketingová roadmapa (pre-launch → měsíc 7+), KPI tabulka 3/6 měsíců, reflexe omezení.
* ✅ Aktualizován **README.md** — nové dokumenty zařazeny jako *finální ucelené dokumenty (primární zdroj pro PDF)*, šablony `_sablona.md` přesunuty pod *pracovní podklady*.

**💡 Zjištění:** Šablony (`rozpocet_sablona.md`, `marketing_plan_sablona.md`) byly **dobrým podkladem pro datový obsah** (tabulky, čísla), ale jako přímý vstup do PDF jim chyběl narativ a propojení. Nové dokumenty drží stejná čísla, ale stavějí kolem nich příběh — break-even není jen tabulka, je to fáze 4–6 měsíců ztráty s konkrétní rezervou; persony nejsou jen jméno + věk, mají triggerový moment a kanál objevení. Šablony zůstávají jako workbook, finální dokumenty jdou do PDF.

**Další krok:** Sazba projektové dokumentace v LaTeX (`protokol/seminarni_prace_template_mgo.tex`) — zahrnout cenotvorba.md a marketing-plan.md do praktické části.

---

### 28. 5. 2026 — Migrace struktury repa pro GitHub Pages

**Provedeno (vstup zadavatele):**

* 🧭 Rozhodnutí **D-20** — GitHub Pages servíruje `index.html` jen z rootu nebo `/docs`. Aby web mohl bydlet v `/docs` bez GH Actions, byly složky přejmenovány:
  * `web/` → **`docs/`** (deploy root pro GH Pages)
  * původní `docs/` → **`dokumentace/`** (projektová dokumentace — DENIK, PLAN, prompts, protokol, šablony, menu-matrix)
* ✅ Přejmenování přes `git mv` (zachová historii souborů).
* ✅ Aktualizovány vzájemné odkazy: `README.md` (rozcestník), `specs/PRD.md` (vč. §7.2 struktura, §7.3 zdroj YAML), `specs/DESIGN.md` (cesty na stylesheet/tokens), `specs/TECH-STACK.md` (deploy mechanismus), `dokumentace/prompts/*.md` (cílové cesty obrázků), `dokumentace/menu-matrix.md` (link na menu.yaml). Historické záznamy v `DENIK.md` ponechány s původními cestami (historie se nepřepisuje); aktivní odkazy opraveny inline poznámkou.
* ✅ PRD §7.2 deploy poznámka přepsána: source = `main` branch, folder `/docs`, **bez Actions**, `.nojekyll` vypíná Jekyll.

**Další krok:** v GitHub Settings → Pages přepnout source na `main` / `/docs` (zatím nastaveno staré). Pak ověřit živý web na `https://ameliesam.github.io/the-early-bowl/`.

---

### 28. 5. 2026 — Propagační video (Gemini Veo) a LaTeX šablona dokumentace

**Provedeno:**

* ✅ **Propagační video vygenerováno v Google Gemini Veo** podle promptu [`dokumentace/prompts/video-yogurt-bowl.md`](prompts/video-yogurt-bowl.md) (top-down příprava S1 Yogurt Bowl, 9:16, bez voiceoveru). Uloženo jako [`docs/images/video.mp4`](../docs/images/video.mp4) (~1,6 MB).
* 🧭 Rozhodnutí **D-19** — Gemini Veo nahrazuje původně plánovaný HeyGen Hyperframes (D-10). HTML→video pipeline se ukázala jako zbytečná komplikace, text-to-video z brand promptu dal použitelný klip rychleji.
* ✅ Vytvořena **[LaTeX šablona seminární práce](protokol/seminarni_prace_template_mgo.tex)** podle stylu MGO (XeLaTeX, Cambria 16 pt titulní strana — analýza fontů z oficiální MGO předlohy přes `pdffonts`/`pdftohtml`). Podklad pro sazbu finální projektové dokumentace.

**Provedeno (osazení na web):**

* ✅ Placeholder `<div class="video-ph">` v `docs/menu.html` nahrazen reálným `<figure class="video">` s `<video controls muted playsinline preload="metadata">` a posterem ze stillu `images/menu/s1-yogurt-bowl.webp`.
* ✅ CSS `.video-ph*` (dashed border, label/sub) v `pages.css` přepsán na `.video` (čistý rámeček v brand barvě, italic figcaption pod videem).
* 🔬 Playwright check: video se renderuje 1036×583 px (aspect ratio přesně 1.778 ≈ 16:9), readyState 4, controls aktivní, **0 JS chyb, 0 failed requests**.
* 💡 **Zjištění:** Veo vygenerovalo **16:9 (1280×720)**, ne 9:16 jak žádal prompt. Vyhovuje to ale stávajícímu layoutu menu (široká karta v textovém sloupci); pro IG Story / TikTok by potřebovalo crop nebo druhý generát.

**💡 Zjištění:** Rozhodnutí D-10 (HeyGen) bylo learning — nakonec zvítězil jednodušší nástroj, který už uměl text-to-video ve stylu, který stačil. Lekce: nevolit nástroj dopředu, dokud není potřeba.

---

### 27. 5. 2026 — Video prompt pro sociální sítě

**Provedeno (vstup zadavatele):**
* ✅ Vytvořen prompt [`docs/prompts/video-yogurt-bowl.md`](prompts/video-yogurt-bowl.md) — krátké vertikální video (9:16, top-down) přípravy S1 Yogurt Bowl pro TikTok / IG Story.
* ✅ Stylový blok převzat 1:1 z master style promptu (DESIGN.md §7.1) a stillu `s1-yogurt-bowl.md` → konzistence se zbytkem sady; rozšířeno o sekvenci akce, fixní top-down kameru a vertikální formát.
* ✅ Přidán nový oddíl „Video" do [`docs/prompts/README.md`](prompts/README.md).

**💡 Zjištění:** První pohyblivý asset v sadě. Stylový blok zůstává neměnný (drží brand), animuje se jen popis akce — stejné pravidlo jako u stillů (DESIGN.md §7.5).

---

### 25. 5. 2026 — Brand story a generování obrázků

**Provedeno (13. iterace, vstup zadavatele):**

* ✅ Doplněn a sloučen brand příběh **„Náš příběh"** — finální syntéza zadavatelovy verze (zakládací příběh „hledali jsme, nenašli, vytvořili", „miska optimismu") s původním úryvkem (malý tým, „nemáme čas na složitosti — ani ty", otevřeno v šest). Uloženo jako kanonický text do [PRD.md](../specs/PRD.md) §11.2.
* ✏️ Drobná editace „suroviny, které dávají mysl" → „…dávají energii" (ladí s hodnotou energie).
* ℹ️ Stránka `web/o-nas.html` zatím ponechána jako kostra — obsah se dosadí ve Fázi C.

**Provedeno (14. iterace — generování obrázků):**

* ✅ **Codex** vygeneroval všech **21 obrázků** podle promptů v [`docs/prompts/`](prompts/README.md): 10 ilustrací jídel, hero, OG, 404, background pattern, favicon (icon-source + `favicon.ico` + `apple-touch-icon.png`), logo + horizontální lockup, 4 dietní ikony. Uloženo do `web/images/`.
* 🔬 Kontrola: ověřeny rozměry a typy (validní PNG/ICO ve správných rozměrech) + vizuální kontaktní montáž přes ImageMagick.
* 💡 **Zjištění:** sada je **stylově i kompozičně konzistentní** s logem (hnědé kontury, ploché barvy, smetanové pozadí, jednotná paleta). Wordmark „THE EARLY BOWL" v logo variantách vyšel správně — avizované riziko zkomolení textu se nepotvrdilo.

**Provedeno (15. iterace — matice diet a rozvaha datového modelu):**

* ✅ Vytvořena samostatná **[menu-matrix.md](menu-matrix.md)** — vhodnost pro diety (A) + obsažené alergeny (B), rozdělené pro přehlednost. Matice vyjmuta z [menu_sablona.md](menu_sablona.md) (zůstal odkaz → jeden zdroj, žádný drift). Referencováno z PRD §5.2 a README.
* ✏️ Oprava: PRD §4 „11 položek" → **10** (P1 = obědová polévka byla počítána dvakrát).
* 💬 **Rozvaha (čeká na rozhodnutí zadavatele) — datový zdroj menu:**
  * **A) YAML + generátor** (`web/data/menu.yaml` → skript → `web/data/menu.json` pro web + auto-gen `menu-matrix.md`). Pohodlná editace s komentáři, matice nedriftuje; cena = malý ruční build krok (Node).
  * **B) Čisté JSON** (`web/data/menu.json`, prohlížeč načítá nativně přes `fetch`, bez build kroku). Jednodušší, ale bez komentářů a matice se udržuje ručně.
  * Diety/alergeny: definice patří do **datového souboru** (zdroj pravdy); Markdown matice je *pohled* (ideálně generovaný). → potvrzeno, že matice jako samostatný MD dává smysl pro přehled/rozvahu.

**Provedeno (16. iterace, vstup zadavatele):**

* 🧭 Rozhodnutí **D-16** — varianta **A (YAML + generátor)**.
* ✅ Vytvořen datový soubor **[`web/data/menu.yaml`](../docs/data/menu.yaml)** se 10 položkami + číselníky diet a alergenů + příznaky (`diet_suitable` / `diet_adjustable` / `allergens` / `allergens_adjustable` / `varies`). PRD §7.3 aktualizováno. *(pozn.: po migraci 28.5. žije v `docs/data/menu.yaml` — viz D-20)*
* 📌 **Generátor** (`menu.yaml → menu.json` + `menu-matrix.md`) odložen na později — zařazeno do [PLAN.md](PLAN.md) Fáze C.

**Provedeno (17. iterace, vstup zadavatele — předvývojová revize PRD):**

* 🧭 Rozhodnutí **D-17** (hosting → GitHub Pages) a **D-18** (upřesnění MVP webu).
* ✅ Přepsán **PRD.md v4.0**: site map (Menu = dietní ikony + video placeholder, Kontakt bez formuláře), §5.2 (dietní ikony / video / jen IG), §7.1 stack (GitHub Pages, bez buildu, grafika ✅ Codex), §7.2 struktura (`.nojekyll`, `data/`, `vendor/yaml-mini.js`, pryč Cloudflare soubory), §7.3 (menu z YAML inline + parser, žádný JSON), §7.4 (realistické cíle + nutná optimalizace velkých PNG), §7.5 (SEO úměrně, adresa do JSON-LD), §7.6 (GH Pages neumí hlavičky), §7.7 (bez formuláře/analytics), wireframy, §10 (Playwright), §12 roadmap (stručná zákazník-facing), §13 rizika, §14 done.
* ✅ Sladěno: TECH-STACK (hosting/integrace/náklady), PLAN (Fáze C, hosting, lokalita, rizika), rozpočet (hosting), marketing (analytics). Adresa všude → **Náměstí Republiky 159/10, Opava**.
* 📌 Generátor `menu.json` z D-16 **zrušen** (D-18) — web čte YAML přímo.

**Provedeno (18. iterace — sladění scaffoldu před vývojem):**

* ✅ Smazány Cloudflare-specifické soubory (`web/_headers`, `_redirects`, `wrangler.toml`) a `web/js/form.js`; přidán `web/.nojekyll`.
* ✅ **Všechny cesty převedeny na relativní** (`/css/…` → `css/…` atd.) ve všech HTML — ověřeno Playwrightem, že web teď funguje i přes `file://` (CSS i fonty se načtou, 0 selhaných requestů).
* ✅ Z `kontakt.html` odebrán formulář; adresa všude → **Náměstí Republiky 159/10, Opava**; OG/JSON-LD + robots + sitemap → `ameliesam.github.io/the-early-bowl`; TODO komentáře sladěny (bez Formspree/matice).
* ✅ `web/README.md` přepsán (GitHub Pages, relativní cesty, stav assetů, pořadí vývoje).

**Provedeno (19. iterace — vývoj webu, autonomně):**

* ✅ **Data layer:** `js/vendor/yaml-mini.js` (vlastní YAML parser pro náš subset, otestován v node), `js/menu-data.js` (zrcadlí `menu.yaml`, načítá se přes `<script>` → funguje i `file://`), `js/menu.js` (render menu po kategoriích + featured na homepage, dietní ikony z příznaků).
* ✅ **copy-id.js** přepsán na event delegation (funguje pro dynamicky vykreslené karty).
* ✅ **pages.css** — všechny sekce (hero, value props, featured, roadmap, IG CTA, menu grid + karty, dietní ikony, video placeholder, kontakt+mapa, prose, mobilní nav dropdown).
* ✅ **Obsah všech stránek:** homepage (hero + 3 value props + featured + roadmap + IG CTA), menu (render z YAML + „jak objednat" + **video placeholder** S1), o-nás (příběh + hodnoty + logo), kontakt (kontaktní karta + **Google Maps embed** Náměstí Republiky), podmínky (GDPR bez sběru dat), 404.
* ✅ **Optimalizace obrázků:** 15 MB → 6 MB; resize + WebP (`<picture>` s PNG fallbackem), hero 1,1 MB→73 KB WebP.
* 🔬 **Playwright QA:** všechny stránky desktop + mobil, **0 JS chyb / 0 selhaných requestů**; menu = 10 karet/4 kategorie/21 dietních ikon, copy-id funguje, featured = 4; ověřeno i přes `file://` (10 karet, 10 obrázků). Mobilní menu = čistý rozbalovací panel.

**Provedeno (20. iterace — doladění dle zpětné vazby):**

* 🐛 **Oprava layoutu karty:** chyběly styly `.menu-card__head/__title/__price` (byly jen ve `stylesheet.html`, ne v `components.css`) → ID a cena se překrývaly. Doplněno + přepracováno na čistší layout: **ID badge nahoře, název + cena na jednom řádku**.
* 🐛 **Dietní piktogram „Vegetariánské"** byl větší a stylově nesedící (barevné emoji 🥗) → nahrazen plochým **„V" chipem** v brand stylu (leaf-green kruh, hnědá kontura), jednotná velikost s PNG ikonami.
* 🎨 **bg-pattern** nasazen jako velmi jemný (opacity 0.05) fixní podklad celého webu.
* ✅ Tlačítka „Kopírovat ID" zarovnána na spodek karet (`margin-top:auto`).
* 🔬 Ověřeno Playwrightem (server i file://): 0 chyb, layout opraven, piktogramy jednotné.

**Provedeno (21. iterace — UX doladění karet dle zpětné vazby):**

* ✅ **Cena vedle kódu** (kód + cena na jednom řádku) → název má plnou šířku.
* ✅ **Název se nedělí** — vypnuto auto-dělení slov (`hyphens: manual`), konec „pome-rančový".
* ✅ **Kopírování přesunuto na kód položky** — klik na badge `N2` zkopíruje ID (feedback „✓"); samostatné tlačítko „Kopírovat ID" odebráno.
* ✅ **Vegetariánská ikona** vrácena jako **grafika** (inline SVG: leaf-green kruh, hnědá kontura, bílý lístek) ve stejné velikosti jako PNG ikony (34 px).
* ✅ **bg-pattern** zviditelněn (opacity 0.05 → 0.14).
* 🔬 Ověřeno Playwrightem: 0 chyb, badge=button kopíruje, 4 ikony 34×34, název na jednom řádku.

**Další krok:** Volitelně propagační video (HeyGen); deploy na GitHub Pages; sazba dokumentace + slide deck (Fáze D/E).

---

### 24. 5. 2026 — Předání projektu Claude Code

**🔬 Co:** Projekt předán nástroji Claude Code (Opus 4.7) k review dokumentace, harmonizaci a tvorbě plánu.

**Provedeno:**

* ✅ Review všech dokumentů (PRD, DESIGN, šablony, zápis z konzultace, ZADANI) + analýza loga.
* 💡 **Zjištění — zásadní kontradikce:** PRD definoval *zelenou* paletu (#22C55E) + fonty Poppins/Inter, zatímco DESIGN.md a logo používají *smetanovo-hnědou* hand-drawn identitu. Dva dokumenty si přímo odporovaly. → vyřešeno **D-01**.
* 💡 Zjištění — chybějící 5. podstránka: ZADANI vyžaduje min. 5 podstránek vč. „Obchodní podmínky". Doplněno do PRD jako `podminky.html`.
* 💡 Zjištění — překlepy v menu („tast" místo „toast", „avokádvím tastem"). Opraveno.
* 💡 Zjištění — chybělo Ostrava vs. Opava: Slezská univerzita je v Opavě → lokalita opravena (**D-08**).
* ✅ Vytvořen **PLAN.md** — deliverable plán mapovaný na hodnotící kritéria ZADANI, s explicitní tabulkou odchylek od zadání.
* ✅ Harmonizovány dokumenty: DESIGN.md rozšířen (kontrasty WCAG, komponenty, **AI prompt templates** pro generování jídel), PRD.md zkrácen z 1437 na ~600 řádků a zbaven konfliktní palety, šablony menu/marketing/rozpočet doplněny o konkrétní čísla, README proměněn v rozcestník.
* 🧭 Rozhodnutí **D-01** až **D-04** (vizuál, obrázky, stack, prototyp).

**Provedeno (2. iterace, vstup zadavatele):**

* 🧭 Rozhodnutí **D-05** až **D-11** dle pokynů zadavatele (Cloudflare, termín, ceny, lokalita, kontakty, hyperframes, marp).
* ✅ Promítnuto napříč všemi dokumenty (Vercel→Cloudflare, Ostrava→Opava, doplněn nástrojový stack pro video a slidy).
* ✅ Vytvořen **stylesheet.html** — living style guide implementující celý design systém z DESIGN.md (paleta, typografie, tlačítka, badges, karty, formuláře, spacing).

**Provedeno (3. iterace, vstup zadavatele):**

* 🧭 Rozhodnutí **D-12** — cenotvorba M1/M3 (viz Decision log a [rozpocet_sablona.md](rozpocet_sablona.md) §3).
* ✅ Založen tento deník (**DENIK.md**).

**Provedeno (4. iterace — ověření fontů):**

* 🔬 Zadavatel upozornil na riziko diakritiky (`ě`, `č`) ve fontech Fredoka/Quicksand.
* 🔬 Ověření: `curl` Google Fonts CSS pro oba fonty s desktop user-agentem; kontrola, zda servírují subset `latin-ext` a jaký má `unicode-range`.
* ❌ **Chybný závěr (false positive):** Z přítomnosti `latin-ext` bloku s `unicode-range U+0100–02BA` jsem usoudil „fonty jsou pro češtinu OK". **To bylo špatně** — Google Fonts servíruje stejný `unicode-range` pro všechny fonty bez ohledu na to, zda font ty glyfy reálně má.
* 💡 **Zjištění:** Deklarovaný `unicode-range` ≠ záruka existence glyfu. Jediný spolehlivý test je **vizuální render**.

**Provedeno (5. iterace — vizuální ověření Playwrightem):**

* 🔬 Zadavatel poslal screenshot: `ě` a `č` ve Fredoce vypadají špatně. Postavil jsem srovnávací stránku (7 fontů, český pangram) a vyrenderoval ji **Playwrightem** (chromium, deviceScaleFactor 2, `document.fonts.ready`).
* 💡 **Zjištění (potvrzeno screenshotem):** **Fredoka nemá vlastní háčky** pro `ě č ř š ž ň ť ď` — háček se dotahoval z tenkého systémového fallbacku → stylový nesoulad s tučným fontem. To je příčina problému ze screenshotu.
* 🔬 Programové ověření kandidáta: `document.fonts.check("700 40px 'Baloo 2'", "ě")` → `true`; vizuální render H1 čistý a konzistentní.
* 🧭 Rozhodnutí **D-13** — Fredoka → **Baloo 2**. Promítnuto do `stylesheet.html`, [DESIGN.md](../specs/DESIGN.md) §4.1, marketing plánu i PLAN.md.
* 💡 **Poučení do procesu:** nové fonty **vždy** vizuálně testovat na českém pangramu přes Playwright, ne jen kontrolovat CSS/unicode-range.

**Provedeno (6. iterace, vstup zadavatele):**

* 🧭 Rozhodnutí **D-14** — video bez voiceoveru. ElevenLabs odebrán z PLAN.md a PRD.md, sdělení ponese on-screen text.
* ✅ Vytvořen samostatný **[TECH-STACK.md](../specs/TECH-STACK.md)** — kompletní přehled použitých nástrojů a technologií (podklad pro „Použité zdroje a nástroje" v dokumentaci, ZADANI §2B).

**Provedeno (7. iterace, vstup zadavatele):**

* 🧭 Rozhodnutí **D-15** — (a) doména generická `*.pages.dev` (zdarma, žádná vlastní doména); (b) **Typst zamítnut** pro dokumentaci — místo něj Markdown → HTML + tisková CSS → PDF přes headless Chromium (Playwright `page.pdf()`).
* ✅ Promítnuto: PLAN.md (odchylky, Fáze A4/D-3, vyřešená rozhodnutí), PRD.md (doména, JSON-LD url → `the-early-bowl.pages.dev`), rozpocet (doména 400→0 Kč, přepočet celků), TECH-STACK.md.

**Provedeno (8. iterace — scaffold webu):**

* ✅ Vytvořena cookie-cutter struktura `web/` dle [PRD.md](../specs/PRD.md) §7.2: 5 stránek + `stylesheet.html`, `css/` (tokens.css reálný, reset/base/components/pages), `js/` (nav/copy-id/form stuby), `images/` (.gitkeep), config soubory `_headers`/`_redirects`/`wrangler.toml`/`robots.txt`/`sitemap.xml` + `web/README.md`.
* ✅ `stylesheet.html` přesunut z rootu do `web/` (patří k webu); odkazy v DESIGN.md a README aktualizovány.
* 💡 HTML stránky jsou validní kostry (head s meta/fonty/CSS, header/nav, main placeholder, footer) — připravené k naplnění obsahem dle PRD §9/§11.
* ⚠️ Binární assety (favicon, logo.svg, hero/og/menu obrázky, 404.html) zatím chybí — seznam TODO v `web/README.md`, doplní se ve Fázi B.

**Provedeno (9. iterace — úklid struktury repozitáře):**

* ✅ Dokumenty roztříděny do složek: `specs/` (PRD, DESIGN, TECH-STACK), `docs/` (PLAN, DENIK, zapis_konzultace + 3 šablony), `assets/` (logo). V kořeni zůstal jen `README.md` a `ZADANI.md` + složky `specs/ docs/ web/ assets/`.
* ✅ Přesun přes `git mv` (zachová historii); přepsáno všech ~100 vzájemných odkazů na nové relativní cesty.
* ✅ Ověřeno Python skriptem: všech 100 interních odkazů vede na existující soubory.

**Provedeno (10. iterace — verzování):**

* ✅ Scaffold webu (8. iterace), úklid struktury (9. iterace) a doprovodné úpravy dokumentů zacommitovány a pushnuty na GitHub (`origin/main`, `AmelieSam/the-early-bowl`).

**Provedeno (11. iterace — prompty pro obrázky):**

* ✅ Vytvořena sada **20 promptů** v [`docs/prompts/`](prompts/README.md) (jeden markdown na obrázek) pro **ChatGPT Images 2.0**: 10 jídel, hero, OG, 404, background pattern, favicon, logo varianty, 4 dietní ikony + index README s postupem.
* 💡 Každý prompt je samostatný (obsahuje stylový blok), žádá přiložení loga jako stylové reference, definuje rozměr/pozadí a cílový soubor v `web/images/`.
* 💡 U textových prvků (OG, logo) upozornění na kontrolu pravopisu „THE EARLY BOWL" (riziko zkomolení) + doporučení radši dosadit reálné logo.
* ✅ Propojeno z [DESIGN.md](../specs/DESIGN.md) §7.

**Provedeno (12. iterace):**

* ✅ Doplněn `web/404.html` (Cloudflare Pages ho servíruje automaticky pro neexistující cesty) — text z PRD §11.2, odkaz na `images/404.png`. Aktualizován `web/README.md` a `_redirects`.

---

### 23. 5. 2026 — Prototypování a setup nástrojů

**🔬 Co:** První pokusy o vygenerování webu a vizuálů pomocí AI nástrojů; nastavení vývojového prostředí.

**Provedeno:**

* ✅ Prototypování konceptu s **NotebookLM** (zpracování brief/kontextu, viz commit „add context (from NotebookLM)").
* 🔬 Generování návrhu webu přes **Google Stitch**.
* ✅ Založen **GitHub repozitář** projektu.
* ✅ Adopce **VS Code** jako vývojového prostředí.

**❌ Neúspěšné experimenty / zjištění:**

* ❌ **Google Stitch — nekvalitní vstup = nekvalitní výstup.** Když dostal slabě připravený kontext, generoval generické a nepoužitelné návrhy. 💡 **Zjištění:** kvalita výstupu AI nástroje přímo závisí na kvalitě a struktuře vstupního kontextu (garbage in, garbage out). → motivace pro pořádnou dokumentaci (PRD/DESIGN) jako kvalitní kontext.
* ❌ **Free-tier nástroje nedostačují.** Gemini (free) a GitHub Copilot (free) dávaly pro náročnější design a generování webu nedostatečné výsledky. 💡 **Zjištění:** pro kvalitní práci je potřeba buď silnější model, nebo lepší orchestrace kontextu.

**Důsledek:** Rozhodnutí předat projekt 24.5. nástroji Claude Code s důrazem nejdřív na **kvalitní dokumentaci jako kontext**, teprve pak generování.

---

### 18.–22. 5. 2026 — Ideová fáze

**🔬 Co:** Vznik a vybroušení konceptu.

**Provedeno:**

* ✅ Brainstorming konceptu snídaňové restaurace pro studenty a sportovce.
* ✅ Konzultace s taťkou (zaznamenáno v [zapis_konzultace.md](zapis_konzultace.md)).
* ✅ Ustálení klíčových parametrů: provozní doba 6:00–13:30, kapacita ~15 míst, menu 6–10 fixních položek, cílová skupina, fázová roadmapa (předobjednávky → rozvoz → letní vozíček).
* ✅ Ustálení vizuálního směru: unikátní hand-drawn „clipart/cartoon" styl.

**💡 Zjištění:** Brzké ustálení konceptu a sepsání konzultace se ukázalo jako klíčové — sloužilo jako stabilní „kotva" při všech pozdějších rozhodnutích.
 
---

### ? 4. 2026 Nápad a logo
nápad se snídaňovou restaurací
kontrolování názvu(i domény) 
ptaní se chatu GPT na název 
dělání loga na geminy- hádání se s ním že nemůže upravovat fotky
video s geminy 
(skoušení webnoteu)

---

## Reference

* Plán a harmonogram: [PLAN.md](PLAN.md)
* Specifikace webu: [PRD.md](../specs/PRD.md)
* Design systém: [DESIGN.md](../specs/DESIGN.md)
* Originální brief (kotva): [zapis_konzultace.md](zapis_konzultace.md)
