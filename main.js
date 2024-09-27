// Import Styling
import "./style.css";
import TaskList from "./components/TaskLi";

// === DOM Selection ===
const inputEl = document.querySelector("input");
const addBtn = document.querySelector("[data-add-btn]");
const dataList = document.querySelector("[data-list-tasks]");

// Get tasks from local storage
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTask(task) {
  dataList.appendChild(TaskList(task));
}

function handleInput() {
  const currValue = inputEl.value.trim();
  //  Checking for empty value
  if (!currValue || tasks.length > 5) {
    return;
  }

  renderTask(currValue);

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

// Render tasks on Initial Load
document.addEventListener("DOMContentLoaded", () => {
  tasks.forEach(renderTask);
});
