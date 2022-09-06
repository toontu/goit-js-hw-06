// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const incrementBtn = document.querySelector("[data-action='increment']");
const decrementBtn = document.querySelector("[data-action='decrement']");
const valueSummary = document.querySelector('#value');

let counterValue = 0;

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  valueSummary.textContent = counterValue;
});

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  valueSummary.textContent = counterValue;
});

//
// еще вариант решения задачи:
//
// const counterEl = document.querySelector('#counter');
// const incrementBtn = counterEl.querySelector('button[data-action="increment"]');
// const decrementBtn = counterEl.querySelector('button[data-action="decrement"]');
// const counterValue = document.querySelector('#value');

// incrementBtn.addEventListener('click', () => {
//   const spanContent = Number(counterValue.textContent);
//   if (isNaN(spanContent)) {
//     return;
//   }
//   counterValue.textContent = spanContent + 1;
// });

// decrementBtn.addEventListener('click', () => {
//   const spanContent = Number(counterValue.textContent);
//   if (isNaN(spanContent)) {
//     return;
//   }
//   counterValue.textContent = spanContent - 1;
// });
