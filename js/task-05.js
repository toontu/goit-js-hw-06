const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
console.log(spanEl);

inputEl.addEventListener('input', () => {
  spanEl.textContent = inputEl.value.length === 0 ? 'Anonymous' : inputEl.value;
});

// let result;

// if (input.value.length === 0) {
//   result = 'Anonymous';
// } else {
//   result = input.value;
// }

// spanEl.textContent = result;
