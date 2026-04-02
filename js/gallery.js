/* ============================================================
   CHATSWORTH PLANTATION — gallery.js

   HOW TO ADD PHOTOS:
   1. Drop the image file into /images/
   2. Add one entry to /_data/gallery.json:
      {
        "file": "your-photo.jpg",
        "label": "Caption shown in lightbox",
        "category": "estate" (or ceremonies/receptions/portraits/details/marguerite)
      }
   3. Push to GitHub — Cloudflare redeploys in ~60 seconds. Done.
   ============================================================ */

(function () {
  const GALLERY_DATA = "_data/gallery.json";
  const IMAGE_FOLDER = "images/";

  const CATEGORY_LABELS = {
    ceremonies: "Ceremonies",
    receptions: "Receptions",
    estate: "The Estate",
    marguerite: "Marguerite House",
  };

  const grid = document.getElementById("galleryGrid");
  const filterBtns = document.querySelectorAll(".filter-btn");

  let allItems = [];
  let activeFilter = "all";
  let lbIndex = 0;
  let lbVisible = [];

  /* ── FETCH & RENDER ──────────────────────────────────── */

  fetch(GALLERY_DATA)
    .then(function (res) {
      if (!res.ok) throw new Error("Could not load gallery data");
      return res.json();
    })
    .then(function (photos) {
      renderGrid(photos);
      buildLightbox();
      bindFilters();
      bindScroll();
    })
    .catch(function (err) {
      console.error("Gallery error:", err);
      grid.innerHTML =
        '<p style="text-align:center;padding:60px;color:var(--stone);">Gallery coming soon.</p>';
    });

  /* ── RENDER GRID ─────────────────────────────────────── */

  function renderGrid(photos) {
    grid.innerHTML = "";
    allItems = [];

    photos.forEach(function (photo, i) {
      const catLabel = CATEGORY_LABELS[photo.category] || photo.category;
      const src = IMAGE_FOLDER + photo.file;

      const item = document.createElement("div");
      item.className = "gallery-item reveal";
      item.dataset.category = photo.category;
      item.dataset.label = photo.label;
      item.dataset.src = src;
      item.dataset.index = i;

      item.innerHTML =
        '<img src="' +
        src +
        '" alt="' +
        escHtml(photo.label) +
        '" loading="lazy">' +
        '<div class="gallery-item-overlay">' +
        '<span class="gallery-item-label">' +
        escHtml(photo.label) +
        "</span>" +
        '<span class="gallery-item-cat">' +
        escHtml(catLabel) +
        "</span>" +
        "</div>";

      item.addEventListener("click", function () {
        lbVisible = getVisible();
        lbIndex = lbVisible.indexOf(item);
        openLightbox(lbIndex);
      });

      grid.appendChild(item);
      allItems.push(item);
    });
  }

  /* ── FILTER ──────────────────────────────────────────── */

  function bindFilters() {
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterBtns.forEach(function (b) {
          b.classList.remove("active");
        });
        btn.classList.add("active");
        activeFilter = btn.dataset.filter;
        applyFilter();
      });
    });
  }

  function applyFilter() {
    allItems.forEach(function (item) {
      const show =
        activeFilter === "all" || item.dataset.category === activeFilter;
      item.style.display = show ? "" : "none";
    });
  }

  function getVisible() {
    return allItems.filter(function (item) {
      return item.style.display !== "none";
    });
  }

  /* ── LIGHTBOX ────────────────────────────────────────── */

  var lb, lbImg, lbLabel, lbCounter;

  function buildLightbox() {
    lb = document.createElement("div");
    lb.id = "lightbox";
    lb.innerHTML =
      '<button class=\"lb-btn lb-prev\" id=\"lbPrev\" aria-label=\"Previous image\">&#8249;</button>' +
      '<figure><img id=\"lbImg\" alt=\"\" loading=\"lazy\"><figcaption id=\"lbMeta\"><span id=\"lbLabel\"></span><span id=\"lbCounter\"></span></figcaption></figure>' +
      '<button class=\"lb-btn lb-close\" id=\"lbClose\" aria-label=\"Close gallery\">&#10005;</button>' +
      '<button class=\"lb-btn lb-next\" id=\"lbNext\" aria-label=\"Next image\">&#8250;</button>'; 
    document.body.appendChild(lb);

    lbImg = document.getElementById("lbImg");
    lbLabel = document.getElementById("lbLabel");
    lbCounter = document.getElementById("lbCounter");

    document.getElementById("lbClose").addEventListener("click", function (e) {
      e.stopPropagation();
      closeLightbox();
    });
    document.getElementById("lbNext").addEventListener("click", function (e) {
      e.stopPropagation();
      stepLightbox(1);
    });
    document.getElementById("lbPrev").addEventListener("click", function (e) {
      e.stopPropagation();
      stepLightbox(-1);
    });
    lb.addEventListener("click", closeLightbox);

    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("open")) return;
      if (e.key === "ArrowRight") stepLightbox(1);
      if (e.key === "ArrowLeft") stepLightbox(-1);
      if (e.key === "Escape") closeLightbox();
    });
  }

  function openLightbox(index) {
    var item = lbVisible[index];
    if (!item) return;
    lbImg.src = item.dataset.src;
    lbImg.alt = item.dataset.label || "";
    lbLabel.textContent = item.dataset.label || "";
    lb.classList.add("open");
    if (lbCounter) { lbCounter.textContent = (index + 1) + " / " + lbVisible.length; }
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lb.classList.remove("open");
    document.body.style.overflow = "";
  }

  function stepLightbox(dir) {
    lbVisible = getVisible();
    lbIndex = (lbIndex + dir + lbVisible.length) % lbVisible.length;
    openLightbox(lbIndex);
  }

  /* ── SCROLL REVEAL ───────────────────────────────────── */

  function bindScroll() {
    if (!("IntersectionObserver" in window)) {
      allItems.forEach(function (el) {
        el.classList.add("visible");
      });
      return;
    }
    var observer = new IntersectionObserver(
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

    allItems.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ── UTILS ───────────────────────────────────────────── */

  function escHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
})();
