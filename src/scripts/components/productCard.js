import { router } from "../main.js";

export function createProductCard(productTitle, productPrice) {
  const card = document.createElement("li");
  card.classList.add("product-list__card");

  const title = document.createElement("h2");
  title.classList.add("product-list__card-title");

  const productLink = document.createElement("a");
  productLink.textContent = productTitle;
  title.append(productLink);
  productLink.href = "/product";

  productLink.addEventListener("clik", (event) => {
    event.preventDefault();
    router.navigate(`/product/${productTitle}`);
  });

  const price = document.createElement("strong");
  price.classList.add("product-list__card-price");
  price.textContent = `${productPrice} руб.`;

  const addBasket = document.createElement("button");
  addBasket.classList.add("btn");
  addBasket.textContent = "В корзину";

  card.append(title, price, addBasket);

  // card.title.addEventListener('clik', () => {
  //   console.log(card);
  // })

  return card;
}
