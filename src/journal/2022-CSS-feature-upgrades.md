---
title: 2022 CSS Feature Upgrades
description: Container queries and the :has() selector
date: 2022-08-09
layout: ../_includes/layouts/journal-post.njk
tags: [post, web development, web design, css, social posts]
---

i

# Design Patents

<time datetime="{{ date | dateIso }}">{{ date | dateReadable }}</time>

If you design for the browser, it's worth paying attention to the recent and soon-to-be-released CSS feature upgrades. [Container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries) allow elements to change size based on the size of the HTML element that contains it, as opposed to the size of the browser window. The [`:has()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:has) selector can change the styling of an element if it contains a specified child element. For example, a card could be styled to have extra padding only if it includes an image. Once these new features are supported in all browsers, it will be much easier to design elements that currently require complex logic. For example, [Dave Rupert posted about styling grids differently](https://daverupert.com/2022/07/solving-the-dangler-conundrum-with-has-and-container-queries) when they have an odd or even number of items.

I originally found this article in both Alex Trost's [Frontend Horse newsletter](https://frontend.horse/archives/) and Chris Coyier's [Codepen newsletter](https://codepen.io/spark).
