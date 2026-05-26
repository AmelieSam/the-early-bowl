/* copy-id.js — kopírování ID položky do schránky (PRD §5.2)
   Použití v HTML: <button class="copy-id" data-id="S1">Kopírovat ID</button> */
(() => {
  document.querySelectorAll('.copy-id').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.id;
      if (!id) return;
      try {
        await navigator.clipboard.writeText(id);
        const orig = btn.textContent;
        btn.textContent = 'Zkopírováno ✓';
        setTimeout(() => { btn.textContent = orig; }, 1500);
      } catch {
        // TODO: fallback pro prohlížeče bez Clipboard API
      }
    });
  });
})();
