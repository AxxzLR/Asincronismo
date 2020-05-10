//Es prefereible ante las promesas,
//ya que hace que el codigo se comporte como sincrono.

//Declarar promesa
const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (false)
            ? setTimeout(() => resolve('Do something Async'), 2000)
            : reject(new Error('Test Error'))
            // : reject('Ocurrio un error')
    })
}

const doSomething = async () => {
    const something = await doSomethingAsync()
    console.log(something)
}

console.log('Before')
doSomething()
console.log('After')


const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync()
        console.log(something)
    }
    catch (error) {
        console.log(error)
    }
}

console.log('Before1')
anotherFunction()
console.log('After1')