# Personal Portfolio Template

This is a clean, modular portfolio site designed for a data analyst / tech profile.

## Files

- `index.html` - semantic page structure and SEO-friendly metadata
- `styles.css` - responsive styling and subtle motion
- `data.js` - all portfolio content in one place
- `script.js` - renders sections dynamically

## How to update projects later

Open `data.js` and edit the `projects` array.

Each project supports:

- `slug` - used for the in-site detail page URL
- `title`
- `description`
- `details`
- `longDescription`
- `outcomes`
- `stack`
- `image`
- `github`
- `demo`

Example:

```js
{
  title: "My Project",
  description: "Short summary",
  details: "Longer explanation",
  stack: ["Python", "SQL", "Power BI"],
  image: "assets/project-1.jpg",
  github: "https://github.com/your/repo",
  demo: "https://your-demo-link.com"
}
```

Each project card on the homepage is clickable and opens `project.html?project=your-slug` in the same tab.

The homepage also includes a `More Projects` / `Show Less` toggle at the bottom-right of the Projects section.

## How to update resume content

Edit the `data.js` fields for:

- `name`
- `title`
- `intro`
- `about`
- `experience`
- `education`
- `contact`

## Resume download button

Place your resume file in the project root as `resume.pdf`.

## Adding images

Put image files in an `assets/` folder and reference them in the `projects` array.

## Notes

- The site is fully responsive.
- Projects are data-driven so you can add or remove cards without changing layout code.
- Once you upload your resume, I can help replace the placeholder content with real details.
