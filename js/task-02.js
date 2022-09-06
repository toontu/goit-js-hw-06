// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все < li > за одну операцию в список ul#ingredients.

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
