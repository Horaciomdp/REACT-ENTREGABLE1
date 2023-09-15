window.addEventListener("load", ()=>{
    const currentDate= new Date();
    document.getElementById("currentYear").innerText=currentDate.getFullYear(); 
})

//funcion esta es la api de hugo por consola
fetch('https://sazonapi.hymsoft.repl.co/api/v1/recipies')
  .then(res => res.json()) // el método .json() analiza la respuesta JSON en un objeto literal JS
  .then(data => console.log(data));




//variables
const url = 'https://jsonplaceholder.typicode.com/users';
const respuesta = document.querySelector('#respuesta');
const url2 = 'https://sazonapi.hymsoft.repl.co/api/v1/recipies'

//evento

document.addEventListener("DOMContentLoaded", llamarAPI);



//llamado de api jsonplaceholder
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

//llamado a api dfe hugo