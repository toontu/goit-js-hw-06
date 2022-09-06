// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', () => {
  const dataCorrectLength = inputEl.dataset.length;

  if (inputEl.value.length === dataCorrectLength) {
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
