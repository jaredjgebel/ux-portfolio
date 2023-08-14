// adapted from https://devdojo.com/pines/docs/accordion
function accordion(headingLevel, accordionData) {
  const accordionItemHTML = accordionData.reduce(function (acc, accordion) {
    return /*html*/`${acc}
    <div x-data="{ id: $id('accordion') }" class="group">
      <button x-on:click="setActiveAccordion(id)" class="flex items-center justify-between w-full p-4 text-left select-none group-hover:underline cursor-pointer">
          <h${headingLevel} class="my-0">${accordion.heading}</h${headingLevel}>
          <svg class="w-4 h-4 duration-200 ease-out" :class="{ 'rotate-180': activeAccordion==id }" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
      <div x-show="activeAccordion==id" x-collapse x-cloak>
          <p class="p-4 pt-0 my-0 opacity-90">
              ${accordion.content}
          </p>
      </div>
  </div>`;
  }, ``)

  const placeInnerHTML = function (innerHTML) {
    return /*html*/`<div x-data="{ 
          activeAccordion: '', 
          setActiveAccordion(id) { 
              this.activeAccordion = (this.activeAccordion == id) ? '' : id 
          } 
      }" class="relative w-full mx-auto overflow-hidden text-sm font-normal bg-white border border-neutral-10 divide-y divide-neutral-10 rounded-md">${innerHTML}</div>
    `;
  }

  return placeInnerHTML(accordionItemHTML);
}

module.exports = accordion
