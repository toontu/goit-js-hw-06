'use strict';

const categoryListEl = document.querySelector('#categories');

const categoryListItemsEl = [...categoryListEl.children];

console.log(`Number of categories: ${categoryListItemsEl.length}`);

categoryListItemsEl.forEach(el => {
  const nestedLiItemsEl = el.querySelectorAll('li');
  const nestedH2TextContentEl = el.querySelector('h2').textContent;

  console.log(`Category: ${nestedH2TextContentEl}`);
  console.log(`Elements: ${nestedLiItemsEl.length}`);
});
