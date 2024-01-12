
const name = 'Son';
const age = 20;


const person = {
  name: 'Nam',
  age: 19,
};

let newName = name;
newName = 'Le';

let newPerson = person;
newPerson.name = 'Huy';

console.log(name, newName); // Son,Le
console.log(person, newPerson); // { name: 'Huy', age: 19 }, { name: 'Huy', age: 40 }