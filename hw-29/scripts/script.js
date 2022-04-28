const calculator = {
  read() {
    this.a = +prompt('Enter the first number');
    this.b = +prompt('Enter the second number');

    if (isNaN(this.a) || isNaN(this.b)) {
      console.log('You entered the wrong data');
      this.read();
    }
    return;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
