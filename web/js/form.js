/* form.js — client-side validace kontaktního formuláře (PRD §5.2)
   Backend: Formspree (action na <form>). Honeypot pole proti spamu. */
(() => {
  const form = document.querySelector('#contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    let ok = true;

    // Honeypot — když je vyplněn, jde o bota: tiše zahodit
    const honey = form.querySelector('[name="_gotcha"]');
    if (honey && honey.value) { e.preventDefault(); return; }

    form.querySelectorAll('[required]').forEach((field) => {
      const wrap = field.closest('.field');
      const valid = field.checkValidity();
      wrap?.classList.toggle('field--invalid', !valid);
      if (!valid) ok = false;
    });

    if (!ok) e.preventDefault();
    // TODO: po úspěchu zobrazit success zprávu (PRD §11)
  });
})();
