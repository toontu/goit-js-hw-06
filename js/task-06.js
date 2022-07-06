const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', () => {
  const inputNeedeLength = Number(inputEl.dataset.length);

  if (inputEl.value.length === inputNeedeLength) {
    checkAndRemove('invalid');
    inputEl.classList.add('valid');
  } else {
    checkAndRemove('valid');
    inputEl.classList.add('invalid');
  }
});

const checkAndRemove = className => {
  if (inputEl.classList.contains(className)) {
    inputEl.classList.remove(className);
  }
};
