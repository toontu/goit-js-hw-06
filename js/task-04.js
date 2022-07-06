const counterEl = document.querySelector('#counter');
const incrementBtn = counterEl.querySelector('button[data-action="increment"]');
const decrementBtn = counterEl.querySelector('button[data-action="decrement"]');
const counterValue = document.querySelector('#value');

incrementBtn.addEventListener('click', () => {
  const spanContent = Number(counterValue.textContent);
  if (isNaN(spanContent)) {
    return;
  }
  counterValue.textContent = spanContent + 1;
});

decrementBtn.addEventListener('click', () => {
  const spanContent = Number(counterValue.textContent);
  if (isNaN(spanContent)) {
    return;
  }
  counterValue.textContent = spanContent - 1;
});
