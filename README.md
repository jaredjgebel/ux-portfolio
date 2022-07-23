# UX Portfolio Website

This is my website to showcase my UX work and learning. It includes a blog.

## Tech Stack

- Site generator: [Eleventy](https://www.11ty.dev/)
- HTML Templating: [Nunjucks](https://mozilla.github.io/nunjucks/)
- Styling: [Tailwind](https://tailwindcss.com/)
- JavaScript: [Alpine.js](https://alpinejs.dev/)


## Repository File Structure

- 📦 __ux-portfolio__
    - 📂 __assets__: fonts and images, directly passed through to compiled site
    - 📂 __src__: Eleventy looks in this folder to compile pages
        - 📂 ___data__: global data, available in all templates
        - 📂 ___includes__: anything that's not a full page
            - 📂 __components__: Nunjucks macros that produce markup based on inputs 
            - 📂 __elements__: static chunks of markup 
            - 📂 __layouts__: templates for the outer HTML shell of pages
            - 📂 __markdown-partials__: bits of markdown that can be implemented in pages
            - 📜 *files*: partial pages or more complex UI elements
            - 📂 __styles__: tailwind configuation and compiled CSS
        - 📂 *folders*: all non-underscored folders transformed into website pages
        - 📜 __index.njk__: home page
    - 📜 *files*: config files for Eleventy, Github, and NPM
