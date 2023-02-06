// constructor -> objects
//Starting with uppercase
//constructor -> People (new)

function People(name, lastName) {
    const ID = 12345
    const InternalMethod = function() {}

    this.name = name;
    this.lastName = lastName;

    this.method = () => {
        console.log(this.name +': I am a method')
    }
}

const p1 = new People('Weslley', 'Oliveira')
const p2 = new People('Gael', 'Oliveira')

p1.method()