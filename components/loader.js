/* ── Lenis smooth scroll ── */

(function () {
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/lenis@1.1.14/dist/lenis.min.js';
  script.onload = function () {
    document.documentElement.style.scrollBehavior = 'auto';
    var lenis = new Lenis({ lerp: 0.15 });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  };
  document.head.appendChild(script);
})();


/* ── Fetched components ── */

(function () {
  var navEl = document.getElementById('nav-placeholder');
  if (navEl) {
    fetch('./components/nav.html')
      .then(function (r) { return r.text(); })
      .then(function (html) { navEl.outerHTML = html; })
      .catch(function (err) { console.error('Nav load failed:', err); });
  }

  var footerEl = document.getElementById('footer-placeholder');
  if (footerEl) {
    fetch('./components/footer.html')
      .then(function (r) { return r.text(); })
      .then(function (html) { footerEl.outerHTML = html; })
      .catch(function (err) { console.error('Footer load failed:', err); });
  }
})();
