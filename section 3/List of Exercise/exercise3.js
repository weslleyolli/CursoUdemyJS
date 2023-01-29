const fizzBuzz = (number) => {
    const divider = number % 3 == 0 && number % 5 == 0 ? "FizzBuzz" : number % 3 == 0 ? "Fizz": number % 5 == 0 ? "Buzz" : number
    if (number === NaN) {
        return number
    }
    return divider 
}

console.log(fizzBuzz(7))
