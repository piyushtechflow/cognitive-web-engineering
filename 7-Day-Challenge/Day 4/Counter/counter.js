const numVal = document.querySelector(".number-box");

let number = document.createElement("h1");
number.textContent = 0;
// number.classList.add('number-box-el')
numVal.append(number);

const incrementBtn = document.querySelector("#increase");
incrementBtn.addEventListener("click", () => {
  number.textContent++;
  number.style.color = "#34C759";
});

const decrementBtn = document.querySelector("#decrease");
decrementBtn.addEventListener("click", () => {
  number.textContent--;
  number.style.color = "#FF3B30";
});
