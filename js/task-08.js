// Напиши скрипт управления формой логина.
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const loginFormEl = document.querySelector('.login-form');

const onLoginFormSubmit = event => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === '' || passwordValue === '') {
    return alert('Будьласка, заповніть всі поля');
  }
  console.log({ email: emailValue, password: passwordValue });
  event.currentTarget.reset();
};

loginFormEl.addEventListener('submit', onLoginFormSubmit);

// внимательно читать конспект - там приведен пример!!
