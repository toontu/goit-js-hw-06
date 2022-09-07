function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const inputEl = document.querySelector('input');
const createBoxesBtn = document.querySelector('[data-create]');
const destroyBoxesBtn = document.querySelector('[data-destroy]');
const boxesCollectionEl = document.querySelector('#boxes');

const createBoxes = amount => {
  amount = Number(inputEl.value);

  for (let i = 0; i < amount; i += 1) {
    const boxDiv = document.createElement('div');
    const boxColor = getRandomHexColor();
    const boxSize = 30;

    // boxDiv.style.width = `${boxSize + i * 10}px`;
    // boxDiv.style.height = `${boxSize + i * 10}px`;
    // boxDiv.style.backgroundColor = boxColor;
    // console.dir(boxDiv);

    // boxDiv.style.cssText = `width: ${boxSize + i * 10}px; height: ${
    //   boxSize + i * 10
    // }px; background-color: ${boxColor}; margin: 7px`;

    boxDiv.style = `width: ${boxSize + i * 10}px; height: ${
      boxSize + i * 10
    }px; background-color: ${boxColor}; margin: 7px`;

    boxesCollectionEl.append(boxDiv);
    inputEl.value = '';
  }
};
const destroyBoxes = () => {
  boxesCollectionEl.innerHTML = '';
  inputEl.value = '';
};

createBoxesBtn.addEventListener('click', createBoxes);
destroyBoxesBtn.addEventListener('click', destroyBoxes);
