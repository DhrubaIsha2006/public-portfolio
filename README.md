# Cinematic Scrapbook Portfolio

A bold React + Vite + Tailwind CSS + Framer Motion portfolio built as an artistic digital scrapbook for a creative technologist.

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Project content

All project cards and modal case studies live in:

```text
src/data/projects.js
```

To add a new project, duplicate an object in the `projects` array and update its fields. The UI supports:

- `title`
- `description`
- `techStack`
- `category`
- `year`
- `images`
- `github`
- `liveDemo`
- `awards`
- `tags`
- `role`
- `caseStudy`

Research/poster items use `category: "Research"` or `category: "Poster"` and can include a `pdf` link for downloads.

## Images and PDFs

Place project images in:

```text
public/assets/projects/
```

Place downloadable posters or PDFs in:

```text
public/assets/posters/
```

Then reference them from `src/data/projects.js` with paths like:

```js
images: ['/assets/projects/my-project.svg']
pdf: '/assets/posters/my-poster.pdf'
```

## Customization

- Theme colors: edit `tailwind.config.js`
- Global textures and animation utilities: edit `src/styles/index.css`
- Sections: edit or add components inside `src/components/sections/`
- Skills and achievements: edit `src/data/skills.js` and `src/data/achievements.js`

The layout is componentized so future projects should not require changing section or card code.
