function calculate(accum = 0) {
  return function (num) {
    return (accum += num);
  };
}

const sum = calculate();
