class Human {
    constructor(name, surname, yearOfBirth) {
        this.name = name;
        this.surname = surname;
        this._yearOfBirth = yearOfBirth;
    }
    get age() {
        const date = new Date();
        return date.getFullYear() - this._yearOfBirth;
    }
    static ageCompare(humanA, humanB) {
        return humanA.yearOfBirth - humanB.yearOfBirth;
    }
}

class Student extends Human {
    constructor(name, surname, yearOfBirth) {
        super(name, surname, yearOfBirth);
        this.grades = new Array(10);
        this.visits = new Array(10);
    }

    #averageGrade() {
        const sumOfGrades = this.grades.reduce((accum, item) => {
            if (item !== undefined) accum += item;

            return accum;
        }, 0);

        const numberOfGrades = this.grades.filter(
            (item) => item !== undefined
        ).length;

        return sumOfGrades / numberOfGrades;
    }
    #averageАttendance() {
        const numOfVisits = this.visits.filter((item) => item === true).length;
        return numOfVisits / 10;
    }
    present() {
        if (!this.visits.includes(undefined)) return 'Курс закончился';
        const nextLessonIndex = this.visits.findIndex(
            (item) => item === undefined
        );
        this.visits[nextLessonIndex] = true;
    }
    absent() {
        if (!this.visits.includes(undefined)) return 'Курс закончился';
        const nextLessonIndex = this.visits.findIndex(
            (item) => item === undefined
        );
        this.visits[nextLessonIndex] = false;
    }
    mark(grade) {
        if (!this.grades.includes(undefined)) return 'Все оценки выставлены';
        if (grade > 10 || grade < 0)
            return 'Недопустимая оценка! Введите от 0 до 10.';
        const newGradeIndex = this.grades.findIndex(
            (item) => item === undefined
        );
        this.grades[newGradeIndex] = grade;
    }
    summary() {
        if (this.#averageGrade() > 9 && this.#averageАttendance() > 0.9)
            return 'Ути какой молодчинка!';
        if (!(this.#averageGrade() < 9) || !(this.#averageАttendance() < 0.9))
            return 'Норм, но можно лучше';
        if (this.#averageGrade() < 9 && this.#averageАttendance() < 0.9)
            return 'Редиска!';
    }
}

const petrosyan = new Student('Petrushka', 'Botanovich', 1995);
const vasya = new Student('Vasiliy', 'Lobotryasov', 2000);

petrosyan.present();
petrosyan.present();
petrosyan.present();
petrosyan.present();
petrosyan.present();
petrosyan.present();
petrosyan.mark(10);
petrosyan.mark(9);
petrosyan.mark(10);
petrosyan.mark(9);
petrosyan.mark(8);
petrosyan.mark(8);
console.log(petrosyan.summary());
console.log('Посещения Петра: ', petrosyan.visits);
console.log('Оценки Петра: ', petrosyan.grades);

console.log('=================== другой студент ================');

vasya.absent();
vasya.absent();
vasya.absent();
vasya.absent();
vasya.present();
vasya.present();
vasya.mark(7);
vasya.mark(5);
vasya.mark(6);
vasya.mark(7);
vasya.mark(1);
vasya.mark(2);
console.log(vasya.summary());
console.log('Посещения Василия: ', vasya.visits);
console.log('Оценки Василия: ', vasya.grades);

const people = [
    new Human('Anna', 'Maria', 1985),
    new Human('Lena', 'Petrova', 2010),
    new Human('Dmitriy', 'Koval', 2000),
];

people.sort(Human.ageCompare);
console.log(people);
