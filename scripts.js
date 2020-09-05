document.addEventListener('DOMContentLoaded', function() {
  const toggles = document.querySelectorAll('button.faq-title');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const faq = toggle.parentNode;
      faq.classList.toggle('active');
    });
  });
});