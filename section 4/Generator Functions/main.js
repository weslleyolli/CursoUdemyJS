function* generator1() {
    yield 'Value 1'
    yield 'Value 2'
    yield 'Value 3'
}

const g1 = generator1()
console.log(g1.next().value);
for(let valor of g1) {
    console.log(valor)
}

function* generator2() {
    let i = 0;

    while(true) {
        yield i;
        i++
    }
}

const g2 = generator2()
console.log(g2.next().value)

function* generator3() {
    yield 0
    yield 1
    yield 2
}

function* generator4() {
    yield* generator3()
    yield 4
    yield 5
}

const g4 = generator4()
for (let value of g4){
    console.log(value)
}