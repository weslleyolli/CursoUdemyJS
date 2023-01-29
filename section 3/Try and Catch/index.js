const sum = (numberOne, numberTwo) => {
    if(
        typeof numberOne !== "number" ||
        typeof numberTwo !== "number"
    ){
        throw("Number One and Number two most be number ")
    }

    return numberOne + numberTwo
}

try {
    console.log(sum(1, 2))
    console.log(sum('1', 2))
} catch (error) {
    console.log(error)
}
