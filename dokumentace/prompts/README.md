# Prompty pro generování obrázků (ChatGPT Images 2.0)

Tato složka obsahuje **jeden markdown soubor na každý obrázek/vizualizaci**, který web a brand potřebuje. Prompty jsou psané pro **[ChatGPT Images 2.0 / OpenAI Images](https://openai.com/cs-CZ/index/introducing-chatgpt-images-2-0/)**.

Vizuální pravidla vychází z [DESIGN.md](../../specs/DESIGN.md) §7. Cíl: všechny obrázky vypadají jako jedna rodina v duchu loga `assets/Theearlybowlmiska.png`.

## Jak generovat (doporučený postup)

1. Otevři ChatGPT s modelem **Images 2.0**.
2. **Přilož referenční obrázek** `assets/Theearlybowlmiska.png` (logo) do téže zprávy jako prompt — každý prompt začíná instrukcí „match the attached logo style".
3. Zkopíruj **celý prompt** z příslušného souboru (je samostatný — obsahuje stylový blok i zadání).
4. Nastav **rozměr a pozadí** podle hlavičky „Výstup" v daném souboru (čtverec 1024×1024 pro jídla a ikony, landscape pro hero/OG; transparentní pozadí kde je uvedeno).
5. Vygeneruj 3–4 varianty, vyber nejbližší stylu loga. Při nesouladu uprav **jen zadání subjektu**, nikdy stylový blok (drží konzistenci celé sady).
6. Ulož pod cílovým názvem (viz „Cílový soubor" v hlavičce) do `docs/images/...`.
7. Po dokončení sady projdi všechny vedle sebe a ověř jednotnou tloušťku kontur a sytost barev.

## Tipy ke konzistenci

- **Reference:** ideálně přilož i 1–2 už hotové obrázky z této sady, ať model drží linku a barvy.
- **Žádný text:** ilustrace jídel nesmí obsahovat písmena ani logo.
- **Transparentní pozadí:** u jídel a ikon žádej „transparent background" (Images 2.0 to umí) — snadné vložení na smetanové pozadí webu.
- **Diakritika:** v promptech nikde negenerujeme český text v obrázku (text na webu řeší HTML).

## Seznam promptů

### Menu (10 položek → `docs/images/menu/`)
| ID | Soubor promptu | Cílový obrázek |
|---|---|---|
| N1 | [n1-voda-s-citronem.md](n1-voda-s-citronem.md) | `menu/n1-voda.png` |
| N2 | [n2-fresh-dzus.md](n2-fresh-dzus.md) | `menu/n2-dzus.png` |
| N3 | [n3-caj.md](n3-caj.md) | `menu/n3-caj.png` |
| S1 | [s1-yogurt-bowl.md](s1-yogurt-bowl.md) | `menu/s1-yogurt-bowl.png` |
| S2 | [s2-tepla-kase.md](s2-tepla-kase.md) | `menu/s2-kase.png` |
| M1 | [m1-avokadovy-toast-losos.md](m1-avokadovy-toast-losos.md) | `menu/m1-avokado-losos.png` |
| M2 | [m2-vajicka-toast.md](m2-vajicka-toast.md) | `menu/m2-vajicka-toast.png` |
| M3 | [m3-vajicka-avokado-slanina.md](m3-vajicka-avokado-slanina.md) | `menu/m3-vajicka-slanina.png` |
| M4 | [m4-toast-caprese.md](m4-toast-caprese.md) | `menu/m4-caprese.png` |
| P1 | [p1-denni-polevka.md](p1-denni-polevka.md) | `menu/p1-polevka.png` |

### Brand & web
| Soubor promptu | Cílový obrázek |
|---|---|
| [hero.md](hero.md) | `images/hero.png` |
| [og-image.md](og-image.md) | `images/og.png` |
| [404.md](404.md) | `images/404.png` |
| [background-pattern.md](background-pattern.md) | `images/bg-pattern.png` |
| [favicon.md](favicon.md) | `favicon.ico`, `apple-touch-icon.png` |
| [logo-varianty.md](logo-varianty.md) | `images/logo.png`, `images/logo-horizontal.png` |

### Video (sociální sítě → `docs/images/video/`)
| Soubor promptu | Cílový výstup | Formát |
|---|---|---|
| [video-yogurt-bowl.md](video-yogurt-bowl.md) | `video/yogurt-bowl-prep.mp4` | 9:16 short (TikTok / IG Story) |

### Dietní ikony (→ `docs/images/icons/`)
| Soubor promptu | Cílový obrázek |
|---|---|
| [icon-vegan.md](icon-vegan.md) | `icons/diet-vegan.png` |
| [icon-bez-lepku.md](icon-bez-lepku.md) | `icons/diet-bez-lepku.png` |
| [icon-bez-laktozy.md](icon-bez-laktozy.md) | `icons/diet-bez-laktozy.png` |
| [icon-protein.md](icon-protein.md) | `icons/diet-protein.png` |
