const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsArrayEl = document.querySelector(ingredients);

const ingredientsItemsEl = ingredients.map(el => {
  const ingredientsItemsEl = document.createElement('li');

  ingredientsItemsEl.classList.add('item');
  ingredientsItemsEl.textContent = el;

  return ingredientsItemsEl;
});

const ingredientsListEl = document.createElement('ul');
ingredientsListEl.id = 'ingredients';

ingredientsListEl.append(...ingredientsItemsEl);

console.log(ingredientsListEl);
