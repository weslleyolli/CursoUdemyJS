// Reduce
// Sum all numbers(reduce)
const number = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const total = number.reduce((count, value, index, array) => {
    count += value
    return count
}, 0)

console.log(total)



// return a array with the numbers pair(filter)

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numberPair = numbers.filter(object => {
    return object % 2 == 0
})
console.log(numberPair)

// return a array with the numbers pair(reduce)

const numbersReduce = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numberReducePair = numbersReduce.reduce((count, value) => {
    if (value % 2 == 0) count.push(value)
    return count 
}, [])

console.log(numberReducePair)

//Return a array with the double of values(map)

const numbers2 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numberDouble = numbers2.map(value => {
    return value * 2
})
console.log(numberDouble)

//Return a array with the double of values(reduce)

const numbersReduce2 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numberDoubleReduce = numbersReduce2.reduce((count, value) => {
    count.push(value * 2)
    return count
}, [])

console.log(numberDoubleReduce)

// older people
const people = [
    {  name: 'Luiz', age: 33  },
    {  name: 'Maria', age: 62  },
    {  name: 'Eduardo', age: 50  },
    {  name: 'Gael', age: 2  },
    {  name: 'Weslley', age: 24  },
    {  name: 'Camile', age: 20  },
]

const olderPeople = people.reduce((count, value) => {
    if(count.age > value.age) return count
    return value
})
console.log(olderPeople)