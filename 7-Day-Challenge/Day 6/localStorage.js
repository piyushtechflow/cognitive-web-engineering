// setting the item to local storage
const myName = localStorage.setItem("name", "Piyush");
const theme = localStorage.setItem("theme", "Dark");
const age = localStorage.setItem("age", 19);

// using getItem() to get elements by calling an function
function getData(a) {
  console.log(localStorage.getItem(a));
}
getData("name");
getData("age");
getData("theme");

// removing an element
localStorage.removeItem("theme");

// Playing with objects in local storage...

const obj = {
  degree: "BCA",
  skills: ["Web Development", "AI", "Data Entry"],
  openToWork: true,
  language: 2,
};

localStorage.setItem("object", JSON.stringify(obj));

const getObj = JSON.parse(localStorage.getItem("object"));
console.log(getObj);
console.log(getObj.degree);
