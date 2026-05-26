/* menu-data.js — AUTO-generováno z web/data/menu.yaml (zdroj pravdy).
   Načítá menu bez fetch (funguje i přes file://). Přegeneruj:
   node scripts/build-menu-data.mjs   — NEEDITOVAT RUČNĚ. */
window.MENU_YAML = `
# =============================================================================
# menu.yaml — ZDROJ PRAVDY pro menu The Early Bowl
# =============================================================================
# Tento soubor je jediné místo, kde se menu edituje. Z něj se (plánovaným
# generátorem) vyrobí:
#   • web/data/menu.json   → načítá web (stránka Menu), žádná data natvrdo v HTML
#   • docs/menu-matrix.md  → lidsky čitelná matice diet a alergenů
#
# Konvence příznaků u položek:
#   diet_suitable:        diety, pro které je jídlo VHODNÉ tak, jak je
#   diet_adjustable:      diety, kterým lze vyhovět PO ÚPRAVĚ (rostlinné mléko, …)
#   allergens:            alergeny, které jídlo OBSAHUJE
#   allergens_adjustable: alergeny, které lze na přání VYNECHAT
#   varies: true          vlastnosti se mění denně (denní polévka)
# Hodnoty diet/alergenů musí být klíče z číselníků \`diets\` / \`allergens\` níže.
# =============================================================================

meta:
  name: The Early Bowl
  currency: CZK
  hours: "6:00–13:30"

# --- Číselník diet (id → štítek na webu) ------------------------------------
diets:
  glutenfree: Bez lepku
  lactosefree: Bez laktózy
  vegan: Veganské
  vegetarian: Vegetariánské

# --- Číselník alergenů (id → štítek) ----------------------------------------
allergens:
  gluten: Lepek
  milk: Mléko/laktóza
  eggs: Vejce
  fish: Ryby
  nuts: Ořechy

# --- Kategorie (pořadí = pořadí na stránce) ---------------------------------
categories:
  - id: drinks
    name: Nápoje
    icon: "🥤"
  - id: sweet
    name: Sladké snídaně
    icon: "🥣"
  - id: savory
    name: Slané snídaně
    icon: "🥪"
  - id: lunch
    name: Obědové menu (od 10:00)
    icon: "🍲"

# --- Položky -----------------------------------------------------------------
items:
  # ----- Nápoje -----
  - id: N1
    category: drinks
    name: Voda s citronem
    description: 0,5 l čerstvé vody se dvěma plátky citronu a lístkem máty.
    price: 25
    image: /images/menu/n1-voda.png
    diet_suitable: [glutenfree, lactosefree, vegan, vegetarian]
    allergens: []

  - id: N2
    category: drinks
    name: Fresh pomerančový džus
    description: 0,3 l čerstvě vymačkaného pomerančového džusu.
    price: 55
    image: /images/menu/n2-dzus.png
    diet_suitable: [glutenfree, lactosefree, vegan, vegetarian]
    allergens: []

  - id: N3
    category: drinks
    name: Čaj
    description: Bylinkový nebo černý, podle dne.
    price: 35
    image: /images/menu/n3-caj.png
    diet_suitable: [glutenfree, lactosefree, vegan, vegetarian]
    allergens: []

  # ----- Sladké snídaně -----
  - id: S1
    category: sweet
    name: Yogurt Bowl
    description: Smetanový jogurt, domácí granola, čerstvé sezónní ovoce a kapka medu.
    price: 90
    image: /images/menu/s1-yogurt-bowl.png
    diet_suitable: [vegetarian]
    diet_adjustable: [glutenfree]      # bezlepková granola po domluvě
    allergens: [gluten, milk, nuts]

  - id: S2
    category: sweet
    name: Teplá kaše
    description: Rýžová nebo ovesná kaše, javorový sirup, kousky ovoce.
    price: 90
    image: /images/menu/s2-kase.png
    diet_suitable: [vegetarian]
    diet_adjustable: [glutenfree, lactosefree, vegan]   # rostlinné mléko, bez medu
    allergens: []
    allergens_adjustable: [gluten, milk, nuts]

  # ----- Slané snídaně -----
  - id: M1
    category: savory
    name: Avokádový toast s uzeným lososem
    description: Toast, avokádo, uzený losos, zelenina, olivový olej.
    price: 110
    image: /images/menu/m1-avokado-losos.png
    diet_suitable: [lactosefree]
    allergens: [gluten, fish]

  - id: M2
    category: savory
    name: Vajíčka s toastem
    description: Míchaná vajíčka / omeleta / volské oko (volba u obsluhy), toast s máslem a pažitkou, zelenina.
    price: 90
    image: /images/menu/m2-vajicka-toast.png
    diet_suitable: [vegetarian]
    allergens: [gluten, milk, eggs]

  - id: M3
    category: savory
    name: Vajíčka s avokádem a slaninou
    description: Vajíčka (volitelná úprava), avokádo, toast, slanina, zelenina, olivový olej.
    price: 110
    image: /images/menu/m3-vajicka-slanina.png
    diet_suitable: []
    allergens: [gluten, milk, eggs]

  - id: M4
    category: savory
    name: Toast Caprese
    description: Toast, bazalkové pesto, mozzarella, rajčata, olivový olej.
    price: 90
    image: /images/menu/m4-caprese.png
    diet_suitable: [vegetarian]
    allergens: [gluten, milk]

  # ----- Obědové menu -----
  - id: P1
    category: lunch
    name: Denní polévka
    description: Mění se denně, info v baru nebo na Instagramu.
    price: 65
    image: /images/menu/p1-polevka.png
    varies: true       # diety i alergeny závisí na polévce dne
`;
