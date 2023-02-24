---
title: "Feature breakdown: You.com search engine apps"
description: Strategies for thinking about how processes connect on the broadest level
date: 2023-02-24
layout: ../_includes/layouts/journal-post.njk
tags: [post, feature breakdown, ux design, product design, ai, social posts]
---
# Feature breakdown: You.com search engine apps

<time datetime="{{ date | dateIso }}">{{ date | dateReadable }}</time>

With the [recent news from Microsoft and Google](https://www.theguardian.com/technology/2023/feb/21/techscape-google-bard-microsoft-big-ai-search), the integration of AI into search engines has had much discussion as of late. I recently discovered [You.com](you.com), a search engine startup with several AI-oriented products. Their flagship product is a **search engine for software developers**. 

One thing that stood out to me was how additional functionality is integrated into the search results. In this post, I'll be describing the You.com apps feature and thinking through some of the UX and product design implications.

## What exactly are apps on You.com? 

You.com includes app components that can both generate and search for content, directly in the results feed. At first, I thought they were referring to web apps, **these apps specifically refer to the components being built by the You.com team**.  

### Site structure

When first looking at the results feed, you'll notice that the list of results can be scrolled through on both vertical and horizontal axes.  At first glance, the horizontal list of cards appears to be quite similar to Google's featured links.  

<figure>
<img src="../../assets/images/you-search/google-search-banana-bread.webp" alt="Google search results for query 'banana bread recipe'" width="auto" height="auto">
<figcaption>Google search results for query "banana bread recipe"</figcaption>
</figure>

<figure>
<img src="../../assets/images/you-search/you-search-engine-results.webp" alt="You.com search results for query 'banana bread recipe'" width="auto" height="auto">
<figcaption>You.com search results for query "banana bread recipe"</figcaption>
</figure>

However, the You.com apps have additional features, including:

### Website interactions from within the search feed

For some sites, you'll be able to view the most relevant content from the page within the search feed. Moreover, you can interact with the site from the app. For example, if you sign in to the Twitter app, you can follow, retweet, or favorite a tweet without leaving the search results page.

<figure>
<img src="../../assets/images/you-search/you-twitter-app.webp" alt="Horizontal scrolling cards of tweets, with available button interactions" width="auto" height="auto">
<figcaption>Twitter app, embedded in search results</figcaption>
</figure>

Apps aren't just for websites, though. There's also:

### AI widgets

AI interactions are available within the search feed, with things like code generation (YouCode), text generation (YouWrite), and an AI chatbot (YouChat).

### The ability to vote and pin

It's possible to express preferences for the apps you'd like to see though upvotes, downvotes, pinning, or blocking. These preferences will personalize the search results that populate your feed. It's worth noting that "pinned" apps aren't always at the very top of your search, however.

<figure>
<img src="../../assets/images/you-search/you-app-menu.webp" alt="App menu - preferences personalize your feed" style="width: 16rem; height: auto" >
<figcaption>Menu for each app</figcaption>
</figure>


Apps won't show up if they're not relevant to your search. Thankfully, my "banana bread recipe" query didn't include results from Stack Overflow.

## Apps from a user perspective

**A caveat for this section** <br> I'm not at all trying to be critical of the You.com product team or say that I know better than them. There are almost certainly business and product strategy decisions that can't be parsed from an outside perspective. However, all product features have pros and cons, and it's useful to consider what those might be as a **thought experiment**. {.warning-callout} 

Keeping in mind that the target audience for You.com is software developers, a few pros and cons for apps come to mind.

### Pros for users

- **Speed**: It's faster to find information and access site features without having to actually click into the website.
- **Reduced context switching**: Workflow friction is lowered by combining complementary features into one feed.
- **Saved search preferences**: By pinning useful apps, users know their favorite sites will show up in the feed without effort.

### Cons for users

- **Complexity**: Streamlined tools have found popularity because of their simple yet elegant interfaces - and while You.com is a different kind of tool, some may find the interface to be cluttered
- **Apps have different functions**: As I noted above, each item in an app listing could include an interaction, an AI widget, or simply just be a link. Users may end up with a muddled mental model of what exactly apps are.
- **Potential inaccuracy of AI-based apps**: There are [many](https://www.cnn.com/2023/02/08/tech/google-ai-bard-demo-error/index.html) [examples](https://www.cnet.com/tech/services-and-software/search-engine-you-com-launches-chatgpt-style-chatbot) of AI chatbots giving our erroneous information.

## You.com apps from a product perspective

Let's examine the pros and cons of the app features from the perspective of product strategy as well.

### Pros for the product

- **Centrality**: A *lot* of functionality is included, increasing the likelihood that a user will stay on the site longer.
- **Appealing to target audience**: When Stack Overflow and YouCode apps are visibly embedded within search results, it's easy to see their utility.
- **Fresh and exciting**: It's been some time since search engines have seen true innovation, and apps feel like a preview of what's coming.
- **Leaves the door open to add more functionality**: Apps are currently based around websites or AI tools, but it's easy to envision more kinds of tools entering this space (something like a [Todoist](https://todoist.com/home) widget comes to mind).

### Cons for the product

- **Lots of development work required**: Since the You.com team is creating most of the apps (so far), it has to be a lot of work to create and maintain apps for so many websites, web applications, and AI-tools
- **Lack of incentive for sites to develop their own apps**: By keeping the user in one central location, websites could take a hit in page views. I think they're unlikely to put work into something that could harm their own business model.
- **Intertia**: One consequence of novelty is that people may be inclined to stick with something they better know and understand

## Conclusion

I've used You.com and its apps for help with coding, and I've found it to have utility for the use case of quickly finding answers to questions and generating snippets of code that clarify the answer.

The search engine is a staple of the internet, and changes to them have far-reaching implications. It's a risk for a product's value proposition to rely on novel forms of technology. While there's much debate about the role that AI will play in shaping the next generation of technology, there's no doubt we'll be hearing about it for a long time to come.
