class People {
    constructor(name, lastName) {
        this.name = name
        this.lastName = lastName
    }

    talk() {
        console.log(`${this.name} is talking`)
    }

    eat() {
        console.log(`${this.name} is eating`)
    }

    drink() {
        console.log(`${this.name} is drinking`)
    }
}


const p1 = new People('Weslley', 'Oliveira')
console.log(p1.drink())
