let x;

// Creating an object
const person = {
  name: 'Son',
  age: 20,
  isAdmin: true,
  address: {
    street: '123 CauGiay st',
    city: 'HANOi',
    state: 'MA',
  },
  hobbies: ['music', 'sports'],
};

// Accessing object properties
x = person.name; // Dot notation
x = person['age']; // Bracket notation
x = person.address.state;
x = person.hobbies[0];

// Updating properties
person.name = 'Son';
person['isAdmin'] = false;

// Deleting properties
delete person.age;

// Create new properties
person.hasChildren = true;

// Add functions
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

// Keys with multiple words
const person2 = {
  'first name': 'Huy',
  'last name': 'Nguyen',
};

x = person2['first name'];

console.log(x);

const obj1 = {a: 1,b :2}
const obj2 = {c: 3,d :4}
const obj3 = {...obj1,...obj2}

const cloneObj = {...obj1}
cloneObj.c = 3
console.log(cloneObj)
console.log(cloneObj)