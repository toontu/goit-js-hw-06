const inputFormEl = document.querySelector('form.login-form');

inputFormEl.addEventListener('submit', onInputFormSubmit);

function onInputFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Будьласка, заповніть всі поля');
  }

  console.log({ email: email.value, password: password.value });
  event.currentTarget.reset();
}
