// #Scope
// let and const are block scoped, and can be declared globally or within the function, but var is globally scoped.

const appName = "MyPortfolio"; // This is a global variable - can be accessed from anywhere

function showAppName() {
  const appType = "Portfolio Website"; // This is a function scope variable - only accessed within the loop
  console.log(`${appName} - ${appType}`);
}
showAppName();

const num1 = 10;
if (num1 > 8) {
  let num2 = 2;
  console.log(num1 + num2);

  var num3 = 3;
  console.log(num1 + num2 + num3);
}
console.log(num1); // It's a global scoped variable so it print 10
// console.log(num2) // This will causes reference error
console.log(num3); // It is block scoped but it ignores block and come outside and print 3

// #CLOSURES - when a child remember everything about the parent function even when the parent function goes out of scope

// Basic closure program

function parent() {
  const parentEl = "Hello I'm Parent";

  function child() {
    console.log(parentEl);
  }
  return child();
}
const myFunc = parent();

// Counter by closures

function createCounter() {
  let count = 0;

  function counter() {
    count++;
    console.log(`Count: ${count}`);
  }
  return counter;
}

// first counter - as we call the function the counter increases
console.log("\nFirst Counter...");
const countEl = createCounter();
countEl();
countEl();
countEl();
countEl();
countEl();
countEl();

// another independent counter
console.log("\nNew Counter...");
const countEl2 = createCounter();
countEl2();

// another independent counter via loop
console.log("\nNew Counter...");
const countEl3 = createCounter();
for (let i = 0; i < 10; i++) {
  countEl3();
}

// #DOM - Document Object Model : Controlling the structure elements of web pages through javascript...

const firstPara = document.querySelector("p"); // finds the first matching element
console.log(firstPara);

const allPara = document.querySelectorAll("p"); // targets all paragraphs and returns a node list...
console.log(allPara);

// accessing elements of node list through for each
allPara.forEach((para) => {
  console.log(para);
});

const secondPara = document.getElementById("secondPara"); // selection by id, it's a very fast method to target a particular element
console.log(secondPara);

// updating firstPara
firstPara.textContent = "Hello, I'm first Para and now i'm updated."; // updating the text inside a paragraph
firstPara.style.background = "blue"; // changing styles and giving bg color
firstPara.style.color = "white"; // changing text colors
firstPara.style.fontFamily = "serif";
firstPara.style.fontSize = "20px";
firstPara.style.fontWeight = "600";

// updating secondPara - through css classes
secondPara.classList.add("old-main-class");
secondPara.classList.remove("old-main-class");
secondPara.classList.add("new-main-class");

// updating the attributes of thirdPara
const thirdPara = document.getElementById("thirdPara");
thirdPara.setAttribute("id", "lastPara");
thirdPara.className = "lastPara";

// creating new paragraphs using javascript

const newPara = document.createElement("p");
newPara.textContent = "This para is added by Javascript.";
newPara.classList.add("new-main-class");
secondPara.prepend(newPara); // to add before we use prepend and to add later we use append

// newPara.remove(); // to remove the newPara

// Event Listeners - responding on user actions

// targeting a btn with a message para and update it when a certain condition satisfied
const greetBtn = document.querySelector("#btn");
const message = document.querySelector("#click-counter-msg");
message.textContent = "Button not clicked yet";
let clickCounter = 0;

greetBtn.classList.add("btn-class");
greetBtn.addEventListener("click", () => {
  clickCounter++;
  message.textContent = `Button Clicked ${clickCounter} times.`;
  if (clickCounter > 5) {
    const newMsg = document.createElement("p");
    greetBtn.style.background = "red";
    newMsg.textContent = "5 times crossed!";
    message.append(newMsg);
  }
});

// adding event listeners to the input boxes

const userInput = document.querySelector("#input-value");
const inputMsg = document.getElementById("input-para");
const inputBtn = document.getElementById("inputBtn");

userInput.classList.add("input-design");

inputBtn.classList.add("btn-class");

userInput.addEventListener("input", () => {
  inputMsg.textContent = `User typing...`;
});

inputBtn.addEventListener("mouseover", () => {
  inputBtn.style.fontSize = "18px";
});

inputBtn.addEventListener("mouseout", () => {
  inputBtn.style.fontSize = "";
});

inputBtn.addEventListener("click", () => {
  inputMsg.textContent = userInput.value;
}); 
