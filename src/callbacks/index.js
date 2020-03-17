function suma(a,b){
    return a+b;
}

function calcular(a,b, callback){
    return callback(a,b);
}

console.log(calcular(3,5,suma));


function dates(callback){
    console.log(new Date)
    setTimeout(()=>{
        let date= new Date;
        callback(date);
    }, 3000);
}

function printDate(date){
    console.log(date);
}

dates(printDate);