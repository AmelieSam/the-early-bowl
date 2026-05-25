# Matice diet a alergenů — The Early Bowl

Přehled vhodnosti jednotlivých položek menu pro běžné stravovací režimy a přehled obsažených alergenů. Slouží jako lidsky čitelný souhrn pro rozvahu a pro web (stránka Menu, PRD §5.2).

> 🔗 **Zdroj dat:** strojově čitelným zdrojem pravdy je **[`web/data/menu.yaml`](../web/data/menu.yaml)** (rozhodnutí D-16). Z něj se plánovaným generátorem vyrobí jak data pro web (`menu.json`), tak tato matice. Do zprovoznění generátoru je tato matice udržovaná ručně podle [menu_sablona.md](menu_sablona.md).

**Legenda:** ✅ vyhovuje / obsahuje · — nevyhovuje / neobsahuje · `*` lze upravit po domluvě · `**` ve veganské variantě · `✦` závisí na polévce dne

---

## A. Vhodnost pro diety

| ID | Položka | Bez lepku | Bez laktózy | Veganské | Vegetariánské |
|---|---|:---:|:---:|:---:|:---:|
| N1 | Voda s citronem | ✅ | ✅ | ✅ | ✅ |
| N2 | Fresh pomerančový džus | ✅ | ✅ | ✅ | ✅ |
| N3 | Čaj | ✅ | ✅ | ✅ | ✅ |
| S1 | Yogurt Bowl | `*` | — | — | ✅ |
| S2 | Teplá kaše | `*` | `*` | `**` | ✅ |
| M1 | Avokádový toast s uzeným lososem | — | ✅ | — | — |
| M2 | Vajíčka s toastem | — | — | — | ✅ |
| M3 | Vajíčka s avokádem a slaninou | — | — | — | — |
| M4 | Toast Caprese | — | — | — | ✅ |
| P1 | Denní polévka | `✦` | `✦` | `✦` | `✦` |

---

## B. Obsažené alergeny

| ID | Položka | Lepek | Mléko/laktóza | Vejce | Ryby | Ořechy |
|---|---|:---:|:---:|:---:|:---:|:---:|
| N1 | Voda s citronem | — | — | — | — | — |
| N2 | Fresh pomerančový džus | — | — | — | — | — |
| N3 | Čaj | — | — | — | — | — |
| S1 | Yogurt Bowl | ✅ | ✅ | — | — | ✅ |
| S2 | Teplá kaše | `*` | `*` | — | — | `*` |
| M1 | Avokádový toast s uzeným lososem | ✅ | — | — | ✅ | — |
| M2 | Vajíčka s toastem | ✅ | ✅ | ✅ | — | — |
| M3 | Vajíčka s avokádem a slaninou | ✅ | ✅ | ✅ | — | — |
| M4 | Toast Caprese | ✅ | ✅ | — | — | — |
| P1 | Denní polévka | `✦` | `✦` | `✦` | `✦` | `✦` |

---

## Poznámky

- `*` **S1 / S2 — upravitelné:** granola obsahuje lepek a ořechy; jogurt/mléko lze nahradit rostlinnou variantou (pak bez laktózy, S2 i veganské bez medu).
- `✦` **P1 Denní polévka** se mění denně — konkrétní alergeny a vhodnost se hlásí v baru a na Instagramu u daného menu.
- Hodnoty v sloupcích **„Vhodnost pro diety"** vyjadřují *vhodnost* (lze sníst v dané dietě), zatímco **„Obsažené alergeny"** vyjadřují *přítomnost* dané látky.

---

## Návrh datové architektury menu

> **Rozhodnuto (D-16):** varianta YAML + generátor. Detail v [DENIK.md](DENIK.md).

**Cíl:** jeden zdroj pravdy pro menu, ze kterého se plní web i tato matice, aby se při změně menu nezasahovalo do kódu stránek.

- **Zdroj pravdy:** [`web/data/menu.yaml`](../web/data/menu.yaml) — položky + číselníky diet a alergenů + příznaky u každé položky.
- **Generátor (plánovaný, PLAN Fáze C):** `menu.yaml` → `web/data/menu.json` (web) + `docs/menu-matrix.md` (tato matice).
- **Web:** stránka Menu vykreslí karty a allergen matrix z `menu.json` (JS šablona), žádná data natvrdo v HTML.
- **Do zprovoznění generátoru** je tato matice udržovaná ručně podle [menu_sablona.md](menu_sablona.md).

---

## Reference

- Menu (položky, ceny, popisy): [menu_sablona.md](menu_sablona.md)
- Funkční požadavek na allergen matrix: [PRD.md](../specs/PRD.md) §5.2
- Datový model menu (JSON/YAML): [PRD.md](../specs/PRD.md) §7.3
