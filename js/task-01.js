'use strict';

const categoryList = document.querySelector('#categories');

const categoryListItems = [...categoryList.children];

console.log(`Number of categories: ${categoryListItems.length}`);

categoryListItems.forEach(el => {
  const nestedLiItems = el.querySelectorAll('li');
  const nestedH2TextContent = el.querySelector('h2').textContent;

  console.log(`Category: ${nestedH2TextContent}`);
  console.log(`Elements: ${nestedLiItems.length}`);
});
