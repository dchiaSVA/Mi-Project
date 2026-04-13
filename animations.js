/* ── Portfolio animations ────────────────────────────────────────────────────
 *
 * Philosophy: animate structure and key moments, not everything.
 * Body copy, section labels, and supporting text are not animated —
 * when everything moves nothing feels special.
 *
 * What gets animated and why:
 *   Hero           — opening sequence, sets the tone
 *   Hero image     — first visual anchor
 *   Overview       — the brief, lands as one unit
 *   Pull quote     — editorial statement, deserves placement
 *   Problem band   — the tension, should feel like it arrives
 *   Key stats      — the data is the highlight
 *   Core insights  — the "aha" moments
 *   Solution       — the reveal
 *   Takeaways      — the reflection
 *
 * What is NOT animated:
 *   Section labels, headings, body copy, methodology text,
 *   competitive analysis steps, most card grids, supporting text —
 *   these just exist, which makes the animated moments feel earned.
 *
 * Case study pages  → GSAP + ScrollTrigger
 * Homepage          → GSAP + IntersectionObserver (no ScrollTrigger,
 *                     avoids Lenis conflict)
 * ─────────────────────────────────────────────────────────────────────────── */

(function () {
  'use strict';

  if (typeof gsap === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var EX = 'cubic-bezier(0, 0, 0, 1)';
  var PR = 'cubic-bezier(0.22, 1, 0.36, 1)';

  function q(sel)  { return document.querySelector(sel); }
  function qa(sel) { return Array.from(document.querySelectorAll(sel)); }

  var isHomepage  = !!q('.hero-name');
  var isCaseStudy = !!q('.hero__title');

  var rmStyle = document.createElement('style');
  rmStyle.textContent =
    '@media (prefers-reduced-motion: reduce) {' +
      '* { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }' +
    '}';
  document.head.appendChild(rmStyle);

  // ═══════════════════════════════════════════════════════════════════════════
  // HOMEPAGE — IntersectionObserver, no ScrollTrigger
  // ═══════════════════════════════════════════════════════════════════════════

  if (isHomepage) {

    var IO_OPTS = { threshold: 0.08, rootMargin: '0px 0px -8% 0px' };

    function ioFadeUp(el) {
      if (!el) return;
      gsap.set(el, { opacity: 0, y: 20 });
      var io = new IntersectionObserver(function (entries) {
        if (!entries[0].isIntersecting) return;
        gsap.to(el, { opacity: 1, y: 0, duration: 0.8, ease: EX });
        io.disconnect();
      }, IO_OPTS);
      io.observe(el);
    }

    function ioStagger(els, opts) {
      if (!els || !els.length) return;
      opts = opts || {};
      var p   = !!opts.productive;
      var gap = opts.stagger !== undefined ? opts.stagger : (p ? 0.1 : 0.12);
      gsap.set(els, { opacity: 0, y: 20 });
      var fired = false;
      var io = new IntersectionObserver(function (entries) {
        if (!entries[0].isIntersecting || fired) return;
        fired = true;
        gsap.to(els, { opacity: 1, y: 0, duration: p ? 0.6 : 0.8, ease: p ? PR : EX, stagger: gap });
        io.disconnect();
      }, IO_OPTS);
      io.observe(els[0]);
    }

    // Case study cards — Productive stagger
    ioStagger(qa('.card'), { productive: true, stagger: 0.1 });

    // About Me — Expressive, whole section as one
    ioFadeUp(q('.about-section'));

    // Experience rows — Productive stagger
    ioStagger(qa('.exp-row'), { productive: true });

    return;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // CASE STUDY PAGES — GSAP + ScrollTrigger
  // ═══════════════════════════════════════════════════════════════════════════

  if (typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  function st(trigger) {
    return { trigger: trigger, start: 'top 88%', once: true };
  }

  function fadeUp(el, opts) {
    if (!el) return;
    opts = opts || {};
    var p = !!opts.productive;
    gsap.fromTo(el,
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0,
        duration: p ? 0.6 : 0.8,
        ease: p ? PR : EX,
        delay: opts.delay || 0,
        scrollTrigger: opts.noScroll ? null : st(el)
      }
    );
  }

  function fadeIn(el) {
    if (!el) return;
    gsap.fromTo(el,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: EX, scrollTrigger: st(el) }
    );
  }

  function stag(els, opts) {
    if (!els || !els.length) return;
    opts = opts || {};
    var p   = !!opts.productive;
    var gap = opts.stagger !== undefined ? opts.stagger : (p ? 0.1 : 0.12);
    gsap.fromTo(els,
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0,
        duration: p ? 0.6 : 0.8,
        ease: p ? PR : EX,
        stagger: gap,
        scrollTrigger: st(els[0])
      }
    );
  }

  // ── Hero — opening sequence on load ───────────────────────────────────────
  // Title → subtitle → meta as a staggered reveal after the page-entry fade.
  // Hero image fades in on scroll (it's usually below the fold).

  if (isCaseStudy) {
    fadeUp(q('.hero__title'),    { noScroll: true, delay: 0.45 });
    fadeUp(q('.hero__subtitle'), { noScroll: true, delay: 0.60 });
    fadeUp(q('.hero__meta'),     { noScroll: true, delay: 0.75 });
    fadeIn(q('.hero__image'));
  }

  // ── Overview — lands as a single unit ────────────────────────────────────
  // The brief should feel placed, not assembled piece by piece.

  var overview = q('.overview');
  if (overview) fadeUp(overview);

  // ── Pull quote — editorial statement ─────────────────────────────────────
  // Isolated, surrounded by space — it earns its own entrance.

  fadeUp(q('.pull-quote-band__text'));

  // ── Problem band — the tension ────────────────────────────────────────────
  // The whole band arrives as one so the problem lands with weight.

  var problemBand = q('.problem-band');
  if (problemBand) fadeUp(problemBand);

  // ── Key stats — the data ──────────────────────────────────────────────────
  // Numbers are highlights. Stagger them so each one registers.

  qa('.context__stats').forEach(function (block) {
    stag(Array.from(block.querySelectorAll('.context__stat')), { productive: true });
  });

  qa('.ed-stats').forEach(function (block) {
    stag(Array.from(block.querySelectorAll('.ed-stat')), { productive: true });
  });

  fadeUp(q('.ed-hero-stat'));

  stag(qa('.ck-stat-item'), { productive: true });

  // ── Pull quotes inline — editorial callouts ───────────────────────────────

  qa('.ed-pull-quote').forEach(function (el) { fadeUp(el); });

  // ── Core insight — the pivot moment ──────────────────────────────────────

  fadeUp(q('.findings__core-insight'));

  // ── Synthesis insights — the "aha" moments ────────────────────────────────
  // These are conclusions. They should feel like they arrive.

  fadeUp(q('.synthesis__insight-1'));
  fadeUp(q('.synthesis__insight-2'));

  // ── Key outcome images — visual anchors ───────────────────────────────────
  // Hero image already handled above. Wireframes and outcomes get fade-in
  // (opacity only — no transform on images per spec).

  fadeIn(q('.hero__image'));

  qa('.ed-ideation__image, .ed-ideation__image--tall').forEach(fadeIn);

  // ── GreenThumb pamphlet ───────────────────────────────────────────────────
  // gt-fade elements are hidden by CSS (opacity:0) and revealed via gt-visible.
  // Trigger the whole set at once when the section enters — CSS handles the
  // stagger delays (gt-d1 → gt-d4) so nothing extra needed here.

  var gtWrap = q('.gt-wrap');
  if (gtWrap) {
    ScrollTrigger.create({
      trigger: gtWrap,
      start: 'top 88%',
      once: true,
      onEnter: function () {
        qa('.gt-fade').forEach(function (el) { el.classList.add('gt-visible'); });
      }
    });
  }

  // Spine draws down after the content appears.

  var spineLine = q('.gt-spine-line');
  if (spineLine) {
    var spineParent = spineLine.parentElement || spineLine;
    gsap.fromTo(spineLine,
      { height: '0%' },
      { height: '100%', duration: 1.0, ease: EX, scrollTrigger: st(spineParent) }
    );
    var dot1 = q('.gt-dot-d1');
    var dot2 = q('.gt-dot-d2');
    if (dot1) gsap.fromTo(dot1, { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.4, ease: PR, delay: 0.4, scrollTrigger: st(spineParent) });
    if (dot2) gsap.fromTo(dot2, { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.4, ease: PR, delay: 0.6, scrollTrigger: st(spineParent) });
  }

  // ── Solution section ──────────────────────────────────────────────────────
  // The reveal. Cooking and Edily feature concepts land as a staggered set.

  qa('.ck-di-features').forEach(function (block) {
    stag(Array.from(block.querySelectorAll('.ed-card')), { productive: true, stagger: 0.12 });
  });

  stag(qa('.ck-frame-card'), { productive: true });

  // ── Takeaways — the reflection ────────────────────────────────────────────
  // Each takeaway item arrives in sequence — it's a closing beat.

  qa('.ck-themes').forEach(function (block) {
    stag(Array.from(block.querySelectorAll('.ck-theme')), { stagger: 0.15 });
  });

  fadeUp(q('.next-steps__heading'));

}());
