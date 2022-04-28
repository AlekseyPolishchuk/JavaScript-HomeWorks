const list = document.querySelector('.ulClass');
const attrValues = [];
const attrNames = [];

for (const elem of list.children) {
  console.log(elem);
}

for (const elem of list.attributes) {
  attrValues.push(elem.value);
  attrNames.push(elem.name);
}

console.log(attrValues, attrNames);

list.firstElementChild.setAttribute('data-my-name', 'Алексей');

list.lastElementChild.innerHTML = `Привет, меня зовут ${list.firstElementChild.getAttribute(
  'data-my-name'
)}`;

list.removeAttribute('data-dog-tail');

// 2. Написать функцию generateList(array), которая принимает массив из чисел и массивов чисел (например [1,2,3]) и генерирует список из елементов. А если в массиве встречается массив, то делать вложенный список.

const arr = [1, 2, [1.1, 1.2, 1.3], 3];

function generateList(arr) {
  const list = document.createElement('ul');

  arr.forEach((item) => {
    const listItem = document.createElement('li');
    let insert;

    Array.isArray(item)
      ? (insert = generateList(item))
      : (insert = document.createTextNode(item));

    listItem.append(insert);
    list.append(listItem);
  });
  return list;
}

document.body.append(generateList(arr));

// 3. Написать функцию, которая выводит таблицу 10 × 10, заполненную числами от 1 до 100

function generateTable() {
  const table = document.createElement('table');

  for (let i = 1; i <= 100; i++) {
    if ((i - 1) % 10 == 0) {
      const tr = document.createElement('tr');
      table.append(tr);
    }
    table.lastChild.insertAdjacentHTML('beforeend', `<td>${i}</td>`);
  }
  document.body.append(table);
}
generateTable();
