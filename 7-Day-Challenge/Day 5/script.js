// // Synchronous - JS do the tasks one by one
// console.log("Water warming");
// console.log("Dropping coffee powder")
// console.log("Sugar")
// console.log("Coffee ready")

// const { Children } = require("react")

// // Asynchronous - JS can scheduled some tasks to do later
// console.log("Warming the water")
// console.log("Coffee powder added")
// setTimeout(()=>{
//     console.log("Sugar Added")
//     console.log("Coffee Ready")
// }, 2000)

// console.log("Phone checking...")

// // Call Back Function - a function pass to another function and call when a particular task is complete.

// function greet(name, callback) {
//   console.log(`Hello ${name}! `);
//   callback();
// }
// function sayBye() {
//   console.log("Good Bye!");
// }

// greet("Piyush", sayBye);

// // Callbacks in functions handling operations

// function calc(a, b, c, callback) {
//   return callback(a, b, c);
// }

// function add(a, b, c) {
//   return a + b + c;
// }
// function product(a, b, c) {
//   return a * b * c;
// }
// console.log(calc(5, 785, 5657, add));
// console.log(calc(85, 456, 2858, product));

// // Call back hell - nested call back, when code becomes unreadable and hard to maintain

// function getData(data, callback) {
//   setTimeout(() => {
//     console.log(data);
//     callback();
//   }, 2000);
// }

// getData(10, () => {
//   console.log("Fetching Data 2...");
//   getData(20, () => {
//     console.log("Fetching Data 3...");
//     getData(30, () => {
//       console.log("Fetching Data 4...");
//       getData(40, () => {
//         console.log("Fetching Data 5...");
//         getData(50, () => {
//           console.log("All Data Fetched!");
//         });
//       });
//     });
//   });
// });

// // Promise

// const promise = new Promise ((resolve, reject)=>{
//   console.log(("hello, i'm promise!"))
//   // resolve("success")
//   reject("fail")
// })

// function newFunc(data, callback) {
//   return (promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(data, "Done");
//       resolve("Data Achieved Successfully!");
//       // reject("Due to some error the promise was rejected!")
//       callback();
//     }, 4000);
//   }));
// }

// newFunc(10, () => {
//   console.log("Fetching 2nd...");
//   newFunc(20, () => {
//     console.log("All fetched");
//   });
// });

// // using .then and .catch in promise

// function test(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data ", data, " recieved!");
//       resolve("The Data is recieved.");
//     }, 2000);
//   });
// }

// // Promise chain - used to replace callback hell
// // if resolved...
// test(1).then((res) => {
//   console.log("Response 1: ", res);
//   test(2).then((res) => {
//     console.log("Response 2: ", res);
//   });
// });

// // or another way to write is...
// console.log("Fetching Data 1...");
// test(1)
//   .then((res) => {
//     console.log("Fetching Data 2...");
//     return test(2);
//   })
//   .then((res) => {
//     console.log("Fetching Data 3...");
//     return test(3);
//   })
//   .then((res) => {
//     console.log("All Done!");
//   });

// // if rejected...
// test(1).catch((err)=>{
//   console.log("Response 1: ", err)
//   test(2).catch((err)=>{
//     console.log("Response 2: ", err)
//   })
// })

// Doing the same tasks through async-await...

// function test_x(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data recieved: ", data);
//       resolve("The Data is recieved.");
//     }, 2000);
//   });
// }

// async function callTest() {
//   await test_x(1);
//   await test_x(2);
//   await test_x(3);
//   await test_x(4);
//   await test_x(5);
// }
// callTest() // random call to the function

// // calling through IIFE

// (async function () {
//   await test_x(1);
//   await test_x(2);
//   await test_x(3);
//   await test_x(4);
//   await test_x(5);
// })();

// // Practice time - Promises

// const orderFood = new Promise((resolve, reject) => {
//   const foodAvailable = true;

//   setTimeout(() => {
//     if (foodAvailable) {
//       resolve("Done!");
//       console.log("Successfully Delivered!");
//     } else {
//       reject("Restaurant Closed!");
//       console.log("Cannot Delivered now!");
//     }
//   }, 2000);
// });

// orderFood
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Order Process Complete!");
//   });

// // Doing the same with async-await in different domain

// function getWeather(city) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (city === "Delhi") {
//         resolve({ city: "Delhi", temp: 38, condition: "Sunny" });
//       } else {
//         reject(`Weather Data not found for ${city}!`);
//       }
//     }, 1500);
//   });
// }

// getWeather("Lucknow")
//   .then((res) => {
//     console.log(
//       `${res.city} : ${res.temp}, and it is mostly ${res.condition}\n\n`,
//     );
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}\n\n`);
//   });

// async function getWeatherData(city) {
//   try {
//     const weather = await getWeather(city);
//     console.log(`${weather.city} : ${weather.temp}C , ${weather.condition}`);
//   } catch (error) {
//     console.log(`Error: ${error}`);
//   } finally {
//     console.log("Weather fetching task completed.");
//   }
// }

// getWeatherData("Delhi");
// getWeatherData("Mumbai");
