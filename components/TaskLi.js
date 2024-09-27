export default function (title) {
  const liEl = document.createElement("li");
  liEl.classList.add("flex", "flex-row", "items-center");
  liEl.innerHTML = `
    <p>${title}</p>
    <button class="btn">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-x text-red-500"
        >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
        </svg>
    </button>
    `;
  return liEl;
}
