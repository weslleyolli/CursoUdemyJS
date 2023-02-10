//Filter
//return number bigger than 10
const number = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

function callBackFilter(value){
    return value > 10
}
// Another away to do
//const filterNumber = number.filter(function(value) {
//    return value > 10
//})


// Arrow function
//const filterNumber = number.filter(value => {

const filterNumber = number.filter(callBackFilter)

console.log(filterNumber)





const people = [
    {  name: 'Luiz', age: 33  },
    {  name: 'Maria', age: 62  },
    {  name: 'Eduardo', age: 50  },
    {  name: 'Gael', age: 2  },
    {  name: 'Weslley', age: 24  },
    {  name: 'Camile', age: 20  },
]
//Bigger names than 5
const filterNames = people.filter(object => {
    return object.name.length >= 5
})
console.log(filterNames)

//Older ages than 49
const peopleWithMorefiftyYears = people.filter(object => object.age >= 50)
console.log(peopleWithMorefiftyYears)

//return names that end with 'a'

const namesEndWithA = people.filter(object => {
    return object.name.toLowerCase().endsWith('a')
})
console.log(namesEndWithA)
    
