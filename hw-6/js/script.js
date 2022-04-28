// ======== Task 1 ========

// Что вернут следующие строки кода?

// 1. Boolean(Number(’10’)) + 1;
// 2. ‘sub ’ + Number(false);
// 3. 16  *  ‘      91    ‘
// 4. true-70
// 5. Number(1 + String(1)) + 1

// Ответы:

// 1. число 2
// 2. строка "sub 0"
// 3. число 1456
// 4. число -69
// 5. число 12

// ======== Task 2 ========

// Напишите скрипт, который считает количество секунд в часе.
// Запросить у пользователя количество часов
// Посчитать сколько секунд в этом количестве часов
// Записать вычесленное значение в переменную
// Вывести эту переменную пользователю во всплывающем окне

function calculateNumOfSecondsInHours(hours) {
    return hours * 3600;
}

const numberOfHours = +prompt('Enter number of hours');

const numOfSecondsInHours = calculateNumOfSecondsInHours(numberOfHours);

alert(numOfSecondsInHours);

// ======== Task 3 ========

// Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, —. Количество строк кода при этом не должно измениться. Код для переделки:

// let num = 1;
// num = num + 12;
// num = num — 14;
// num = num * 5;
// num = num / 7;
// num = num + 1;
// num = num — 1;
// alert(num);

// Решение:

// let num1 = 1;
// num += 12;
// num -= 14;
// num *= 5;
// num /= 7;
// num++;
// num--;
// alert(num)
