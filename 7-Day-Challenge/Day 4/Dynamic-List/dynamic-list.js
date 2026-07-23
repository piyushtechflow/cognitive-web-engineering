let inputBox = document.querySelector("#input-box");
const addList = document.querySelector(".list-display");
const addBtn = document.querySelector("#add-task");

addBtn.addEventListener("click", () => {
    const newEl = document.createElement("p");
  if (inputBox.value.trim() !== "") {
    newEl.textContent = inputBox.value;
    newEl.classList.add("added-el");
    addList.append(newEl);
    inputBox.value = "";
  } else {
    newEl.textContent = `No texts entered! Please enter something.`;
    newEl.style.color = "#1a1a1a"
    newEl.style.fontSize = "18px"
    addList.append(newEl);
    addBtn.disabled = true;
  }
});

inputBox.addEventListener("input", ()=>{
    if (inputBox.value.trim()!=="") {
        addBtn.textContent = "+";
        addBtn.disabled = false;
    }
})