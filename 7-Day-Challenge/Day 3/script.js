// Functions - a block of code that is reusable wherever required

// Parameter - variable passed in function definition
// Argument - value used while calling the function
// return - send the value back out of the function

function greet(name) {
  const msg = `Hello ${name}!`;
  return msg; // It send the value back, so we can store it somewhere and can use later
}

const newMsg = greet("Piyush");
console.log(newMsg);

// Function Expression - Storing function into the variable

const add = function (a, b) {
  return a + b;
};

// Define the expression first only when you can call it
console.log(add(5, 6));

const sum = add(10, 26);
console.log(sum);

// However you can call a function and then declare it later it will works well
console.log(product(5, 16)); //works fine

function product(a, b) {
  return a * b;
}

// meanwhile if you try to call a function expression before defining it, you get the reference error.. eg.👇

// console.log(subtract(57, 23)) // reference error

// const subtract = function(a,b){
//     return a-b;
// }

// Arrow Functions - Modern way to write functions

const squareCalc = function (n) {
  return n * n;
};
// Above function can be written like this with arrows

const squareCalculator = (n) => {
  return n * n;
};

console.log("Square of 56 is: ", squareCalc(56));
console.log("Square of 72 is: ", squareCalculator(72));

// Making some more function with arrows

const billCalc = (price, gst) => {
  return price + (price * gst) / 100;
};
console.log(
  "The total price of your electricity bill is 2400 and the gst is 18%, so the total price you have to pay is: ",
  billCalc(2400, 18),
);

// We can define functions in JS with three types - Declaration, Expression, Arrow

// Arrays - ordered list of values

const marks = [82, 56, 78, 91, 64]; // marks = variable and 82, 56, etc.. are values inside the bracket

console.log(`The marks in array are: ${marks}.`);

// We can access elements one by one by using indices. Start from 0

console.log(`First element of marks array is: ${marks[0]}`);
console.log(`Second element of marks array is: ${marks[1]}`);
console.log(`Third element of marks array is: ${marks[2]}`);
console.log(`Fourth element of marks array is: ${marks[3]}`);
console.log(`Fifth element of marks array is: ${marks[4]}`);

// to do the same in better way we can use loop

for (let i = 0; i < marks.length; i++) {
  console.log(marks[i]);
}

// now we are going to modify that data by using arrays methods

const elementPush = marks.push(78); // Add the new value to the end
console.log(marks);

const elementPop = marks.pop(); // Delete the value from the end
console.log(marks);

const elementUnshift = marks.unshift(92); // Adds the value in the starting of the array
console.log(marks);

const elementShift = marks.shift(); // Remove the value from the starting
console.log(marks);

// Array Methods - Starting Soon

// 1. forEach - don't return anything just loop thorugh elements

const scores = [78, 89, 67, 59, 92];

scores.forEach((score) => {
  console.log(`Score: ${score}`);
});

const names = ["Piyush", "Rajat", "Aman", "Abhishek", "Akhil"];

names.forEach((name) => {
  console.log(`The name is: ${name}`);
});

// 2. map - can transform each element and give a new array : didn't change anything in original array

const realValues = [76, 34, 23, 89, 96, 69, 57, 43, 84];

realValues.forEach((realValue) => {
  console.log(`The elements are: ${realValue}`);
});

const squaredValue = realValues.map((realValue) => realValue * realValue);
console.log(squaredValue);

const halfValue = realValues.map((realValue) => realValue / 2);
console.log(halfValue);

// usecase of map into strings
const peopleName = ["Prabhat", "Rudra", "Amit", "Arjun"];

peopleName.forEach((name) => {
  console.log("Name is: ", name);
});

const guyName = peopleName.map((name) => name.toUpperCase());
console.log(guyName);

// 3. filter - build new array on the basis of condition

const studentAvg = [40, 34, 87, 98, 56, 76, 21, 23, 19, 50];
console.log(studentAvg);

const passedStd = studentAvg.filter((studentAvg) => studentAvg >= 40); // passed students
console.log(passedStd);

const failedStd = studentAvg.filter((studentAvg) => studentAvg < 40); //failed students
console.log(failedStd);

// applying filter on strings

const fruits = ["Mango", "Pineapple", "Pomegranate", "Apple", "Litchi"];
console.log(fruits);

const bigFruits = fruits.filter((fruits) => fruits.length > 5);
console.log(bigFruits);

// applying filter at intermediate level

const price = [769, 599, 449, 679, 399, 789];
console.log(price);

const expensiveItem = price.filter((price) => price > 650);
console.log(expensiveItem);

// 4. find - search the first element as per the condition
// we are using same [price] array here

const findPrice = price.find((price) => price > 700);
console.log(
  `The first element that is greater than 700 in the array is: ${findPrice}`,
);

const findFruits = fruits.find((fruits) => fruits.length > 5);
console.log(
  `The first fruit name whose length is greater than 5 is: ${findFruits}`,
);

// 5. includes - it checks whether the value exist or not :  return true or false

console.log(price.includes(799)); //false
console.log(fruits.includes("Apple")); //true

// OBJECTS - The blueprint of real world data - key:value pair

const student = {
  name: "Piyush",
  age: 18,
  isEnrolled: true,
  course: "BCA",
  marks: [85, 74, 79],
  introduce: function () {
    return `Hi i am ${this.name} and i am ${this.age} years old and i am a ${this.course} student.`;
  },
};

// getting values
console.log(student);
console.log(student.name);
console.log(student.marks);
console.log(student.introduce());

// updating values

student.age = 19;
console.log(student.age); //19

// deleting values

delete student.isEnrolled;
console.log(student.isEnrolled); // undefined

// iterating object student through for in loop

for (const value in student) {
  const values = value;
  const element = student[value];
  console.log(values, ":", element);
}

// DESTRUCTURING - getting the values without creating chaos

// destructuring with arrays
const arr = [45, 32, 56, 68, 39];

const [a, b, c, ...rest] = arr; // the variables starts storing values from starting e.g a= 45, b = 32, c = 56 and rest = [68 , 39]
console.log(a, b, c, rest); // rest contains all the elements that are not unpacked in the variable

const nameOfStudent = ["Ajeet", "Aakash", "Amit", "Arpit", "John"];
const [first, second, ...others] = nameOfStudent;
console.log(first, second, others);

// destructuring with objects

const data = {
  name: "Piyush",
  age: 19,
  role: "student",
};

console.log(data);

const { name, age, role } = data;
console.log(name, age, role);

// destructuring an array into objects

const arrValues = [43, 76, 56, 89];
const [p, q, r, s] = arrValues;
const arrObj = { p, q, r, s };
console.log(arrObj);

const [...value] = arrValues;
const arrObj2 = { ...value };
console.log(arrObj2);
