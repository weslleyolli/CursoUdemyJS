//Map
//Double value
const number = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const doubleNumber = number.map(value =>  value * 2)
console.log(doubleNumber)




const people = [
    {  name: 'Luiz', age: 33  },
    {  name: 'Maria', age: 62  },
    {  name: 'Eduardo', age: 50  },
    {  name: 'Gael', age: 2  },
    {  name: 'Weslley', age: 24  },
    {  name: 'Camile', age: 20  },
]

const names = people.map(value => value.name)
console.log(names)
//remove obj name
const ages = people.map(obj =>  {
    //delete obj.name
    return { age: obj.age}
})
console.log(ages)

//add a key id in each object
const withIds = people.map((obj, index) => {
    obj.id = index + 1
    return obj
})

console.log(withIds)