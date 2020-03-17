const {XMLHttpRequest} = require('xmlhttprequest');

const fetchData= (url_api) => {
    return new Promise((resolve,reject)=>{
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true) //activar asincronismo en httprequest (true) para una solicitud de get
        xhttp.onreadystatechange = (()=>{
        if (xhttp.readyState === 4){
            (xhttp.status === 200)
                ? resolve(JSON.parse(xhttp.responseText))
                : reject(new Error('error', url_api))
        }
    });
    xhttp.send();
    })   
}

module.exports = fetchData; //node usa COMMONJS y por lo tanto se debe usar module.export ya que node no soporta el exports default y el import. tener en cuenta