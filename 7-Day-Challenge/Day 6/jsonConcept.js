// This means to pack the object into strings by using .stringyfy() and then send to the browser. Once it achieved in browser then we use .parse() method to get the objects again.

const student = {
  name: "Piyush",
  age: 19,
  skills: ["HTML", "CSS", "JS"],
  isActive: true,
};

console.log(typeof student); // object

const stringyfy = JSON.stringify(student);
console.log(typeof stringyfy); // string

const reset = JSON.parse(stringyfy);
console.log(typeof reset);
console.log(reset.name, reset.age, reset.skills[2], reset.isActive);

console.log(JSON.stringify(student, null, 2));
