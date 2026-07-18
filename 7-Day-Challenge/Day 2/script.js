// Conditional Statements

const age = 18;

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

const rollNo = 45;

if (rollNo >= 1 && rollNo < 40) {
  console.log("You are in room no. 1");
} else if (rollNo >= 40 && rollNo <= 80) {
  console.log("You are in room no. 2");
} else {
  console.log("You are in second shift.");
}

// Ternary operator to write the if else statement in a single line

const myAge = 19>=21?console.log("You can participate."):console.log("Sorry you can't!")

// Iterative Statements - Loops

// for loop

// print the number between 1 to 100

for (let i = 1; i <= 100; i++) {
    console.log("The number is: ", i)    
}

// while loop

// print the even numbers between 1 to 100

let num = 0
while (num!==101) {
    if (num%2===0) {
        console.log("The even number is: ", num)
    }
    num++
}

// for in loop

let stringName = "Piyush"

// it return the indices 
for (const val in stringName) {    
    console.log(stringName[val])
}

// for of loop

let stringLastName = "Shukla"

for (const value of stringLastName) {
    console.log(value)
}
