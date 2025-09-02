# Hack The AI - Inter University Hackathon Website

A modern, responsive single-page site for the "Hack The AI" inter‑university hackathon. Pure HTML, CSS, and a touch of JavaScript with a futuristic neon aesthetic.

## 🚀 What’s included

- Dark, glowing theme and smooth animations
- Clickable scroll indicator to jump to About
- Event Calendar (four cards) replacing the old vertical timeline
- Registration Details cards (fee, team size, apply button + note)
- Competition Categories with embedded Google Drive preview videos
- Uniform category card heights with 16:9 video area
- Updated footer (SmythOS + Event Organizer), social links in two columns, responsive bottom bar
- SmythOS favicon added to the browser tab

## 🛠 Tech
- HTML5
- CSS (Flexbox/Grid, responsive breakpoints)
- Vanilla JavaScript
- Google Fonts (Inter) and Font Awesome icons

## ▶️ Run locally
No build needed.
1) Clone/download this repository
2) Open `index.html` in any modern browser

Tip: Use a local server (e.g., VS Code Live Server) for best results with relative assets.

## 📁 Structure
```
hacktheai-website/
├── Assets/                 # Images/logos/favicons
├── index.html              # Main page
├── styles.css              # Styles and animations
├── script.js               # Interactions (FAQ toggles, etc.)
└── README.md
```

## ✏️ Common edits

### Change Competition Category videos (Google Drive)
1) Ensure the Drive file is shared: Anyone with the link – Viewer.
2) Convert the share URL to a preview URL:
   - Share: `https://drive.google.com/file/d/FILE_ID/view`
   - Preview (use in HTML): `https://drive.google.com/file/d/FILE_ID/preview`
3) Replace the iframe `src` inside each `.category-video` in `index.html`.

Example iframe:
```html
<iframe src="https://drive.google.com/file/d/FILE_ID/preview"
        allow="autoplay; fullscreen" allowfullscreen loading="lazy"
        style="width:100%; height:100%; border:0;"></iframe>
```

### Adjust Registration Details
- Edit the fee, team size, and button link in the `#registration` section of `index.html`.
- The currency icon uses the BDT symbol (৳).

### Footer social links (two columns)
- Links are in the footer under `.footer-links`. They’re auto-laid into two columns on desktop/tablet and one column on mobile.

### Favicon
- The tab icon uses `Assets/SmythOS Favicon.png` via:
```html
<link rel="icon" type="image/png" href="Assets/SmythOS Favicon.png">
<link rel="apple-touch-icon" href="Assets/SmythOS Favicon.png">
```
Replace with your own file if needed.

### Scroll arrow target
- The down arrow under the hero CTA is a link to `#about`. Change the `href` to target another section if desired.

## 📣 Content quick‑reference
- Registration form: `https://forms.gle/QvzXYQ3hdAHPkkWVA`
- Key dates are in the Event Calendar in `index.html`.

## 🌐 Deploy
Any static hosting works (GitHub Pages, Netlify, Vercel, Firebase Hosting, etc.).
- Upload the repository, ensure `index.html` is served from the root.

## ✅ Browser support
Latest Chrome, Edge, Firefox, and Safari (desktop and mobile).

## 📄 License
This site is for the Hack The AI hackathon. All rights reserved.

— Built with ❤️ for the AI community
