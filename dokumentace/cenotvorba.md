# Cenotvorba — The Early Bowl

*Ucelený dokument pro praktickou část projektové dokumentace (ZADANI §2B — „Cenotvorba"). Vychází z [menu_sablona.md](menu_sablona.md), [rozpocet_sablona.md](rozpocet_sablona.md), [PRD.md](../specs/PRD.md) a [zapis_konzultace.md](zapis_konzultace.md). Všechna čísla jsou kvalifikované odhady kalibrované podle běžných pražsko-opavských sazeb roku 2026 a podle průzkumu konkurence v okolí Náměstí Republiky v Opavě.*

---

## 1. Filozofie cenotvorby: jednoduchý ceník jako brand

Snídaňová restaurace The Early Bowl staví **jednoduchý dvouhladinový ceník** (90 / 110 Kč u jídel, 25–55 Kč u nápojů) jako jeden ze tří pilířů své hodnotové nabídky („**rychlé, zdravé, dostupné**"). Zákazník — student nebo sportovec před přednáškou či po tréninku — má v ruce 200 Kč a chce za pět vteřin vědět, co si může objednat. Ceník, ve kterém se nemusí přepočítávat každá položka, je sám o sobě **funkcí brandu**, ne jen důsledkem účetnictví.

Z toho plynou tři vědomá rozhodnutí, která prostupují celou kalkulací:

1. **Zachováváme dvě cenové hladiny** (90 a 110 Kč u jídel) i tam, kde food cost vybízí k třetí (např. 120 Kč). Třetí hladina byla zvažována a zamítnuta — viz rozhodnutí D-12 v [DENIK.md](DENIK.md).
2. **Prémiové „anchor" položky M1 a M3** (s lososem / slaninou a avokádem) **vědomě jedou na vyšším food costu (~35 %)** než zbytek menu (~30 %). Definují vnímanou kvalitu konceptu — kdo si je nedá, viděl je v menu a ví, že to není pekárna.
3. **Nápoje dotují potravinovou marži.** Voda s citronem a čaj mají food cost pod 15 % a přidávají k průměrné útratě bez tlaku na ceník jídel.

---

## 2. Přehled menu a prodejních cen

Kompletní menu vychází z [menu.yaml](../docs/data/menu.yaml), které je zároveň zdrojem dat pro web. Ceny jsou koncové (vč. DPH 12 %, neplátce DPH dle § 6 zákona č. 235/2004 Sb. pro start-up obrat pod 2 mil. Kč/rok — kalkulační DPH je tedy nulová z účetního pohledu, ale pro srovnatelnost s konkurencí uvažujeme ceny „včetně").

| ID | Položka | Cena | Kategorie |
|---|---|---:|---|
| N1 | Voda s citronem (0,3 l) | 25 Kč | nápoj |
| N3 | Čaj (porcovaný, sypaný) | 35 Kč | nápoj |
| N2 | Čerstvě mačkaný pomerančový džus (0,2 l) | 55 Kč | nápoj |
| P1 | Denní polévka (250 ml + pečivo) | 65 Kč | polévka |
| S1 | Yogurt Bowl (jogurt, granola, ovoce, med) | 90 Kč | sladké |
| S2 | Teplá kaše (ovesná / pohanková, ovoce, ořechy) | 90 Kč | sladké |
| M2 | Vajíčka s toastem (2 ks, scrambled/sázená) | 90 Kč | slané |
| M4 | Toast Caprese (mozzarella, rajče, bazalka) | 90 Kč | slané |
| M1 | Avokádový toast s lososem | 110 Kč | slané ⭐ |
| M3 | Vajíčka s avokádem a slaninou | 110 Kč | slané ⭐ |

⭐ = prémiové anchor položky

---

## 3. Kalkulace food cost — surovinová cena per položka

Food cost (FC%) = surovinová cena ÷ prodejní cena. **Cíl**: ≤ 30 % standardně, ≤ 35 % u anchor položek. Marže = prodejní cena − surovinová cena (před režijními náklady).

| ID | Cena | Suroviny | FC % | Marže (Kč) |
|---|---:|---:|---:|---:|
| N1 Voda s citronem | 25 | 3 | **12 %** | 22 |
| N2 Fresh OJ | 55 | 15 | 27 % | 40 |
| N3 Čaj | 35 | 5 | **14 %** | 30 |
| P1 Denní polévka | 65 | 18 | 28 % | 47 |
| S1 Yogurt Bowl | 90 | 25 | 28 % | 65 |
| S2 Teplá kaše | 90 | 15 | **17 %** | 75 |
| M2 Vajíčka s toastem | 90 | 22 | 24 % | 68 |
| M4 Toast Caprese | 90 | 28 | 31 % | 62 |
| M1 Avokádový toast s lososem | 110 | 38 | **35 %** | 72 |
| M3 Vajíčka s avokádem a slaninou | 110 | 38 | **35 %** | 72 |
| **Vážený průměr** (mix 60 % jídla / 40 % nápoje) | | | **~26 %** | |

### Dekompozice prémiových položek (M1 jako příklad)

Aby bylo zřejmé, jak vznikají uvedené odhady, rozkládáme M1 *Avokádový toast s lososem*:

| Surovina | Množství | Cena | Podíl |
|---|---|---:|---:|
| Uzený losos | 40 g | 22 Kč | 58 % |
| Avokádo | ½ ks (~80 g) | 8 Kč | 21 % |
| Sourdough toast | 2 plátky (~80 g) | 4 Kč | 11 % |
| Citron, sůl, pepř, olivový olej | drobnost | 2 Kč | 5 % |
| Mikrobylinky / cibulka | dekorace | 2 Kč | 5 % |
| **Celkem** | | **38 Kč** | 100 % |

Z toho je vidět, že **losos sám tvoří 58 % surovinové ceny**. Naše vědomé rozhodnutí porci lososa z původně plánovaných 50 g zmenšit na **40 g** a místo toho ji **kvalitněji naservírovat** (vějíř, citron, mikrobylinky) snížilo food cost ze 45 Kč (41 %) na 38 Kč (35 %), aniž by zákazník vnímal porci jako ošizenou. Detail viz rozhodnutí **D-12** v [DENIK.md](DENIK.md).

---

## 4. Strategie anchor položek

Existují dva přístupy k cenotvorbě prémiové položky:
* **A) Vyrovnat food cost na 30 %** ⇒ cena vyleze na 130 Kč ⇒ rozbije dvouhladinový ceník.
* **B) Tolerovat 35 % food cost** ⇒ cena drží 110 Kč ⇒ ceník zůstává čistý.

Volíme **variantu B**, a to ze tří důvodů:

1. **Absolutní marže je u M1/M3 nejvyšší ze slaných jídel** — 72 Kč versus 62–68 Kč u 90Kč jídel. I při horším poměru každý prodaný anchor přináší o 4–10 Kč víc než „nejlepší" 90Kč jídlo.
2. **Anchor položky se na obrat podílí ~30 %**, ale na vnímanou kvalitu konceptu ~70 %. Pokud někdo přijde „na losose", při příští návštěvě si může dát M2 za 90 — image už máme zaplacený.
3. **Decoy effect**: existence dražší (110 Kč) položky dělá 90Kč jídla pocitově levnější. Behaviorálně dokumentováno (Ariely, *Predictably Irrational*) — průměrná útrata pak vyleze výš, ne níž.

---

## 5. Náklady na produkci — co stojí jeden prodaný kus

Surovinová cena je jen polovina příběhu. Reálná „výrobní cena" produktu zahrnuje i podíl mzdových a režijních nákladů. Při cílovém scénáři **25 zákazníků/den** a otevírací době 6:00–13:30 vychází:

| Nákladová položka | Měsíčně (Kč) | Per zákazník (Kč) |
|---|---:|---:|
| Mzdy (1 osoba × 8 h × 30 dní × 180 Kč) | 43 200 | 58 |
| Nájem prostor v OD (vybavená kuchyně) | 25 000 | 33 |
| Energie (elektřina, voda) | 4 000 | 5 |
| Internet, telefon, pojištění, účetní | 1 425 | 2 |
| Marketing (letáky, IG, gym partnerství) | 1 750 | 2 |
| Hosting webu (GitHub Pages — zdarma) | 0 | 0 |
| **Režie celkem** | **75 375** | **~100** |

> Při průměrné útratě 150 Kč/zákazníka a food costu ~26 % je **surovinová cena ~39 Kč/zákazníka**.
> Plná výrobní cena = 39 + 100 = **~139 Kč/zákazníka**.
> Zisk před zdaněním = 150 − 139 = **~11 Kč/zákazníka** (~7 % marže).

To je realistický odhad pro **rozjetý provoz**. V prvních měsících, kdy ještě nemáme 25 zákazníků denně, jsou režijní náklady rozprostřeny mezi méně lidí a celková výrobní cena na zákazníka roste — viz §6.

---

## 6. Bod zlomu (break-even analýza)

Fixní náklady stojí, ať máme zákazníky nebo ne:
* Fixní měsíčně: **30 425 Kč** (nájem, energie, internet, pojištění, účetní)
* Mzdy měsíčně: **43 200 Kč** (sice variabilní co do směn, ale prakticky fixní — jedna směna se musí pokrýt)
* Marketing: **1 750 Kč**
* **Celkové fixní + kvazi-fixní:** **75 375 Kč/měsíc**

Při průměrné jednotkové marži (cena − surovina) **~111 Kč/zákazníka** vychází:

```
Break-even = 75 375 / 111 = 680 zákazníků/měsíc
            = ~23 zákazníků/den (30 dní)
```

| Scénář | Zákazníků/den | Obrat/měsíc | Náklady/měsíc | Výsledek |
|---|---:|---:|---:|---:|
| Pesimistický | 10 | 45 000 | 86 175 | **−41 175 Kč** ❌ |
| Break-even | 23 | 103 500 | 102 285 | +1 215 Kč ≈ 0 |
| Cílový | 25 | 112 500 | 105 075 | **+7 425 Kč** ✅ |
| Optimistický (plně rozjetý) | 35 | 157 500 | 116 025 | **+41 475 Kč** ✅ |

**Závěr:** Break-even ~23 zákazníků/den je dosažitelný, ale není komfortní. Při první návštěvě se zákazník většinou nezačne vracet hned a marketingová cesta od letáku k pravidelnému zákazníkovi trvá 4–8 týdnů. Realistický **náběh na cílový scénář: 4–6 měsíců**. To znamená, že **prvních 6 měsíců poběží podnik ve ztrátě** s kumulovaným deficitem cca **150 000–250 000 Kč** — kalkulace vyžaduje **provozní rezervu min. 300 000 Kč** (viz §7).

---

## 7. Financování startu

Doporučená struktura zdrojů pro reálnou realizaci konceptu:

| Zdroj | Částka | Účel |
|---|---:|---|
| Vlastní vklad (rezerva 6 měsíců provozu) | 300 000 Kč | krytí ztráty v náběhové fázi |
| Investice do vybavení (varianta B — vybavená kuchyně) | 17 000 Kč | drobné spotřebiče, nádobí |
| Branding & web | 2 500 Kč | tisk menu/vizitek (web a logo zdarma) |
| Dotace Statutárního města Opavy | až 100 000 Kč | program podpory podnikání |
| Zvýhodněný úvěr NRB „Začínající podnikatel" | rezerva | jen pokud cash flow vyžaduje |
| **Celková potřeba kapitálu na start** | **~320 000 Kč** | |

Crowdfundingová kampaň (Hithit / Startovač) s předplacenými snídaněmi je volitelným doplňkem — kombinuje financování s pre-launch marketingem (viz [marketing-plan.md](marketing-plan.md)).

---

## 8. Citlivostní analýza

Co se stane, když se nedaří? Citlivostní analýza ukazuje, jak moc je model robustní:

| Změna | Dopad na měsíční výsledek |
|---|---|
| Suroviny zdraží o 10 % | −3 000 Kč (snesitelné, jeden mizerný měsíc) |
| Energie zdraží o 30 % (volatilita trhu) | −1 200 Kč (zanedbatelné) |
| Brigádník chce 200 Kč/h (z 180) | −4 800 Kč (citlivé — kompenzovat sazbou u N2/M1) |
| Návštěvnost klesne o 20 % (z 25 na 20) | −20 000 Kč obratu, −22 200 Kč zisku ⚠️ |
| Loyalty „10. snídaně zdarma" | −2,5 % obratu při >40 % repeat rate (přijatelné) |

**Nejcitlivější faktor je návštěvnost.** Mzdy a nájem se nesnižují, když nepřijde zákazník — proto je strategickou prioritou marketing (viz [marketing-plan.md](marketing-plan.md)) a každý nový pravidelný zákazník má násobně větší hodnotu než „walk-in" turista.

---

## 9. Shrnutí pro Projektovou dokumentaci

* **Za kolik vyrábíme:** surovinová cena per zákazník ~39 Kč, plná výrobní cena (vč. režií při cílovém provozu) ~139 Kč.
* **Za kolik prodáváme:** průměrná útrata 150 Kč (jednoduchý dvouhladinový ceník 90 / 110 Kč u jídel, 25–55 Kč u nápojů).
* **Jaký máme zisk:** ~11 Kč/zákazníka při cílovém provozu, **~7 425 Kč/měsíc** při 25 zákaznících/den. Break-even na 23 zákaznících/den.
* **Cenotvorná strategie:** jednoduchost ceníku jako součást brandu; vědomě tolerovaný vyšší food cost u 2 anchor položek; nápoje s nízkým FC dotující průměrnou marži.

---

## Reference

* Detailní menu a popisy: [menu_sablona.md](menu_sablona.md), [menu-matrix.md](menu-matrix.md)
* Pracovní rozpočet (zdroj čísel): [rozpocet_sablona.md](rozpocet_sablona.md)
* Marketingový plán (sourozenecký dokument): [marketing-plan.md](marketing-plan.md)
* Rozhodovací log (D-07, D-12): [DENIK.md](DENIK.md)
* Konzultační zápis (kotva konceptu): [zapis_konzultace.md](zapis_konzultace.md)
