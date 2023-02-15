const people = {
    name: 'Luiz',
    lastName: 'Oliveira',
    age: 24
}

const key = "name"

console.log(people.name)
//Other form 
console.log(people[key])
//if i don't know which one i need

people.toSpeakname = function() {
   return (`${this.name} is saying your name`)
}

people.getDateOfBirth = function() {
    const currentDate = new Date()
    return currentDate.getFullYear() - this.age
}

console.log(people.toSpeakname()) 
console.log(people.getDateOfBirth()) 

//Factory functions cria moldes para objetos
function createPeople(name, lastName) {
    return {
        name,
        lastName,

        nameComplete() {
            return `${this.name} ${this.lastName}`
        }
    }
}

const p1 = createPeople('Gael', "Oliveira")
console.log(p1.nameComplete)