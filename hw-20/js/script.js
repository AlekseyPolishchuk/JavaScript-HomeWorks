// Task #1

// const arr = ['a', 'b', 'c', 'd'];
// alert(`${arr[0]} + ${arr[1]}, ${arr[2]} + ${arr[3]}`);

//а если поиграться с методами, то так :D

// const arr = ['a', 'b', 'c', 'd'];
// alert(
//   arr
//     .slice(0, 2)
//     .join('+')
//     .split()
//     .concat(arr.slice(2).join('+').split())
//     .join(', ')
// );

// ===============================================

// Task #2

// const arr = [2, 5, 3, 9];
// const result = arr[0] * arr[1] + arr[2] * arr[3];
// alert(result);

//или снова методами

// const arr = [2, 5, 3, 9];

// const result =
//   arr.slice(0, 2).reduce((accum, item) => accum * item) +
//   arr.slice(2).reduce((accum, item) => accum * item);
// alert(result);

// ===============================================

// Task #3

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// alert(arr[1][0]);

// ===============================================

// Task #4

// const obj = {
//   js: ['jQuery', 'Angular'],
//   php: 'hello',
//   css: 'world',
// };

// alert(obj.js[0]);

// ===============================================

// Task #5

// const arr = [];
// let elem = 'x';

// for (let i = 0; i < 5; i++) {
//   arr.push(elem);
//   elem += 'x';
// }
// console.log(arr);

// ===============================================

// Task #6

// const arr = [];

// for (let i = 1; i < 5; i++) {
//   let elem = '';
//   for (let j = 0; j < i; j++) {
//     elem += i;
//   }
//   arr.push(elem);
// }
// console.log(arr);

// ===============================================

// Task #7

// const arr = [];

// function arrayFill(elem, numberOfElem) {
//   for (let i = 0; i < numberOfElem; i++) {
//     arr.push(elem);
//   }
// }
// arrayFill('x', 5)
// console.log(arr);

// ===============================================

// Task #8

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
//   if (sum > 10) {
//     console.log(i + 1);
//     break;
//   }
// }

// ===============================================

// Task #9

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < arr.length - 1; i++) {
//   arr.splice(i, 0, arr.pop());
// }
// console.log(arr);

// ===============================================

// Task #10

// const arr = [1, 2, [2, 5, 3, [32, 5], 3], 7, 4];
// let sum = 0;

// function calcSum(array) {
//   array.forEach((i) => (Array.isArray(i) ? calcSum(i) : (sum += i)));

//   return sum;
// }
// console.log(calcSum(arr));

// ===============================================

// Task #11

// P.S. функция из прошлого задания тоже справится, но ещё можно с помощью forEach

// const arr = [
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [
//     [5, 6],
//     [7, 8],
//   ],
// ];
// let sum = 0;

// function calcSum(array) {
//   array.forEach((i) => i.forEach((j) => j.forEach((k) => (sum += k))));

//   return sum;
// }
// console.log(calcSum(arr));
