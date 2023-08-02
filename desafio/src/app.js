import express from 'express';
import router from "./router/products.router.js";



const app = express();
const PORT = 8080

app.use(express.json());
// app.use(express.urlencoded({extended: true}));


app.get("/", (req, res) => {
    res.send("hola mundo");
});

app.use("/api/products", router)

app.listen(PORT, () => {
    console.log("servidor corriendo en " + PORT);
});