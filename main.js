// Import Styling & Components
import "./style.css";
import TaskList from "./components/TaskLi";
import Toast from "./components/Toast";

// === DOM Selection ===
const inputEl = document.querySelector("input");
const addBtn = document.querySelector("[data-add-btn]");
const dataList = document.querySelector("[data-list-tasks]");

// === Variables ===
const ul = document.createElement("ul");
ul.classList.add("menu", "bg-base-200", "rounded-box", "w-full", "text-white");

// Get tasks from local storage
const tasks = JSON.parse(localStorage.getItem("items")) || [];

console.log("Page render");
console.log(tasks);

// Render tasks on Initial Load
tasks.forEach((task) => {
  console.log(task.text);
  renderTask(task.text);
});

function saveToLocal() {
  localStorage.setItem("items", JSON.stringify(tasks));
}

function renderTask(task, empty = false) {
  // Take a task object and render it on the screen as a list
  if (empty) {
    ul.innerHTML = "";
  }
  ul.appendChild(TaskList(task));
  dataList.appendChild(ul);
}

function handleInput() {
  const currValue = inputEl.value.trim();
  //  Checking for empty value
  if (!currValue) {
    return;
  }

  if (tasks.length > 6) {
    Toast("Maximum length reached");
    inputEl.value = "";
    return;
  }

  // Add easter egg 🥚
  if (currValue === ":clearall") {
    tasks.length = 0;
    saveToLocal();
    inputEl.value = "";
    Toast("Cleared everything");
    renderTask("", true);
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
