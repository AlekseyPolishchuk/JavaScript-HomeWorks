//========= Task 1 =========

const user = {};

user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

console.log(user);

//========= Task 2 =========

const user2 = {
    name: 'John',
};

user2.name = 'Pete';
// Вопрос: Можно ли изменить объект, объявленный с помощью const?
// Ответ: можно изменять свойства объекта, нельзя переопределить сам объект.

//========= Task 3 =========

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

function sumSalaries(salaries) {
    let sum = 0;

    for (const salary of Object.values(salaries)) {
        sum += salary;
    }

    return sum;
}

console.log(sumSalaries(salaries));
