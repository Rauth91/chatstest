/* ============================================================
   CHATSWORTH PLANTATION — main.js
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {
  /* ── NAV SCROLL ─────────────────────────────────────────────── */
  const nav = document.getElementById("mainNav");
  const menuBtn = document.getElementById("navToggle");
  const menuDrawer = document.getElementById("navDrawer");

  const syncNavState = function () {
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 60);
  };

  if (nav) {
    syncNavState();
    window.addEventListener("scroll", syncNavState, { passive: true });
  }

  /* ── ACTIVE NAV LINK ─────────────────────────────────────────── */
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a, .nav-drawer a").forEach(function (link) {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return;
    }

    if (href === currentPage) {
      link.classList.add("nav-active");
      link.setAttribute("aria-current", "page");
    }
  });

  /* ── MOBILE MENU ─────────────────────────────────────────────── */
  if (menuBtn && menuDrawer) {
    const setMenuState = function (open) {
      menuDrawer.classList.toggle("open", open);
      menuBtn.classList.toggle("open", open);
      menuBtn.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    };

    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-controls", "navDrawer");

    menuBtn.addEventListener("click", function () {
      setMenuState(!menuDrawer.classList.contains("open"));
    });

    menuDrawer.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenuState(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && menuDrawer.classList.contains("open")) {
        setMenuState(false);
        menuBtn.focus();
      }
    });
  }

  /* ── SCROLL REVEAL ───────────────────────────────────────────── */
  document.body.classList.add("js-loaded");

  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 },
    );

    reveals.forEach(function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("visible");
      } else {
        observer.observe(el);
      }
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("visible");
    });
  }



  /* ── SUBTLE HERO / MEDIA MOTION ────────────────────────────── */
  var parallaxNodes = document.querySelectorAll(".hero-bg, .page-hero-bg, .ceremony-hero-bg");
  if (parallaxNodes.length) {
    window.addEventListener("scroll", function () {
      var offset = Math.min(window.scrollY * 0.08, 28);
      parallaxNodes.forEach(function (node) {
        node.style.transform = "scale(1.04) translate3d(0," + offset + "px,0)";
      });
    }, { passive: true });
  }

  /* ── FAQ ACCORDION ─────────────────────────────────────────── */
  document.querySelectorAll(".faq-page-question").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const item = this.closest(".faq-page-item");
      if (!item) return;
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-page-item").forEach(function (i) {
        i.classList.remove("open");
      });
      if (!isOpen) item.classList.add("open");
    });
  });
});
