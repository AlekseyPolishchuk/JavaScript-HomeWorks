function makeCounter(num = 0) {
  let count = num;
  const counter = {
    value() {
      return count;
    },
    increase() {
      count++;
    },
    decrease() {
      count--;
    },
  };
  return counter;
}

const counter = makeCounter(5);

console.log(counter.increase());
console.log(counter.value());
console.log(counter.decrease());
