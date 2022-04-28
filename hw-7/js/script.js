// Task 1

const numOrStr = prompt('Enter number');
console.log(numOrStr);

if (numOrStr === null || numOrStr.trim() === '' || isNaN(+numOrStr)) {
    console.log('Error');
} else {
    console.log('OK!');
}

// Task 2

let numOrStr2 = prompt('input number or string');
console.log(numOrStr);

switch (true) {
    case numOrStr2 === null:
        console.log('вы отменили');
        break;
    case numOrStr2.trim() === '':
        console.log('Empty String');
        break;
    case isNaN(+numOrStr2):
        console.log(' number is Ba_NaN');
        break;

    default:
        console.log('OK!');
}
