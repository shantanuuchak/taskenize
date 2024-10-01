// For Tailwind & Components
import "./style.css";
import Toast from "./components/Toast";

// === DOM Selection ===
const inputEl = ge("[data-input-text]");
const btnAdd = ge("[data-btn-add]");
const btnClearLocal = ge("[data-btn-clearlocal]");

// Get elements from DOM
function ge(attribute) {
  return document.querySelector(attribute);
}

Toast("Page loaded");

const handleChange = () => {};
