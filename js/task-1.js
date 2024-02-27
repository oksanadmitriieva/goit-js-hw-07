// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

//     Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//     Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

const numberElements = document.getElementsByClassName('item').length;
console.log(`Number of categories: ${numberElements}`);

const list = document.getElementById('categories');
const listItems = Array.from(list.children);

listItems.forEach(item => {
  const itemName = item.querySelector('h2').textContent;
  const numberItems = item.querySelectorAll('li').length;
  console.log(`Category ${itemName}`);
  console.log(`Elements: ${numberItems}`);
});