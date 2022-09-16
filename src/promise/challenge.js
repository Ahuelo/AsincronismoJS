//se instala node-fetch mediante npm i node-fetch en la consola
//se importa en el archivo js
import fetch from "node-fetch";
//se crea la constante que hace referencia a la API
const API = 'https://api.escuelajs.co/api/v1';

//se crea una función para hacer llamado a la importación de fetch con el parametro que llamará a nuesta api
function fetchData(urlApi){
    return fetch(urlApi)
};
//se convoca la función fetch con el argumento de la Api, agregando un apartado que deseamos de la Api
//fetchData(`${API}/products`)
    //trae mediante .then la respuesta a traves de json
    //.then(response => response.json())
    //Mostrar que incluye ese json
    //.then(products =>{
        //console.log(products);
        //Capturador de errores mediante .catch
    //}).catch(error =>console.log(error));

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products =>{
        console.log(products);
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(response=>response.json())
    .then(product =>{
        console.log(product.title);
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category =>{
        console.log(category.name);
    })
    .catch(error =>console.log(error))
    .finally(()=>console.log('finally'));