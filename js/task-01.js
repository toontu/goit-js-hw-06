const categoryEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categoryEl.length}`);
// console.log(categoryEl);

categoryEl.forEach(el => {
  //   console.log(el);
  const categoryTitle = el.querySelector('h2').textContent;
  console.log(`Category: ${categoryTitle}`);

  const categoryItemsNumber = el.querySelectorAll('li').length;
  console.log(`Elements: ${categoryItemsNumber}`);
});

// ================
// Вариант 2:

// const categoryListEl = document.querySelector('#categories');
// // console.log(categoryListEl);

// const categoryListItemsEl = [...categoryListEl.children];
// // console.log(categoryListItemsEl);

// console.log(`Number of categories: ${categoryListItemsEl.length}`);

// categoryListItemsEl.forEach(el => {
//   const nestedLiItemsEl = el.querySelectorAll('li');
//   //   console.log(nestedLiItemsEl);

//   const nestedH2TextContentEl = el.querySelector('h2').textContent;
//   //   console.log(nestedH2TextContentEl);

//   console.log(`Category: ${nestedH2TextContentEl}`);
//   console.log(`Elements: ${nestedLiItemsEl.length}`);
// });

// ================
// Вариант 3:

// const list = document.querySelector('#ingredients');

// list.append(
//   ...ingredients.map(ingredient => {
//     const createItem = document.createElement('li');
//     createItem.textContent = ingredient;
//     createItem.classList.add('item');
//     return createItem;
//   })
// );
