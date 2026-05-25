# Menu — The Early Bowl

*Každá položka má unikátní identifikátor (např. **S1**) pro snadné objednání telefonem nebo u baru.*
*Vizuální zobrazení na webu: AI-generované ilustrace ve stylu loga — viz [DESIGN.md](../specs/DESIGN.md) §7.*

---

## 🥤 Nápoje

*(Záměrně bez kávy, matchy a proteinových nápojů — kávu si zákazník dá vedle ve fitness centru, a kávovar je drahý fixní náklad navíc.)*

| ID | Název | Popis | Cena |
|---|---|---|---|
| **N1** | Voda s citronem | 0,5 l čerstvé vody se dvěma plátky citronu a lístkem máty | **25 Kč** |
| **N2** | Fresh pomerančový džus | 0,3 l čerstvě vymačkaného pomerančového džusu | **55 Kč** |
| **N3** | Čaj | Bylinkový nebo černý, podle dne | **35 Kč** |

---

## 🥣 Sladké snídaně

| ID | Název | Složení | Cena |
|---|---|---|---|
| **S1** | Yogurt Bowl | Smetanový jogurt, domácí granola, mražené i čerstvé sezónní ovoce, kapka medu | **90 Kč** |
| **S2** | Teplá kaše | Rýžová nebo ovesná kaše, javorový sirup, kousky ovoce | **90 Kč** |

---

## 🥪 Slané snídaně

| ID | Název | Složení | Cena |
|---|---|---|---|
| **M1** | Avokádový toast s uzeným lososem | Toast, avokádo, uzený losos, zelenina, olivový olej | **110 Kč** |
| **M2** | Vajíčka s toastem | Míchaná vajíčka / omeleta / volské oko (volba u obsluhy), toast s máslem a pažitkou, zelenina | **90 Kč** |
| **M3** | Vajíčka s avokádem a slaninou | Vajíčka (volitelná úprava), avokádo, toast, slanina, zelenina, olivový olej | **110 Kč** |
| **M4** | Toast Caprese | Toast, bazalkové pesto, mozzarella, rajčata, olivový olej | **90 Kč** |

---

## 🍲 Obědové menu *(podáváno od 10:00 do 13:30)*

| ID | Název | Složení | Cena |
|---|---|---|---|
| **P1** | Denní polévka | Mění se denně, info v baru nebo na Instagramu | **65 Kč** |

---

## Cenová logika

Aby zákazník nemusel řešit složité ceníky, ceny jídel jsou sjednoceny do **dvou hladin**:

* **90 Kč** — základní jídla (4 položky: S1, S2, M2, M4)
* **110 Kč** — jídla s dražší surovinou (2 položky s lososem a slaninou: M1, M3)

Nápoje mají vlastní cenovou logiku (25 / 35 / 55 Kč).
Polévka je samostatně 65 Kč.

---

## Matice alergenů a dietních vlastností

➡️ Vhodnost položek pro diety a přehled obsažených alergenů je v samostatném souboru: **[menu-matrix.md](menu-matrix.md)**.

---

## Reference

* Tone of voice a popisky pro web: [PRD.md](../specs/PRD.md) §11
* Styl ilustrací: [DESIGN.md](../specs/DESIGN.md) §7
* Cenotvorba a marže: [rozpocet_sablona.md](rozpocet_sablona.md)
