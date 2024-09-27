const showToast = document.querySelector("[data-show-toast]");

export default function (message) {
  const div = document.createElement("div");
  div.classList.add("alert", "alert-info");
  div.innerHTML = `<span>${message}.</span>`;
  showToast.appendChild(div);

  // Remove after delay
  setTimeout(() => {
    showToast.removeChild(div);
  }, 1400);
}
