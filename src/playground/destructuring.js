// const person = {
//   name: 'Andrew',
//   age: '26',
//   location: {
//     city: 'Philly',
//     temp: 92
//   }
// };

// // const name = person.name;
// // const age = person.age;

// const { name, age } = person;

// console.log(`${name} is ${age}`);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// const [ , city, state ] = address;

// console.log(`You are in ${city}, ${state}`);

const menu = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [ item, , price ] = menu;

console.log(`A medium ${item} costs ${price}`);

