// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

// простой вариант:
nameInputEl.addEventListener('input', () => {
  const inputVal = nameInputEl.value.trim();

  if (inputVal.length === 0) {
    nameOutputEl.textContent = 'Anonymous';
  } else {
    nameOutputEl.textContent = inputVal;
  }
});

//
//  вариант с тернарником:
//
// nameInputEl.addEventListener('input', () => {
//   const inputVal = nameInputEl.value.trim();
//   nameOutputEl.textContent = inputVal.length === 0 ? 'Anonymous' : inputVal;
// });

//
// еще вариант решения (нужно еще добавить trim()):
//
// let result;
// const inputVal = nameInputEl.value.trim();
// if (inputVal.length === 0) {
//   result = 'Anonymous';
// } else {
//   result = inputVal;
// }
// nameOutputEl.textContent = result;
