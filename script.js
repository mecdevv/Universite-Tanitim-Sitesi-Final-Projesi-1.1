document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.nav-toggle');
  
    toggles.forEach((btn) => {
      btn.addEventListener('click', () => {
        const header = btn.closest('header');
        if (!header) return;
        header.classList.toggle('nav-open');
      });
    });
  });