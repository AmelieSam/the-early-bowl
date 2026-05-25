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

---

## Chronologie

### 25. 5. 2026 — Brand story a generování obrázků

**Provedeno (13. iterace, vstup zadavatele):**

* ✅ Doplněn a sloučen brand příběh **„Náš příběh"** — finální syntéza zadavatelovy verze (zakládací příběh „hledali jsme, nenašli, vytvořili", „miska optimismu") s původním úryvkem (malý tým, „nemáme čas na složitosti — ani ty", otevřeno v šest). Uloženo jako kanonický text do [PRD.md](../specs/PRD.md) §11.2.
* ✏️ Drobná editace „suroviny, které dávají mysl" → „…dávají energii" (ladí s hodnotou energie).
* ℹ️ Stránka `web/o-nas.html` zatím ponechána jako kostra — obsah se dosadí ve Fázi C.

**Provedeno (14. iterace — generování obrázků):**

* ✅ **Codex** vygeneroval všech **21 obrázků** podle promptů v [`docs/prompts/`](prompts/README.md): 10 ilustrací jídel, hero, OG, 404, background pattern, favicon (icon-source + `favicon.ico` + `apple-touch-icon.png`), logo + horizontální lockup, 4 dietní ikony. Uloženo do `web/images/`.
* 🔬 Kontrola: ověřeny rozměry a typy (validní PNG/ICO ve správných rozměrech) + vizuální kontaktní montáž přes ImageMagick.
* 💡 **Zjištění:** sada je **stylově i kompozičně konzistentní** s logem (hnědé kontury, ploché barvy, smetanové pozadí, jednotná paleta). Wordmark „THE EARLY BOWL" v logo variantách vyšel správně — avizované riziko zkomolení textu se nepotvrdilo.

**Další krok:** Dosadit obrázky do HTML stránek a naplnit obsah (Fáze C2–C6); poté responzivita, SEO, deploy na Cloudflare Pages.

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
* ✅ Konzultace se zadavatelem/vyučujícím (zaznamenáno v [zapis_konzultace.md](zapis_konzultace.md)).
* ✅ Ustálení klíčových parametrů: provozní doba 6:00–13:30, kapacita ~15 míst, menu 6–10 fixních položek, cílová skupina, fázová roadmapa (předobjednávky → rozvoz → letní vozíček).
* ✅ Ustálení vizuálního směru: unikátní hand-drawn „clipart/cartoon" styl.

**💡 Zjištění:** Brzké ustálení konceptu a sepsání konzultace se ukázalo jako klíčové — sloužilo jako stabilní „kotva" při všech pozdějších rozhodnutích.

---

## Reference

* Plán a harmonogram: [PLAN.md](PLAN.md)
* Specifikace webu: [PRD.md](../specs/PRD.md)
* Design systém: [DESIGN.md](../specs/DESIGN.md)
* Originální brief (kotva): [zapis_konzultace.md](zapis_konzultace.md)
