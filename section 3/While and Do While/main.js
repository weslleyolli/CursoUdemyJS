const name = "Weslley"

//let i = 0

//while( i < name.length){
    //console.log(name [i])
    //i++
//}

function random(min,max) {
    const number = Math.floor((Math.random() * (max - min) + min))
    return number
}

const min = 1
const max = 50

let rand = random(min,max)

while (rand !== 10){
    rand = random(min,max)
    console.log(rand)
}