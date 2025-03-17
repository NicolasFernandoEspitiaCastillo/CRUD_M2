export const myTable = (data)=>{
    // [
    //     {
    //         "createdAt": 1741882482,
    //         "updateAt": 1741882482,
    //         "name": "name 1",
    //         "lastname": "lastname 1",
    //         "age": 28,
    //         "email": "email 1",
    //         "rol": [],
    //         "id": "1"
    //       },
    // ]
    const tdbody = document.createElement("tbody");
    data.forEach(value => {    //element o value = la infomacion dentro del array [] y forEach saca el el indice y el valor automaticamente
        const tr = document.createElement("tr")
        const tdId = document.createElement("td")
        tdId.textContent = value.id;
        const tdName = document.createElement("td")
        tdName.textContent = value.name;
        const tdLastName = document.createElement("td")
        tdLastName.textContent = value.lastName;
        const tdAge = document.createElement("td")
        tdAge.textContent = value.age; 
        const tdEmail = document.createElement("td")
        tdEmail.textContent = value.email;
        const tdRoles = document.createElement("td")
        tdRoles.textContent = value.rol;
        const tdDateCreate = document.createElement("td")
        tdDateCreate.textContent = new Date(value.createdAt * 1000);
        const tdDateUpdate = document.createElement("td")
        tdDateUpdate.textContent = new Date(value.updateAt * 1000);      

        const tdActions = document.createElement("td");
        const btnEdit = document.createElement("button")
        btnEdit.textContent = "Edit";
        const btnDelete = document.createElement("button")
        btnDelete.textContent = "Delete";
        tdActions.append(btnEdit, btnDelete);
        
        tr.append(tdId, tdName, tdLastName, tdAge, tdEmail, tdRoles, tdDateCreate, tdDateUpdate, tdActions);
        tdbody.append(tr);
    });
    return tdbody;

}

export const myFormAdd = (e)=>{
    const dialog = document.querySelector("#my__dialog")
    dialog.showModal()

    const my_form = document.createElement("form");
    my_form.action ="/informacion"
    my_form.method ="/informacion"
    console.log(my_form);
    
    
}