import { createDescription } from "../components/description.js";
import { createMainTitle } from "../components/mainTitle.js";

export function createCatalogPage() {
  const page = document.createElement("div");
  page.classList.add("page", "catalog-page", "container");

  const title = createMainTitle("Каталог");
  const description = createDescription("Страница в разработке");

  page.append(title, description);
  return page;
}