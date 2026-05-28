# The Early Bowl

Školní projekt z informatiky — kompletní digitální představení smyšlené snídaňové restaurace v Opavě.

![Logo The Early Bowl](assets/Theearlybowlmiska.png)

## Co najdeš v repu

### 📋 Plánování a zadání
* **[ZADANI.md](ZADANI.md)** — zadání školního projektu (zdroj všech požadavků).
* **[PLAN.md](dokumentace/PLAN.md)** — plán doručení všech deliverables, fáze, milníky, rozhodnutí.
* **[DENIK.md](dokumentace/DENIK.md)** — laboratorní deník: chronologie práce, neúspěšné experimenty a decision log.
* **[zapis_konzultace.md](dokumentace/zapis_konzultace.md)** — originální brief z konzultace (kotva, nemění se).

### 📐 Specifikace
* **[PRD.md](specs/PRD.md)** — funkční a technická specifikace webu (co a jak).
* **[DESIGN.md](specs/DESIGN.md)** — **single source of truth** pro vizuální identitu (paleta, fonty, komponenty, AI prompty pro ilustrace).
* **[TECH-STACK.md](specs/TECH-STACK.md)** — přehled použitých technologií a nástrojů + souhrn nákladů.

### 💻 Web
* **[docs/](docs/)** — statický web (HTML/CSS/JS); hostuje GitHub Pages přímo z `/docs`. Detaily v [docs/README.md](docs/README.md).

### 📊 Vstupy pro projektovou dokumentaci

**Finální ucelené dokumenty** (primární zdroj pro PDF):
* **[cenotvorba.md](dokumentace/cenotvorba.md)** — filozofie ceníku, food cost per položka, anchor strategie, break-even, financování, citlivostní analýza.
* **[marketing-plan.md](dokumentace/marketing-plan.md)** — cílová skupina (3 persony), pozicionování, online/offline kanály, lokální SEO, KPI, roadmapa.
* **[menu_sablona.md](dokumentace/menu_sablona.md)** — finální menu s ID, popisy, cenami.
* **[menu-matrix.md](dokumentace/menu-matrix.md)** — matice vhodnosti pro diety a obsažených alergenů.

**Pracovní podklady** (zdrojové sešity, ze kterých vznikly finální verze):
* **[rozpocet_sablona.md](dokumentace/rozpocet_sablona.md)** — pracovní rozpočet (počáteční investice, fixní/variabilní náklady, cash flow scénáře).
* **[marketing_plan_sablona.md](dokumentace/marketing_plan_sablona.md)** — pracovní marketingový sešit.

## Klíčové vlastnosti projektu

* **Brand:** hand-drawn cartoon styl podle loga, smetanovo-hnědá paleta s teplými akcenty.
* **Web:** statický (HTML/CSS/JS), generovaný s AI, deploy na GitHub Pages (zdarma, `/docs` source) — 5 podstránek, mobile-first.
* **Ilustrace jídel:** AI-generované bitmapy podle master promptu v DESIGN.md (ne fotografie).
* **Propagační video:** vygenerováno v Google Gemini Veo (bez voiceoveru); slide deck v [Marp](https://marp.app/).
* **`docs/`:** statický web vč. `stylesheet.html` — živé ukázky design systému.
* **Bez cookies, bez trackingu** → bez otravných lišt, čistý GDPR.

## Stav

Fáze 1 (MVP) — viz [PLAN.md](dokumentace/PLAN.md) pro aktuální harmonogram.
