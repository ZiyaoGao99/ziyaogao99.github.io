# Ziyao Gao — Academic Homepage

Personal academic website: https://ziyaogao99.github.io/

This is a static HTML/CSS/JavaScript website, hosted by GitHub Pages.

## Update the site

- Edit `index.html` for the biography, education, publications, and exhibition.
- Edit `styles.css` for appearance. The accent color is `#B4E170`.
- Replace `Ziyao-Gao-CV.pdf` to update the CV; the navigation opens it in a new tab.
- Images are stored beside `index.html`, with descriptive filenames.
- `portrait.js` preserves the approved crop: zoom 1.08, horizontal 0%, vertical 100%.
- Awards and Misc are retained in the HTML with the `hidden` attribute.
- `homepage/index.html` redirects the previous `/homepage/` URL to the current home page.

GitHub Pages publishes `main` from `/ (root)`. Changes committed to `main` are published automatically. No build step or paid service is required.

To preview locally, run `python3 -m http.server 8766 --bind 127.0.0.1` from this directory and open http://127.0.0.1:8766/.

