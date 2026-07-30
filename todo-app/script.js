const input = document.querySelector("#input");
const addTask = document.querySelector("#add-task");
const showTask = document.querySelector(".show-tasks");

// Initialise tasks array by reading from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Function to render items from state array to layout screen
function renderTasks() {
  showTask.innerHTML = "";
  
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.classList.add("task-style");
    li.dataset.index = index;

    // Create item content structure container
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("task-content");

    const statusSign = document.createElement("span");
    statusSign.textContent = task.completed ? "✅" : "⚪";
    statusSign.classList.add("task-status-sign");

    const textSpan = document.createElement("span");
    textSpan.textContent = task.text;
    textSpan.classList.add("task-text");
    if (task.completed) {
      textSpan.classList.add("completed");
    }

    contentDiv.append(statusSign, textSpan);

    // Create action element for deletion tracking
    const deleteSpan = document.createElement("span");
    deleteSpan.textContent = "❌";
    deleteSpan.classList.add("del-task-btn");

    li.append(contentDiv, deleteSpan);
    showTask.append(li);
  });

  // Keep saved history secure locally
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add task validation handler
function handleAddTask() {
  const inputValue = input.value.trim();
  
  if (inputValue !== "") {
    tasks.push({ text: inputValue, completed: false });
    input.value = "";
    renderTasks();
  } else {
    alert("Enter some task first.");
    input.value = "";
  }
}

addTask.addEventListener("click", handleAddTask);

// Handle Enter keypress for user convenience
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    handleAddTask();
  }
});

// Event Delegation: Single listener on the parent element
showTask.addEventListener("click", (e) => {
  const li = e.target.closest(".task-style");
  if (!li) return;
  
  const index = parseInt(li.dataset.index);

  if (e.target.classList.contains("del-task-btn")) {
    // Delete action execution
    tasks.splice(index, 1);
    renderTasks();
  } else {
    // Toggle completion status execution
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
  }
});

// Run initial execution cycle
renderTasks();
