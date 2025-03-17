import {find, search, save, edit, remove} from "./api.js";
import {myTable, myFormAdd} from "./components.js"

const table = document.querySelector("#myTable")
const button = document.querySelector("#my__button")
const dialog = document.querySelector("#my__dialog")
const close = document.querySelector("#my__dialog_close")

addEventListener("DOMContentLoaded", async()=>{
    const data = await find(); // await funciona solo porque en el HTML está el "defer".
    const fragTdbody = myTable(data);
    table.append(fragTdbody);
    button.dispatchEvent(new Event("click")); //esto es para simular que le estan dando click al boton, es lo mismo que poner open en html "abrir automaticamente"
})

button.addEventListener("click", myFormAdd)
close.addEventListener("click", (e)=> dialog.close())





/************************************ */

// const dataSearch = await search(17);
// console.log(dataSearch);

// /************************************ */

// const objSave = {
//     name: "Nicolas ",
//     lastname: "Espitia",
//     age: 21,
//     email: "nico@gmail.com",
//     rol: ["user", "admin"],
// }

// const messageSave = await save(objSave);
// console.log(messageSave);

// /************************************ */

// const objEdit = {
//     id: 4,
//     name: "Nicolas",
//     rol: ["Admin", "user"],

// }

// const messageEdit = await edit(objEdit);
// console.log(messageEdit);

// /************************************ */

// const dataRemove = await remove(1);
// console.log(dataRemove);