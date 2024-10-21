import Task from "./components/Task";
import "./index.css";

// DOM Targetting
const formEl = document.querySelector("form");
const inputEl = document.querySelector("[data-input-task]");
const listInputEl = document.querySelector("[data-list-tasks]");

// State
let state = [];

function markComplete(id) {
  state = state.map((task) => {
    console.log(task.value);
    if (task.id === id) {
      return { ...task, isMarked: !task.isMarked };
    }

    return task;
  });

  state.sort((a, b) => a.isMarked - b.isMarked);

  renderTasks();
}

// Rendering tasks list
function renderTasks() {
  listInputEl.innerHTML = "";

  const fragement = document.createDocumentFragment();
  state.forEach((task) =>
    fragement.appendChild(Task(task.value, task.isMarked, task.id))
  );

  listInputEl.appendChild(fragement);
}

listInputEl.addEventListener("click", (e) => {
  if (e.target.tagName === "INPUT") {
    markComplete(+e.target.id);
  }
});

// Form Submit
formEl.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form to refresh
  if (!inputEl.value) return; // If input is empty

  //   Get current value, push to state, make input empty
  const currInput = inputEl.value.trim();
  state.push({ id: state.length, value: currInput, isMarked: false });
  inputEl.value = "";

  //   Render new tasks
  renderTasks();
});
