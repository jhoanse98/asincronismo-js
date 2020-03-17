const somethingwillhappen = ()=>{
    return new Promise((resolve, reject)=>{
        if(true){
            resolve("Hey i'm working");
        }
        else{
            reject("Ups. i'm broken");
        }
    })
}

somethingwillhappen()
    .then(response => console.log(response))
    .catch(error => console.error(error))


somethingwillhappen2 = ()=>{
    return new Promise((resolve, reject)=>{
        if(true){
            setTimeout(()=>{
                resolve("hey, I'm working 2")
            }, 3000)
        }
        else{
            const error = new Error('RE BROKEN!!')
            reject(error);
        }
    })
}

somethingwillhappen2()
    .then(response=> console.log(response))
    .catch(error=> console.error(error));

Promise.all([somethingwillhappen(), somethingwillhappen2()]) //.all es para ejecutar un arreglo de promesas
    .then(response=> {
        console.log('Array of results', response)
    })
    .catch(err=>{
        console.error(err);
    })
    