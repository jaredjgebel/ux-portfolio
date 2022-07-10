const htmlmin = require("html-minifier");
const markdownIt = require("markdown-it");
const markdownItClass = require("@toycode/markdown-it-class");
const mapping = require("./styles/mapStylesToClasses");
const blogMapping = require("./styles/blogMapStylesToClasses");

const md = markdownIt({ linkify: true, html: true });
md.use(markdownItClass, mapping);

const mdBlog = markdownIt({ linkify: true, html: true });
mdBlog.use(markdownItClass, blogMapping);

const now = String(Date.now());

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./styles/tailwind.config.js");
  eleventyConfig.addWatchTarget("./styles/tailwind.css");

  eleventyConfig.addPassthroughCopy({
    "./node_modules/alpinejs/dist/cdn.js": "./js/alpine.js",
  });

  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addShortcode("version", function () {
    return process.env.ELEVENTY_PRODUCTION ? "" : `?v=${now}`;
  });

  eleventyConfig.addNunjucksShortcode(
    "markdown",
    (content) => `${md.render(content)}`
  );

  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (
      process.env.ELEVENTY_PRODUCTION &&
      outputPath &&
      outputPath.endsWith(".html")
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  eleventyConfig.setLibrary("md", mdBlog);
};
