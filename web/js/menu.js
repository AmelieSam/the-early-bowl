/* menu.js — vykreslí menu z window.MENU_YAML (viz menu-data.js + yaml-mini.js).
   - #menu-root      → celé menu po kategoriích (stránka Menu)
   - #featured-root  → vybrané položky (homepage)
   Data se needitují tady, ale v web/data/menu.yaml (PRD §7.3). */
(function () {
  if (typeof parseYAML !== 'function' || typeof window.MENU_YAML !== 'string') return;
  var data = parseYAML(window.MENU_YAML);
  var diets = data.diets || {};

  // diet id → ikona (PNG) nebo emoji fallback (vegetarian nemá vlastní ikonu)
  var DIET_ICON = {
    vegan: 'images/icons/diet-vegan.png',
    glutenfree: 'images/icons/diet-bez-lepku.png',
    lactosefree: 'images/icons/diet-bez-laktozy.png'
  };
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function rel(p) { return String(p || '').replace(/^\//, ''); }

  // Vegetariánská ikona — inline SVG v brand stylu (nemá PNG); stejná velikost jako ostatní.
  function vegSVG(label, cls) {
    return '<svg class="' + cls + '" viewBox="0 0 40 40" width="34" height="34" role="img" aria-label="' + esc(label) + '">' +
      '<title>' + esc(label) + '</title>' +
      '<circle cx="20" cy="20" r="17.5" fill="#7FA86B" stroke="#7A5843" stroke-width="2.5"/>' +
      '<path d="M20 11 C27 15 27 25 20 30 C13 25 13 15 20 11 Z" fill="#fff"/>' +
      '<path d="M20 13.5 L20 27.5" stroke="#7FA86B" stroke-width="1.7" stroke-linecap="round"/>' +
      '</svg>';
  }

  function dietChip(id, adjustable) {
    var label = (diets[id] || id) + (adjustable ? ' (po úpravě)' : '');
    var cls = 'diet-icon' + (adjustable ? ' diet-icon--adj' : '');
    if (DIET_ICON[id]) {
      return '<img class="' + cls + '" src="' + DIET_ICON[id] + '" alt="" title="' + esc(label) + '" loading="lazy" width="34" height="34">';
    }
    if (id === 'vegetarian') return vegSVG(label, cls);
    return '<span class="' + cls + ' diet-icon--veg" title="' + esc(label) + '" role="img" aria-label="' + esc(label) + '">•</span>';
  }

  function dietRow(item) {
    var out = [];
    (item.diet_suitable || []).forEach(function (d) { out.push(dietChip(d, false)); });
    (item.diet_adjustable || []).forEach(function (d) { out.push(dietChip(d, true)); });
    if (item.varies) return '<p class="menu-card__note">Mění se denně — alergeny a dieta dle polévky dne.</p>';
    if (!out.length) return '';
    return '<div class="menu-card__diets" aria-label="Vhodné pro diety">' + out.join('') + '</div>';
  }

  function picture(img, alt, cls) {
    var png = rel(img);
    var webp = png.replace(/\.png$/, '.webp');
    return '<picture><source srcset="' + webp + '" type="image/webp">' +
      '<img class="' + cls + '" src="' + png + '" alt="' + esc(alt) + '" loading="lazy" width="220" height="220"></picture>';
  }

  function card(item) {
    return '' +
      '<article class="menu-card card" id="' + esc(item.id) + '">' +
        '<div class="menu-card__img">' + picture(item.image, item.name, 'menu-card__photo') + '</div>' +
        '<div class="menu-card__body">' +
          '<div class="menu-card__head">' +
            '<button class="id-badge copy-id" type="button" data-id="' + esc(item.id) + '" title="Klikni a zkopíruj ID" aria-label="Zkopírovat ID ' + esc(item.id) + '">' + esc(item.id) + '</button>' +
            '<span class="menu-card__price">' + esc(item.price) + ' Kč</span>' +
          '</div>' +
          '<h3 class="menu-card__title">' + esc(item.name) + '</h3>' +
          '<p class="menu-card__desc">' + esc(item.description || '') + '</p>' +
          dietRow(item) +
        '</div>' +
      '</article>';
  }

  // --- Stránka Menu: po kategoriích ---
  var menuRoot = document.getElementById('menu-root');
  if (menuRoot) {
    var html = '';
    (data.categories || []).forEach(function (cat) {
      var items = (data.items || []).filter(function (it) { return it.category === cat.id; });
      if (!items.length) return;
      html += '<section class="menu-cat">' +
        '<h2 class="menu-cat__title">' + (cat.icon ? cat.icon + ' ' : '') + esc(cat.name) + '</h2>' +
        '<div class="menu-grid">' + items.map(card).join('') + '</div>' +
      '</section>';
    });
    menuRoot.innerHTML = html;
  }

  // --- Homepage: vybrané položky ---
  var featRoot = document.getElementById('featured-root');
  if (featRoot) {
    var pick = ['S1', 'M1', 'M3', 'N2'];
    var byId = {};
    (data.items || []).forEach(function (it) { byId[it.id] = it; });
    featRoot.innerHTML = pick.map(function (id) {
      var it = byId[id];
      if (!it) return '';
      return '<a class="feature card" href="menu.html#' + esc(it.id) + '">' +
        '<div class="feature__img">' + picture(it.image, it.name, 'feature__photo') + '</div>' +
        '<div class="feature__meta"><span class="feature__name">' + esc(it.name) + '</span>' +
        '<span class="feature__price">' + esc(it.price) + ' Kč</span></div>' +
      '</a>';
    }).join('');
  }
})();
