/* ULURA landing page motion.
   Progressive enhancement: without JS the page is fully visible (no html.js
   class). With JS, motion is kept smooth but minimal and scroll-driven:
   Lenis smooth scroll, gentle scroll reveals (IntersectionObserver + failsafe),
   a calm hero intro, and a subtle parallax. Full reduced-motion fallback. */
(function () {
  "use strict";

  var doc = document;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasGSAP = typeof window.gsap !== "undefined";

  doc.documentElement.classList.add("js");

  /* --- current year --- */
  var yr = doc.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  /* --- nav scrolled state --- */
  var nav = doc.getElementById("nav");
  function onScroll() { if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 40); }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* --- smooth scroll (Lenis) --- */
  var lenis = null;
  if (!reduce && typeof window.Lenis !== "undefined") {
    lenis = new window.Lenis({ duration: 1.1, smoothWheel: true });
    (function raf(t) { lenis.raf(t); requestAnimationFrame(raf); })();
    if (hasGSAP && window.ScrollTrigger) lenis.on("scroll", window.ScrollTrigger.update);
  }

  /* --- anchor links route through Lenis when available --- */
  doc.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (id.length < 2) return;
      var target = doc.querySelector(id);
      if (!target) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(target, { offset: -70 });
      else target.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    });
  });

  /* --- reveals: robust IntersectionObserver + failsafe (primary motion) -- */
  function reveal(el) { el.classList.add("is-in"); }
  var revealEls = Array.prototype.slice.call(doc.querySelectorAll("[data-reveal]"))
    .filter(function (el) { return !el.closest(".hero"); }); // hero handled below

  if (reduce || !("IntersectionObserver" in window)) {
    revealEls.forEach(reveal);
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { reveal(en.target); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealEls.forEach(function (el) { io.observe(el); });
    // Failsafe: reveal anything at/above the fold shortly after load, and
    // guarantee nothing is stuck hidden if IO callbacks never run.
    setTimeout(function () {
      revealEls.forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight * 1.15) reveal(el);
      });
    }, 200);
    window.addEventListener("load", function () {
      setTimeout(function () {
        revealEls.forEach(function (el) { if (!el.classList.contains("is-in") && el.getBoundingClientRect().top < window.innerHeight) reveal(el); });
      }, 400);
    });
  }

  /* --- hero intro: one calm fade + rise, no per-word or overshoot tricks -- */
  if (hasGSAP && !reduce) {
    var gsap = window.gsap;
    if (window.ScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);

    var tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.9 } });
    tl.from(".hero__eyebrow", { y: 18, opacity: 0 }, 0)
      .from("[data-hero-title]", { y: 24, opacity: 0 }, 0.08)
      .from(".hero__sub", { y: 18, opacity: 0 }, 0.2)
      .from(".hero__cta", { y: 16, opacity: 0 }, 0.32)
      .from(".hero__trust", { y: 16, opacity: 0 }, 0.42)
      .from("[data-hero-media]", { y: 28, opacity: 0, duration: 1.1 }, 0.15)
      .from(".hero__badge", { y: 14, opacity: 0, duration: 0.7 }, 0.7);

    // Subtle scroll-driven parallax (decorative; images stay if it never runs).
    if (window.ScrollTrigger) {
      gsap.to(".hero__frame img", { yPercent: 8, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
      gsap.to(".story__media img", { yPercent: -6, ease: "none", scrollTrigger: { trigger: ".story", start: "top bottom", end: "bottom top", scrub: true } });
      window.addEventListener("load", function () { window.ScrollTrigger.refresh(); });
    }
  }

  /* --- reviews marquee: duplicate the cards so the loop is seamless.
     Without JS the single set still renders and scrolls; the CSS only
     animates once "is-cloned" is present, so it never scrolls to blank. --- */
  (function () {
    var marq = doc.querySelector("[data-rev-marquee]");
    var track = marq && marq.querySelector("[data-rev-track]");
    if (!marq || !track) return;
    Array.prototype.slice.call(track.children).forEach(function (card) {
      var dup = card.cloneNode(true);
      dup.setAttribute("aria-hidden", "true");
      track.appendChild(dup);
    });
    marq.classList.add("is-cloned");
  })();
})();
