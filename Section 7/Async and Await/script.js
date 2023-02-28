const rand = (min = 0, max = 3) => {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

const waitHere = (msg, time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string'){
                reject('Over in error')
                return
            }

            resolve(msg.toUpperCase() + '- passed in promisses')
            return
        }, time)
    })
}

/* waitHere('Level 1 ', rand())
    .then(msg => {
        console.log(msg)
        return waitHere('Level 2 ', rand())
    })
   .then(level => {
    console.log(level)
    return waitHere('Level 3 ', rand())
   })
   .then(fase => {
        console.log(fase)
    }) */

async function execute() {
    try {
        const levelOne = await waitHere('Level 1 ', rand())
        console.log(levelOne)
    
        const levelTwo = await waitHere('Level 2 ', rand())
        console.log(levelTwo)
        
        const levelThree = await waitHere(2, rand())
        console.log(levelThree)
    
        console.log('Finished in level three!')
    } catch(e) {
        console.log(e)
    }
}
execute()