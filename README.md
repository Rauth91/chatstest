# Chatsworth Plantation — Site

Static HTML site deployed via GitHub → Cloudflare Pages.

---

## Adding Photos to the Gallery

**Step 1 — Upload the image**
Go to the GitHub repo → `images/` → drag and drop your photo file.
Commit directly to `main`.

**Step 2 — Add a line to the JSON**
Go to `_data/gallery.json` → click the pencil icon to edit → add an entry:

```json
{
  "file": "your-photo-filename.jpg",
  "label": "Caption shown in lightbox",
  "category": "ceremonies"
}
```

**Categories:** `estate` · `ceremonies` · `receptions` · `portraits` · `details` · `marguerite`

Commit the change. Cloudflare redeploys in ~60 seconds. Done.

All images — gallery photos, hero backgrounds, section photos — live in `images/`. One folder, no exceptions.

---

## Swapping Hero / Section Photos

Each page has a `<style>` block at the top of the `<head>` with a comment:
`↓ SWAP THIS IMAGE ↓`

Change the `url('images/filename.jpg')` to whatever photo you want.
Upload the new photo to `images/` first, then update the URL.

---

## Site Structure

```
/
├── index.html
├── ceremony-spaces.html
├── marguerite-house.html
├── micro-weddings.html
├── pricing.html
├── gallery.html
├── faq.html
├── area-guide.html
├── contact.html
├── privacy-policy.html
├── _data/
│   └── gallery.json      ← edit this to add gallery photos
├── images/
│   └── *.jpg             ← all photos live here (heroes, gallery, everything)
├── css/
│   ├── style.css         ← base styles, tokens, nav, footer
│   └── inner.css         ← inner page styles
└── js/
    ├── main.js           ← nav scroll, mobile menu, scroll reveal, FAQ
    └── gallery.js        ← gallery render, filter, lightbox
```
