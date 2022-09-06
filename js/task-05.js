// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

// простой вариант:
nameInputEl.addEventListener('input', () => {
  if (nameInputEl.value.length === 0) {
    nameOutputEl.textContent = 'Anonymous';
  } else {
    nameOutputEl.textContent = nameInputEl.value;
  }
});

//
//  вариант с тернарником:

// nameInputEl.addEventListener('input', () => {
//   nameOutputEl.textContent = nameInputEl.value.length === 0 ? 'Anonymous' : nameInputEl.value;
// });

//
// еще вариант решенияЖ

// let result;
// if (nameInputEl.value.length === 0) {
//   result = 'Anonymous';
// } else {
//   result = input.value;
// }
// nameOutputEl.textContent = result;
