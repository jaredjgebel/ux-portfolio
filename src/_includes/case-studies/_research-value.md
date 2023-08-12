## My research process

### Secondary sources

As a regulated and subsidized industry, there is a substantial amount of data on farming and the commodities markets from reputable online sources. By gathering as much background information as possible from secondary sources, I could focus on workflows during user interviews and avoid having to ask for information that could be found elsewhere.

My sources included:

1. USDA (U.S. Department of Agriculture) reports

As an entire branch of the federal government, the USDA provides a wealth of government-sponsored data on farming. A demographic census of farmers and a report on trading behaviors were crucial in informing my perspective.

2. University agriculture departments

Ag extension offices educate farmers in business-related manners. I learned a lot from seeing everything that goes into farming as a business. References like sample contracts and budgets improved the immediate practicality of my design.

3. CME Group’s educational resources

As the national commodities exchange, CME Group benefits when farmers participate in the derivatives markets (futures and options), so it’s advantageous for them to provide accurate information on hedging strategies.

—

### User research

I interviewed grain farmers, focusing on how they check the markets, their market strategies for selling grain, and their complete workflow when they decide to make a sale or place a hedge.

<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image1.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image1.png "image_tooltip")

Through observations, I learned about their technical literacy, the format in which they expect to see the information, and general pain points around using technology.

\*\*\* \
CTA link: [My interview protocol](https://docs.google.com/document/d/1bgfEe1HIbp1eq2GIZKgShCSli1iOXSMcC3CKQY8APm8/edit) \

---

### Findings

#### How the players of the marketplace interact

As the chart below demonstrates, there is a complex interplay between several entities in the marketplace.

<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image2.jpg). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image2.jpg "image_tooltip")

By understanding the scope of the marketplace, I was able to think critically about how local processors and derivatives brokers may be able to find use in the application by interacting with farmers.

#### Trading and hedging strategies

The variety of trading and hedging strategies farmers can utilize is a large topic unto itself. I focused on forward contracts and futures contracts, the most popular options for hedging.

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

From my research, I learned that simply replicating their farmers’ existing workflows into technology was not going to be enough. Farmers would not deal with the hassle of learning how to use a new application unless it provided significant value.

I used my research findings with an eye for what would give farmers the most opportunity to increase their profits.

## Impact of research

### Features that directly address workflow pain points

As I describe in my [product design case study](https://www.jaredjgebel.com/case-studies/market-watcher-product-design/), I used my knowledge to prioritize the features that would bring most value to grain farmers.

### Shaping my design process

Personas have gotten a reputation as a weak design artifact, primarily because often more based in assumptions than research. I felt comfortable using personas because I had solid data on the kinds of behavior my target group engages in.

To that end, I emphasized the market strategies that the personas engaged in, emphasizing how they might interact with the application over personal characteristics.

#### Personas

The Part-Time Farmer

- Sells crop upon delivery during harvest
- Majority of farmers fall under this category, but they have much smaller farms

The Forward Contractor

- Sells crops to local processors ahead of harvest on contract
- Pays close attention to market prices throughout the season and how prices vary among different local processors

The Derivatives Hedger

- Uses hedging strategies to optimize prices
- Has a sophisticated understanding of the interplay of the markets and a higher risk tolerance

CTA link: [The complete Market Watcher personas](https://docs.google.com/document/d/1XJsz47POAVJER1EOj32qGjbZtVwix7nO84YmfVRbYY0/edit)

The grounded nature of the personas made me feel more comfortable making them a central part of the design process by including jobs-to-be-done style user stories that directly translated into user flows.

### Creating a simple interface for a complex product

My research allowed me to identify important constraints for the product, primarily around keeping the interface to a low level of complexity for the farmer user base. One example of this was being as explicit as possible while using progressive disclosure.

In a data-heavy interface, progressive disclosure is necessary to create hierarchy and reduce the amount of visual noise. However, in my observations, I noticed that users were more likely to understand text instructions than common navigational elements that would facilitate progressive disclosure.

For example, I used Carbon Design System to build out the interface, and I made heavy use of data tables. According to the design system guidelines, an overflow menu is the suggested UI element to list actions to take on a data table item.

<p id="gdcalert3" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image3.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert4">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image3.png "image_tooltip")

However, I was concerned that farmers would not find the overflow menu. To that end, the actions for each data table item are listed as labelled icon buttons.

<p id="gdcalert4" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image4.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert5">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image4.png "image_tooltip")

The buttons take up more room, so it’s a slightly less elegant solution. However, in this case the increased visibility of the actions was more important.

### Getting the details right

#### Contracts

Grain contracts are detailed documents. There are many specs associated with a contract, including storage rates, moisture requirements, and delivery charges.

<p id="gdcalert5" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image5.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert6">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image5.png "image_tooltip")

My research allowed me to dig into the small contract details that increase the relevancy of the product. After all, I couldn’t expect saved contracts to have meaning if they were missing important charges.

#### Revenue statistics

Another key feature of the application is an overview of seasonal revenue statistics. Without research, I wouldn’t have understood which statistics held the most importance to farmers.

<p id="gdcalert6" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image6.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert7">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image6.png "image_tooltip")

For example, in the contract summary above, _Bushels sold (per acre)_, _Average price (per bushel)_, and _Revenue (per acre)_ all have significant meaning to farmers. I may not have included any of them without learning more about the topic.

### Linking together features to facilitate market strategies

Finally, I crafted workflows that integrated my knowledge of market strategies. For example, one strategy when selling futures contracts is to buy them back later in the season, ideally at a lower price to incur a profit.

Because I was aware of that strategy, I knew that farmers would want to closely follow changes in that contract price, particularly if prices fall. In the _[Add a futures contract](https://www.figma.com/file/Tjw04NNIDyaZpHf6ITOOMC/Market-Watcher?type=design&node-id=823%3A99665&mode=design&t=mEC4OT1tdtCOJOUI-1)_ workflow, I inserted a screen to add a market alert for the same month. The _Price Threshold_ alert send a notification to the farmer when prices go fifty cents above or below the entered contract price of 6.53.

<p id="gdcalert7" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image7.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert8">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image7.png "image_tooltip")

This screen encourages farmers to sign up for a market alert. With knowledge of that strategy, the market alert request is timely and appropriate. If accepted by the user, an important feature to encourage further use of the product will be activated.

## Conclusion

The process illustrated here exemplifies my approach to research and design: extending the value proposition by substantively understanding a problem area and integrating that knowledge into my designs. In this case, I needed to have a thorough understanding of the user and business perspectives to simplify farmers’ workflows.

The more work it is for a user to successfully integrate a product into their business, the higher the potential reward from using said product has to be. With the specific use case and target user, even though the potential for additional profits was high, it was important to take every opportunity to reduce the effort for farmers to get started and see the value in the product.
