const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Grzegorz', 'Janusz', 'Marcin'];
const femaleNames = ['Iwona', 'Maria', 'Kamila'];
const lastNames = ['Marasz', 'Konop', 'Sokół'];

const randChoice = arr => arr[Math.floor(Math.random() * arr.length)];
const people = [];
for (let i = 0; i < 20; i++) {

    let person = {}

    person.gender = randChoice(genders);

    if (person.gender === 'M') {
        person.first_name = randChoice(maleNames);
    } else {
        person.first_name = randChoice(femaleNames);
    }

    person.surname = randChoice(lastNames);

    person.age = Math.floor(Math.random() * 61) + 18;
    people.push(person);
}

const data = JSON.stringify(people);
fs.writeFile('people.json', data, (err) => {
    if (err) {
      console.log ('Something went wrong');
      throw err;
    }
    console.log('File has been successfully generated! Check people.json');
});
