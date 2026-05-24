# Rozpočet a cenotvorba — The Early Bowl

*Vstup pro praktickou část projektové dokumentace (sekce „Cenotvorba"). Detailní menu a prodejní ceny: [menu_sablona.md](menu_sablona.md).*

> Všechny částky jsou orientační odhady pro účely školního projektu. Konkrétní čísla je třeba doplnit při reálné realizaci na základě poptávek u dodavatelů.

---

## 1. Počáteční investice (jednorázové náklady)

### Vybavení kuchyně — dvě varianty

| Položka | Varianta A (nevybavený prostor) | Varianta B (vybavená kuchyně) |
|---|---|---|
| Elektrické vařiče / sporák | 25 000 Kč | 0 Kč |
| Lednice + mraznička | 30 000 Kč | 0 Kč |
| Pracovní plochy + nerez stoly | 20 000 Kč | 0 Kč |
| Drobné spotřebiče (mixér, toaster, odšťavňovač) | 15 000 Kč | 5 000 Kč |
| Nádobí, příbory, talíře, misky | 12 000 Kč | 12 000 Kč |
| **Celkem počáteční investice** | **~102 000 Kč** | **~17 000 Kč** |

> **Varianta A:** nižší měsíční nájem, ale vysoké jednorázové náklady.
> **Varianta B:** vyšší měsíční nájem (odhad +5 000 Kč/měsíc), nižší vstupní bariéra → **doporučená pro start**.

### Technické vybavení
* **Fáze 1:** bez platebního terminálu — používáme **QR platby** (Spayd / QR Faktura, zdarma) + hotovost.
* **Fáze 2:** platební terminál (cca 500 Kč/měsíc pronájem nebo 5 000 Kč jednorázový nákup).

### Branding & web (jednorázové)
| Položka | Cena |
|---|---|
| Doména — generická `*.pages.dev` (Cloudflare) | **0 Kč** |
| Hosting (Cloudflare Pages free tier) | **0 Kč** |
| Logo + brand identita (vlastní práce + AI) | 0 Kč |
| Tisk menu, vizitek, letáků (start: 500 ks) | 2 500 Kč |
| **Celkem** | **~2 500 Kč** |

---

## 2. Fixní provozní náklady (měsíční / roční)

| Položka | Měsíčně | Ročně | Pozn. |
|---|---:|---:|---|
| Nájem prostor (OD) | 25 000 Kč | 300 000 Kč | Ověřit, zda zahrnuje vytápění |
| Energie (elektřina, voda) | 4 000 Kč | 48 000 Kč | Bez plynu (jen elektro) |
| Účetní služby | 125 Kč | 1 500 Kč | Roční zpracování krabice účtenek |
| Doména (generická `*.pages.dev`) | — | 0 Kč | Zdarma; vlastní doména volitelně později (~400 Kč/rok) |
| Hosting (Cloudflare Pages) | — | 0 Kč | **Úspora ~1 800 Kč/rok** vs. tradiční hosting |
| Internet & telefon | 800 Kč | 9 600 Kč | |
| Licence & SaaS (Formspree free, fonts free) | 0 Kč | 0 Kč | |
| Pojištění odpovědnosti | 500 Kč | 6 000 Kč | |
| **Celkem fixní** | **~30 425 Kč** | **~365 100 Kč** | |

---

## 3. Variabilní provozní náklady

### Mzdy
* **1 osoba na směnu** (rotace 2–3 brigádníků z řad vysokoškoláků).
* Sazba: 180 Kč / hod (DPP).
* Otevírací doba: 6:00–13:30 = 7,5 hod + 0,5 hod úklid = **8 hod / den**.
* **Denní mzdové náklady:** 1 440 Kč
* **Měsíční (30 dní):** ~43 200 Kč

### Suroviny (food cost) — kalkulace per položka

**Cílové food cost ratio** (= surovinová cena ÷ prodejní cena):
* **≤ 30 %** pro standardní položky,
* **≤ 35 %** tolerováno pro dvě „prémiové" položky (M1, M3) — viz rozhodnutí níže.

| ID | Prodejní cena | Odhad surovin | Food cost % | Marže |
|---|---:|---:|---:|---:|
| N1 Voda s citronem | 25 Kč | 3 Kč | 12 % | **22 Kč** |
| N2 Fresh OJ | 55 Kč | 15 Kč | 27 % | 40 Kč |
| N3 Čaj | 35 Kč | 5 Kč | 14 % | **30 Kč** |
| S1 Yogurt Bowl | 90 Kč | 25 Kč | 28 % | 65 Kč |
| S2 Teplá kaše | 90 Kč | 15 Kč | 17 % | **75 Kč** |
| M1 Avokádový toast s lososem | 110 Kč | 38 Kč | 35 % | 72 Kč |
| M2 Vajíčka s toastem | 90 Kč | 22 Kč | 24 % | 68 Kč |
| M3 Vajíčka s avokádem a slaninou | 110 Kč | 38 Kč | 35 % | 72 Kč |
| M4 Toast Caprese | 90 Kč | 28 Kč | 31 % | 62 Kč |
| P1 Denní polévka | 65 Kč | 18 Kč | 28 % | 47 Kč |

> **✅ Rozhodnutí o cenotvorbě (24. 5. 2026):**
> Zachováváme **dvouhladinový ceník (90 / 110 Kč)** — jednoduchost ceníku je deklarovaná hodnota značky (zákazník nemusí složitě počítat). Přidání třetí hladiny 120–130 Kč zamítnuto, protože by tuto výhodu rozbilo.
>
> Položky s prémiovou surovinou (M1 losos, M3 slanina+avokádo) **vědomě jedou na food costu ~35 %** místo 30 %. Jsou to *anchor* (lákadlo) položky, které definují kvalitu konceptu; jejich **absolutní marže (72 Kč) je naopak nejvyšší ze slaných jídel**, takže každý prodaný kus přináší víc korun než levnější položka.
>
> U M1 navíc **zmenšujeme porci lososa** (cca 50 g → 40 g) s kvalitnějším naservírováním → food cost klesl z původních 45 Kč (41 %) na 38 Kč (35 %), aniž by to zákazník vnímal jako ošizení.
>
> *(Logováno také v [DENIK.md](DENIK.md) jako rozhodnutí D-12.)*

### Marketing (měsíčně)
| Položka | Cena |
|---|---:|
| Letáčky (dotisk každé 2 měsíce, ~300 ks) | 750 Kč |
| Spolupráce s gymem (barter / drobné platby) | 500 Kč |
| Sponzorované IG příspěvky (nárazově) | 500 Kč |
| **Celkem marketing** | **~1 750 Kč/měs** |

---

## 4. Cash flow odhad — průměrný měsíc

### Příjmy (konzervativní scénář — 10 zákazníků/den, prům. útrata 130 Kč)
* Denní obrat: 1 300 Kč
* Měsíční obrat (30 dní): **39 000 Kč**

### Příjmy (cílový scénář — 25 zákazníků/den, prům. útrata 150 Kč)
* Denní obrat: 3 750 Kč
* Měsíční obrat: **112 500 Kč**

### Měsíční náklady (celkem)
| | Konzervativní | Cílový |
|---|---:|---:|
| Fixní | 30 425 | 30 425 |
| Suroviny (~30 % obratu, blended) | 11 700 | 33 750 |
| Mzdy | 43 200 | 43 200 |
| Marketing | 1 750 | 1 750 |
| **Celkem** | **87 075** | **109 125** |

### Hospodářský výsledek
| | Konzervativní | Cílový |
|---|---:|---:|
| Obrat | 39 000 | 112 500 |
| Náklady | 87 075 | 109 125 |
| **Zisk / ztráta** | **−48 075 Kč** ❌ | **+3 375 Kč** ✅ |

**Závěr:** Bod zlomu (break-even) leží kolem **25 zákazníků denně** při průměrné útratě 150 Kč. To je realistické pro plně rozjetý provoz po cca 6 měsících. Prvních pár měsíců bude ve ztrátě → potřeba rezerva nebo dotace (viz §5).

---

## 5. Financování

### Vlastní zdroje
* Doporučená rezerva: **~300 000 Kč** (pokrytí 6 měsíců provozní ztráty + start-up investice Varianty B).

### Dotace
V rámci školního projektu je doporučeno zahrnout **žádost o dotaci od města Opavy** nebo z **operačních programů ESF** (např. pro mladé podnikatele, podporu zdravého stravování ve veřejných prostorech). Možnosti:

* **Statutární město Opava — program podpory podnikání** (až 100 000 Kč na vybavení).
* **Národní rozvojová banka (NRB) — Začínající podnikatel** (zvýhodněný úvěr).
* **EU fondy — IROP** (regionální podpora služeb).

### Crowdfunding (volitelně)
* Hithit / Startovač kampaň s rewards (předplacené snídaně, brand merchandise) → kombinace financování + marketingu před launchem.

---

## Reference

* Prodejní ceny a menu: [menu_sablona.md](menu_sablona.md)
* Roadmap rozvoje (kdy která fáze přijde): [PRD.md](../specs/PRD.md) §12
* Marketingové aktivity (vstup do nákladů): [marketing_plan_sablona.md](marketing_plan_sablona.md)
