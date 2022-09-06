// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const sizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

sizeControlEl.addEventListener('input', () => {
  textEl.style.fontSize = `${sizeControlEl.value}px`;
});

// sizeControlEl.addEventListener('input', () => {
//   textEl.style.fontSize = sizeControlEl.value + 'px'; // или так
// });
