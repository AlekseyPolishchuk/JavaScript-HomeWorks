function Student(name, surname, yearOfBirth) {
    this.name = name;
    this.surname = surname;
    this.yearOfBirth = yearOfBirth;
    this.grades = new Array(10);
    this.visits = new Array(10);
}

Student.prototype.age = function () {
    const date = new Date();
    return date.getFullYear() - this.yearOfBirth;
};
Student.prototype.averageGrade = function () {
    const sumOfGrades = this.grades.reduce((accum, item) => {
        if (item !== undefined) accum += item;

        return accum;
    }, 0);

    const numberOfGrades = this.grades.filter(
        (item) => item !== undefined
    ).length;

    return sumOfGrades / numberOfGrades;
};
Student.prototype.averageАttendance = function () {
    const numOfVisits = this.visits.filter((item) => item === true).length;
    return numOfVisits / 10;
};
Student.prototype.present = function () {
    if (!this.visits.includes(undefined)) return 'Курс закончился';
    const nextLessonIndex = this.visits.findIndex((item) => item === undefined);
    this.visits[nextLessonIndex] = true;
};
Student.prototype.absent = function () {
    if (!this.visits.includes(undefined)) return 'Курс закончился';
    const nextLessonIndex = this.visits.findIndex((item) => item === undefined);
    this.visits[nextLessonIndex] = false;
};
Student.prototype.mark = function (grade) {
    if (!this.grades.includes(undefined)) return 'Все оценки выставлены';
    if (grade > 10 || grade < 0)
        return 'Недопустимая оценка! Введите от 0 до 10.';
    const newGradeIndex = this.grades.findIndex((item) => item === undefined);
    this.grades[newGradeIndex] = grade;
};
Student.prototype.summary = function () {
    if (this.averageGrade() > 9 && this.averageАttendance() > 0.9)
        return 'Ути какой молодчинка!';
    if (!(this.averageGrade() < 9) || !(this.averageАttendance() < 0.9))
        return 'Норм, но можно лучше';
    if (this.averageGrade() < 9 && this.averageАttendance() < 0.9)
        return 'Редиска!';
};

const petrosyan = new Student('Petrushka', 'Botanovich', 1995);
const vasya = new Student('Vasiliy', 'Lobotryasov', 2000);

petrosyan.present();
petrosyan.present();
petrosyan.present();
petrosyan.present();
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
petrosyan.mark(9);
petrosyan.mark(9);
petrosyan.mark(10);
petrosyan.mark(9);
console.log(petrosyan.averageGrade());
console.log(petrosyan.averageАttendance());
console.log(petrosyan.summary());
console.log('Посещения Петра: ', petrosyan.visits);
console.log('Оценки Петра: ', petrosyan.grades);

console.log('=================== другой студент ================');

vasya.absent();
vasya.absent();
vasya.absent();
vasya.absent();
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
vasya.mark(5);
vasya.mark(3);
vasya.mark(5);
vasya.mark(8);
console.log(vasya.averageGrade());
console.log(vasya.averageАttendance());

console.log(vasya.summary());
console.log('Посещения Василия: ', vasya.visits);
console.log('Оценки Василия: ', vasya.grades);
