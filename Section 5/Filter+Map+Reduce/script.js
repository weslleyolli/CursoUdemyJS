//return the sum of double of all pair number 
//pair filter
//double the value
//reduce( sum all )

const number = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const pair = number.filter(value => {
    return value % 2 === 0
})

console.log(pair)

const doubleValue = pair.map(value => {
    return value * 2
})

console.log(doubleValue)

const sumNumberpair = doubleValue.reduce((count, value) => {
    return count += value
}, 0)

console.log(sumNumberpair)

//reduce form

const number2 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const pair2 = number
    .filter(value => value % 2 === 0)
    .map(value => value * 2)
    .reduce((count,value) => count += value, 0)

console.log(pair2)