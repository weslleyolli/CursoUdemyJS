function random(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function conectDB(msg, time) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE')
        setTimeout(() => {
            resolve(msg)
        }, time)
    })
}

conectDB('phrase 1', random(1,3))
    .then(asnwer => {
        console.log(asnwer)
        return conectDB('phrase 2', random(1, 3))
    })
    .then(asnwer => {
        console.log(asnwer)
        return conectDB(222, random(1, 3))
    })
    .then(asnwer => {
        console.log(asnwer)
    })
    .catch( e => {
        console.log('ERROR:', e)
    })

console.log('this here will be displayed before the promises')