import { createMainTitle } from "../components/mainTitle.js";
import { createDescription } from "../components/description.js";

export function createProductPage() {
  const page = document.createElement("div");
  page.classList.add("page", "product-page", "container");

  const title = createMainTitle("Продукт");
  const description = createDescription("Страница в разработке");

  page.append(title, description);
  return page;
}