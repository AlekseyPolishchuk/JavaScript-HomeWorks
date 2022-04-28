const listItems = document.querySelector('.ulClass').children;
const arrInners = [];

for (const elem of listItems) {
  console.log(elem);
  arrInners.push(elem.innerHTML);
}

console.log(`Total number of elements: ${listItems.length}`, '\n', arrInners);
