//instalar "xmlhttprequest"  el que nos permitira hacer request a una url o api
//npm install xmlhttprequest --save

/*
    Estados de xmlhttprequest
    0-inicializado
    1-cargando (en proceso de llamado)
    2-cargado
    3-Descarga de información
    4-completado

    estados de peticion
    200 =>OK
    400 =>"No encontro destino"
    500 =>"Error de servidor"
*/

//Declarar
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
let API = 'https://rickandmortyapi.com/api/character/'

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest()
    xhttp.open('GET', url_api, true)
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                //Se ejecturo correctamente
                //la funcion callback primer parametro es error, segundo es la respuesta.
                callback(null, JSON.parse(xhttp.responseText))
            }
            else {
                const error = new Error(`Error ${url_api}`)
                return callback(error, null)
            }
        }
    }
    xhttp.send()
}

//CallbackHell
fetchData(API, function (error1, data1) {
    if (error1) return console.error(error1)
    fetchData(API + data1.results[0].id, function (error2, data2) {
        if (error2) return console.error(error2)
        fetchData(data2.origin.url, function (error3, data3) {
            if (error3) return console.error(error3)
            console.log(data1.info.count)//numero de personajes
            console.log(data2.name)//nombre del primer personaje
            console.log(data3.dimension)//dimension del primer personaje
        })
    })
})