## My research process

### Secondary sources

As a regulated and subsidized industry, there is a substantial amount of data on farming and the commodities markets from reputable online sources. By gathering as much background information as possible from secondary sources, I could focus on workflows during user interviews and avoid having to ask for information that could be found elsewhere.

My sources included:

{% accordion "4" "sources" %}

### User research

I interviewed grain farmers, focusing on how they check the markets, their market strategies for selling grain, and their complete workflow when they decide to make a sale or place a hedge.

<div class="inline-flex flex-col items-center w-full my-4">
   <img class="my-0 w-full max-w-md" src="../../assets/images/case-studies/research-value/interview-protocol.webp" alt="" width="836" height="537" />
</div>

Through observations, I learned about their technical literacy, the format in which they expect to see the information, and general pain points around using technology.

<div class="flex flex-row items-center my-5 ml-[-0.75rem]">
    <a href="https://docs.google.com/document/d/1bgfEe1HIbp1eq2GIZKgShCSli1iOXSMcC3CKQY8APm8/edit?usp=sharing" target="_blank" class="cta flex w-fit px-3 py-3 gap-3 rounded-[4px] group focus:outline focus:outline-2 active:outline active:outline-2 active:outline-primary-50">
        <div class="shrink-0 flex items-center">
    <svg width="24" height="24" class="fill-primary-70 group-hover:fill-primary-50 group-active:fill-primary-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 5v14H5V5h14zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
    <path d="M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
</svg>
</div>
      <span class="sm-body-featured text-primary-70 group-hover:text-primary-50 group-active:text-primary-50
        relative">The full interview protocol</span>
    </a>
  </div>

### Findings

#### How the players of the marketplace interact

As the chart below demonstrates, there is a complex interplay between several entities in the marketplace.

<div class="inline-flex flex-col items-center w-full my-4">
{% lightbox "case-studies/research-value/grain-exchange-chart", "1324", "755" %}
</div>

By understanding the scope of the marketplace, I was able to think critically about how local processors and derivatives brokers may be able to find use in the application by interacting with farmers.

#### Trading and hedging strategies

The variety of trading and hedging strategies farmers can utilize is a large topic unto itself. I focused on **forward contracts** and **futures contracts**, the most popular options for hedging.

1. **Forward contracts** allow farmers to sell grain to local processors ahead of harvest when market prices are high
   - Benefit: Price is completely locked in for the season with a local processor
   - Risk: If farmer sells too much, crop failure will cause contract to be unfulfilled
2. Farmers can place hedges by buying and selling **futures contracts**, which are based on the anticipated value of commodities
   - Benefit: Selling price is guaranteed, with more flexibility than forward contracts
   - Risk: If prices change and there’s a [margin call](https://www.investopedia.com/terms/m/margincall.asp), you need a significant amount of cash or credit on hand

#### Farmers

I identified the essential tasks in their market workflows:

- Quickly and frequently accessing up-to-date information on the markets
- Tracking information on contracts they’ve signed
- Checking on the details of their sales contracts
- Assessing trading strategies and simulating how different price scenarios may play out

I learned that as a user base, farmers are:

- Weary of technology
- Doubtful of their technical capabilities
- Expecting to see market data in the standardized format

{% callout "bg-richBrown" %}

From my research, I learned that simply replicating farmers’ existing workflows into technology was not going to be enough. Farmers would not deal with the hassle of learning how to use a new application unless it provided significant value.

{% endcallout %}

I used my research findings with an eye for what would give farmers the most opportunity to increase their profits.

## Impact of research

### Features that directly address workflow pain points

As I describe in my [product design case study](https://www.jaredjgebel.com/case-studies/market-watcher-product-design/), I used my knowledge to prioritize the features that would bring most value to grain farmers.

### Shaping my design process

#### Personas

Personas have gotten a reputation as a weak design artifact, primarily because they're often more based in assumptions than research. I felt comfortable using personas because I had solid data on the kinds of behavior my target group engages in.

To that end, I emphasized the market strategies that the personas engaged in, emphasizing how they might interact with the application over personal characteristics.

{% accordion "4" "personas" %}

<div class="flex flex-row items-center my-5">
    <a href="https://docs.google.com/document/d/1XJsz47POAVJER1EOj32qGjbZtVwix7nO84YmfVRbYY0/edit?usp=sharing" target="_blank" class="cta flex w-fit px-3 py-3 gap-3 rounded-[4px] group focus:outline focus:outline-2 active:outline active:outline-2 active:outline-primary-50">
        <div class="shrink-0 flex items-center">
    <svg width="24" height="24" class="fill-primary-70 group-hover:fill-primary-50 group-active:fill-primary-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 5v14H5V5h14zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
    <path d="M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
</svg>
</div>
      <span class="sm-body-featured text-primary-70 group-hover:text-primary-50 group-active:text-primary-50
        relative">The complete Market Watcher personas</span>
    </a>
  </div>

Because the personas were based on reputable sources, I was more comfortable making them a central part of the design process. To that end, I wrote jobs-to-be-done style user stories for each persona that directly translated into user flows.

### Creating a simple interface for a complex product

My research allowed me to identify important constraints for the product, primarily around keeping the interface to a low level of complexity for the farmer user base. One example of this was being as explicit as possible while using progressive disclosure.

In a data-heavy interface, progressive disclosure is necessary to create hierarchy and reduce the amount of visual noise. However, in my observations, I noticed that users were more likely to understand text instructions than common navigational elements that would facilitate progressive disclosure.

For example, I used Carbon Design System to build out the interface, and I made heavy use of data tables. According to the design system guidelines, an overflow menu is the suggested UI element to list actions to take on a data table item.

<div class="inline-flex flex-col items-center w-full my-4">
{% lightbox "case-studies/research-value/cash-bids-overflow", "1470", "649" %}
</div>

However, I was concerned that farmers would not find the overflow menu. To that end, the actions for each data table item are listed as labelled icon buttons.

<div class="inline-flex flex-col items-center w-full my-4">
{% lightbox "case-studies/research-value/cash-bids-table-row", "1470", "445" %}
</div>

The buttons take up more room, so it’s a slightly less elegant solution. However, in this case the increased visibility of the actions was more important.

### Getting the details right

#### Contracts

Grain contracts are detailed documents. There are many specs associated with a contract, including storage rates, moisture requirements, and delivery charges.

<div class="inline-flex flex-col items-center w-full my-4">
{% lightbox "case-studies/research-value/my-contracts", "1566", "2103" %}
</div>

My research allowed me to dig into the small contract details that increase the relevancy of the product. After all, I couldn’t expect saved contracts to have meaning if they were missing important charges.

#### Revenue statistics

Another key feature of the application is an overview of seasonal revenue statistics. Without research, I wouldn’t have understood which statistics held the most importance to farmers.

<div class="inline-flex flex-col items-center w-full my-4">
{% lightbox "case-studies/research-value/contract-summary", "1470", "1069" %}
</div>

For example, in the contract summary above, _Bushels sold (per acre)_, _Average price (per bushel)_, and _Revenue (per acre)_ all have significant meaning to farmers. I may not have included any of them without learning more about the topic.

### Linking together features to facilitate market strategies

Finally, I crafted workflows that integrated my knowledge of market strategies. For example, one strategy when selling futures contracts is to buy them back later in the season, ideally at a lower price to incur a profit.

Because I was aware of that strategy, I knew that farmers would want to closely follow changes in that contract price, particularly if prices fall. In the _[Add a futures contract](https://www.figma.com/file/Tjw04NNIDyaZpHf6ITOOMC/Market-Watcher?type=design&node-id=823%3A99665&mode=design&t=mEC4OT1tdtCOJOUI-1)_ workflow, I inserted a screen to add a market alert for the same month. The _Price Threshold_ alert send a notification to the farmer when prices go fifty cents above or below the entered contract price of 6.53.

<div class="inline-flex flex-col items-center w-full my-4">
{% lightbox "case-studies/research-value/add-market-alert", "951", "772" %}
</div>

This screen encourages farmers to sign up for a market alert. With knowledge of that strategy, the market alert request is timely and appropriate. If accepted by the user, an important feature to encourage further use of the product will be activated.

## Conclusion

The process illustrated here exemplifies my approach to research and design: extending the value proposition by substantively understanding a problem area and integrating that knowledge into my designs. In this case, I needed to have a thorough understanding of the user and business perspectives to simplify farmers’ workflows.

{% callout "bg-richBrown" %}
The more work it is for a user to successfully integrate a product into their business, the higher the potential reward from using said product has to be.
{% endcallout %}

With the specific use case and target user, even though the potential for additional profits was high, it was important to take every opportunity to reduce the effort for farmers to get started and see the value in the product.

### Attributions

- Photo by [Svitlana Rusak](https://unsplash.com/@svitlana_rusak?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/-neuFYni19o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
- Photo by [Jim Witkowski](https://unsplash.com/@jcw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/ZaVUNY5rHmY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
