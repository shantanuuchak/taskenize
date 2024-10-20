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

listInputEl.addEventListener("click", (e) => {
  if (e.target.tagName === "INPUT") {
    console.log("Bhai dot mein click hua hai");
    console.log(e.target.textContent);
  }
});

formEl.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form to refresh
  if (!inputEl.value) return; // If input is empty

  //   Get current value, push to state, make input empty
  const currInput = inputEl.value.trim();
  state.push({ id: state.length, value: currInput, isMarked: true });
  inputEl.value = "";

  //   Render new tasks
  renderTasks();
});
