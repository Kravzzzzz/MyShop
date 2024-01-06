import { createMainTitle } from "../components/mainTitle.js";
import { createProductCard } from "../components/productCard.js";

export function createMainPage() {
  const page = document.createElement("div");
  page.classList.add("page", "main-page", "container");

  const title = createMainTitle("Главная страница");

  const list = document.createElement("ul");
  list.classList.add("product-list", "list-reset");

  list.append(
    createProductCard("товар_1", 200),
    createProductCard("товар_2", 300),
    createProductCard("товар_3", 700)
  );

  page.append(title, list);
  return page;
}