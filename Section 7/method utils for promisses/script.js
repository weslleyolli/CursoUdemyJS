const rand = (min, max) => {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

const waitHere = (msg, time) => {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(false)

        setTimeout(() => {
            resolve(msg)
        }, time)
    })
}

// Promise.all Promisse.race Promise.reject

const promises = [
    //'First value',
    waitHere('Promise 1', 3000),
    waitHere('Promise 2', 500),
    waitHere('Promise 3', 1000),
    //'Other values'
]

Promise.race(promises)
    .then(values => {
        console.log(values)
    })
    .catch(function(erro) {
        console.log(erro)
    })

//Promises.all resolve as promisses de uma vez
//Promises.race return the promise more faster

const dowloadPage = () => {
    const incache = false

    if(incache) {
        return Promise.resolve('Page in cash') 
    } else {
        return waitHere('Download the page', 3000)
    }
}

dowloadPage()
    .then(pagedate => {
        console.log(pagedate)
    })
    .catch(e => console.log(e))