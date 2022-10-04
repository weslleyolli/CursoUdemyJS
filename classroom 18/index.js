const name01 = "Weslley";
const lastname01 = "Oliveira";
const age = 24;

/*
const people = { //object
    name: "Weslley",
    lastname: "Oliveira",
    age: 24
};

console.log(people.name);
console.log(people.lastname);
*/
function createPeople (name, lastname, age) {
    return{
        name: name, //I could put only name, lastname, age that the VScode will understand
        lastname: lastname,
        age: age
    };
}

const peopleOne = createPeople("Weslley", "Oliveira", 24);
console.log(peopleOne)