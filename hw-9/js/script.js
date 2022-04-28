const today = new Date();
const currentYear = today.getFullYear();
const userYearOfBirth = prompt('Enter your year of birth');
const city = prompt('What city do you live in?');
const sport = prompt('What is your favourite sport?');
let userAge;
let userCity;
let userSport;

if (userYearOfBirth === null) {
    userAge = 'It is a pity that you did not want to enter your year of birth';
} else {
    userAge = `You are ${currentYear - +userYearOfBirth} years old`;
}

if (city === null) {
    userCity = 'It is a pity that you did not want to enter your city';
} else if (city === 'Kyiv' || city === 'Moscow' || city === 'Minsk') {
    userCity = `You live in the capital ${city}`;
} else {
    userCity = `You live in ${city}`;
}

if (sport === null) {
    userSport =
        'It is a pity that you did not want to enter your favourite sport';
} else if (sport === 'football') {
    userSport = 'Cool! Do you want to become like Andriy Shevchenko?';
} else if (sport === 'basketball') {
    userSport = 'Cool! Do you want to become like Michael Jordan?';
} else if (sport === 'boxing') {
    userSport = 'Cool! Do you want to become like Vitaliy Klitschko?';
} else {
    userSport = `Cool! You like ${sport}`;
}

alert(`${userAge} \n${userCity} \n${userSport}`);
