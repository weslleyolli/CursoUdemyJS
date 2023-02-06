const names = ['Weslley', 'Gael', 'Camile']
names[2] = 'Sky'

names.push('Camile')

const novo = names.slice(1, 3)
const lastOut = names.slice(0, -1)

console.log(novo)
console.log(lastOut)

console.log(names)
console.log(names.length)

const nameArray = 'Weslley Richardson Da Silva Oliveira'
const namesArray = nameArray.split(' ')
console.log(namesArray)

const nameTogether = namesArray.join(' ')
console.log(nameTogether)