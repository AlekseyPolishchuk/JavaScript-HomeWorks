function generateRandom(min, max) {
  let usedNum = [];
  console.log(usedNum);

  return function getRandom() {
    if (usedNum.length === max) usedNum = [];
    const num = Math.floor(Math.random() * (max - min + 1) + min);
    return usedNum.includes(num) ? getRandom() : usedNum.push(num), num;
  };
}

const a = generateRandom(1, 100);

console.log(a());
console.log(a());
console.log(a());
console.log(a());
console.log(a());
