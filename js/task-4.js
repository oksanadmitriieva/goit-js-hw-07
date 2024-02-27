// Обробка відправлення форми form.login-form повинна відбуватися за подією submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'. Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
// При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

// Уважно визначайте події у завданнях (попри те, що у т/з є прямі підказки, помилок із цього приводу чимало).
// 4 завдання -- всі інпути заповнені. Тільки тоді виводимо об’єкт у консоль.

const emailField = document.querySelector(
    'form.login-form input[name ="email"]'
  );
  const passwordField = document.querySelector(
    'form.login-form input[name="password"]'
  );
  
  const submitButton = document.querySelector(
    'form.login-form button[type="submit"]'
  );
  
  const form = document.querySelector('.login-form');
  
  form.addEventListener('submit', formProcess);
  
  function formProcess(event) {
    event.preventDefault();
  
    if (emailField.value === '' || passwordField.value === '') {
      alert('All form fields must be filled in');
    } else {
      const userData = {
        email: emailField.value.trim(),
        password: passwordField.value.trim(),
      };
      console.log(userData);
      form.reset();
    }
  }