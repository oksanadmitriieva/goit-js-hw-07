// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

const userName = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

function inputHandler(event) {
  const murkup = event.target.value.trim();
  nameOutput.textContent = murkup === '' ? 'Anonymous' : murkup;
}

userName.addEventListener('input', inputHandler);