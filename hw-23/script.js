function accumulate() {
  let accum = 0;
  return function (num) {
    return (accum += num);
  };
}
const sum = accumulate();

const result = sum(1); // Перший виклик
console.log(result); // -> 1

const secondResult = sum(2);
console.log(secondResult); // -> 3
sum(4);
sum(8);
const lastResult = sum(11);
console.log(lastResult); // -> 26
