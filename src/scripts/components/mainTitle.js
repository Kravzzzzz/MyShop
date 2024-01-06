export function createMainTitle(text) {
  const title = document.createElement("h1");
  title.classList.add("main-title");
  title.textContent = text;

  return title;
}