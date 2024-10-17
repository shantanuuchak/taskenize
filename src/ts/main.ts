import "../scss/main.scss";

const yearEl = document.querySelector(".year") as HTMLParagraphElement;

yearEl.textContent = `${new Date().getFullYear()}`;
