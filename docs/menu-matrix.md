# Matice diet a alergenů — The Early Bowl

Přehled vhodnosti jednotlivých položek menu pro běžné stravovací režimy a přehled obsažených alergenů. Slouží jako lidsky čitelný souhrn pro rozvahu a pro web (stránka Menu, PRD §5.2).

> 🔗 **Zdroj dat:** strojově čitelným zdrojem pravdy je **[`web/data/menu.yaml`](../web/data/menu.yaml)**. Web čte YAML přímo (D-18, žádný JSON, žádný build). **Tato souhrnná matice se na web nedává** — slouží jen jako interní dokument; na webu jsou jen dietní ikony u položek. Udržuje se ručně podle `menu.yaml` / [menu_sablona.md](menu_sablona.md).

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

## Datová architektura menu

> **Rozhodnuto (D-16 → upraveno D-18):** zdroj pravdy je YAML; web ho čte přímo, **bez JSON a bez buildu**. Detail v [DENIK.md](DENIK.md).

**Cíl:** jeden zdroj pravdy pro menu, aby se při změně menu nezasahovalo do kódu stránek.

- **Zdroj pravdy:** [`web/data/menu.yaml`](../web/data/menu.yaml) — položky + číselníky diet a alergenů + příznaky.
- **Web:** stránka Menu vykreslí karty + **dietní ikony** přímo z YAML (inline blok + malý JS parser, žádný JSON, žádný build) — viz [PRD.md](../specs/PRD.md) §7.3.
- **Tato matice** je interní dokument (na web nejde); udržuje se ručně podle `menu.yaml`.

---

## Reference

- Menu (položky, ceny, popisy): [menu_sablona.md](menu_sablona.md)
- Dietní ikony u položek (na webu): [PRD.md](../specs/PRD.md) §5.2
- Datový model menu (YAML): [PRD.md](../specs/PRD.md) §7.3
