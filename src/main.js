import "./index.css";

// Packages
import { titleCase, randomID } from "./utils";
import localforage from "localforage";

// Components
import Task from "./components/Task";

// DOM Targetting
const formEl = document.querySelector("form");
const inputEl = document.querySelector("[data-input-task]");
const listInputEl = document.querySelector("[data-list-tasks]");

// State
localforage.setDriver(localforage.LOCALSTORAGE);
let state = [];

localforage.getItem("tasks").then((data) => {
  if (!data) return;

  state = data;
  renderTasks();
});

console.log(state);
setTimeout(() => console.log(state), 1000);

function toggleComplete(id) {
  state = state.map((task) => {
    if (task.id === id) {
      return { ...task, isMarked: !task.isMarked };
    }

    return task;
  });

  state.sort((a, b) => a.isMarked - b.isMarked);
  localforage.setItem("tasks", state);
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
    toggleComplete(e.target.id);
    renderTasks();
  }
});

// Form Submit
formEl.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form to refresh
  if (!inputEl.value) return; // Guard Clause

  if (inputEl.value === ":clearall") {
    state.length = 0;
    localforage.setItem("tasks", []);
    renderTasks();
    inputEl.value = "";
    return;
  }

  //   Get current value, push to state, make input empty
  const currInput = titleCase(inputEl.value);
  state.unshift({ id: randomID(), value: currInput, isMarked: false });

  localforage.setItem("tasks", state);

  inputEl.value = ""; // Clean input field

  //   Render new tasks
  renderTasks();
});
