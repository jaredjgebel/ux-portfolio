## The business problem {.sm-subheading-small .xl-subheading-sm .text-neutral-80 .mb-3}

### Being a successful farmer requires thinking like a stock trader {.mt-2 .sm-heading-2 xl:xl-heading-2}

Grain farming may seem idyllic, but a number of **risk factors** threaten a farm's livelihood every growing season. One factor is the **volatility of grain prices**.

<!-- Corn 23 Prices -->
<figure class="inline-flex flex-col items-center w-full my-4">
    <picture>
        <source srcset="../../assets/images/case-studies/product-design/corn-23-prices.webp" media="(min-width:43rem)" />
        <img class="my-0" src="../../assets/images/case-studies/product-design/corn-23-prices-sm.webp" alt="Chart of corn prices, showing high of $6.75 and low of $5.46" width="100%" height="auto" />
    </picture>
    <figcaption>Price per bushel of December '23 corn futures over one year, courtesy of barchart.com</figcaption>
</figure>

For an average-sized corn farm<sup>1</sup>, the difference in selling at the 2022 market high of $6.75 and low of $5.46 is **$61,920**. For a small business, that gap in revenue could be the **difference between making a profit or taking a loss**.

In order to reduce risk and maximize revenue, savvy farmers use a variety of strategies, including:

<!-- Prices Screen -->
<div class="flex flex-col-reverse items-center md:block">
<div class="max-w-[320px] md:float-right md:w-52 md:ml-5">
<img class="md:my-0 md:h-full md:object-cover"
    src="../../assets/images/case-studies/product-design/prices-screen.webp" alt="" />

</div>
<div>

- Selling grain to local processors before harvest on a **forward contract** when grain prices are high {.mt-0}
- Using hedging strategies by buying and selling **futures** and **options** from the national commodities exchange ([CME Group](https://www.cmegroup.com/)) {.mb-0}
  {.mt-0 .mb-0}

Using these strategies requires the responsiveness and sensibility of a stock trader.

</div>
</div>

## The Market Watcher solution {.lead .sm-subheading-small xl:.xl-subheading-sm .text-neutral-80 .mb-3 .clear-right }

## Increasing revenue and mitigating price risk

My application aims to improve upon farmers’ existing methods for dealing with the markets. The tasks required to handle grain marketing fall into two general groups: monitoring market prices and evaluating potential contracts.

<div class="feature-section border-solid border-l-4 border-rose-900 px-5 md:mt-7">

### Monitoring market prices

Farmers must closely watch the markets to see if they can sell their crop ahead of harvest when prices are high.

#### How farmers currently monitor market prices

- Checking market-related websites, radio stations, and TV channels several times per day

#### How monitoring market prices could be more efficiently completed

An **alert system** to send users notifications about changes in grain prices

<!-- Notification -->

<div class="w-[16rem] h-[13.5rem]">
<img class="md:my-0"
    src="../../assets/images/case-studies/product-design/notification-sidebar.webp" alt="" width="512px" height="434px" />
</div>

#### Benefits of a market alert system

- Security of knowing that market opportunities aren’t slipping by
- Saved time and energy to get the specific information they need

</div>

<div class="feature-section border-solid border-l-4 border-lime-900 px-5 mt-8">

### Evaluating potential contracts

A crucial decision point is whether or not to sell when prices spike.

#### How farmers currently evaluate potential contracts

- Retrieving active sales contracts and revenue statistics
  - Calling grain buyers or using pencil and paper
- Deciding to sell based on what information is in front of them or what they can remember

#### How evaluating potential contracts could be more efficiently completed

- A system that collects information on signed contracts and projects possible revenue outcomes, including:

Overall **revenue statistics** for the season

  <figure class="inline-flex flex-col w-full my-0">
      <picture>
          <source srcset="../../assets/images/case-studies/product-design/projected-summary-table/projected-summary-xl.webp" media="(min-width:67rem)" width="608px" height="464px" />
<source srcset="../../assets/images/case-studies/product-design/projected-summary-table/projected-summary-md-lg.webp" media="(min-width:51rem)" width="434px" height="471px" />
<source srcset="../../assets/images/case-studies/product-design/projected-summary-table/projected-summary-md.webp" media="(min-width:43rem)" width="544px" height="471px" />

<img src="../../assets/images/case-studies/product-design/projected-summary-table/projected-summary-sm.webp" alt="" class="my-0" width="256px" height="486px" />
</picture>

  </figure>

A **spreadsheet-like interface** to compare how different contract specs would affect overall revenue

<!-- Projected contracts table -->
  <figure class="inline-flex flex-col w-full my-0">
      <picture>
          <source srcset="../../assets/images/case-studies/product-design/projected-contracts-table/projected-contracts-table-xl.webp" media="(min-width:83rem)" width="608px" height="329px" />
<source srcset="../../assets/images/case-studies/product-design/projected-contracts-table/projected-contracts-table-md-lg.webp" media="(min-width:51rem)" width="434px" height="262px" />
<source srcset="../../assets/images/case-studies/product-design/projected-contracts-table/projected-contracts-table-md.webp" media="(min-width:43rem)" width="544px" height="544px" />

  <img src="../../assets/images/case-studies/product-design/projected-contracts-table/projected-contracts-table-sm.webp" alt="" class="my-0" width="256px" height="256px" />
      </picture>
  </figure>

#### Benefits of making contract statistics visible

- Being able to see the direct effects of changes in contract prices on overall revenue
- Reducing mental overhead of decision-making by making more data available
- Easily accessing functionality on-the-go

</div>

## Grain processors {.lead .sm-subheading-small .xl-subheading-sm .text-neutral-80 .mb-3}

### Engaging of the other side of the marketplace

Grain processors buy and collect grain from farmers, transporting it into the supply chain.

While testing the feature to save contracts in the app, a farmer asked me a question: "Why don't grain processors send the contracts directly to us?"

{% callout %}
I realized that within the broader business context, grain processors could and _should_ be incentivized to use Market Watcher.
{% endcallout %}

<!-- Grain elevator -->
<div class="flex flex-col items-center">
<img class="h-auto max-h-[320px] w-auto"
    src="../../assets/images/case-studies/product-design/grain-elevator.webp" alt="" />
</div>

<!-- <div class="flex flex-col items-center md:block">
<div class="max-w-[320px] md:float-left md:w-52 md:mr-5">
<img class="md:mb-0 md:mt-[1.125rem] xl:mt-[2.125rem] md:h-[90%] md:object-cover"
    src="../../assets/images/case-studies/product-design/grain-elevator.webp" alt="" />

</div>
</div> -->

To explore this idea further, I interviewed an employee from a processor to learn about their specific needs.

From a product design standpoint, I was intrigued by the opportunity to outline additional features that would offer business advantages to processors.

These advantages include:

### Sending contract specs directly to farmers {.mt-10}

Employees at grain processors must **constantly communicate** with farmers in order to buy grain and coordinate logistics. Market Watcher could ease this problem by sending farmers details about their contracts through the app.

This feature would:

- Reduce redundant communication between farmers and employees
- Save farmers the burden of data entry, one of the biggest barriers to product adoption

### Promoting contract offerings

Processors offer many kinds of contracts to farmers, many of which boost revenue potential for the processor. Market Watcher could be a medium to **strategically promote contracts** to farmers. In contract projections, it could even be a way to **demonstrate exactly how certain contracts boost farmers’ revenue**.

On a product roadmap, my highest priority would be developing features to grant these benefits to processors.

## Conclusion {.lead .sm-subheading-small .xl-subheading-sm .text-neutral-80 .mb-3}

### Prioritizing multiple players in a business context

Through my research, I identified the **features that add the most value** to grain farmers’ market strategy. By examining the roles of grain farmers and processors, I developed additional features to **incentivize application usage on both sides of the marketplace**.

### To explore the specifics of the design

[Figma file with all views and user flows](https://www.figma.com/file/Tjw04NNIDyaZpHf6ITOOMC/Commodities-Application?node-id=64%3A31382&t=PWaEQUY4qPaATaP3-1) {.mt-0}

### Footnotes

1. 278 acres, as of 2016. [Trends in Production Practices and Costs of the U.S. Corn Sector, USDA](https://www.ers.usda.gov/webdocs/publications/101722/err-294.pdf?v=2482.5). {.mt-0}

### Attributions

- Photo by [Taylor Siebert](https://unsplash.com/@taylorsiebert?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/collections/L51m_W9i3WQ/case-study/d3420e971a3ed31bd5173d5ea5e8e306?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
- [Photo](https://www.pexels.com/photo/stock-exchange-board-210607/) by Pixabay from Pexels
- Photo by [Cody Otto](https://unsplash.com/@codyotto507?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/pCKm6iD7sFo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
