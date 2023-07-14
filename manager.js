import { ProductManager } from "./productManager.js";



let MyFirtStore = new ProductManager("./productos.json");

MyFirtStore.addProduct(
    "producto de prueba",
    "este es un producto de prueba",
    200,
    "sin imagen",
    "abc123c",
    25,
);


MyFirtStore.getProducts().then((data) => {console.log(data)});
