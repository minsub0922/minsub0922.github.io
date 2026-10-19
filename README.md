# Minseop Choi — Engineer portfolio

A bilingual engineering portfolio for **https://minsub0922.github.io/**.

Static HTML, CSS, and JavaScript. No build process or runtime dependencies. Hosted with GitHub Pages from the root of the `main` branch. `.nojekyll` keeps the site static.

## Preview

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open `http://127.0.0.1:4173`. Do not preview through `file://`; use HTTP for clipboard support.

## Edit

- `index.html`: English content, profile links, project and publication markup, SEO metadata.
- `styles.css`: responsive layouts, light/dark themes, reduced-motion and print styles.
- `app.js`: Korean translations, project notes, filters, dialogs, citation/email copying, saved preferences.
- `assets/minseop-choi-cv.pdf`: supplied CV.
- `assets/social-card.png`: social sharing image.
- `docs/content-sources.md`: content provenance and verified links.
- `docs/design-references.md`: design references and their influence.

For ordinary text edits, update the English HTML and the matching Korean key in `app.js`. For case-study updates, edit the `projects` object. Theme and language preferences stay in the visitor's browser. No analytics or tracking scripts are used. Google Fonts is an optional external stylesheet; system font fallbacks keep the page readable if it is unavailable.

## Publish

Push to `main`. GitHub Pages publishes the root directory automatically. Initial setup uses GitHub's branch deployment:

```sh
gh api --method POST repos/minsub0922/minsub0922.github.io/pages \
  --input - <<'JSON'
{"build_type":"legacy","source":{"branch":"main","path":"/"}}
JSON
```

If Pages is already enabled, inspect its settings instead of repeating initial setup. Check deployment with `gh api repos/minsub0922/minsub0922.github.io/pages` and the repository's Pages workflow.

## Content notes

Internal work is explicitly marked and described only at the level supplied in the CV. Public learning repositories are presented as educational resources. Publication authors, venue, and official code links were checked against arXiv and the supplied Google Scholar profile on October 19, 2026. Research diagrams are original conceptual illustrations, not reproduced experimental results. Citation counts are deliberately not hardcoded.

Personal CV and biographical content belong to Minseop Choi. No third-party site source code, photographs, or templates are copied.
