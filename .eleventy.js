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
      const pagesWithCustomImages = ["index", "ux-as-an-independent-study", "career-q-and-a", "revisiting-usability-test-tasks", "market-watcher-product-design", "market-watcher-user-flow"];

      const imageSlug = pagesWithCustomImages.includes(slug) ? `${slug}` : "post";
      return `<meta property="og:url" content="https://www.jaredjgebel.com${url}">
    <meta property="og:type" content="website">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="/assets/open-graph/${imageSlug}.png">`;
    }
  );

  eleventyConfig.addShortcode("lightbox", function (imagePath) {
    const imagePathWithoutSlashes = imagePath.replace(/\//g, "-");

    return `<img
    id="open-button-${imagePathWithoutSlashes}"
    class="my-0 cursor-zoom-in"
    src="../../assets/images/${imagePath}.webp"
    alt=""
    width="100%"
    height="auto"/>
    <figcaption class="sm-paragraph-long xl:xl-paragraph">Click or press to enlarge.</figcaption>
<bento-lightbox id="my-lightbox-${imagePathWithoutSlashes}" scrollable>
<button id="close-button-${imagePathWithoutSlashes}" class="flex items-center m-3 p-4 rounded bg-primary-70 group focus:outline-neutral-0 focus:outline focus:outline-1" aria-labelledby="close-button-${imagePathWithoutSlashes}">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24" class="stroke-0 fill-neutral-10 group-hover:fill-neutral-0 group-focus:fill-neutral-0">
      <path style="stroke-width:1.33145" d="m13.887 12.01 5.72-5.707a1.336 1.335 0 0 0-1.89-1.888l-5.706 5.72-5.707-5.72a1.336 1.335 0 1 0-1.889 1.888l5.72 5.706-5.72 5.706a1.329 1.329 0 0 0 0 1.89 1.332 1.331 0 0 0 1.889 0l5.707-5.72 5.707 5.72a1.332 1.331 0 0 0 2.18-.433 1.332 1.331 0 0 0-.29-1.457z"></path>
    </svg>  
  </button>
    <img
        class="my-0"
        src="../../assets/images/${imagePath}.webp"
        alt=""
        width="auto"
        height="100%"/>

    <style>
        bento-lightbox {
            z-index: 1000;
        }
    </style>
</bento-lightbox>
<script>
    (async () => {
        const lightbox = document.querySelector("#my-lightbox-${imagePathWithoutSlashes}");
        await customElements.whenDefined('bento-lightbox');
        const api = await lightbox.getApi();
        // set up button actions
        document.querySelector("#open-button-${imagePathWithoutSlashes}").onclick = () => api.open();
        document.querySelector("#close-button-${imagePathWithoutSlashes}").onclick = () => api.close();
    })();
</script>`
  });

  eleventyConfig.addPairedShortcode("callout", function (content) {
    return `<div class="callout max-w-prose bg-primary-50 rounded-lg text-neutral-0 px-6 py-4">
    ${content} 
   </div>`
  });

  eleventyConfig.addPairedShortcode("featuredSection", function (content, bgColor) {
    return `<div class="overview-section grid-layout-row text-neutral-0 ${bgColor}">
      <div class="col-span-full py-10 flex flex-col max-w-prose gap-6">
        ${content}
      </div>
    </div>`
  });

  eleventyConfig.addPairedShortcode("tableOfContents", function (content, borderColor) {
    return `<div class="hidden mdlg:flex mdlg:col-span-5 items-start">
    <nav class="case-study-table-of-contents w-full sticky mdlg:top-11 lg:top-7 border-l-4 border-l-${borderColor}">
        <div class="grid grid-rows-[1fr] mdlg:max-h-[calc(100vh_-_9rem)] lg:max-h-[calc(100vh_-_6rem)]">
            <ul class="flex flex-col overflow-y-auto h-full ">
                ${content}
            </ul>
        </div>
    </nav>
</div>`
  })

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
