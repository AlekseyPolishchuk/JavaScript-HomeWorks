const num = prompt('Введите число');
let trueOrFalse = true;

for (let i = 2; i < num; i++) {
   if (num % i === 0) {
      trueOrFalse = false;
   }
}

console.log(trueOrFalse);