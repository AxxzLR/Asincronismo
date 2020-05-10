// Funcion que se retornara como callback
function sum(num1, num2) {
    return num1 + num2
}

//funcion que realiza llamado callback
function calc(num1, num2, callback) {
    return callback(num1, num2)
}

//Ejecución
console.log(calc(6,2, sum))

//funcion que realiza llamado callback
function date(callback){
    console.log(new Date)
    setTimeout(function(){
        let date = new Date
        callback(date)
    },3000);
}

// Funcion que se retornara como callback
function printDate(dateNow){
    console.log(dateNow)
}

//Ejecución
date(printDate)