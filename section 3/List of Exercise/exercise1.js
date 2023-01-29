
function max(numberOne, numberTwo){
    if(numberOne > numberTwo){
        return numberOne
    } else if(numberOne === numberTwo){
        return "Number equal"
    }else{
        return numberTwo
    }
    
}
function maxTwo(numberOne, numberTwo){
    return numberOne > numberTwo ? numberOne : numberTwo
}

console.log(max(15,20))
console.log(maxTwo(20, 22))