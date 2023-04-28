const { EleventyRenderPlugin } = require("@11ty/eleventy");
const htmlmin = require("html-minifier");
const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItAnchor = require("markdown-it-anchor");
const svgContents = require("eleventy-plugin-svg-contents");
const moment = require("moment");

// shortcodes
const createHeading = require("./src/_shortcodes/createHeading");

const md = markdownIt({ html: true });
md.use(markdownItAttrs);
md.use(markdownItAnchor);

const now = String(Date.now());

moment.locale("en");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/_styles/tailwind.config.js");
  eleventyConfig.addWatchTarget("./src/_styles/tailwind.css");

  eleventyConfig.addPassthroughCopy({
    "./node_modules/alpinejs/dist/cdn.js": "./js/alpine.js",
  });

  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addShortcode("version", function () {
    return process.env.ELEVENTY_PRODUCTION ? "" : `?v=${now}`;
  });

  eleventyConfig.addShortcode("createHeading", function (headingLevel, headingText, hasTopPadding, classes) {
    return createHeading(headingLevel, headingText, hasTopPadding, classes);
  });

  eleventyConfig.addNunjucksShortcode(
    "opengraph",
    function (url, title, description, slug) {
      const pagesWithCustomImages = ["index", "ux-as-an-independent-study", "career-q-and-a", "revisiting-usability-test-tasks", "market-watcher-product-design"];

      const imageSlug = pagesWithCustomImages.includes(slug) ? `${slug}` : "post";
      return `<meta property="og:url" content="https://www.jaredjgebel.com${url}">
    <meta property="og:type" content="website">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="/assets/open-graph/${imageSlug}.png">`;
    }
  );

  eleventyConfig.addFilter("socialPost", function (htmlString) {
    const stripBeginning = /(?<=<time\>)(\W|\w)+/;
    const result = stripBeginning.exec(htmlString);
    return result && result[0];
  });

  eleventyConfig.addFilter("dateIso", (date) => {
    return moment(date).toISOString();
  });

  eleventyConfig.addFilter("dateReadable", (date) => {
    return moment(date).utc().format("LL");
  });

  eleventyConfig.addFilter("hasTag", (tags, tag) => {
    return (tags || []).includes(tag);
  });

  eleventyConfig.addPlugin(EleventyRenderPlugin);

  eleventyConfig.addPlugin(svgContents);

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

  return {
    dir: {
      input: "src",
    },
  };
};
