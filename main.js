// Import Styling
import "./style.css";
import TaskList from "./components/TaskLi";
import Toast from "./components/Toast";

// === DOM Selection ===
const inputEl = document.querySelector("input");
const addBtn = document.querySelector("[data-add-btn]");
const dataList = document.querySelector("[data-list-tasks]");

// === Variables ===
// Get tasks from local storage
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Render tasks on Initial Load
tasks.forEach(renderTask);

function saveToLocal() {
  localStorage.setItem("items", JSON.stringify(tasks));
}

function renderTask(task) {
  // Take a task object and render it on the screen as a list
  dataList.appendChild(TaskList(task));
}

function handleInput() {
  const currValue = inputEl.value.trim();
  //  Checking for empty value
  if (!currValue) {
    return;
  }

  if (tasks.length > 6) {
    Toast("Maximum 6 allowed");
    return;
  }

  const newTask = {
    id: Date.now(),
    text: currValue,
    completed: false,
  };

  tasks.push(newTask);
  saveToLocal();
  renderTask(currValue);

  Toast("Task added");

  //   Empty the input
  inputEl.value = "";
}

// === Add Listeners ===
inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleInput();
  }
});
addBtn.addEventListener("click", handleInput);
