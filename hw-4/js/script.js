const operation = prompt(
    'What arithmetic operation do you want to perform? (add, sub, mult, div)'
);

const firstNumber = +prompt('Enter the first number');
const secondNumber = +prompt('Enter the second number');

if (operation === 'add') {
    console.log(
        `${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`
    );
} else if (operation === 'sub') {
    console.log(
        `${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`
    );
} else if (operation === 'mult') {
    console.log(
        `${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`
    );
} else if (operation === 'div') {
    console.log(
        `${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`
    );
} else {
    console.log('Oops, there must be some mistake');
}
