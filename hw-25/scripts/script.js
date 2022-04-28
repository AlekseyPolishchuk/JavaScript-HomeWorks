function generateRandom() {
  let usedNum = [];

  function getRandom() {
    const num = Math.floor(Math.random() * (100 + 1));
    if (usedNum.includes(num)) {
      return getRandom();
    }
    return num;
  }

  return function getNumber() {
    if (usedNum.length === 100) usedNum = [];
    const num = getRandom();
    if (!usedNum.includes(num)) usedNum.push(num);
    return num;
  };
}

const generate = generateRandom();
