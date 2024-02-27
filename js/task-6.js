// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.

// Є input, у який користувач вводить бажану кількість елементів. Після натискання на кнопку Create має рендеритися (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті. При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. Після натискання на кнопку Destroy колекція елементів має очищатися.

// Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. Тільки якщо воно задоволяє умову, мають додаватися нові <div> елементи в DOM.

// Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість елементів для рендеру. Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.

//     Розміри першого <div> елемента мають бути 30px на 30px.
//     Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
//     Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.

// Для очищення колекції після натискання на кнопку Destroy створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  const createButton = document.querySelector('button[data-create]');
  const destroyButton = document.querySelector('button[data-destroy]');
  const field = document.querySelector('#controls input[type="number"]');
  const box = document.getElementById('boxes');
  // const randomColor = getRandomHexColor();
  
  createButton.addEventListener('click', () => {
    if (Number(field.value >= 1) && Number(field.value <= 100)) {
      createBoxes(field.value);
    } else {
      alert('Enter a value between 1 and 100');
    }
  });
  
  function createBoxes(amount) {
    destroyBoxes();
    for (let i = 0; i < amount; i++) {
      const htmlEl = document.createElement('div');
      htmlEl.style.height = `${30 + 10 * i}px`;
      htmlEl.style.width = `${30 + 10 * i}px`;
      htmlEl.style.backgroundColor = getRandomHexColor();
      // console.log(htmlEl.style.height);
      box.appendChild(htmlEl);
  
      // console.log(htmlEl);
    }
  }
  
  destroyButton.addEventListener('click', destroyBoxes);
  
  function destroyBoxes() {
    while (box.firstChild) {
      box.removeChild(box.firstChild);
    }
  }