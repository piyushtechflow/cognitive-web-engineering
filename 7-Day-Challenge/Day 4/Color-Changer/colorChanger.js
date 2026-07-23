const hexVal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const colorCode = document.querySelector("#colorCode");
const btn = document.querySelector("#changeColor");

btn.addEventListener("click", () => {
  let mainColor = "#";

  for (let i = 0; i < 6; i++) {
    const color = Math.floor(Math.random() * hexVal.length);
    mainColor += hexVal[color];
  }

  document.body.style.background = mainColor;
  colorCode.textContent = mainColor;
});
