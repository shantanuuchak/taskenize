export default function (text, isCompleted) {
  const label = document.createElement("label");
  label.classList.add(
    "label",
    "cursor-pointer",
    isCompleted && "bg-stone-200 rounded-lg"
  );
  label.innerHTML = `
    <span class="label-text">${text}</span>
    <input type="checkbox" class="checkbox" ${isCompleted && "checked"} />
  `;
  return label;
}
