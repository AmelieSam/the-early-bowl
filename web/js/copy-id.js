/* copy-id.js — kopírování ID položky do schránky (PRD §5.2).
   Event delegation → funguje i pro karty vykreslené dynamicky (menu.js).
   Použití: <button class="copy-id" data-id="S1">Kopírovat ID</button> */
(function () {
  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('.copy-id');
    if (!btn) return;
    var id = btn.dataset.id;
    if (!id) return;

    function done() {
      if (btn.dataset.label === undefined) btn.dataset.label = btn.textContent;
      var orig = btn.dataset.label;
      btn.classList.add('is-copied');
      btn.textContent = btn.classList.contains('id-badge') ? '✓' : 'Zkopírováno ✓';
      setTimeout(function () { btn.textContent = orig; btn.classList.remove('is-copied'); }, 1300);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(id).then(done).catch(fallback);
    } else {
      fallback();
    }
    function fallback() {
      var ta = document.createElement('textarea');
      ta.value = id; ta.style.position = 'fixed'; ta.style.left = '-9999px';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); done(); } catch (err) { /* noop */ }
      document.body.removeChild(ta);
    }
  });
})();
