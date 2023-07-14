// const fs = require("fs");



// class UserManager {
//     usuarios=[];
//     constructor(path){
//         this.path = path;
//         this.cargarElArchivo();
//     }
//     addUser(usuario){
//         this.guardarElArchivo(usuario);
//     }

//     async guardarEnArchivo(usuario){
//         try{
//             let datosPrevios = await fs.promises.readFile(this.path, "utf-8");
//             let datos = await JSON.parse(datosPrevios);
//             if(datos.length === 0){
//                 this.usuarios.push(usuario);
//                 await fs.promises.writeFile(this.path, JSON.stringify(this.usuarios));
//             }else{
//                 this.usuarios= datos;
//                 this.usuarios.push(usuario);
//                 await fs.promises.writeFile(this.path, JSON.stringify(this.usuarios));
//             }

//         }catch(err){
//             throw new Error(err);
//         }
//     }
//     async cargarElArchivo(){
//         try{
//             let result = await fs.promises.readFile(this.path, "utf-8");
//             this.users.push(result);
//             console.log(this.users)
            
//         }catch(err){
//             console.log(err);
//         }
//     } 
// }

// let userManager = new UserManager("./usuarios.json");
// userManager.addUser("facundo aliata")

// userManager.cargarElArchivo();