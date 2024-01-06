import { createMainTitle } from "../components/mainTitle.js";
import { createDescription } from "../components/description.js";

export function createBasketPage() {
  const page = document.createElement("div");
  page.classList.add("page", "basket-page", "container");

  const title = createMainTitle("Корзина");
  const description = createDescription("Страница в разработке");

  page.append(title, description);
  return page;
}