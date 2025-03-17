const KEY = "67d2f94d8bca322cc268afb7";

export const find = async()=>{
    const url = new URL(`https://${KEY}.mockapi.io/`) //dominio 
    url.pathname += "informacion" // enpoint // pathname = nombre de ruta 
    const response = await fetch(url.toString(), {method: "get"}) // significa vaya al servidor y lo pega en la variable "response".
    // await es si esta bien o esta mal, devuelvalo a la variable "response", fech es ir al servidor y devolver. 
    // async y await es resolver una promesa. 
    return await response.json(); 
}
export const search = async(id)=>{
    const url = new URL(`https://67d2f94d8bca322cc268afb7.mockapi.io/`)
    url.pathname += `informacion/${id}` 
    const response = await fetch(url.toString(), {method: "get"})
    return await response.json();  
}
export const save = async(data)=>{
    const url = new URL(`https://${KEY}.mockapi.io/`)
    const headers = new Headers(); 
    headers.set("Content-Type", "application/json");  // set = agregar 
    url.pathname += `informacion`;
    const config = {
        method: "post",
        headers,
        body: JSON.stringify(data)   //stringify =  cambiar de objeto a json.
                                    // parse = cambiar de json a objeto. 
    }
    const response = await fetch(url.toString(), config);
    return await response.json(); // esto tambien sirve para volver en json pero para red solamente.
    
}
export const edit = async(data)=>{
    const {id} = data;
    if(typeof id === "undefined") return "No se envió el ID" // definir un error directamente en JavaScript.
    data.updateAt = Math.floor(Date.now() / 1000); // solo es apra quitar los milisegundos 
    delete data.id;
    const url = new URL(`https://${KEY}.mockapi.io/`)
    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    url.pathname += `informacion/${id}` 
    const config = {
        method: "put",
        headers,
        body: JSON.stringify(data)
    }

    const response = await (await fetch(url.toString(), config)).json(); // solamente se utiliza cuando esté totalmente seguro de que no hay ningún error.
    response.updateAt = new Date(response.updateAt * 1000); //hora estandar de colombia
    response.createdAt = new Date(response.createdAt * 1000); //hora estandar de colombia
    return response;

}
export const remove = async()=>{
    const url = new URL(`https://${KEY}.mockapi.io/`) 
    url.pathname += `informacion/${id}` 
    const response = await fetch(url.toString(), {method: "delete"}) 
    return await response.json(); 
}
