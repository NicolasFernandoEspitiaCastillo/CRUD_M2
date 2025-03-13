import {find, search, save, edit, remove} from "./api.js";

/************************************ */


const data = await find(); // await funciona solo porque en el HTML está el "defer".
console.log(data);

/************************************ */

const dataSearch = await search(17);
console.log(dataSearch);

/************************************ */

const objSave = {
    name: "Nicolas ",
    lastname: "Espitia",
    age: 21,
    email: "nico@gmail.com",
    rol: ["user", "admin"],
}

const messageSave = await save(objSave);
console.log(messageSave);

/************************************ */

const objEdit = {
    name: "Nicolas Fernando",
    lastname: "Espitia Castillo",
    id: 17
}

const messageEdit = await edit(objEdit);
console.log(messageEdit);

/************************************ */