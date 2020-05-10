let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest()
        xhttp.open('GET', url_api, true)
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === 4) {
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new error('Error', url_api))
                    // : reject('Ocurrio un error')
            }
        })
        xhttp.send()
    })
}

module.exports = fetchData