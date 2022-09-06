const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsGalleryEl = document.querySelector('#ingredients');
console.log(ingredientsGalleryEl);

const galleryItemEl = ingredients.map(el => {
  const galleryItemEl = document.createElement('li');
  galleryItemEl.classList.add('item');

  galleryItemEl.textContent = el;

  return galleryItemEl;
});

ingredientsGalleryEl.append(...galleryItemEl);
