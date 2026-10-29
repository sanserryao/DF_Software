/* DF Software — comportamiento compartido: header, menú móvil y scroll-reveal. */
(function () {
  // Header flotante: más opaco y con sombra al hacer scroll.
  var header = document.getElementById('siteHeader');
  if (header) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Menú móvil.
  var btn = document.getElementById('menuBtn');
  var menu = document.getElementById('mobileMenu');
  if (btn && menu) {
    var icon = btn.querySelector('.material-symbols-outlined');
    var setOpen = function (open) {
      menu.classList.toggle('hidden', !open);
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      if (icon) icon.textContent = open ? 'close' : 'menu';
    };
    btn.addEventListener('click', function () { setOpen(menu.classList.contains('hidden')); });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setOpen(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !menu.classList.contains('hidden')) { setOpen(false); btn.focus(); }
    });
    document.addEventListener('click', function (e) {
      if (!menu.classList.contains('hidden') && !menu.contains(e.target) && !btn.contains(e.target)) setOpen(false);
    });
    window.matchMedia('(min-width: 1024px)').addEventListener('change', function (e) { if (e.matches) setOpen(false); });
  }

  // Scroll-reveal: fade + translateY al entrar en viewport, una sola vez,
  // con stagger opcional vía data-reveal-delay (ms).
  var els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('is-revealed'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      var delay = parseInt(el.dataset.revealDelay || '0', 10);
      setTimeout(function () { el.classList.add('is-revealed'); }, delay);
      io.unobserve(el);
    });
  }, { threshold: 0.12 });
  els.forEach(function (el) { io.observe(el); });
})();
