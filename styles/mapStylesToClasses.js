module.exports = {
  // styles for each journal post
  // custom markdown styles overridden within markdown with markdown-it-attrs
  h1: ["sm-heading-1", "lg:lg-heading-1", "xl:xl-heading-1", "pt-7", "xl:pt-9"],
  h2: ["sm-heading-2", "lg:lg-heading-2", "xl:xl-heading-2", "pt-7", "xl:pt-9"],
  h3: ["sm-heading-3", "lg:lg-heading-3", "xl:xl-heading-3", "pt-7"],
  h4: ["sm-heading-4", "lg:lg-heading-4", "xl:xl-heading-4", "pt-7"],
  strong: ["font-medium"],
  ul: ["flex", "flex-col", "gap-5", "pl-7", "pr-5", "marker:text-primary-70"],
  li: ["list-disc"],
  p: ["pt-6", "sm-paragraph-long"],
  a: ["sm-paragraph-link", "lg: lg-paragraph-link", "xl: xl-paragraph-link"],
};
