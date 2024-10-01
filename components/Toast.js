const body = document.querySelector("body");

export default function (title) {
  const div = document.createElement("div");
  div.classList.add("toast", "toast-top", "toast-start");
  div.innerHTML = `
    <div class="alert alert-info">
        <span>${title}</span>
    </div>`;

  body.appendChild(div);

  setTimeout(() => {
    body.removeChild(div);
  }, 1500);
}
