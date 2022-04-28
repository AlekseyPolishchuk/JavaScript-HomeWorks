function createNewArr(origArr) {
  const newArr = [];
  if (origArr.length === 0) {
    return 'Исходный массив пуст';
  }
  for (let i = 0; i < origArr.length; i++) {
    if (origArr[i] < 0) continue;
    newArr.push(origArr[i]);
  }
  if (newArr.length !== 0) return newArr;
  return null;
}

const arr = [1, 2, 3, -1, -2, -3];
console.log(createNewArr(arr));

// С помощью функции высшего порядка

// function createNewArr(origArr) {
//   if (origArr.length === 0) {
//     return 'Исходный массив пуст';
//   }
//   const newArr = origArr.filter((num) => num > 0);
//   if (newArr.length !== 0) return newArr;
//   return null;
// }
