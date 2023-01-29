const people ={
    name: "Weslley",
    lastName : "Oliveira",
    age : 24,
    adress: {
        street: "Tome de souza",
        number: 278
    }
}
//Assignment via destructuring
const {name: test = "" , lastName} = people
console.log(test, lastName)

const {adress: {street, number}} = people
console.log(street, number)