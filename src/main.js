import "./index.css";

// Packages
import { titleCase, randomID } from "./utils";

// Components
import Task from "./components/Task";

// DOM Targetting
const formEl = document.querySelector("form");
const inputEl = document.querySelector("[data-input-task]");
const listInputEl = document.querySelector("[data-list-tasks]");

// State
let state = [];

function markComplete(id) {
  state = state.map((task) => {
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

  // Performance
  const frag = document.createDocumentFragment();
  state.forEach(({ value, isMarked, id }) =>
    frag.appendChild(Task(value, isMarked, id))
  );

  listInputEl.appendChild(frag);
}

listInputEl.addEventListener("click", (e) => {
  if (e.target.tagName === "INPUT") {
    markComplete(e.target.id);
  }
});

// Form Submit
formEl.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form to refresh
  if (!inputEl.value) return; // Guard Clause

  //   Get current value, push to state, make input empty
  const currInput = titleCase(inputEl.value);
  state.unshift({ id: randomID(), value: currInput, isMarked: false });

  console.log(state);

  inputEl.value = "";

  //   Render new tasks
  renderTasks();
});
