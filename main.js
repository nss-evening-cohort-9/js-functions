// Zoe Ames
// Britney Spears
// Tori Amos
// Sam Smith
// John doe

// const firstName = 'Zoe';
// const lastName = 'Ames';
// console.log(firstName + ' ' + lastName);
// console.log(`${firstName} ${lastName}`);

// const firstName1 = 'Britney';
// const lastName1 = 'Spears';
// console.log(`${firstName1} ${lastName1}`);

// const firstName2 = 'Tori';
// const lastName2 = 'Amos';
// console.log(`${firstName2} ${lastName2}`);

const namePrinter = (firstName, lastName) => {
  console.log(`${firstName} ${lastName}`);
};

namePrinter('Zoe', 'Ames');
namePrinter('John', 'Doe');

namePrinter('Ames', 'Zoe');

namePrinter(1,2);



const nuggetizer = (animal) => {
  return `processed ${animal}`;
};

console.log(nuggetizer('pig'));
console.log(nuggetizer('fish'));
console.log(nuggetizer('chicken'));
console.log(nuggetizer('student'));

// 1 input  string  'border collie'
// output = my favorite dog breed is border collie

const dogBreed = (dogName) => {
  return `my favorite dog breed is ${dogName}`;
};

console.log(dogBreed('lab'));
console.log(dogBreed('a cat'));