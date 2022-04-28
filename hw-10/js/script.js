// ======== Task 1 ========

const x = 10;
const y = 7;

alert(x > y ? 'x is bigger than y' : 'x is not bigger tan y');

// ======== Task 2 ========

const num = +prompt('Enter a number');

alert(num % 2 === 0 ? 'Your number is even' : 'Your number is odd');

// ======== Task 3 ========

const num2 = +prompt('Enter an integer');

if (num2 > 0) {
    alert(`Your number is positive and ${String(num2).length} digits`);
} else {
    alert(`Your number is negative and ${String(num2).length} digits`);
}

// ======== Task 4 ========

const firstNumber = +prompt('Enter the first number');
const secondNumber = +prompt('Enter the second number');
const thirdNumber = +prompt('Enter the third number');

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    alert('The first number is the largest');
} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
    alert('The second number is the largest');
} else {
    alert('The third number is the largest');
}

// ======== Task 5 ========

const a = +prompt('Enter the first side');
const b = +prompt('Enter the second side');
const c = +prompt('Enter the third side');

if (a + b > c && a + c > b && b + c > a) {
    alert('The triangle may exist');
} else {
    alert('The triangle cannot exist');
}
