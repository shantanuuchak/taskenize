export default function (title) {
  const liEl = document.createElement("li");
  liEl.classList.add("flex", "flex-row", "items-center");

  liEl.innerHTML = `
    <p>Placeholder task #1</p>
    <button class="btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-square-rounded-x text-red-500"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 10l4 4m0 -4l-4 4" />
        <path
          d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"
        />
      </svg>
    </button>
  `;
  return liEl;
}
