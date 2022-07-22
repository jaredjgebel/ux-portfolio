const { EleventyRenderPlugin } = require("@11ty/eleventy");
const htmlmin = require("html-minifier");
const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItAnchor = require("markdown-it-anchor");
const svgContents = require("eleventy-plugin-svg-contents");
const faviconsPlugin = require("eleventy-plugin-gen-favicons");

const md = markdownIt({ linkify: true, html: true });
md.use(markdownItAttrs);
md.use(markdownItAnchor);

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

  eleventyConfig.addPlugin(EleventyRenderPlugin);

  eleventyConfig.addPlugin(svgContents);
  eleventyConfig.addPlugin(faviconsPlugin);

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

  eleventyConfig.setLibrary("md", md);
};
