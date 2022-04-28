// Task 1

const a = 7;
const b = 3;

console.log(a === 0 ? 'OK!' : 'not ok(');
console.log(a > 0 ? 'OK!' : 'not ok(');
console.log(a < 0 ? 'OK!' : 'not ok(');
console.log(a >= 0 ? 'OK!' : 'not ok(');
console.log(a <= 0 ? 'OK!' : 'not ok(');
console.log(a !== 0 ? 'OK!' : 'not ok(');
console.log(a === 'test' ? 'OK!' : 'not ok(');
console.log(a === 1 ? 'OK!' : 'not ok(');
console.log(a > 0 && a < 5 ? 'OK!' : 'not ok(');
console.log(a === 0 || a === 2 ? 'OK!' : 'not ok(');
console.log(a <= 1 && b >= 3 ? a + b : a - b);
console.log((a > 2 && a < 11) || (b >= 6 && b < 14) ? 'OK!' : 'not ok(');

// Task 2

const num = +prompt('Enter number (1, 2, 3 or 4)');
let result;

switch (num) {
    case 1:
        result = 'Winter';
        alert(result);
        break;
    case 2:
        result = 'Spring';
        alert(result);
        break;
    case 3:
        result = 'Summer';
        alert(result);
        break;
    case 4:
        result = 'Autumn';
        alert(result);
        break;

    default:
        alert('Error');
        break;
}
