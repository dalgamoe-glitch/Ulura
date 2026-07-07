/* ULURA — landing page motion.
   Progressive enhancement: without JS the page is fully visible (no html.js
   class). With JS, reveals use IntersectionObserver + a failsafe so a section
   can never stay blank. GSAP powers the hero entrance and parallax only. */
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

  /* --- reveals: robust IntersectionObserver + failsafe -------------- */
  function reveal(el) { el.classList.add("is-in"); }
  var revealEls = Array.prototype.slice.call(doc.querySelectorAll("[data-reveal]"))
    .filter(function (el) { return !el.closest(".hero"); }); // hero handled by GSAP

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

  /* --- hero entrance (GSAP) --- */
  if (hasGSAP && !reduce) {
    var gsap = window.gsap;
    if (window.ScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);

    var htitle = doc.querySelector("[data-hero-title]");
    var tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    if (htitle) {
      htitle.setAttribute("aria-label", htitle.textContent.trim());
      var words = htitle.textContent.trim().split(/\s+/);
      htitle.innerHTML = words.map(function (w) {
        var cls = /intention/i.test(w) ? "accent" : "";
        return '<span class="h-word"><span class="h-word__i ' + cls + '">' + w + "</span></span>";
      }).join(" ");
      gsap.set(htitle.querySelectorAll(".h-word"), { display: "inline-block", overflow: "hidden", verticalAlign: "top" });
      gsap.set(htitle.querySelectorAll(".h-word__i"), { display: "inline-block", yPercent: 120 });
      tl.to(htitle.querySelectorAll(".h-word__i"), { yPercent: 0, duration: 1, stagger: 0.08 }, 0.1);
    }

    tl.from(".hero__eyebrow", { y: 20, opacity: 0, duration: 0.8 }, 0)
      .from(".hero__sub", { y: 20, opacity: 0, duration: 0.8 }, 0.35)
      .from(".hero__cta", { y: 20, opacity: 0, duration: 0.8 }, 0.5)
      .from(".hero__trust", { y: 20, opacity: 0, duration: 0.8 }, 0.62)
      .from("[data-hero-media]", { y: 40, opacity: 0, scale: 0.96, duration: 1.1 }, 0.25)
      .from(".hero__badge", { scale: 0.6, opacity: 0, duration: 0.7, ease: "back.out(1.7)" }, 0.9);

    // Parallax (decorative — images stay visible if this never runs)
    if (window.ScrollTrigger) {
      gsap.to(".hero__frame img", { yPercent: 12, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
      gsap.to(".story__media img", { yPercent: -8, ease: "none", scrollTrigger: { trigger: ".story", start: "top bottom", end: "bottom top", scrub: true } });
      window.addEventListener("load", function () { window.ScrollTrigger.refresh(); });
    }
  }

  /* --- magnetic accent buttons (fine pointers only) --- */
  if (hasGSAP && !reduce && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    doc.querySelectorAll(".btn--accent").forEach(function (btn) {
      btn.addEventListener("pointermove", function (e) {
        var r = btn.getBoundingClientRect();
        window.gsap.to(btn, { x: (e.clientX - (r.left + r.width / 2)) * 0.18, y: (e.clientY - (r.top + r.height / 2)) * 0.28, duration: 0.4, ease: "expo.out" });
      });
      btn.addEventListener("pointerleave", function () {
        window.gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1,0.4)" });
      });
    });
  }
})();
