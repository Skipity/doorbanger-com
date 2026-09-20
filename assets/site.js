// The only scripted interaction: close native mobile navigation after use.
document.querySelectorAll('.mobile-menu').forEach((menu) => {
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => { menu.open = false; });
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.open) {
      menu.open = false;
      menu.querySelector('summary').focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target)) menu.open = false;
  });
});
