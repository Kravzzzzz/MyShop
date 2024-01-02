import { createHeader } from "./components/header.js";
import { pageContainer} from "./components/pageContainer.js";


const app = document.getElementById("app");


function createMainTitle(text) {
  const title = document.createElement("h1");
  title.classList.add("main-title");
  title.textContent = text;

  return title;
}

function createDescription(text) {
  const desc = document.createElement("p");
  desc.classList.add("description");
  desc.textContent = text;

  return desc;
}

function createProductCard(productTitle, productPrice) {
  const card = document.createElement("li");
  card.classList.add("product-list__card");

  const title = document.createElement("h2");
  title.classList.add("product-list__card-title");
  title.textContent = productTitle;

  const price = document.createElement("strong");
  price.classList.add("product-list__card-price");
  price.textContent = `${productPrice} руб.`;

  const addBasket = document.createElement("button");
  addBasket.classList.add("btn");
  addBasket.textContent = "В корзину";

  card.append(title, price, addBasket);
  return card;
}

function createMainPage() {
  const page = document.createElement("div");
  page.classList.add("page", "main-page", "container");

  const title = createMainTitle("Главная страница");

  const list = document.createElement("ul");
  list.classList.add("product-list", "list-reset");

  list.append(
    createProductCard("товар 1", 200),
    createProductCard("товар 2", 200),
    createProductCard("товар 3", 200)
  );

  page.append(title, list);
  return page;
}

function createProductPage() {
  const page = document.createElement("div");
  page.classList.add("page", "product-page", "container");

  const title = createMainTitle("Продукт");
  const description = createDescription("Страница в разработке");

  page.append(title, description);
  return page;
}

function createCatalogPage() {
  const page = document.createElement("div");
  page.classList.add("page", "catalog-page", "container");

  const title = createMainTitle("Каталог");
  const description = createDescription("Страница в разработке");

  page.append(title, description);
  return page;
}

function createBasketPage() {
  const page = document.createElement("div");
  page.classList.add("page", "basket-page", "container");

  const title = createMainTitle("Корзина");
  const description = createDescription("Страница в разработке");

  page.append(title, description);
  return page;
}

const header = createHeader();
const pageContainer = createPageContainer();

function navigation(page) {
  pageContainer.innerHTML = "";
  switch (page) {
    case "catalog":
      const catalogtPage = createCatalogPage();
      pageContainer.append(catalogtPage);
      break;
    case "basket":
      const basketPage = createBasketPage();
      pageContainer.append(basketPage);
      break;
    default:
      const mainPage = createMainPage();
      pageContainer.append(mainPage);
      break;
  }
}

// const productPage = createProductPage();
// pageContainer.append(productPage);

navigation();

app.append(header, pageContainer);
