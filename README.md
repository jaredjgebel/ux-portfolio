# UX Portfolio Website

This is my website to showcase my UX work and learning. It includes a blog.

## Tech Stack

- Site generator: [Eleventy](https://www.11ty.dev/)
- HTML Templating: [Nunjucks](https://mozilla.github.io/nunjucks/)
- Styling: [Tailwind](https://tailwindcss.com/)
- JavaScript: [Alpine.js](https://alpinejs.dev/)


## File Structure

- 📦 __ux-portfolio__
    - 📂 __assets__: fonts, svgs, video, and images, directly passed through to compiled site
    - 📂 __src__: Eleventy looks in this folder to compile pages
        - 📂 ___data__: global data, available in all templates
        - 📂 ___includes__: anything that's not a full page to be rendered by Eleventy
            - 📂 __case-studies__: partials for case studies
            - 📂 __components__: Nunjucks macros that produce markup based on inputs 
            - 📂 __elements__: static chunks of markup 
            - 📂 __layouts__: templates for the outer HTML shell of pages
            - 📂 __markdown-partials__: bits of markdown to be rendered inside pages
            - 📜 *files*: partial pages or groups of UI elements
            - 📂 ___styles__: tailwind configuation and additional CSS
            - 📂 ___shortcodes__: tags that Eleventy can use to transform data into markup
        - 📂 *folders*: all non-underscored folders are transformed into website pages
        - 📜 __index.njk__: home page
    - 📜 *files*: config files for Eleventy, Github, and NPM
