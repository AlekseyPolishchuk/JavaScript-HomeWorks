const num = prompt('Введите число');
let primeOrNot = 'Число простое';

if (num < 0) {
   console.log(NaN);
} else {
   for (i = 2; i < num; i++) {
      if (num % i === 0) {
         primeOrNot = `Минимальный делитель ${i}`;
         break;
      } 
   }
}

console.log(primeOrNot);