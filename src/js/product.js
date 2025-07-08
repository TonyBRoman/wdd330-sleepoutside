import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

const dataSource = new ProductData("tents");
const productId = getParam("product");

const product = new ProductDetails(productId, dataSource);
product.init();

// function addProductToCart(product) {
//   let cartItems = getLocalStorage("so-cart") || [];
//   if (!cartItems) {
//     cartItems = [];
//   }

//   cartItems = Array.isArray(cartItems) ? cartItems : [];
//   // console.log("cartItems:", cartItems);
//   // console.log("It is an array?", Array.isArray(cartItems));
//   cartItems.push(product);
//   setLocalStorage("so-cart", cartItems);
// }

// // add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }

// // add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);
