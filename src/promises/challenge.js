const fetchData = require('../utils/fetchData');

const API ="https://rickandmortyapi.com/api/character/";
 //primer peticion count : personajes que hay
 //primer elemento : nombre del personaje
 //dimension del personaje y sacar nombre de dimension

 fetchData(API)
    .then (data =>{
        console.log(data.info.count)
        return fetchData(`${API} ${data.results[0].id}`)
    })
    .then (data => {
        console.log(data.name);
        return fetchData(data.origin.url)
    })
    .then ( data => {
        console.log(data.dimension)
    })
    .catch(error => console.error(error));