import { ProductManager } from "./classes/ProductManager.js";
import { __dirname } from "./utils.js";

console.log("dirname", __dirname);
let MyFirtStore = new ProductManager("./productos.json");

MyFirtStore.addProduct(
    "producto de prueba",
    "este es un producto de prueba",
    200,
    "sin imagen",
    "abc123687",
    22,
);


MyFirtStore.getProducts().then((data) => {console.log(data)});
