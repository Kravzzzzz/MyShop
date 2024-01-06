import Navigo from "navigo";
import {createHeader} from "./components/header.js";
import { createPageContainer } from "./components/pageContainer.js";
//import { createMainPage } from "./pages/mainPage.js";
//import { createCatalogPage } from "./pages/catalogPage.js";
//import { createBasketPage } from "./pages/basketPage.js";




const app = document.getElementById("app");

const header = createHeader();
const pageContainer = createPageContainer();

// export async function navigation(page) {
//   pageContainer.innerHTML = "";
//   switch (page) {
//     case "catalog":
//       const moduleCatalog = await import("./pages/catalogPage.js")
//       const catalogtPage = moduleCatalog.createCatalogPage();
//       pageContainer.append(catalogtPage);
//       break;
//     case "basket":
//       const moduleBasket = await import("./pages/basketPage.js")
//       const basketPage =  moduleBasket.createBasketPage();
//       pageContainer.append(basketPage);
//       break;
//     default:
//       const moduleMain = await import("./pages/mainPage.js")
//       const mainPage = moduleMain.createMainPage();
//       pageContainer.append(mainPage);
//       break;
//   }
// }


// navigation();

export const router = new Navigo('/');

router.on('/', async () => {
  const moduleMain = await import("./pages/mainPage.js")
  const mainPage = moduleMain.createMainPage();
  pageContainer.innerHTML = "";
  pageContainer.append(mainPage);
})

router.on('/catalog', async () => {
  const moduleCatalog = await import("./pages/catalogPage.js")
  const catalogtPage = moduleCatalog.createCatalogPage();
  pageContainer.innerHTML = "";
  pageContainer.append(catalogtPage);
})

router.on('/basket', async () => {
  const moduleBasket = await import("./pages/basketPage.js")
  const basketPage =  moduleBasket.createBasketPage();
  pageContainer.innerHTML = "";
  pageContainer.append(basketPage);
})

router.on('/product/:title', async () => {
  const moduleProduct = await import("./pages/productPage.js")
  const productPage =  moduleProduct.createProductPage();
  pageContainer.innerHTML = "";
  pageContainer.append(productPage);
})



router.resolve()

app.append(header, pageContainer);
