function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const spanColorEl = document.querySelector('span.color');
const changeColorBtn = document.querySelector('button.change-color');

changeColorBtn.addEventListener('click', () => {
  bodyEl.style.backgroundColor = getRandomHexColor();

  spanColorEl.textContent = bodyEl.style.backgroundColor;
});
