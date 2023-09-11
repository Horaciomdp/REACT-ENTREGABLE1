window.addEventListener("load", ()=>{
    const currentDate= new Date();
    document.getElementById("currentYear").innerText=currentDate.getFullYear(); 
})


//variables
const url = 'https://jsonplaceholder.typicode.com/users';
const respuesta = document.querySelector('#respuesta');


//evento

document.addEventListener("DOMContentLoaded", llamarAPI);

//funcion


function llamarAPI(){
    console.log("corriendo");
    fetch (url)
        .then(resp => resp.json())
        .then(function(data){
            mostrarHTML(data);
        } )   

}

function mostrarHTML(datos){

   datos.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML =` 
        <td>${item.name}</td>
        <td>${item.email} </td>
        `
        respuesta.appendChild(row);
   }); 
}