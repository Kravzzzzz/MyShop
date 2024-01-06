export function createDescription(text) {
  const desc = document.createElement("p");
  desc.classList.add("description");
  desc.textContent = text;

  return desc;
}