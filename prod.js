class TicketManager {
    products;

    constructor (products){
        this.products = [];
    }
    
    static correlativoId = 0;

    addProduct(title, description, price, thumbnail, code, stock){
        
        if(title == undefined || description== undefined || price == undefined || thumbnail == undefined || code == undefined|| stock == undefined){
            throw new Error( "todos los campos son obligatorios")
        
        }
        let codeExists = this.products.some((dato) => dato.code == code);
         if(codeExists){
            throw  new Error("el codigo ya existe")
        }else{
            TicketManager.correlativoId++;
            const newProduct = {
                id: TicketManager.correlativoId,
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            };
            this.products.push(newProduct);
        }   
    }
    getProducts(){
        return this.products;
    }

    getProductById(id){
        let product = this.products.find(dato => dato.id === id);

        if(product !== undefined){
            return product;
        }else{
            return "no existe el producto solicitado";
        }
    }

}

 myFirtsProduct = new TicketManager();

myFirtsProduct.addProduct(
    "producto de prueba",
    "este es un producto de prueba",
    200,
    "sin imagen",
    "abc123",
    25,
);


console.log("desde getProducts", myFirtsProduct.getProducts());
console.log("desde getProductById", myFirtsProduct.getProductById(1));
