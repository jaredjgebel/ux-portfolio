## The business problem {.sm-subheading-small .xl-subheading-sm .text-neutral-80 .mb-3}

### Being a successful farmer requires thinking like a stock trader

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

In order to reduce risk and maximize revenue, savvy farmers use a variety of strategies to increase the selling price of their grain, including:

<div class="flex flex-col-reverse items-center md:block">
<!-- Prices Screen -->
<div class="max-w-[320px] md:float-right md:w-52 md:ml-5">
<img class="md:my-0 md:h-full md:object-cover"
    src="../../assets/images/case-studies/product-design/prices-screen.webp" alt="" />

</div>
<div>

- Selling grain to local processors before harvest on a **forward contract** when grain prices are high {.mt-0}
- Using hedging strategies by buying and selling derivatives, primarily **futures** and **options**, from the national commodities exchange ([CME Group](https://www.cmegroup.com/)) {.mb-0}
  {.mt-0 .mb-0}

Using these strategies requires the responsiveness and sensibility of a stock trader.

</div>
</div>

## The Market Watcher solution {.sm-subheading-small .xl-subheading-sm .text-neutral-80 .mb-3 .pt-7 .mdlg:pt-0 .clear-right .max:pt-9}

## Features to help farmers increase revenue and mitigate price risk

My application aims to improve upon farmers’ existing methods for dealing with the markets. The tasks required to handle grain marketing fall into two general groups: monitoring market prices and evaluating potential contracts.

<div class="feature-section border-solid border-l-4 border-rose-900 px-5 md:mt-7">

### Monitoring market prices

#### How farmers currently monitor market prices

- Checking market-related websites, radio stations, and TV channels several times per day

#### How monitoring market prices could be more efficiently completed

- An **alert system** to send users notifications about relevant changes in grain prices

<!-- Notification -->

<div class="w-[16rem] h-[13.5rem]">
<img class="md:my-0"
    src="../../assets/images/case-studies/product-design/notification-sidebar.webp" alt="" width="512px" height="434px" />
</div>

#### Benefits of a market alert system

- Security of knowing that market opportunities aren’t slipping by
- Saved time and energy
- Easier to get the specific information they’re looking for

</div>

<div class="feature-section border-solid border-l-4 border-lime-900 px-5">

### Evaluating potential contracts

#### How farmers currently evaluate potential contracts

- Looking up previous sales contracts and revenue statistics
  - Spreadsheets, calling grain buyers, using pencil and paper
- Deciding to sell based on what information is front of them or just in their head

#### How evaluating potential contracts could be more efficiently completed

- A system that collects information on signed contracts and projects possible revenue outcomes, including:

Overall **revenue statistics** for the season

  <figure class="inline-flex flex-col items-center w-full my-0">
      <picture>
          <source srcset="../../assets/images/case-studies/product-design/projected-summary-table/projected-summary-xl.webp" media="(min-width:67rem)" width="608px" height="464px" />
<source srcset="../../assets/images/case-studies/product-design/projected-summary-table/projected-summary-md-lg.webp" media="(min-width:51rem)" width="434px" height="471px" />
<source srcset="../../assets/images/case-studies/product-design/projected-summary-table/projected-summary-md.webp" media="(min-width:43rem)" width="544px" height="471px" />

<img src="../../assets/images/case-studies/product-design/projected-summary-table/projected-summary-sm.webp" alt="" width="256px" height="486px" />
</picture>

  </figure>

A **spreadsheet-like interface** to compare how different contract specs would affect overall revenue

<!-- Projected contracts Table -->
  <figure class="inline-flex flex-col items-center w-full my-0">
      <picture>
          <source srcset="../../assets/images/case-studies/product-design/projected-contracts-table/projected-contracts-table-xl.webp" media="(min-width:83rem)" width="608px" height="329px" />
<source srcset="../../assets/images/case-studies/product-design/projected-contracts-table/projected-contracts-table-md-lg.webp" media="(min-width:51rem)" width="434px" height="262px" />
<source srcset="../../assets/images/case-studies/product-design/projected-contracts-table/projected-contracts-table-md.webp" media="(min-width:43rem)" width="544px" height="544px" />

  <img src="../../assets/images/case-studies/product-design/projected-contracts-table/projected-contracts-table-sm.webp" alt="" width="256px" height="256px" />
      </picture>
      
  </figure>

#### Benefits of making contract statistics visible

- Being able to see the direct effects of changes in contract prices on overall revenue
- Reducing mental overhead of decision-making by making more data available
- Easily accessing functionality on-the-go

</div>

## Grain processors {.sm-subheading-small .xl-subheading-sm .text-neutral-80 .mb-3}

### Engaging of the other side of the marketplace: grain processors

Grain processors take the physical commodity from farmers and transport it into the supply chain. During my research, I learned that there could be **advantages to considering grain buyers as a secondary user group**. To that end, I interviewed an employee at a processor to understand user needs and business needs from the other side of the marketplace.

<div class="flex flex-col items-center md:block">
<!-- Prices Screen -->
<div class="max-w-[320px] md:float-left md:w-52 md:mr-5">
<img class="md:my-0 md:h-full md:object-cover"
    src="../../assets/images/case-studies/product-design/grain-elevator.webp" alt="" />

</div>
</div>

### Freeing up grain buyers

Grain buyers directly facilitate transitions with local farmers. In their current process, they must **constantly communicate** with farmers to buy grain on contract and coordinate logistics.

Grain buyers could use Market Watcher to **send farmers details about their contracts** electronically. This function would greatly **reduce the amount of necessary communication**. Meanwhile, it would also **save farmers the burden of data entry**, which would be one of the biggest barriers to product adoption.

### Promoting contract offerings

Processors offer many kinds of contracts to farmers. Market Watcher could be a medium to promote different types of contracts. In the contract projection feature, it could even be a way to **demonstrate exactly how certain contracts boost farmers’ revenue**.

Designing for processors ultimately fell outside the scope of this case study. However, my next priority would be developing the processor side of the interface.

## Conclusion

Through my research, I identified the **features that add the most value** to grain farmers’ market strategy. By examining the roles of farmers and grain buyers, I thought of additional features that facilitate the grain exchange process.

To explore the specifics of the design {.sm-heading-4 .xl:xl-heading-4 .mb-2}

[Figma file with all views and user flows](https://www.figma.com/file/Tjw04NNIDyaZpHf6ITOOMC/Commodities-Application?node-id=64%3A31382&t=PWaEQUY4qPaATaP3-1) {.mt-0}

Footnotes {.sm-heading-4 .xl:xl-heading-4 .mb-2}

1. 278 acres, as of 2016. [Trends in Production Practices and Costs of the U.S. Corn Sector, USDA](https://www.ers.usda.gov/webdocs/publications/101722/err-294.pdf?v=2482.5). {.mt-0}

Attributions {.sm-heading-4 .xl:xl-heading-4 .mb-2}

Images: {.mt-0}

- Photo by [Taylor Siebert](https://unsplash.com/@taylorsiebert?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/collections/L51m_W9i3WQ/case-study/d3420e971a3ed31bd5173d5ea5e8e306?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
- [Photo](https://www.pexels.com/photo/stock-exchange-board-210607/) by Pixabay from Pexels
- Photo by [Cody Otto](https://unsplash.com/@codyotto507?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/pCKm6iD7sFo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)