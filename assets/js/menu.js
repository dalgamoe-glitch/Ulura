/* ULURA, menu page: render from data, sticky scroll-spy nav, reveals. */
(function () {
  "use strict";
  var doc = document;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var data = window.ULURA_MENU;
  var CUR = (data && data.currency) || "JD";
  doc.documentElement.classList.add("js");

  /* --- year + nav scroll state --- */
  var yr = doc.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
  var nav = doc.getElementById("nav");
  function onScroll() { if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 40); }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (!data) return;

  /* --- helpers --- */
  function esc(s) { return String(s).replace(/[&<>]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]; }); }
  function price(p) { return '<span class="m-price">' + esc(p) + ' <em>' + CUR + "</em></span>"; }

  function itemHTML(it) {
    var right = "";
    if (it.sizes) {
      right = '<span class="m-sizes">' + it.sizes.map(function (z) {
        return '<span class="m-size"><i>' + esc(z.s) + "</i> " + esc(z.p) + "</span>";
      }).join("") + "</span>";
    } else if (it.price) {
      right = price(it.price);
    }
    var opts = "";
    if (it.options) {
      opts = '<ul class="m-opts">' + it.options.map(function (o) {
        var label = esc(o.n) + (o.ar ? ' <span class="ar" dir="rtl" lang="ar">' + esc(o.ar) + "</span>" : "");
        return '<li><span class="m-opt-n">' + label + "</span>" + price(o.p) + "</li>";
      }).join("") + "</ul>";
    }
    return (
      '<li class="m-item" data-reveal>' +
        '<div class="m-item__row">' +
          '<div class="m-item__main">' +
            '<h3 class="m-item__name">' + esc(it.name) + "</h3>" +
            (it.desc ? '<p class="m-item__desc">' + esc(it.desc) + "</p>" : "") +
          "</div>" +
          (right ? '<div class="m-item__price">' + right + "</div>" : "") +
        "</div>" +
        opts +
      "</li>"
    );
  }

  function sectionHTML(cat) {
    var body;
    if (cat.groups) {
      body = cat.groups.map(function (g) {
        return (
          '<div class="m-group">' +
            '<h3 class="m-group__title">' + esc(g.title) + (g.note ? ' <span class="m-group__note">' + esc(g.note) + "</span>" : "") + "</h3>" +
            '<ul class="m-list m-list--compact">' + g.items.map(itemHTML).join("") + "</ul>" +
          "</div>"
        );
      }).join("");
    } else {
      body = '<ul class="m-list">' + cat.items.map(itemHTML).join("") + "</ul>";
    }
    return (
      '<section class="m-section" id="' + esc(cat.id) + '">' +
        '<header class="m-section__head" data-reveal>' +
          (cat.kicker ? '<span class="m-section__kicker">' + esc(cat.kicker) + "</span>" : "") +
          '<h2 class="m-section__title">' + esc(cat.title) + "</h2>" +
          (cat.note ? '<p class="m-section__note">' + esc(cat.note) + "</p>" : "") +
        "</header>" +
        body +
      "</section>"
    );
  }

  /* --- render --- */
  var navWrap = doc.getElementById("menu-nav");
  var main = doc.getElementById("menu-body");
  if (navWrap) {
    navWrap.innerHTML = data.categories.map(function (c) {
      return '<a class="m-pill" href="#' + esc(c.id) + '" data-spy="' + esc(c.id) + '">' + esc(c.title) + "</a>";
    }).join("");
  }
  if (main) main.innerHTML = data.categories.map(sectionHTML).join("");

  /* --- smooth scroll for pills + anchors --- */
  var lenis = null;
  if (!reduce && typeof window.Lenis !== "undefined") {
    lenis = new window.Lenis({ duration: 1.05, smoothWheel: true });
    (function raf(t) { lenis.raf(t); requestAnimationFrame(raf); })();
    if (window.gsap && window.ScrollTrigger) lenis.on("scroll", window.ScrollTrigger.update);
  }
  doc.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (id.length < 2) return;
      var target = doc.querySelector(id);
      if (!target) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(target, { offset: -128 });
      else target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    });
  });

  /* --- scroll-spy: highlight active pill + keep it in view --- */
  var pills = {};
  doc.querySelectorAll(".m-pill").forEach(function (p) { pills[p.getAttribute("data-spy")] = p; });
  var current = null;
  function setActive(id) {
    if (id === current || !pills[id]) return;
    if (current && pills[current]) pills[current].classList.remove("is-active");
    current = id;
    pills[id].classList.add("is-active");
    var p = pills[id];
    if (p.parentElement) {
      var pr = p.getBoundingClientRect(), cr = p.parentElement.getBoundingClientRect();
      if (pr.left < cr.left || pr.right > cr.right) {
        p.parentElement.scrollTo({ left: p.parentElement.scrollLeft + (pr.left - cr.left) - 24, behavior: reduce ? "auto" : "smooth" });
      }
    }
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) setActive(en.target.id); });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
  doc.querySelectorAll(".m-section").forEach(function (s) { io.observe(s); });

  /* --- reveals: robust IntersectionObserver + failsafe --- */
  function reveal(el) { el.classList.add("is-in"); }
  var revealEls = Array.prototype.slice.call(doc.querySelectorAll("[data-reveal]"));
  if (reduce || !("IntersectionObserver" in window)) {
    revealEls.forEach(reveal);
  } else {
    var io2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { reveal(en.target); io2.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.06 });
    revealEls.forEach(function (el) { io2.observe(el); });
    setTimeout(function () {
      revealEls.forEach(function (el) { if (el.getBoundingClientRect().top < window.innerHeight * 1.15) reveal(el); });
    }, 200);
  }
})();
