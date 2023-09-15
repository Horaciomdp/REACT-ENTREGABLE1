window.addEventListener("load", ()=>{
    const currentDate= new Date();
    document.getElementById("currentYear").innerText=currentDate.getFullYear(); 
})


// Llamada a la api y carga de las card
const getData = () => {
    fetch('https://sazonapi.onrender.com/api/v1/recipies')
      .then(response => {
        // Verifico  si la respuesta es exitosa (código 200-299)
        if (!response.ok) {
          throw new Error('Error al obtener los datos de la API');
        }
        // Parseo la respuesta como JSON
        return response.json();
      })
      .then(data => {
        // Aca puedo llenar las tarjetas, pero mejor lo hago en una funcion separada
        fillRecipeCards(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  const fillRecipeCards = (recipes) => {
    const respuesta = document.querySelector('#respuesta');
    const respuesta2 = document.querySelector('#respuesta2');
  
    // Aca si lleno los datos de las tarjetas
    recipes.data.forEach(item => {
        //console.log(item);
        const row = document.createElement('tr');
        row.innerHTML =` 
        <td>${item.nombre}</td>
        <td>${item.descripcion_tipo} </td>
        `
        respuesta2.appendChild(row);
    })
  }
  

  
  getData();














/* viejo


//variables
const url = 'https://jsonplaceholder.typicode.com/users';
const respuesta = document.querySelector('#respuesta');
const url2 = 'https://sazonapi.hymsoft.repl.co/api/v1/recipies';
const respuesta2 = document.querySelector('#respuesta2');

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

//funcion esta es la api de hugo por consola
fetch('https://sazonapi.hymsoft.repl.co/api/v1/recipies')
  .then(res => res.json()) // el método .json() analiza la respuesta JSON en un objeto literal JS
  .then(data => console.log(data));
  

  
//lamado hugo



    data.forEach(receta => {
         console.log(receta[1].nombre);
    }); 

 

 */



/* 

    const url = 'https://recetas-en-espanol.p.rapidapi.com/api/recipes';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0bcdd50724mshb8f65147727a0f0p1b1b85jsnd26761eb7c64',
        'X-RapidAPI-Host': 'recetas-en-espanol.p.rapidapi.com'
    }
};

let conj = 0
           

const obtenerRecetas = async () => {
    try {
        const respuesta = await fetch(url, options)
        console.log(respuesta);

        if (respuesta.status === 200) {
        
          const datos = await respuesta.json();
         return datos  
        
      
        }
    } catch (error) {
        console.log(error.message);
    }
};

obtenerRecetas().then((Obj)=>{
   
});
 si no vas a usar la url muchas veces lo pones dentro del fetch, si queres cambiar a futuro; pones la variable afuera */