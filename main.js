// Import Styling
import "./style.css";
import TaskList from "./components/TaskLi";

// === DOM Selection ===
const inputEl = document.querySelector("input");
const addBtn = document.querySelector("[data-add-btn]");
const dataList = document.querySelector("[data-list-tasks]");

function handleInput() {
  const currValue = inputEl.value.trim();
  //  Checking for empty value
  if (!currValue) {
    return;
  }

  dataList.appendChild(TaskList(currValue));
  console.log(currValue);

  //   Empty the input
  inputEl.value = "";
}

inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleInput();
  }
});

addBtn.addEventListener("click", handleInput);
