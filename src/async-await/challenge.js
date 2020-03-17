const fetchData = require('../utils/fetchData');
const API ="https://rickandmortyapi.com/api/character/";

//primer peticion count : personajes que hay
 //primer elemento : nombre del personaje
 //dimension del personaje y sacar nombre de dimension

const challenge = async (url_api)=>{
    try{
        const data = await fetchData(url_api);
        const character = await fetchData(`${API}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);
        console.log(data.info.count)
        console.log(character.name)
        console.log(origin.dimension);
    } catch(error){
        console.log(error);
    }
}
console.log('before');
challenge(API);
console.log('after');