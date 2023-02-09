const names = ['Maria', 'João', 'Eduardo', 'Weslley', 'Camile']
console.log(names)


// names.splice(element, delete, ele1, ele2...)
//simulation the method pop (remove the last item)
names.splice(-1, 1)
console.log(names)

//shift(removed the first element)
names.splice(0, 1)
console.log(names)

//push (add in end of list)
names.splice(3, 0, "Camile")
console.log(names)

//unshift (add in start of list)
names.splice(0, 0, "Maria")
console.log(names)

