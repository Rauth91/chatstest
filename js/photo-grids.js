/* ============================================================
   CHATSWORTH PLANTATION — photo-grids.js

   Drives photo grids across the site from _data/gallery.json.
   Add a photo to gallery.json and it automatically appears in
   the right places — no HTML edits needed.

   Grids powered by this file:
   - Homepage mosaic teaser → first 6 non-marguerite photos
   ============================================================ */

(function () {
  const GALLERY_DATA = "_data/gallery.json";
  const IMAGE_FOLDER = "images/";

  var teaser = document.getElementById("homepageTeaser");
  if (!teaser) return; // nothing to do on this page

  fetch(GALLERY_DATA)
    .then(function (res) {
      if (!res.ok) throw new Error("Could not load gallery data");
      return res.json();
    })
    .then(function (photos) {
      renderHomepageTeaser(teaser, photos);
    })
    .catch(function (err) {
      console.warn("photo-grids.js: could not load gallery.json", err);
    });

  /* ── HOMEPAGE MOSAIC TEASER ───────────────────────────────
     Takes the first 6 non-marguerite photos so the teaser
     shows diverse content — estate, ceremonies, receptions.
  ────────────────────────────────────────────────────────── */

  function renderHomepageTeaser(container, photos) {
    var picks = photos
      .filter(function (p) {
        return p.category !== "marguerite";
      })
      .slice(0, 6);

    if (picks.length < 6) picks = photos.slice(0, 6);

    var cells = container.querySelectorAll(".gallery-cell");
    cells.forEach(function (cell, i) {
      if (!picks[i]) return;
      var photo = picks[i];
      var img = cell.querySelector("img");
      var label = cell.querySelector(".gallery-overlay-text");
      if (img) {
        img.src = IMAGE_FOLDER + photo.file;
        img.alt = photo.label;
      }
      if (label) {
        label.textContent = photo.label;
      }
    });
  }
})();
