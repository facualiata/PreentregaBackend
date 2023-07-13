const fs = require("fs");
const { json } = require("node:stream/consumers");


class UserManager {
    users=[];
    constructor(path){
        this.path = path;
        this.cargarElArchivo();
    }
    addUser(users){
        this.guardarElArchivo(users);
    }

    async guardarElArchivo(){
        try{
            await fs.promises.writeFile(this.path, JSON.stringify(this.users))

        }catch(err){
            console.log(err);
        }
    }
    async cargarElArchivo(){
        try{
            let result = await fs.promises.readFile(this.path, "utf-8");
            this.users.push(result);
            console.log(this.users)
            
        }catch(err){
            console.log(err);
        }
    } 
}

let userManager = new UserManager("./usuarios.json");
userManager.addUser("facundo aliata")
