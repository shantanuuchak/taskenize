import "./index.css";

// Packages
import _ from "loadsh";
import { getItem, setItem } from "localforage";

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

  // Performance
  const frag = document.createDocumentFragment();
  state.forEach(({ value, isMarked, id }) =>
    frag.appendChild(Task(value, isMarked, id))
  );

  listInputEl.appendChild(frag);
}

listInputEl.addEventListener("click", (e) => {
  if (e.target.tagName === "INPUT") {
    markComplete(parseInt(e.target.id));
  }
});

// Form Submit
formEl.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form to refresh
  if (!inputEl.value) return; // Guard Clause

  //   Get current value, push to state, make input empty
  const currInput = _.startCase(_.lowerCase(inputEl.value.trim()));
  state.unshift({ id: state.length, value: currInput, isMarked: false });
  inputEl.value = "";

  //   Render new tasks
  renderTasks();
});
