const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsListEl = document.querySelector('#ingredients');

const ingredientsItemsEl = ingredients.map(el => {
  const ingredientsItemsEl = document.createElement('li');

  ingredientsItemsEl.classList.add('item');
  ingredientsItemsEl.textContent = el;

  return ingredientsItemsEl;
});

ingredientsListEl.append(...ingredientsItemsEl);

console.log(ingredientsListEl);
