const doSomethingAsync = ()=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            (true)
                ? resolve('Do something Async')
                : reject(new Error("There's a mistake"));
        }, 5000);
    })
}

const doSomething = async () =>{
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('before');
doSomething();
console.log('after');




const anotherfunction = async () => {
    try{
        const something2 = await doSomethingAsync();
        console.log(something2);
    }
    catch(error){
        console.log(error);
    }
}

console.log('before2')
anotherfunction();
console.log('after2');