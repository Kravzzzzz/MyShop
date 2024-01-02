export function createHeader() {
  function createLink(content, url = "") {
    const link = document.createElement("a");
    link.href = url;
    link.classList.add("btn");
    link.textContent = content;
    return link;
  }

  const header = document.createElement("header");
  header.classList.add("header");

  const container = document.createElement("div");
  container.classList.add("container", "header__container");

  const nav = document.createElement("nav");
  nav.classList.add("navigation");

  const link1 = createLink("Главная страница");
  link1.addEventListener("click", function (event) {
    event.preventDefault();
    navigation();
  });
  const link2 = createLink("Каталог");
  link2.addEventListener("click", function (event) {
    event.preventDefault();
    navigation("catalog");
  });
  const link3 = createLink("Корзина");
  link3.addEventListener("click", function (event) {
    event.preventDefault();
    navigation("basket");
  });

  nav.append(link1, link2, link3);
  container.append(nav);
  header.append(container);
  return header;
}