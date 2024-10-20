import Task from "./components/Task";
import "./index.css";

// DOM Targetting
const formEl = document.querySelector("form");
const inputEl = document.querySelector("[data-input-task]");
const listInputEl = document.querySelector("[data-list-tasks]");

// State
const state = [];

function renderTasks() {
  listInputEl.innerHTML = "";

  const fragement = document.createDocumentFragment();
  state.forEach((task) =>
    fragement.appendChild(Task(task.value, task.isMarked))
  );

  listInputEl.appendChild(fragement);
}

listInputEl.addEventListener("click", () => {
  console.log(`an input was clicked wow!`);
});

formEl.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form to refresh

  if (!inputEl.value) return;

  const currInput = inputEl.value.trim();
  state.push({ id: state.length, value: currInput, isMarked: false });
  inputEl.value = "";
  renderTasks();
});
