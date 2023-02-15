const _velocity = Symbol('velocity')
class Car {
    constructor(name) {
        this.name= name
        this[_velocity] = 0
    }

    set velocity(value) {
        if (typeof value !== 'number') return
        if (value >= 100 || value <= 0) return
        this[_velocity] = value
    }

    get velocity() {
        return this[_velocity]
    }

    speed() {
        if(this[_velocity] >= 100) return
        this[_velocity]++
    }

    break() {
        if(this[_velocity]<= 0) return
        this[_velocity]--
    }
}

const c1 = new Car('Fusca')

for(let i  = 0; i <= 200; i++) {
    c1.speed()
}

c1.velocity = 2000
console.log(c1.velocity)