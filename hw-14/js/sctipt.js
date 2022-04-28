const num1 = prompt('Введите число');
const num2 = prompt('Введите степень');

function pow(a, b = 1) {
  if (a === null || b === null) return 'Вы отменили ввод';
  if (isNaN(a) || isNaN(b)) return 'Вы ввели неправильные данные';
  if (a.trim() === '' || b.trim() === '') return 'Вы ничего не ввели';
  return Math.pow(a, b);
}

const result = pow(num1, num2);
alert(result);
