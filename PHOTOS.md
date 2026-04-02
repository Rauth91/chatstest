# Chatsworth Plantation — Photo Reference

Every swappable photo on the site, organized by page.
To swap a photo: upload the new file to `images/`, then change the filename listed below.

All edits are made in GitHub's web editor — navigate to the file, click the pencil icon, find the filename, change it, commit.

---

## Gallery
**File:** `_data/gallery.json`

Add, remove, or reorder entries here. Each entry:
```json
{ "file": "filename.jpg", "label": "Caption", "category": "ceremonies" }
```
Categories: `ceremonies` · `receptions` · `estate` · `marguerite`

---

## Homepage — `index.html`

| Slot | Current File | Where to change |
|------|-------------|-----------------|
| Main hero (full screen) | `Main-Hero.jpg` | Line ~147 in `<style>` block |
| CTA band (kissing photo) | `kissing.jpg` | Line ~207 in `<style>` block |
| Mid-hero (between story and gallery) | `wedding-party.jpg` | Line ~226 in `<style>` block |
| Story section (left image) | `stay-estate.jpg` | Line ~313 `src=` |
| Gallery teaser — cell 1 (tall, left) | `garden-bride.jpg` | Line ~342 `src=` |
| Gallery teaser — cell 2 | `ceremony-aisle.jpg` | Line ~346 `src=` |
| Gallery teaser — cell 3 | `ceremony-pergola.jpg` | Line ~350 `src=` |
| Gallery teaser — cell 4 | `doorway-bride.jpg` | Line ~354 `src=` |
| Gallery teaser — cell 5 | `bride-groom.jpg` | Line ~358 `src=` |
| Gallery teaser — cell 6 (right) | `stay-estate.jpg` | Line ~366 `src=` |
| Marguerite House teaser | `Marguerite-front.jpg` | Line ~412 `src=` |

---

## Ceremony Spaces — `ceremony-spaces.html`

| Slot | Current File | Where to change |
|------|-------------|-----------------|
| Page hero | `ceremony-pergola.jpg` | Line ~76 in `<style>` block |
| CTA band (bottom) | `kissing.jpg` | Line ~81 in `<style>` block |
| Space 1 — Under the Oaks | `brideandgroomunderoak.JPG` | Line ~145 `src=` |
| Space 2 — Rose Garden | `garden-bride.jpg` | Line ~166 `src=` |
| Space 3 — Celeste Pavilion | `ceremony-pergola.jpg` | Line ~187 `src=` |
| Space 4 — Brass Chandelier Pavilion | `wedding-party.jpg` | Line ~208 `src=` |
| Space 5 — Cristella Veranda | `stay-estate.jpg` | Line ~230 `src=` |

---

## The Marguerite House — `marguerite-house.html`

| Slot | Current File | Where to change |
|------|-------------|-----------------|
| Page hero | `MainRoom-Marguerite.jpg` | Line ~72 in `<style>` block |
| CTA band (bottom) | `doorway-bride.jpg` | Line ~351 inline style |
| Intro section image | `history-photo.jpg` | Line ~177 `src=` |
| Mid-bleed full photo | `garden-bride.jpg` | Line ~275 inline style |
| Photo grid — cell 1 | `Cottage-house.jpg` | Line ~213 `src=` |
| Photo grid — cell 2 | `ceremony-aisle.jpg` | Line ~217 `src=` |
| Photo grid — cell 3 | `bride-groom.jpg` | Line ~221 `src=` |
| Photo grid — cell 4 | `doorway-bride.jpg` | Line ~225 `src=` |
| Photo grid — cell 5 | `garden-bride.jpg` | Line ~229 `src=` |
| Photo grid — cell 6 | `Kitchen.jpg` | Line ~238 `src=` |
| Photo grid — cell 7 | `Stateroom.jpg` | Line ~241 `src=` |
| Photo grid — cell 8 | `Stateroom-two.jpg` | Line ~244 `src=` |
| Marguerite House lodging photo | `Marguerite-front2.jpg` | Line ~298 `src=` |
| CarolAnn Cottage lodging photo | `Cottage-house.jpg` | Line ~337 `src=` |

---

## Micro Weddings — `micro-weddings.html`

| Slot | Current File | Where to change |
|------|-------------|-----------------|
| Page hero | `doorway-bride.jpg` | Line ~77 in `<style>` block |
| CTA band (bottom) | `bride-groom.jpg` | Line ~303 inline style |
| Philosophy grid — image 1 | `ceremony-aisle.jpg` | Line ~197 `src=` |
| Philosophy grid — image 2 | `bride-groom.jpg` | Line ~198 `src=` |
| Philosophy grid — image 3 (wide) | `ceremony-pergola.jpg` | Line ~199 `src=` |

---

## Weddings & Pricing — `pricing.html`

| Slot | Current File | Where to change |
|------|-------------|-----------------|
| Page hero | `ceremony-pergola.jpg` | Line ~72 in `<style>` block |
| CTA band (bottom) | `ceremony-aisle.jpg` | Line ~381 inline style |
| Package 1 card photo | `ceremony-aisle.jpg` | Line ~212 `src=` |
| Package 2 card photo | `ceremony-aisle.jpg` | Line ~237 `src=` |
| Package 3 card photo | `wedding-party.jpg` | Line ~264 `src=` |
| Micro weddings section photo | `Cottage-house.jpg` | Line ~354 `src=` |

---

## Gallery — `gallery.html`

| Slot | Current File | Where to change |
|------|-------------|-----------------|
| Page hero | `ceremony-aisle.jpg` | Line ~59 in `<style>` block |
| CTA band (bottom) | `garden-bride.jpg` | Line ~65 in `<style>` block |
| All gallery photos | → | Edit `_data/gallery.json` |

---

## FAQ — `faq.html`

| Slot | Current File | Where to change |
|------|-------------|-----------------|
| Page hero | `ceremony-aisle.jpg` | Line ~27 in `<style>` block |
| CTA band (bottom) | `wedding-party.jpg` | Line ~435 inline style |

---

## Area Guide — `area-guide.html`

| Slot | Current File | Where to change |
|------|-------------|-----------------|
| Page hero | `history-photo.jpg` | Line ~27 in `<style>` block |
| CTA band (bottom) | `stay-estate.jpg` | Line ~395 inline style |

---

## Contact — `contact.html`

| Slot | Current File | Where to change |
|------|-------------|-----------------|
| Page hero / left panel | `Cottage-house.jpg` | Line ~72 in `<style>` block |
| Left panel image | `Cottage-house.jpg` | Line ~153 `src=` |

---

## Notes

- Line numbers are approximate — use Ctrl+F to search for the current filename if the line has shifted
- Hero images and CTA bands use `url('images/filename.jpg')` — background images in CSS
- Section images use `src="images/filename.jpg"` — standard HTML img tags
- All images live in the `/images/` folder in the repo
- Gallery photos are controlled entirely by `_data/gallery.json` — no HTML edits needed
