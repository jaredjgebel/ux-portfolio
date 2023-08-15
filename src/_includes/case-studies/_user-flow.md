The business problem { #the-business-problem .sm-subheading-small .xl-subheading-sm .text-neutral-80 .mb-3 }

## Selling grain in an unstable market

Each year, grain farmers must **sell their crops to local processors**
at the highest possible price. That's a challenge, because the
**commodities markets are volatile**.

The **decision to commit to a sales contract is a critical moment** of
the growing season. A single trade could gain (or cost) a farm thousands
of dollars in revenue.

## Making urgent and complex market decisions

During an interview, a grain farmer told a story that illustrates the
difficulties of choosing to commit to a contract.

While on the road for his second job, he heard on the radio that corn
prices had risen - a lot. He wanted to sell his crop ahead of time on a
**forward contract** to lock in a price.

Market opportunities vanish quickly. But to make a final decision, he
**needed to review the farm's financial metrics** for the season.

<div class="flex flex-col-reverse items-center md:block">
<!-- Man in Truck -->
<div class="max-w-[18rem] md:float-right md:ml-5">
<img class="md:my-0 md:h-full md:object-cover"
    src="../../assets/images/case-studies/user-flow/man-in-truck.webp" alt="" />

</div>
</div>

He had no choice but to:

1.  Pull his truck over to the side of the road
2.  Set up a mobile hotspot through his phone
3.  Go online to access the spreadsheet with his financial records
4.  Enter the current corn price into the spreadsheet
5.  Evaluate the data to make a decision about signing a contract for
    the current price
6.  Call the grain buyer at his local processor to sell

Even in these less-than-ideal circumstances, this process could be
simplified.

{% callout "bg-primary-50" %}

By making it easier to analyze market information, grain farmers could
increase their profits by making more informed and timely decisions.

{% endcallout %}

## Reducing friction for farmers with beginner-level computer skills

My research unearthed findings that informed how I constructed the
workflow:

- Farmers expressed little confidence in their technical abilities
- The median age of U.S. farmers is significantly higher than that of
  the general population
- Farmers check market prices in a variety of contexts - in the field,
  at home, or at a second job

{% callout "bg-primary-50" %}

Farmers are familiar with their domain but have limited technical
expertise.

Consequently, I balanced competing needs for powerful functionality and
a simple interface.

{% endcallout %}

Given these findings, I wanted to be mindful of key **constraints**:

1.  Limit data entry
2.  Make transitions as effortless as possible
3.  Favor redundancy over brevity

The user flow {#the-user-flow .lead .sm-subheading-small .xl-subheading-sm .text-neutral-80 .mb-3}

## Evaluating prospective sales contracts

### Why make a user flow?

I wrote out the user flows to:

- Articulate how the task required moving across multiple sections of
  the interface
- Facilitate smooth transitions through noting likely navigation paths
- Map out what application state could be transferred between contexts

### Stepping through the user flow

This flow follows one of my personas, the Forward Contractor, as he
considers whether to sell a portion of his grain.

The flow assumes that the Forward Contractor has set up the following
market alert:

<div class="inline-flex flex-col items-center w-full my-4">
   <img class="my-0 max-w-md" src="../../assets/images/case-studies/user-flow/add-market-alert.webp" alt="" width="100%" height="auto" />
</div>

### 1. Receive notification

The Forward Contractor receives a notification about a price alert.

<div class="inline-flex flex-col items-center w-full my-4">
   <img class="my-0 max-w-md" src="../../assets/images/case-studies/user-flow/notification.webp" alt="A notification stating 'December '23 corn up at Ag Solutions, Inc. in Melville, change +0.23, price 6.16'. At the bottom, two links read 'View contract' and 'Sell now'." width="448" height="378" />
</div>

The Forward Contractor is interested in selling. He selects **View contract**.

### 2. View contract information

Prices vary between processors, so he wants to find the highest price nearby.

<div class="inline-flex flex-col items-center w-full my-4">
{% lightbox "case-studies/user-flow/evaluate-contract-2", "2272", "1758" %}
</div>

#### Features to note {#features-to-note-2}

1.  **Immediate relevant context**
    - The user is directed to the **expanded table row** with more
      information about the contract from the notification
2.  **Add to projections**
    - The contract is added to Contract Projections to further examine
      revenue statistics

Before making a final decision, the Forward Contractor wants to see how
this sale would affect his overall seasonal revenue.

He selects **Add to projections**.

<video controls autoplay>
  <source src="/assets/video/cash-bids-contract-projection-transition.mp4" type="video/webm" />
  <source src="/assets/video/cash-bids-contract-projection-transition.mp4" type="video/mp4" />
  <p>
    Your browser doesn't support HTML video. Here is a
    <a href="/assets/video/cash-bids-contract-projection-transition.mp4">link to the video</a> instead.
  </p>
</video>

### 3. Evaluate revenue metrics for the season

The Contract Projections view allows the Forward Contractor to **see how
the farm's revenue metrics would change by selling at the current
contract price**.

<video controls autoplay>
  <source src="/assets/video/contract-projections-animation.mp4" type="video/webm" />
  <source src="/assets/video/contract-projections-animation.mp4" type="video/mp4" />
  <p>
    Your browser doesn't support HTML video. Here is a
    <a href="/assets/video/contract-projections-animation.mp4">link to the video</a> instead.
  </p>
</video>

The Forward Contractor can view the **financial effect of committing to
contracts at different prices**. He can even see how different
combinations of contracts would affect the farm's net revenue.

<div class="inline-flex flex-col items-center w-full my-4">
{% lightbox "case-studies/user-flow/evaluate-contract-3", "2266", "1758" %}
</div>

#### Features to note {#features-to-note-3}

1.  **Contract list**
    - Lists contract specs that can be added to the Projected Summary
2.  **Projected contracts total**
    - When a contract is checked, it's added to the
      Projected Contracts column. The user can see how each revenue statistic would change if that contract was signed
3.  **Review and edit individual contract**
    - View or change specs and associated charges for the listed contract on a separate tearsheet

In this case, the Forward Contractor would see that selling 10,000
bushels at 6.16 brings down the total average price per bushel from 6.39
to 6.34.

However, if he had signed a contract for the previous day's price - 5.96
per bushel - the average price per bushel would have tumbled to 6.29.
This amounts to a **gain of \$2,333** in revenue for a small portion of
the crop from a matter of hours in the markets.

## Conclusion

Market Watcher **brings together each part of the decision-making
process**. Consolidating the data makes it easier for grain farmers to
analyze the decision. By transferring the information between contexts,
the farmer is able to play around with possible revenue scenarios with
ease.

### To explore the specifics of the design

[Figma file with all views and user
flows](https://www.figma.com/file/Tjw04NNIDyaZpHf6ITOOMC/Commodities-Application?node-id=64%3A31382&t=PWaEQUY4qPaATaP3-1)
{.mt-0}

[Email me](mailto:jaredjgebel@gmail.com) to connect or ask questions.

### Attributions

- Photo by [Maxim Hopman](https://unsplash.com/@nampoh) on [Unsplash](https://unsplash.com/s/photos/stock-market)
- Photo by [Tobi from Pexels](https://www.pexels.com/photo/man-wearing-black-denim-jacket-in-driver-s-seat-620332/)
- Photo by [Chris Bair](https://unsplash.com/@chrisbair) on [Unsplash](https://unsplash.com/photos/kXe_mqOFAmM)
